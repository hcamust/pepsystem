import { TopBar } from '@/components/sections/TopBar';
import { Hero } from '@/components/sections/Hero';
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

const CHECKOUT_URL = 'https://pepsys.impultienda.ar/';

export function App() {
  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Banner Bar */}
      <TopBar />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} />
        <PainGain />
        <HowItWorks />
        <PeptideCalculator />
        <Modules />
        <Bonuses onOpenCheckout={handleOpenCheckout} />
        <ComparisonTable />
        <Reviews />
        <FAQ />
        <Guarantee onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
