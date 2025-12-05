import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="12" r="2" fill="white" />
                  <rect x="10" y="4" width="4" height="16" rx="2" fill="white" />
                  <rect x="16" y="8" width="4" height="8" rx="2" fill="white" />
              </svg>
            </div>
          <span className="text-2xl font-bold tracking-tight text-white font-sans">Zylin</span>
        </div>

        {/* CTA Button */}
        <div className="mb-10">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3 text-base font-bold text-black transition-all hover:bg-zinc-200 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Book a Demo
          </a>
        </div>

        {/* Essential Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-zinc-700">
          <p>&copy; {new Date().getFullYear()} Zylin AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;