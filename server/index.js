import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const {
  PORT = 4242,
  DOMAIN = 'http://localhost:3000',
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

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2026-03-25.dahlia; custom_checkout_payment_form_preview=v1',
});

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

// Creates an embedded Checkout Session for the custom payment form. Returns the
// session's client_secret as JSON (never a redirect) so the browser SDK can
// mount the form. Takes no request body — the line item is fixed server-side.
app.post('/api/create-checkout-session', async (_req, res) => {
  try {
    // mode is sample_only: "payment" for the one-time digital product.
    // line_items is sample_only — replace price_... with a real Stripe Price ID.
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'form',
      billing_address_collection: 'auto',
      phone_number_collection: { enabled: false },
      automatic_tax: { enabled: false },
      submit_type: 'auto',
      name_collection: { individual: { enabled: true } },
      integration_identifier: 'custom_embedded_web_0001',
      mode: 'payment',
      line_items: [{ price: 'price_1UCTukPJLJfzYi08DxhlpI1S', quantity: 1 }],
      return_url: `${DOMAIN}/gracias?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.json({ client_secret: session.client_secret });
  } catch (err) {
    console.error('Failed to create Checkout Session:', err.message);
    res.status(500).json({ error: 'Failed to create Checkout Session' });
  }
});

app.get('/api/health', (_req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`Peptinova webhook server listening on port ${PORT}`));
