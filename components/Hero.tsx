import React from 'react';
import { PhoneCall, CheckCircle2, MessageSquare, Calendar, Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-black">
      {/* Background Glow (Subtle White/Grey) */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm hover:bg-blue-500/20 transition-all cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="tracking-wide uppercase text-xs font-bold">Early Access</span>
              <span className="h-4 w-px bg-blue-500/20"></span>
              <span className="text-zinc-100 flex items-center gap-1">
                Get 50% Off Lifetime Plans <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            <h1 className="text-5xl font-semibold tracking-tighter text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Never Miss a <br/>
              <span className="text-zinc-400">Customer Again.</span>
            </h1>
            
            <p className="mt-8 text-xl leading-relaxed text-zinc-400 sm:max-w-md mx-auto lg:mx-0 font-light">
              Your 24/7 AI Receptionist. Answers calls, books appointments, and speaks Hindi, English & Hinglish naturally.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-zinc-200 flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="text-blue-600" />
                Join Waitlist
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto rounded-full border border-zinc-700 bg-black px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-900"
              >
                How It Works
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-zinc-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-white" />
                <span>Zero Setup Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-white" />
                <span>No IT Required</span>
              </div>
            </div>
          </div>

          {/* Visual: Stylized Phone - Monochrome */}
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">
             {/* Phone Bezel */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-800 bg-black shadow-2xl shadow-zinc-900/20">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 h-6 w-28 -translate-x-1/2 rounded-b-xl bg-black z-20 border-b border-x border-zinc-800/50"></div>
              
              {/* Screen Content */}
              <div className="h-[600px] w-full bg-zinc-950 p-6 flex flex-col relative">
                 
                 {/* Incoming Call Overlay */}
                 <div className="mt-12 space-y-4">
                    <div className="flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xl font-medium text-white">
                            JS
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-medium text-white">John Smith</h3>
                        <p className="text-zinc-500">Calling Business...</p>
                    </div>
                 </div>

                 {/* Simulated AI Actions */}
                 <div className="mt-8 space-y-3">
                     <div className="flex items-start gap-3">
                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-black">
                             <PhoneCall size={14} />
                         </div>
                         <div className="rounded-xl rounded-tl-none bg-zinc-900 border border-zinc-800 p-3 shadow-sm">
                             <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">AI Thinking</p>
                             <p className="text-sm font-light text-zinc-100">"Namaste! Welcome to Royal Salon. How can I help you book today?"</p>
                         </div>
                     </div>

                     <div className="flex items-start gap-3">
                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700">
                             <Calendar size={14} />
                         </div>
                         <div className="rounded-xl rounded-tl-none bg-zinc-900 border border-zinc-800 p-3 shadow-sm">
                             <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Action</p>
                             <p className="text-sm font-light text-zinc-100">Appointment Confirmed: Tomorrow @ 4 PM</p>
                         </div>
                     </div>

                     <div className="flex items-start gap-3">
                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700">
                             <MessageSquare size={14} />
                         </div>
                         <div className="rounded-xl rounded-tl-none bg-zinc-900 border border-zinc-800 p-3 shadow-sm">
                             <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">WhatsApp</p>
                             <p className="text-sm font-light text-zinc-100">Sent booking details via WhatsApp.</p>
                         </div>
                     </div>
                 </div>

                 {/* Feature Badges floating */}
                 <div className="absolute bottom-8 left-6 right-6 flex justify-between">
                     <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-white shadow-lg">
                            <span className="text-xs font-bold">24/7</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-white shadow-lg">
                            <span className="text-xs font-bold">Hin</span>
                        </div>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;