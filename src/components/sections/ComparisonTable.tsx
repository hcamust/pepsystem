import React from 'react';

export const ComparisonTable: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Price',
      forums: '$0 (Free)',
      consult: '$150+ / Visit',
      peptinova: '$27 One-time',
      highlight: true,
    },
    {
      feature: '41 Peptides Fully Mapped Out',
      forums: '⚠️ Contradictory',
      consult: '❌ Limited Scope',
      peptinova: '✅ 100% Included',
      highlight: false,
    },
    {
      feature: '14 Ready-to-Use Goal Protocols',
      forums: '❌ None',
      consult: '⚠️ 1-2 Specific',
      peptinova: '✅ 14 Ready Protocols',
      highlight: false,
    },
    {
      feature: 'Exact Syringe IU Dosing Math',
      forums: '⚠️ High Risk',
      consult: '✅ Provided',
      peptinova: '✅ Instant Calculator',
      highlight: false,
    },
    {
      feature: 'Cited PubMed Medical Papers',
      forums: '❌ Unverified Claims',
      consult: '⚠️ Mentioned',
      peptinova: '✅ Cited (Author/Year)',
      highlight: false,
    },
    {
      feature: 'Reconstitution Water Guide',
      forums: '⚠️ Vague',
      consult: '✅ Provided',
      peptinova: '✅ Step-by-Step Math',
      highlight: false,
    },
    {
      feature: '3 Bonuses + 2 Gifts Included',
      forums: '❌ None',
      consult: '❌ None',
      peptinova: '✅ All 5 Free Today',
      highlight: false,
    },
    {
      feature: '100% Risk-Free 7-Day Guarantee',
      forums: '❌ None',
      consult: '❌ No Refund',
      peptinova: '✅ 7-Day Guarantee',
      highlight: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Value Comparison Matrix
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Peptinova Is The Smartest Choice
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            See how Peptinova System compares to random forum searching or expensive specialist visits.
          </p>
        </div>

        {/* Comparison Table Component */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card bg-white">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-4 px-6 text-sm font-bold text-slate-700 w-1/3">Feature / Benefit</th>
                <th className="py-4 px-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-1/5">
                  Forums &amp; PDFs
                </th>
                <th className="py-4 px-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-1/5">
                  Private Consult
                </th>
                <th className="py-4 px-6 text-center text-sm font-bold text-white bg-blue-700 w-1/4 rounded-t-xl shadow-md">
                  PEPTINOVA SYSTEM
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="py-4 px-6 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-slate-600">
                    {row.forums}
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-slate-600">
                    {row.consult}
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-blue-900 bg-blue-50/70 border-x border-blue-200">
                    <span className="inline-flex items-center justify-center gap-1 text-emerald-700 font-extrabold text-sm md:text-base">
                      {row.peptinova}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
