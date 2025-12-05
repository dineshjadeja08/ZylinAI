import React from 'react';
import { Check } from 'lucide-react';
import { PricingTierProps } from '../types';

const tiers: PricingTierProps[] = [
  {
    name: 'Starter',
    price: '₹2,999',
    description: 'Perfect for solo practitioners and small home businesses.',
    features: [
      '100 AI Minutes / month',
      'Basic Call Forwarding',
      'Appointment Booking',
      'Email Summaries',
      'Standard Support'
    ]
  },
  {
    name: 'Growth',
    price: '₹5,999',
    description: 'The best value for growing clinics and salons.',
    recommended: true,
    features: [
      '300 AI Minutes / month',
      'Hindi & English Support',
      'WhatsApp Integration',
      'CRM Integration (Zoho/Salesforce)',
      'Priority Support',
      'Custom Voice Clone'
    ]
  },
  {
    name: 'Business',
    price: 'Custom',
    description: 'For multi-location franchises and hospitals.',
    features: [
      'Unlimited AI Minutes',
      'Live Call Transfer',
      'HIPAA Compliant Data',
      'Dedicated Account Manager',
      'SLA Guarantees',
      'API Access'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple Pricing.</h2>
          <p className="mt-4 text-zinc-400">Choose the plan that fits your call volume.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
                key={idx} 
                className={`relative rounded-xl p-8 border ${
                    tier.recommended 
                    ? 'bg-zinc-900 border-zinc-700 ring-1 ring-zinc-700' 
                    : 'bg-black border-zinc-800'
                } flex flex-col`}
            >
                {tier.recommended && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 bg-white px-3 py-1 text-xs font-bold text-black rounded-full border border-zinc-200">
                        POPULAR
                    </div>
                )}
                
                <h3 className="text-lg font-medium text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-zinc-100">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="ml-1 text-lg text-zinc-500">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-zinc-400 font-light">{tier.description}</p>
                
                <ul className="mt-8 space-y-4 flex-1">
                    {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                            <Check className="h-4 w-4 flex-shrink-0 text-white mt-0.5" />
                            <span className="ml-3 text-sm text-zinc-300 font-light">{feature}</span>
                        </li>
                    ))}
                </ul>

                <a 
                    href="#contact"
                    className={`mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold leading-5 transition-all ${
                        tier.recommended
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-black text-white border border-zinc-700 hover:bg-zinc-900'
                    }`}
                >
                    Join Waitlist
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;