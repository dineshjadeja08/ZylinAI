import React from 'react';
import { Stethoscope, Scissors, GraduationCap, Home, Wrench } from 'lucide-react';
import { UseCaseProps } from '../types';

const cases: UseCaseProps[] = [
  {
    title: 'Clinics & Doctors',
    description: 'Book patient appointments, answer FAQs about timing, and handle emergency triage.',
    icon: Stethoscope
  },
  {
    title: 'Salons & Spas',
    description: 'Manage bookings for haircuts and facials. Reduce no-shows with automated reminders.',
    icon: Scissors
  },
  {
    title: 'Coaching Centers',
    description: 'Handle student inquiries about batch timings, fees, and admissions 24/7.',
    icon: GraduationCap
  },
  {
    title: 'Real Estate',
    description: 'Qualify leads instantly. Schedule property visits without back-and-forth calls.',
    icon: Home
  },
  {
    title: 'Home Services',
    description: 'For plumbers, electricians, and repair services. Capture jobs while you are on the job.',
    icon: Wrench
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Built for High-Call-Volume Businesses</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Zylin is pre-trained on industry-specific scenarios to ensure high accuracy from day one.</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
            {cases.map((item, idx) => (
                <div key={idx} className="flex-1 min-w-[280px] max-w-[350px] bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 hover:bg-zinc-900 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 rounded-md bg-black border border-zinc-800 text-white">
                            <item.icon size={18} />
                        </div>
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm font-light">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;