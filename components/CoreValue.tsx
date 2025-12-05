import React from 'react';
import { PhoneMissed, Languages, Clock } from 'lucide-react';

const CoreValue: React.FC = () => {
  return (
    <section className="bg-black py-24 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Answer Calls Instantly. Even When You’re Busy.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 transition-all hover:border-zinc-600">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-zinc-800 text-white">
              <PhoneMissed size={20} />
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">Never Miss a Lead</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              60% of customers hang up if sent to voicemail. Zylin answers instantly, capturing every opportunity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 transition-all hover:border-zinc-600">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-zinc-800 text-white">
              <Languages size={20} />
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">Human-like Conversations</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Speaks fluent Hindi, English, and Hinglish. It sounds so natural, your customers won't know it's AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 transition-all hover:border-zinc-600">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-zinc-800 text-white">
              <Clock size={20} />
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">Works 24/7/365</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Nights, weekends, or holidays—Zylin is always working. Handle bookings while you sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;