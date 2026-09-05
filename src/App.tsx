import { useRef } from 'react';
import { TopBar } from '@/components/sections/TopBar';
import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { ValueStack } from '@/components/sections/ValueStack';
import { PainGain } from '@/components/sections/PainGain';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PeptideCalculator } from '@/components/sections/PeptideCalculator';
import { Modules } from '@/components/sections/Modules';
import { Bonuses } from '@/components/sections/Bonuses';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { Guarantee } from '@/components/sections/Guarantee';
import { Footer } from '@/components/sections/Footer';
import { StickyMobileCTA } from '@/components/sections/StickyMobileCTA';

// Falls back to the live payment page. To test a different link (e.g. a Stripe
// Payment Link) locally without touching production, set VITE_CHECKOUT_URL in
// a .env or .env.local file (both git-ignored) — see .env.example.
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || 'https://pepsys.impultienda.ar/';

export function App() {
  const heroCtaRef = useRef<HTMLDivElement>(null);

  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Banner Bar */}
      <TopBar />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} ctaRef={heroCtaRef} />
        <ProductShowcase />
        <PainGain />
        <HowItWorks />
        <PeptideCalculator />
        <Modules />
        <Bonuses onOpenCheckout={handleOpenCheckout} />
        <ComparisonTable />
        <ValueStack onOpenCheckout={handleOpenCheckout} />
        <Reviews />
        <FAQ />
        <Guarantee onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile CTA (shows once the Hero button scrolls out of view) */}
      <StickyMobileCTA targetRef={heroCtaRef} onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}

export default App;
