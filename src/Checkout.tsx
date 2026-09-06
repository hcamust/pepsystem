import { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

// Stripe.js (dahlia build) is loaded from index.html and attaches `Stripe` to
// window. The dahlia build is what exposes `stripe.initCheckoutFormSdk(...)`.
declare global {
  interface Window {
    Stripe?: (
      publishableKey: string,
      options?: { betas?: string[] },
    ) => any;
  }
}

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;

// Appearance configured in Checkout Studio — passed straight to the Form SDK.
const appearance = {
  theme: 'stripe',
  labels: 'auto',
  inputs: 'spaced',
  variables: {
    borderRadius: '4px',
    colorBackground: '#ffffff',
    colorDanger: '#df1b41',
    colorPrimary: '#0570de',
    colorSuccess: '#00c853',
    colorText: '#30313d',
    fontFamily: 'default',
    fontSizeBase: '16px',
    spacingUnit: '4px',
  },
};

export function Checkout() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initCheckout() {
      if (!window.Stripe) {
        setError('Stripe.js failed to load. Please refresh the page.');
        return;
      }
      if (!PUBLISHABLE_KEY) {
        setError('Missing VITE_STRIPE_PUBLISHABLE_KEY.');
        return;
      }

      const stripe = window.Stripe(PUBLISHABLE_KEY, {
        betas: ['custom_checkout_payment_form_1'],
      });

      const clientSecret = fetch('/api/create-checkout-session', { method: 'POST' })
        .then((response) => response.json())
        .then((json) => json.client_secret);

      const checkout = stripe.initCheckoutFormSdk({ clientSecret, appearance });

      const form = checkout.createForm({ layout: 'expanded' });
      if (cancelled || !mountRef.current) return;
      form.mount(mountRef.current);

      const loadActionsResult = await checkout.loadActions();
      if (loadActionsResult.type === 'success') {
        form.on('confirm', async (event: unknown) => {
          try {
            await loadActionsResult.actions.confirm({ formConfirmEvent: event });
          } catch (err) {
            console.error('Payment confirmation error:', err);
          }
        });
      }
    }

    initCheckout().catch((err) => {
      console.error('Checkout initialization error:', err);
      setError('Could not start checkout. Please try again.');
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 px-4 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-2 text-center">
          Complete your order
        </h1>
        <p className="text-slate-600 text-sm text-center mb-8">
          Peptinova System — instant access after payment.
        </p>

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-card p-6 md:p-8">
          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <div id="checkout-form" ref={mountRef} />
          )}
        </div>

        <p className="mt-6 text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Secure payment · 7-day money-back guarantee
        </p>
      </div>
    </div>
  );
}

export default Checkout;
