# Stripe Integration — Remaining Setup

This file is the **single source of truth** for finishing the Stripe Checkout
integration. The code changes are done; the steps below are what you must do
before the payment form works end to end.

The integration uses **Embedded form (custom payment form)** — the payment form
renders inside a Stripe-hosted iframe on the `/checkout` page of the landing site,
and a small server endpoint creates the Checkout Session.

---

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**

- [server/index.js](server/index.js)
- `.env` (from [.env.example](.env.example)) — **created**, test publishable key set
- `server/.env` (from [server/.env.example](server/.env.example)) — **created**, test secret key set

| Field | Current Value | Status / What to Set |
|-------|--------------|---------------------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_51UCSZA…SAQl` | ✅ **Done** — test publishable key set in `.env`. |
| `STRIPE_SECRET_KEY` | `sk_test_51UCSZA…hS5v` | ✅ **Done** — test secret key set in `server/.env`. |
| `mode` | `payment` | `"payment"` for the one-time digital product (current), or `"subscription"` if you switch to recurring billing. If you change to `"subscription"`, also add `payment_method_collection: "always"` to the session (see Configured Parameters note). |
| `line_items[].price` | `price_1UCTukPJLJfzYi08DxhlpI1S` | ✅ **Done** (test Price ID) — set in `server/index.js`. Replace with the Live-mode `price_...` when going to production. |
| `STRIPE_WEBHOOK_SECRET` | `whsec_9907…70f6` (local Stripe CLI) | ✅ **Local dev** — set in `server/.env`, matches `stripe listen`. ⚠️ **Production** needs the *different* secret from the Dashboard endpoint `https://peptinova.store/api/webhook/stripe` (`whsec_xZqy…5xoB`) in the VPS `.env`. |
| `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | Hostinger (`smtp.hostinger.com:465`, `admin@edroply.com`) | ✅ **Done** — set in `server/.env`. |
| `PRODUCT_ACCESS_URL` | `https://www.peptinova.store/members` | ⬜ The real page buyers land on to access the product. |
| `DOMAIN` | `http://localhost:3000` | Fine for local dev. Set to the production origin (e.g. `https://www.peptinova.store`) before going live — used to build the Checkout `return_url` to `/gracias`. |

---

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly
in the code — **do not change them**.

**Files containing these parameters:**

- [server/index.js](server/index.js) — Checkout Session parameters
- [src/Checkout.tsx](src/Checkout.tsx) — form `appearance`

| Parameter | Value |
|-----------|-------|
| `ui_mode` | `form` |
| `billing_address_collection` | `auto` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `false` |
| `submit_type` | `auto` |
| `name_collection.individual.enabled` | `true` |
| `integration_identifier` | `custom_embedded_web_0001` |

Notes:

- **`payment_method_collection`** was configured as `always` in Checkout Studio,
  but it only applies to `mode: "subscription"`. Because this integration uses
  `mode: "payment"`, it is intentionally omitted. Add
  `payment_method_collection: "always"` **only if** you switch `mode` to
  `"subscription"`.
- **`ui_mode`:** set to `"form"`. The client SDK `stripe.initCheckoutFormSdk(...)`
  requires the session to be created with `ui_mode: "form"` ("You must create a
  Checkout Session with ui_mode=\"form\" to use initCheckoutFormSdk"). The older
  `"custom"` value is rejected by the pinned `2026-03-25.dahlia` API version, so
  `"form"` is the correct value here regardless of the installed Stripe Node SDK
  version. Verified end to end: the embedded form renders and shows the correct
  total.
- **API version:** the server Stripe client is pinned to
  `2026-03-25.dahlia; custom_checkout_payment_form_preview=v1` — required for the
  custom checkout payment form. Do not remove it.

---

## Setup Instructions

### 1. Environment variables

**Client (`.env` at repo root — git-ignored):**

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Server (`server/.env` — git-ignored):**

```
DOMAIN=https://your-domain.example
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
# (existing SMTP + PRODUCT_ACCESS_URL vars stay as they are)
```

### 2. Dependencies

Already installed — nothing to add:

- Client: Stripe.js is loaded from `https://js.stripe.com/dahlia/stripe.js` in
  `index.html` (never bundled — PCI requirement).
- Server: `stripe` (`^17.4.0`) is already a dependency of `server/package.json`.

Run `npm install` in both the repo root and `server/` if you have not yet
(`npm install; npm --prefix server install`).

### 3. Run it

Two terminals, both started from the repo root:

```
# terminal 1 — landing page (Vite dev server on :3000)
npm run dev

# terminal 2 — checkout + webhook server (Express on :4242)
npm --prefix server start
```

> PowerShell note: `&&` does not work in Windows PowerShell 5.1. Use
> `npm --prefix server start` (no `cd` needed), or `cd server; npm start`.

In development, `vite.config.ts` proxies `/api/*` to `http://localhost:4242`
(the Express server), so the browser can call `POST /api/create-checkout-session`
on the same origin. In production, keep using the nginx `location /api/` block
you already have (see `server/README.md`).

---

## Project Structure — New / Changed Files

