import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

// Using the Formspree ID provided by the user
const FORMSPREE_ID = "mgvgzlgy"; 

const WaitlistCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
            email: email,
            // Additional metadata helps you track where signups come from
            timestamp: new Date().toISOString(),
            source: 'Zylin Landing Page - Waitlist'
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            throw new Error(data.errors.map((error: any) => error.message).join(", "));
        } else {
            throw new Error('Form submission failed');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      // Reset error state after 3 seconds so user can try again
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {status === 'success' ? (
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
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-zinc-500 hover:text-white underline decoration-zinc-700 underline-offset-4"
            >
              Register another email
            </button>
          </div>
        ) : (
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
              <div className="flex-1">
                <input
                  type="email"
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="w-full rounded-full bg-zinc-900/80 border border-zinc-700 px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 min-w-[160px]"
              >
                {status === 'loading' ? 'Joining...' : 'Join Now'}
                {status !== 'loading' && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
            
            {status === 'error' && (
               <div className="mt-4 flex items-center justify-center gap-2 text-red-400 text-sm animate-pulse">
                 <AlertCircle size={14} />
                 <span>Submission failed. Please check your internet or try again.</span>
               </div>
            )}
            
            <p className="mt-6 text-xs text-zinc-500 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              73 spots remaining for the discount
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default WaitlistCTA;