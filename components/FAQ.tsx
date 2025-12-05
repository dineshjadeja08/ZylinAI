import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItemProps } from '../types';

const faqs: FaqItemProps[] = [
  {
    question: "Do I need to change my phone number?",
    answer: "No. You can simply set up call forwarding from your existing Jio, Airtel, or Vi number to your Zylin number. It takes 2 minutes."
  },
  {
    question: "Does it really speak Hindi?",
    answer: "Yes, Zylin is trained on Indian datasets. It understands and speaks Hindi, English, and even Hinglish fluidly."
  },
  {
    question: "Is it really AI or a human?",
    answer: "It is a 100% advanced Voice AI. However, it sounds very human-like and can handle pauses, interruptions, and complex queries."
  },
  {
    question: "How long does setup take?",
    answer: "You can be up and running in less than 15 minutes. Just upload your business details/website, and the AI trains itself."
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer: "If the AI faces a complex query it cannot handle, it can politely ask the caller to wait and forward the call to your personal mobile number (Smart Escalation)."
  },
  {
    question: "Can I customize the voice?",
    answer: "Yes, on the Growth and Business plans, you can choose from different Indian accents and voice tones to match your brand."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg bg-black overflow-hidden transition-colors hover:border-zinc-700">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-zinc-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-white" size={20} />
                ) : (
                  <ChevronDown className="text-zinc-500" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed pt-0 font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;