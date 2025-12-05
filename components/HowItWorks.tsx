import React, { useEffect, useRef, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-zinc-500 font-medium uppercase tracking-widest text-xs mb-3">Process</h2>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">How Zylin Fits Into Your Business</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-800 overflow-hidden">
            {/* Animated Light Beam */}
            <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-[2px] ${isVisible ? 'animate-shimmer' : ''}`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center text-center group transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Circle */}
                <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black border border-zinc-800 shadow-2xl group-hover:border-blue-500/50 transition-colors duration-500 relative">
                    {/* Subtle pulse effect for active state */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <step.icon 
                    size={28} 
                    className={`text-zinc-400 group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110 ${isVisible ? 'animate-pulse-slow' : ''}`} 
                  />
                </div>
                
                {/* Content */}
                <div className="mt-8">
                  <div className="inline-block rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold tracking-widest text-zinc-400 mb-4 border border-zinc-800 group-hover:border-blue-900/50 group-hover:text-blue-200 transition-colors duration-300">
                    STEP 0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{step.title}</h4>
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