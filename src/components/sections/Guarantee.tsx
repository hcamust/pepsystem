import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GuaranteeProps {
  onOpenCheckout: () => void;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 relative border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-card flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          {/* Decorative Shield Icon Backdrop */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-emerald-100/80 border border-emerald-200 flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-emerald-600" />
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              100% Risk-Free Protection
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-3">
              7-Day Money-Back Guarantee
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
              Take the next 7 full days to examine the 5 modules, test out the 14 ready protocols, and use the interactive syringe calculator. If you don't feel completely confident in your peptide applications, email us for a 100% prompt refund. No hassle, no risk.
            </p>

            <Button
              size="lg"
              className="w-full sm:w-auto h-auto min-h-14 font-bold py-3.5 px-4 sm:px-8 shadow-button rounded-xl text-sm sm:text-lg whitespace-normal text-center leading-snug"
              onClick={onOpenCheckout}
            >
              <span>CLAIM YOUR RISK-FREE ACCESS PASS</span>
              <ArrowRight className="ml-2 w-5 h-5 shrink-0 inline-block align-text-bottom" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
