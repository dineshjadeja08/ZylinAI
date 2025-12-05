import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const WaitlistCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {!isSubmitted ? (
          <>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400 mb-6">
              <Sparkles size={12} />
              <span>MVP Launch Offer</span>
            </div>
            
            <h2 className="text-4xl font-semibold text-white sm:text-5xl mb-6 tracking-tight">
              Join the Waitlist & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Get 50% Off</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Secure your spot for the beta release. The first 100 businesses get half-price pricing for life.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                required
                className="flex-1 rounded-full bg-zinc-900/80 border border-zinc-700 px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isLoading ? 'Joining...' : 'Join Now'}
                {!isLoading && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
            
            <p className="mt-6 text-xs text-zinc-500 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              73 spots remaining for the discount
            </p>
          </>
        ) : (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 max-w-md mx-auto animate-fade-in backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <CheckCircle2 size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-zinc-400">
              We've reserved your 50% discount. Keep an eye on your inbox—we'll notify you as soon as early access opens.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-sm text-zinc-500 hover:text-white underline decoration-zinc-700 underline-offset-4"
            >
              Register another email
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaitlistCTA;