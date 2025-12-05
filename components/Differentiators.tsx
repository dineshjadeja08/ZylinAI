import React from 'react';
import { Check, X } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why Teams Choose Zylin</h2>
          <p className="mt-4 text-zinc-400">Superior to traditional call centers and basic IVR menus.</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20">
          <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50 p-5 text-sm font-medium text-zinc-300">
            <div className="col-span-1 pl-4">Feature</div>
            <div className="col-span-1 text-center text-zinc-500">Traditional IVR</div>
            <div className="col-span-1 text-center text-white font-bold">Zylin AI</div>
          </div>

          <div className="divide-y divide-zinc-800">
             {/* Row 1 */}
            <div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30">
              <div className="col-span-1 text-zinc-200 font-medium">Conversational Experience</div>
              <div className="col-span-1 flex justify-center text-zinc-600 text-sm text-center">
                 <span className="flex items-center gap-2"><X size={14} /> "Press 1 for..."</span>
              </div>
              <div className="col-span-1 flex justify-center text-white font-medium text-center">
                 <span className="flex items-center gap-2"><Check size={14} /> Human-like Chat</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30">
              <div className="col-span-1 text-zinc-200 font-medium">Setup Time</div>
              <div className="col-span-1 flex justify-center text-zinc-600 text-sm text-center">
                Days/Weeks
              </div>
              <div className="col-span-1 flex justify-center text-white font-medium text-center">
                <span className="flex items-center gap-2"><Check size={14} /> 10 Minutes</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30">
              <div className="col-span-1 text-zinc-200 font-medium">Cost</div>
              <div className="col-span-1 flex justify-center text-zinc-600 text-sm text-center">
                 High Staff Costs
              </div>
              <div className="col-span-1 flex justify-center text-white font-medium text-center">
                 <span className="flex items-center gap-2"><Check size={14} /> Fraction of salary</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 p-6 items-center hover:bg-zinc-900/30">
              <div className="col-span-1 text-zinc-200 font-medium">Training</div>
              <div className="col-span-1 flex justify-center text-zinc-600 text-sm text-center">
                 Manual Scripting
              </div>
              <div className="col-span-1 flex justify-center text-white font-medium text-center">
                 <span className="flex items-center gap-2"><Check size={14} /> Auto-train on Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;