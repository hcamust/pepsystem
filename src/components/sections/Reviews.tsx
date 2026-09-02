import { Star, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviewsList = [
    {
      name: 'Dr. Marcus Vance',
      role: 'Sports Physician & Biohacker',
      rating: 5,
      date: '2 weeks ago',
      title: 'Finally a guide that cites actual PubMed papers',
      text: 'I was skeptical because most online peptide info is recycled forum bro-science. Peptinova actually cites the author and year for every protocol. The syringe calculator alone saved me hours of explaining reconstitution to patients.',
    },
    {
      name: 'Elena Rostova',
      role: 'Fitness Coach & Competitor',
      rating: 5,
      date: '1 month ago',
      title: 'No more guessing IU units on my U-100 syringe',
      text: 'I ruined a 5mg vial of BPC-157 last year because I added too much BAC water and got confused by the dosage conversion. This system gave me the exact syringe IU mark for my specific dose. Absolute lifesaver.',
    },
    {
      name: 'Julian Mercer',
      role: 'Software Engineer & Longevity Enthusiast',
      rating: 5,
      date: '3 weeks ago',
      title: 'The 14 ready protocols saved me hundreds of dollars',
      text: 'Having ready-to-apply protocols for mitochondrial health and fat loss made starting so straightforward. I went straight to Module 4, picked my stack, and started the same day.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Trusted by 1,420+ Health Practitioners &amp; Biohackers
          </h2>
          <p className="mt-2 text-slate-600 text-base md:text-lg">
            Real feedback from verified users who eliminated guesswork with Peptinova.
          </p>
        </div>

        {/* Rating Breakdown Bar Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft max-w-2xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-5xl font-extrabold text-slate-900 font-heading">4.9</span>
            <div className="flex text-amber-400 my-1 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium">Based on 1,420 verified user ratings</span>
          </div>

          <div className="w-full md:w-64 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-10">5 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
              </div>
              <span className="w-8 text-right font-bold">94%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10">4 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-[5%]" />
              </div>
              <span className="w-8 text-right font-bold">5%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10">3 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[1%]" />
              </div>
              <span className="w-8 text-right font-bold">1%</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">
                  "{rev.title}"
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{rev.name}</h5>
                  <span className="text-[11px] text-slate-500">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Buyer
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