| File | Change |
|------|--------|
| `server/index.js` | Added `POST /api/create-checkout-session` (creates the embedded Checkout Session, returns `{ client_secret }`). Pinned the Stripe API version. Added optional `DOMAIN` env var. |
| `server/.env.example` | Added `DOMAIN`. |
| `src/Checkout.tsx` | **New.** Renders the embedded payment form: initializes Stripe.js with the `custom_checkout_payment_form_1` beta, fetches the client secret, mounts the form, and wires the `confirm` event. |
| `src/main.tsx` | Routes `/checkout` to the new `Checkout` component (same pattern as `/gracias`). |
| `src/App.tsx` | CTA buttons go to `https://pepsys.impultienda.ar/` by default. Set `VITE_CHECKOUT_URL=/checkout` (or any URL) to override. |
| `index.html` | Loads `https://js.stripe.com/dahlia/stripe.js` in `<head>`. |
| `.env.example` | Added `VITE_STRIPE_PUBLISHABLE_KEY`; made `VITE_CHECKOUT_URL` an optional override. |
| `src/vite-env.d.ts` | Typed the `VITE_` env vars. |

---

## Checkout routing: production vs. local

The CTA target is `import.meta.env.VITE_CHECKOUT_URL || 'https://pepsys.impultienda.ar/'`
(`src/App.tsx`), resolved **at build time**.

| Build | `VITE_CHECKOUT_URL` | CTAs go to |
|-------|---------------------|-----------|
| **Production** (Docker — `.dockerignore` excludes `.env`) | unset | `https://pepsys.impultienda.ar/` (unchanged — external page) |
| **Local dev** (`.env` has `VITE_CHECKOUT_URL=/checkout`) | `/checkout` | the built-in embedded Stripe form |

So shipping to production **keeps the current external payment page**. Verified:
a production build with no `.env` bakes in `https://pepsys.impultienda.ar/`; the
`VITE_CHECKOUT_URL` reference is fully removed by Vite.

⚠️ Do **not** set `VITE_CHECKOUT_URL` in the Dokploy/host build environment, or
the CTAs will switch to `/checkout` in production. When you're ready to go live
with the embedded form, that's the one switch to flip (plus deploying the
`server/` service and its production `whsec_`).

## How the Integration Works (when `VITE_CHECKOUT_URL=/checkout`)

1. A visitor clicks any CTA on the landing page → the browser navigates to
   `/checkout`, which renders `src/Checkout.tsx`.
2. `Checkout.tsx` calls `Stripe(publishableKey, { betas: ['custom_checkout_payment_form_1'] })`
   and `POST`s to `/api/create-checkout-session`.
3. The Express endpoint calls `stripe.checkout.sessions.create(...)` with the
   Checkout Studio parameters and returns `{ client_secret }` as JSON (never a
   redirect).
4. The browser passes that client secret to `stripe.initCheckoutFormSdk(...)`,
   creates the form, mounts it into `<div id="checkout-form">`, and confirms
   payment via `loadActions().actions.confirm(...)`.
5. On success, Stripe redirects the buyer to
   `DOMAIN/gracias?session_id={CHECKOUT_SESSION_ID}` (the existing thank-you page).
6. Stripe sends `checkout.session.completed` to the **existing** webhook at
   `/api/webhook/stripe`, which emails the buyer their access link (unchanged).

---

## Testing

Use Stripe **test mode** keys (`pk_test_...` / `sk_test_...`).

Test cards (any future expiry, any CVC, any postal code):

| Scenario | Number |
|----------|--------|
| Successful payment | `4242 4242 4242 4242` |
| Requires authentication (3DS) | `4000 0025 0000 3155` |
| Declined (generic) | `4000 0000 0000 0002` |
| Declined (insufficient funds) | `4000 0000 0000 9995` |

### Webhook forwarding in local dev (required for the access email)

Stripe cannot reach `localhost`, so the `checkout.session.completed` event — and
therefore the access email — only fires locally if the Stripe CLI is forwarding.
Keep this running in its own terminal while developing:

```
stripe listen --forward-to localhost:4242/api/webhook/stripe
```

(`--api-key sk_test_...` avoids needing `stripe login`.) It prints
`Your webhook signing secret is whsec_...` — that value must match
`STRIPE_WEBHOOK_SECRET` in `server/.env` (it is stable per CLI install).

Trigger or replay events:

```
stripe trigger checkout.session.completed          # synthetic event
stripe events resend evt_XXXXXXXXXXXX               # replay a real past payment
```

A successful delivery shows `[200] POST .../api/webhook/stripe` in the CLI and
`Access email sent to <email>` in the server log.

Verified working on 2026-09-06: two real test payments replayed, both returned
`[200]`, both emails delivered via the Hostinger SMTP account.

---

## Next Steps

- **Create the product & price** in the Stripe Dashboard and paste the real
  Price ID into `server/index.js` (`line_items[].price`).
- **Fulfillment / order tracking:** the `checkout.session.completed` webhook
  already emails the access link. Add any DB write / CRM sync there if you need a
  record of orders.
- **Go live:** swap all `pk_test_` / `sk_test_` / `whsec_` values for live-mode
  keys, set `DOMAIN` to the production origin, and register the live webhook
  endpoint (test and live webhooks are separate — see `server/README.md`).

---

## Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp
