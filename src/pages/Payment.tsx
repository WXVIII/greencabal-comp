import React, { useState } from 'react';
import { Shield, Zap, CreditCard } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-hot-toast';

const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;

    setIsProcessing(true);
    try {
      // In a real app, you would:
      // 1. Send card details to your server
      // 2. Create a payment intent
      // 3. Confirm the payment with Stripe
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      toast.success('Payment successful!');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Subscription</h1>

      <div className="grid gap-6">
        <div className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Trial Period</h2>
              <p className="text-[#03ffc3]/80 mt-1">3 posts remaining</p>
            </div>
            <Zap size={24} className="text-[#00ff3f]" />
          </div>
          <div className="h-2 bg-[#03ffc3]/20 rounded-full">
            <div className="h-full w-2/5 bg-[#00ff3f] rounded-full"></div>
          </div>
        </div>

        <div className="bg-[#022424] border-2 border-[#00ff3f] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Subscription</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-3xl font-bold">$2</span>
            <span className="text-[#03ffc3]/80 ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Shield size={20} className="text-[#00ff3f]" />
              <span>Unlimited post notifications</span>
            </li>
            <li className="flex items-center gap-2">
              <Shield size={20} className="text-[#00ff3f]" />
              <span>Priority community support</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handlePayment} className="bg-[#022424] border border-[#03ffc3]/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
          
          <div className="space-y-4">
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03ffc3]/60" size={20} />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#00ff3f]"
                placeholder="Card number"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 px-4 focus:outline-none focus:border-[#00ff3f]"
                placeholder="MM/YY"
                required
              />
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="bg-transparent border border-[#03ffc3]/20 rounded-lg py-2 px-4 focus:outline-none focus:border-[#00ff3f]"
                placeholder="CVC"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full mt-6 bg-[#00ff3f] text-[#022424] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Subscribe Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;