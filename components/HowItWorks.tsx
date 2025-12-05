import React from 'react';
import { PhoneIncoming, BrainCircuit, CalendarCheck, FileText } from 'lucide-react';

const steps = [
  {
    title: 'Caller Dials',
    description: 'A customer calls your business number. If you are busy or it is after hours, Zylin picks up instantly.',
    icon: PhoneIncoming,
  },
  {
    title: 'Zylin Understands',
    description: 'Using advanced NLP, Zylin understands intent, language (Hindi/English), and context.',
    icon: BrainCircuit,
  },
  {
    title: 'Zylin Takes Action',
    description: 'It answers FAQs, checks your calendar availability, and books appointments in real-time.',
    icon: CalendarCheck,
  },
  {
    title: 'You Get a Summary',
    description: 'Receive an instant SMS/WhatsApp summary and a full transcript of the call.',
    icon: FileText,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-zinc-500 font-medium uppercase tracking-widest text-xs mb-3">Process</h2>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">How Zylin Fits Into Your Business</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-800"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step Circle */}
                <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black border border-zinc-800 shadow-2xl group-hover:border-white transition-colors duration-300">
                  <step.icon size={28} className="text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <div className="mt-8">
                  <div className="inline-block rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold tracking-widest text-zinc-400 mb-4 border border-zinc-800">
                    STEP 0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;