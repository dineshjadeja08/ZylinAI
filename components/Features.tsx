import React from 'react';
import { Calendar, Globe2, FileOutput, ShieldCheck, PhoneForwarded, MessageSquare } from 'lucide-react';
import { FeatureCardProps } from '../types';

const features: FeatureCardProps[] = [
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Connects with your Google Calendar or CRM to book slots in real-time without double-booking.',
  },
  {
    icon: Globe2,
    title: 'Multilingual Support',
    description: 'Fluent in Indian English, Hindi, and Hinglish. Adapts to the caller’s preferred language automatically.',
  },
  {
    icon: FileOutput,
    title: 'Call Logs & Summaries',
    description: 'Get concise text summaries of every conversation delivered to your WhatsApp or dashboard.',
  },
  {
    icon: PhoneForwarded,
    title: 'Smart Escalations',
    description: 'Intelligently detects urgent calls or VIP clients and forwards them to your personal line.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    description: 'Automatically sends booking confirmations and follow-up messages to callers via WhatsApp.',
  },
  {
    icon: ShieldCheck,
    title: 'Spam Filtering',
    description: 'Screens out robocalls and spam, ensuring you only deal with genuine customers.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything a Receptionist Does. <span className="text-zinc-500">Just Smarter.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col p-8 rounded-2xl border border-zinc-800 bg-transparent hover:bg-zinc-900/20 transition-colors duration-300">
              <div className="mb-6 text-white">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;