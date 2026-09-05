import React from 'react';

interface ComparisonCell {
  icon: string;
  detail: string;
}

export const ComparisonTable: React.FC = () => {
  const comparisonRows: { feature: string; forums: ComparisonCell; consult: ComparisonCell; peptinova: ComparisonCell }[] = [
    {
      feature: 'Price',
      forums: { icon: '$0', detail: '$0 (Free)' },
      consult: { icon: '$150+', detail: '$150+ / Visit' },
      peptinova: { icon: '$27', detail: '$27 One-time' },
    },
    {
      feature: '41 Peptides Fully Mapped Out',
      forums: { icon: '⚠️', detail: '⚠️ Contradictory' },
      consult: { icon: '❌', detail: '❌ Limited Scope' },
      peptinova: { icon: '✅', detail: '✅ 100% Included' },
    },
    {
      feature: '14 Ready-to-Use Goal Protocols',
      forums: { icon: '❌', detail: '❌ None' },
      consult: { icon: '⚠️', detail: '⚠️ 1-2 Specific' },
      peptinova: { icon: '✅', detail: '✅ 14 Ready Protocols' },
    },
    {
      feature: 'Exact Syringe IU Dosing Math',
      forums: { icon: '⚠️', detail: '⚠️ High Risk' },
      consult: { icon: '✅', detail: '✅ Provided' },
      peptinova: { icon: '✅', detail: '✅ Instant Calculator' },
    },
    {
      feature: 'Cited PubMed Medical Papers',
      forums: { icon: '❌', detail: '❌ Unverified Claims' },
      consult: { icon: '⚠️', detail: '⚠️ Mentioned' },
      peptinova: { icon: '✅', detail: '✅ Cited (Author/Year)' },
    },
    {
      feature: 'Reconstitution Water Guide',
      forums: { icon: '⚠️', detail: '⚠️ Vague' },
      consult: { icon: '✅', detail: '✅ Provided' },
      peptinova: { icon: '✅', detail: '✅ Step-by-Step Math' },
    },
    {
      feature: '3 Bonuses + 2 Gifts Included',
      forums: { icon: '❌', detail: '❌ None' },
      consult: { icon: '❌', detail: '❌ None' },
      peptinova: { icon: '✅', detail: '✅ All 5 Free Today' },
    },
    {
      feature: '100% Risk-Free 7-Day Guarantee',
      forums: { icon: '❌', detail: '❌ None' },
      consult: { icon: '❌', detail: '❌ No Refund' },
      peptinova: { icon: '✅', detail: '✅ 7-Day Guarantee' },
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
        <div className="rounded-2xl border border-slate-200 shadow-card bg-white overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <colgroup>
              <col className="w-[34%] sm:w-1/3" />
              <col className="w-[20%] sm:w-1/5" />
              <col className="w-[20%] sm:w-1/5" />
              <col className="w-[26%] sm:w-1/4" />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-3 px-2 sm:py-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-700 align-bottom">
                  Feature / Benefit
                </th>
                <th className="py-3 px-1 sm:py-4 sm:px-4 text-center text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider align-bottom leading-tight">
                  Forums &amp; PDFs
                </th>
                <th className="py-3 px-1 sm:py-4 sm:px-4 text-center text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider align-bottom leading-tight">
                  Private Consult
                </th>
                <th className="py-3 px-1.5 sm:py-4 sm:px-6 text-center text-[10px] sm:text-sm font-bold text-white bg-blue-700 rounded-t-xl shadow-md align-bottom leading-tight">
                  PEPTINOVA SYSTEM
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="py-3 px-2 sm:py-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-3 px-1 sm:py-4 sm:px-4 text-center font-medium text-slate-600">
                    <span className="text-base sm:hidden" aria-hidden={row.forums.icon !== row.forums.detail}>{row.forums.icon}</span>
                    <span className="hidden sm:inline text-sm">{row.forums.detail}</span>
                  </td>
                  <td className="py-3 px-1 sm:py-4 sm:px-4 text-center font-medium text-slate-600">
                    <span className="text-base sm:hidden" aria-hidden={row.consult.icon !== row.consult.detail}>{row.consult.icon}</span>
                    <span className="hidden sm:inline text-sm">{row.consult.detail}</span>
                  </td>
                  <td className="py-3 px-1.5 sm:py-4 sm:px-6 text-center font-extrabold text-emerald-700 bg-blue-50/70 border-x border-blue-200">
                    <span className="text-sm sm:hidden">{row.peptinova.icon}</span>
                    <span className="hidden sm:inline-flex items-center justify-center gap-1 text-sm md:text-base">{row.peptinova.detail}</span>
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
