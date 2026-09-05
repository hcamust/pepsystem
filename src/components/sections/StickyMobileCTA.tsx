import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  targetRef: React.RefObject<HTMLElement | null>;
  onOpenCheckout: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ targetRef, onOpenCheckout }) => {
  // Only show once the target has scrolled past ABOVE the viewport (top < 0),
  // never just because it hasn't been reached yet on initial load.
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasScrolledPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef]);

  return (
    <div
      aria-hidden={!hasScrolledPast}
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pt-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out ${
        hasScrolledPast ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'
      }`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <Button
        size="lg"
        className="w-full text-base font-bold py-3.5 rounded-xl shadow-button flex items-center justify-center gap-2 group"
        onClick={onOpenCheckout}
        tabIndex={hasScrolledPast ? 0 : -1}
      >
        <span>GET INSTANT ACCESS NOW</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
