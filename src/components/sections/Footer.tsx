import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        
        {/* Brand & Security Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <div className="text-left">
            <span className="text-lg font-bold text-white font-heading tracking-tight">PEPTINOVA</span>
            <span className="text-xs text-blue-400 font-mono block">The Master Peptide Application System</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> 256-Bit SSL Secured
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> 7-Day Guarantee
            </span>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed text-justify max-w-4xl mx-auto">
          <strong>Medical Disclaimer:</strong> The content provided in Peptinova System is strictly for educational, informational, and research reference purposes only. It is not intended as medical advice, diagnosis, or prescription treatment. Always consult a qualified physician or licensed healthcare provider before initiating any peptide, supplement, or health protocol. All scientific citations refer to published preclinical or clinical research literature.
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-white transition-colors">Scientific References</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>

        <p className="text-[11px] text-slate-400">
          &copy; {new Date().getFullYear()} Peptinova System. All rights reserved. Registered trademark.
        </p>

      </div>
    </footer>
  );
};
