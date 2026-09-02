import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Is this a physical book or instant digital access?',
      a: 'Peptinova is 100% digital. Immediately after checkout, you receive instant access to all 5 PDF modules (181 pages), the 14 ready-to-use protocols, the interactive web calculator, and all 3 bonuses + 2 gifts. You can read it on your phone, tablet, or laptop anytime.',
    },
    {
      q: 'How does the Syringe Dosing Calculator work?',
      a: 'The calculator allows you to input your specific vial milligram size (e.g., 5mg or 10mg), the volume of bacteriostatic water you injected into the vial (e.g., 2mL), and your target dose in micrograms (e.g., 250mcg). It automatically outputs the exact IU mark to pull your U-100 or U-50 insulin syringe plunger to.',
    },
    {
      q: 'I have never used peptides before. Is this suitable for beginners?',
      a: 'Yes, absolutely. The system was structured specifically to bridge the gap between beginner confusion and expert application. Module 01 walks you through basic biochemistry, sterile reconstitution, storage temperatures, and avoiding common syringe math mistakes step-by-step.',
    },
    {
      q: 'Are the study citations real and verifiable?',
      a: 'Yes. Unlike forum posts or social media claims, every single protocol in Peptinova cites the author, year, and published peer-reviewed journal paper (PubMed/NCBI) so you can look up the research and verify the findings yourself.',
    },
    {
      q: 'What if I am not satisfied with the system?',
      a: 'We offer an unconditional 7-Day 100% Money-Back Guarantee. If you feel the guide and calculator did not save you time or money, simply send us an email within 7 days for a full refund — no questions asked.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about Peptinova System before starting.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-bold text-slate-900 text-base md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};
