import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Logo & Tagline */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-black">
            <Zap size={14} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Zylin</span>
        </div>
        
        <p className="text-zinc-500 text-sm mb-8 text-center max-w-sm">
          The AI Voice Assistant for modern Indian businesses. <br />
          Never miss a customer again.
        </p>

        {/* Essential Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-zinc-700">
          <p>&copy; {new Date().getFullYear()} Zylin AI. All rights reserved.</p>
          <span className="hidden md:inline">•</span>
          <p>Made in Chennai 🤍</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;