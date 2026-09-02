import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-xs md:text-sm font-medium py-2.5 px-4 sticky top-0 z-40 border-b border-blue-500/20 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center justify-center gap-2 w-full md:w-auto">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="flex items-center gap-1 text-emerald-400 font-bold tracking-wide uppercase text-xs">
            <Flame className="w-4 h-4 text-emerald-400 animate-bounce" /> 2026 Edition Release
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="text-slate-200">The Complete Science-Backed Peptide Application System</span>
        </div>

        <div className="flex items-center justify-center gap-4 w-full md:w-auto mx-auto md:mx-0">
          <div className="flex items-center gap-1.5 bg-blue-900/50 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300">Special Offer Ends in:</span>
            <span className="font-bold text-amber-300 tracking-wider">{formatTime(timeLeft)}</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 7-Day Guarantee
          </div>
        </div>
      </div>
    </div>
  );
};
