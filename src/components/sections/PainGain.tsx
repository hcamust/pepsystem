import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowDown } from 'lucide-react';

export const PainGain: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Pain Card - The Real Problem */}
        <div className="bg-red-50/50 border border-red-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-heading">
                The Real Reason Most Peptide Protocols Fail
              </h3>
              <p className="text-sm text-red-700 font-medium">Why piecing together forum advice creates mistakes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-slate-700">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Contradictory forum doses:</strong> One post claims 250mcg, another says 500mcg, leaving you guessing with your own body.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Scattered medical studies:</strong> The research exists, but it's buried across dozens of dense papers you'd need a biochemistry degree to synthesize.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Reconstitution math errors:</strong> Nobody explains exact bacteriostatic water volume vs. insulin syringe IU units.</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span><strong>Wasted money:</strong> Losing $300–$1,000+ on improper cycles, wrong peptides for your specific goal, or canceled benefits.</span>
            </div>
          </div>
        </div>

        {/* Transformation Divider */}
        <div className="flex flex-col items-center justify-center my-8 text-blue-600">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>

        {/* Gain Card - The Solution */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-card border border-blue-800/50 relative overflow-hidden">
          {/* Subtle Light Effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                What You Achieve With Peptinova System
              </h3>
              <p className="text-sm text-blue-200">Total clarity from day one — zero trial and error</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base relative z-10">
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Total Clarity:</strong> Know exactly which peptide, dose, route, and half-life to use for fat loss, recovery, skin, or longevity.</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Exact Syringe Math:</strong> Use our integrated calculator to convert vial mg + BAC water into exact syringe units (IU).</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Cited PubMed References:</strong> Every single protocol cites author, year, and study data so you can verify everything yourself.</span>
            </div>
            <div className="flex items-start gap-3 bg-blue-900/40 border border-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-100"><strong className="text-white">Save Hundreds:</strong> Avoid wasted vials, improper storage degradation, and ineffective stacks right from your first dose.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
