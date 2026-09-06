# Peptinova Stripe webhook

Small Node/Express service that listens for Stripe's `checkout.session.completed`
event and emails the buyer their access link over SMTP. Runs as its own
process, separate from the static landing page.

## 1. Get it onto the VPS

```bash
# on the VPS, wherever you keep this repo checked out
cd /path/to/LandingPep
git pull
cd server
npm install
cp .env.example .env
nano .env   # fill in the real Stripe keys + SMTP credentials (see below)
```

## 2. Fill in `.env`

- `STRIPE_SECRET_KEY` — Dashboard → Developers → API keys.
- `STRIPE_WEBHOOK_SECRET` — you get this in step 4 below, after creating the
  endpoint in the Stripe dashboard. Leave a placeholder for now and come back.
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` — your
  mailbox's SMTP settings. For Gmail: `smtp.gmail.com`, port `587`, and
  `SMTP_PASS` must be a 16-character **App Password**
  (myaccount.google.com/apppasswords), not your normal Gmail password —
  Google blocks plain-password SMTP logins.
- `PRODUCT_ACCESS_URL` — the real link/page you want customers to land on to
  access the 5 modules + bonuses.

## 3. Keep it running with pm2

```bash
npm install -g pm2      # only once, if you don't have it yet
pm2 start index.js --name peptinova-webhook
pm2 save                # remembers it across reboots
pm2 startup             # prints a command to run once, to enable that
```

Useful commands: `pm2 logs peptinova-webhook`, `pm2 restart peptinova-webhook`.

## 4. Expose it through nginx

Add this inside the existing `server { ... }` block for `www.peptinova.store`
(same block that already serves the static site), then reload nginx:

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:4242/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Also make sure the same block has an SPA fallback so `/gracias` loads the
React app instead of a 404 (skip if you already have this):

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 5. Register the webhook in Stripe

Dashboard → Developers → Webhooks → **Add endpoint**:

- Endpoint URL: `https://www.peptinova.store/api/webhook/stripe`
- Event to send: `checkout.session.completed`

After creating it, Stripe shows a **Signing secret** (`whsec_...`) — paste
that into `.env` as `STRIPE_WEBHOOK_SECRET`, then:

```bash
pm2 restart peptinova-webhook
```

## 6. Test it

In the Stripe dashboard, open the endpoint you just created and click
**"Send test webhook"** with `checkout.session.completed` — check
`pm2 logs peptinova-webhook` for `Access email sent to ...`, and check the
test email actually arrives.

Then do one real purchase through the Payment Link in **test mode**
(Stripe test cards: `4242 4242 4242 4242`, any future date, any CVC) to
confirm the full flow end to end before going live.

## 7. Go live

Once verified in test mode, switch the Payment Link and the `STRIPE_SECRET_KEY`
/ `STRIPE_WEBHOOK_SECRET` to your **live** Stripe keys (Stripe test and live
webhooks/endpoints are separate — you'll register the endpoint a second time
under live mode) and restart pm2.
