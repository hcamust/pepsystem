import React from 'react';
import { Gift, Calculator, FileSearch, LineChart, Map, BookMarked, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BonusesProps {
  onOpenCheckout: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ onOpenCheckout }) => {
  const bonusItems = [
    {
      type: 'BONUS 01',
      title: 'Prime Syringe Calculator App',
      value: '$37 Value',
      desc: 'Interactive downloadable spreadsheet (Excel, Google Sheets, LibreOffice) with preset automated formulas for 41 peptides. Never calculate IU syringe units manually again.',
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'BONUS 02',
      title: 'Smart Buyer Vetting Guide',
      value: '$29 Value',
      desc: 'How to vet suppliers, verify HPLC purity testing, read Certificates of Analysis (COA), and avoid fake or underdosed lyophilized vials.',
      icon: <FileSearch className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'BONUS 03',
      title: 'Protocol Tracking System',
      value: '$27 Value',
      desc: 'Custom logging templates (Notion, Printable PDF & Sheets) to track your start dates, body measurements, dosage escalation curves, and results.',
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 bg-white',
    },
    {
      type: 'GIFT 01',
      title: 'Peptide Master Map Chart',
      value: '$19 Value',
      desc: 'Visual at-a-glance decision tree matching specific health or performance goals directly to the exact target peptide in seconds.',
      icon: <Map className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/40',
    },
    {
      type: 'GIFT 02',
      title: 'Essential Peptide Glossary',
      value: '$15 Value',
      desc: 'Plain-English breakdown of 50 technical terms — half-life, lyophilization, reconstitution, mcg vs. IU, receptor affinity, and storage temperatures.',
      icon: <BookMarked className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/40',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Included Free Today
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            3 Bonus Tools + 2 Free Gifts ($127 Total Value)
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Complete your peptide kit with these ready-to-use resources, included at no extra cost.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bonusItems.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border shadow-soft hover:shadow-card transition-shadow flex flex-col justify-between ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400 line-through">
                    {item.value}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Free Included Today
                </span>
                <span className="text-slate-900 uppercase font-extrabold">$0.00</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Gifts Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bonusItems.slice(3, 5).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border shadow-soft hover:shadow-card transition-shadow flex items-start gap-4 ${item.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400 line-through">
                    {item.value}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Free Gift with System Access
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Gift Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 text-center border border-blue-800 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-heading mb-2">
            Get All 5 Bonuses &amp; Gifts Included For <span className="text-emerald-400">$0 Extra</span>
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            When you claim your copy of Peptinova System today, all 3 bonuses and 2 gifts are unlocked instantly in your account.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto h-auto min-h-14 font-bold py-4 px-4 sm:px-8 shadow-button rounded-xl text-sm sm:text-lg whitespace-normal text-center leading-snug"
            onClick={onOpenCheckout}
          >
            <span>CLAIM SYSTEM &amp; ALL 5 BONUSES NOW</span>
            <ArrowRight className="ml-2 w-5 h-5 shrink-0 inline-block align-text-bottom" />
          </Button>
        </div>

      </div>
    </section>
  );
};
