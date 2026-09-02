import { useState } from 'react';
import { Syringe, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const PeptideCalculator: React.FC = () => {
  // Calculator State
  const [vialMg, setVialMg] = useState<number>(5); // e.g. 5 mg vial
  const [waterMl, setWaterMl] = useState<number>(2); // e.g. 2 ml BAC water
  const [targetMcg, setTargetMcg] = useState<number>(250); // e.g. 250 mcg dose
  const [syringeUnits, setSyringeUnits] = useState<number>(100); // 100 IU (1mL) vs 50 IU (0.5mL)

  // Calculations
  // Total mcg in vial = vialMg * 1000
  const totalMcgInVial = vialMg * 1000;
  // Concentration mcg per mL = totalMcgInVial / waterMl
  const mcgPerMl = totalMcgInVial / (waterMl || 1);
  // Concentration mcg per 1 IU unit on U-100 (1mL = 100 IU)
  const mcgPerUnit = mcgPerMl / 100;
  // Units required on syringe = targetMcg / mcgPerUnit
  const unitsToDraw = targetMcg > 0 && mcgPerUnit > 0 ? (targetMcg / mcgPerUnit) : 0;

  // Percentage of syringe filled
  const syringeCapacity = syringeUnits; // 100 or 50
  const fillPercentage = Math.min(100, Math.max(0, (unitsToDraw / syringeCapacity) * 100));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden border-b border-blue-900/50">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="urgent" className="mb-3 border-blue-400/40 bg-blue-500/20 text-blue-300">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Interactive Live Feature Tool
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Live Peptide Syringe Calculator
          </h2>
          <p className="mt-3 text-slate-300 text-base md:text-lg">
            Test the interactive calculator included in the system. Convert any peptide vial &amp; water volume into exact syringe IU marks in real time.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-3xl p-6 md:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Input 1: Vial Size (mg) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                  1. Peptide Vial Quantity (mg):
                </label>
                <span className="text-xs font-mono bg-blue-900/60 px-2 py-0.5 rounded text-blue-300 font-bold">{vialMg} mg</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[2, 5, 10, 15].map((mg) => (
                  <button
                    key={mg}
                    type="button"
                    onClick={() => setVialMg(mg)}
                    className={`py-2 px-3 rounded-xl text-sm font-bold transition-all border ${
                      vialMg === mg
                        ? 'bg-blue-600 border-blue-400 text-white shadow-glow'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {mg} mg
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={vialMg}
                  onChange={(e) => setVialMg(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            {/* Input 2: Bacteriostatic Water Added (mL) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                  2. Bacteriostatic Water Added (mL):
                </label>
                <span className="text-xs font-mono bg-blue-900/60 px-2 py-0.5 rounded text-blue-300 font-bold">{waterMl} mL</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 5].map((ml) => (
                  <button
                    key={ml}
                    type="button"
                    onClick={() => setWaterMl(ml)}
                    className={`py-2 px-3 rounded-xl text-sm font-bold transition-all border ${
                      waterMl === ml
                        ? 'bg-blue-600 border-blue-400 text-white shadow-glow'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {ml} mL
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Target Dose (mcg) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                  3. Desired Single Dose (mcg):
                </label>
                <span className="text-xs font-mono bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300 font-bold">{targetMcg} mcg</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[100, 250, 500, 1000].map((mcg) => (
                  <button
                    key={mcg}
                    type="button"
                    onClick={() => setTargetMcg(mcg)}
                    className={`py-2 px-3 rounded-xl text-sm font-bold transition-all border ${
                      targetMcg === mcg
                        ? 'bg-emerald-600 border-emerald-400 text-white shadow-button'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {mcg} mcg
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="25"
                  value={targetMcg}
                  onChange={(e) => setTargetMcg(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Input 4: Syringe Size */}
            <div>
              <label className="text-sm font-bold text-slate-200 block mb-2">
                4. Insulin Syringe Type:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSyringeUnits(100)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                    syringeUnits === 100
                      ? 'bg-blue-600/30 border-blue-400 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400'
                  }`}
                >
                  <span>U-100 (100 Units / 1 mL)</span>
                  {syringeUnits === 100 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>
                <button
                  type="button"
                  onClick={() => setSyringeUnits(50)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                    syringeUnits === 50
                      ? 'bg-blue-600/30 border-blue-400 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400'
                  }`}
                >
                  <span>U-50 (50 Units / 0.5 mL)</span>
                  {syringeUnits === 50 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

          </div>

          {/* Result Output Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-blue-950 p-6 rounded-2xl border border-blue-500/40 relative">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Syringe className="w-4 h-4" /> Live Calculation Result
            </div>

            {/* Units Big Output */}
            <div className="text-center py-4 border-b border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block mb-1">
                Pull Syringe Plunger To:
              </span>
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono tracking-tight">
                {unitsToDraw.toFixed(1)} <span className="text-2xl text-emerald-400 font-sans">IU</span>
              </div>
              <span className="text-xs text-emerald-400/90 font-medium block mt-1">
                ({unitsToDraw.toFixed(1)} units on your U-{syringeUnits} insulin syringe)
              </span>
            </div>

            {/* Syringe Visual Graphic Meter */}
            <div className="my-6">
              <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                <span>0 IU</span>
                <span>{unitsToDraw.toFixed(1)} IU Target</span>
                <span>{syringeUnits} IU</span>
              </div>
              <div className="h-6 bg-slate-800 rounded-full border border-slate-700 relative overflow-hidden p-1">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-300 shadow-glow"
                  style={{ width: `${fillPercentage}%` }}
                />
              </div>
            </div>

            {/* Key Data Summary */}
            <div className="space-y-2 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Concentration per mL:</span>
                <span className="font-bold text-white">{(mcgPerMl / 1000).toFixed(2)} mg/mL ({mcgPerMl.toFixed(0)} mcg/mL)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dose per 1 IU Unit:</span>
                <span className="font-bold text-cyan-300">{mcgPerUnit.toFixed(1)} mcg / unit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Doses per Vial:</span>
                <span className="font-bold text-emerald-400">{Math.floor(totalMcgInVial / (targetMcg || 1))} full doses</span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-slate-400 italic">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>The full system includes this calculator formatted as an offline Excel file + interactive web app.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
