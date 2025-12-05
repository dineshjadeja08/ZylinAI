import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    quote: "Since installing Zylin, we haven't missed a single patient inquiry. It books appointments automatically even on Sundays!",
    author: "Dr. Rajesh Gupta",
    role: "Owner, Gupta Dental Clinic",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "My staff used to spend hours on the phone. Now Zylin handles the bookings, and we focus on our salon customers.",
    author: "Priya Sharma",
    role: "Director, Style Studio",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "The Hinglish support is a game-changer. My students love how natural the AI sounds when asking for course details.",
    author: "Amit Verma",
    role: "Founder, Excel Coaching",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">Trusted by Early Adopters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-zinc-900/30 rounded-xl p-8 border border-zinc-800 relative hover:bg-zinc-900/50 transition-colors">
              <Quote className="absolute top-6 right-6 text-zinc-800" size={32} />
              <p className="text-zinc-300 italic mb-8 relative z-10 font-light leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                    <img src={item.image} alt={item.author} className="h-full w-full object-cover opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.author}</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;