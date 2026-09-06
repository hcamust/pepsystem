import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const {
  PORT = 4242,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  SMTP_HOST,
  SMTP_PORT = 587,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  PRODUCT_ACCESS_URL,
} = process.env;

for (const [name, value] of Object.entries({
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  SMTP_HOST,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  PRODUCT_ACCESS_URL,
})) {
  if (!value) throw new Error(`Missing required env var: ${name}`);
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

function sendAccessEmail({ email, name }) {
  return transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: 'Your Peptinova System access is ready',
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for your purchase! Your Peptinova System is ready.</p>
      <p><a href="${PRODUCT_ACCESS_URL}">Click here to access your modules, bonuses and gifts</a></p>
      <p>If you have any trouble, just reply to this email.</p>
    `,
  });
}

const app = express();

// Stripe needs the RAW request body to verify the webhook signature, so this
// route must NOT go through express.json() — keep it as express.raw().
app.post(
  '/api/webhook/stripe',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_details?.email;
      const name = session.customer_details?.name || 'there';

      if (email) {
        try {
          await sendAccessEmail({ email, name });
          console.log(`Access email sent to ${email} (session ${session.id})`);
        } catch (err) {
          // Ack the webhook anyway so Stripe doesn't retry forever on an email
          // bug — log it here and follow up with the customer manually.
          console.error(`Failed to send access email for session ${session.id}:`, err);
        }
      } else {
        console.warn(`checkout.session.completed with no customer email (session ${session.id})`);
      }
    }

    res.json({ received: true });
  }
);

app.get('/api/health', (_req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`Peptinova webhook server listening on port ${PORT}`));
