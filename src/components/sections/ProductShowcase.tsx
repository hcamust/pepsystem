import React from 'react';
import heroMockupImage from '@/assets/images/hero-system-mockup.webp';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4">
        <img
          src={heroMockupImage}
          alt="Peptinova System — complete application system mockup with all modules, bonuses and gifts"
          width={700}
          height={500}
          className="w-full h-auto rounded-2xl border border-slate-200/80 shadow-card"
        />
      </div>
    </section>
  );
};
