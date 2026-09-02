import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'crypto'>('card');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center sm:text-center pb-3 border-b border-slate-100">
          <div className="mx-auto inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 85% OFF Special Release Pass
          </div>
          <DialogTitle className="text-2xl font-extrabold text-slate-900 font-heading">
            Complete Your Peptinova Order
          </DialogTitle>
          <DialogDescription className="text-xs text-slate-500">
            Instant digital delivery to your inbox within seconds of payment.
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <div className="space-y-6 pt-2">
            
            {/* Value Stack Items List */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2.5">
              <div className="flex justify-between items-center text-slate-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complete 5-Module Peptinova System (181 pgs)
                </span>
                <span className="text-slate-400 line-through">$97.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 14 Ready-to-Use Goal Protocols
                </span>
                <span className="text-slate-400 line-through">$47.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bonus 1: Prime Syringe Calculator App
                </span>
                <span className="text-emerald-700 font-extrabold">FREE</span>
              </div>
              <div className="flex justify-between items-center text-slate-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bonus 2 &amp; 3: Buyer Guide &amp; Progress Tracker
                </span>
                <span className="text-emerald-700 font-extrabold">FREE</span>
              </div>
              <div className="flex justify-between items-center text-slate-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Gifts 1 &amp; 2: Master Map &amp; Essential Glossary
                </span>
                <span className="text-emerald-700 font-extrabold">FREE</span>
              </div>

              {/* Price Total Row */}
              <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">Total Price Today:</span>
                  <span className="text-xs text-slate-400 line-through">$271.00 Value</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-blue-900 font-heading tracking-tight">$27<span className="text-base text-slate-500 font-normal">.00</span></span>
                  <span className="text-[10px] text-emerald-700 font-bold block">One-time • No Recurring Fees</span>
                </div>
              </div>
            </div>

            {/* Simulated Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name:</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address (for instant access download link):</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Select Payment Option:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'card'
                        ? 'bg-blue-50 border-blue-600 text-blue-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'paypal'
                        ? 'bg-blue-50 border-blue-600 text-blue-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-extrabold text-blue-700">PayPal</span> Express
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'crypto'
                        ? 'bg-blue-50 border-blue-600 text-blue-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-extrabold text-emerald-700">Crypto</span> (USDT/BTC)
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base font-bold py-4 rounded-xl shadow-button uppercase tracking-wider"
              >
                COMPLETE ORDER &amp; GET INSTANT ACCESS ($27)
              </Button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" /> 256-Bit SSL Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7-Day Refund Policy
                </span>
              </div>
            </form>

          </div>
        ) : (
          /* Success State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              Order Confirmed!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{name || 'Customer'}</strong>. Your access link and receipt have been sent to <strong className="text-blue-700">{email || 'your email'}</strong>.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600">
              Check your inbox (and spam folder) for instant access to all 5 modules, the calculator app, and your 5 bonus gifts.
            </div>
            <Button onClick={handleReset} variant="outline" className="w-full">
              Back to Landing Page
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
