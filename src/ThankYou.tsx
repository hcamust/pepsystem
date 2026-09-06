import { CheckCircle2, Mail, ShieldCheck } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200/80 shadow-card p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-3">
          Payment Confirmed — Thank You!
        </h1>

        <p className="text-slate-600 leading-relaxed mb-6">
          Your Peptinova System order went through successfully. We're preparing your access right now.
        </p>

        <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3 text-left mb-6">
          <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700">
            <strong className="text-slate-900">Check your inbox in the next few minutes.</strong> We're sending your access link (and receipt) to the email you used at checkout — don't forget to check your spam or promotions folder.
          </p>
        </div>

        <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Backed by our 7-day money-back guarantee
        </p>

        <a
          href="/"
          className="inline-block mt-8 text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4"
        >
          Back to Peptinova System
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
