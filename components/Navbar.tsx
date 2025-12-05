import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Navbar height + buffer
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex flex-shrink-0 items-center gap-3 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="12" r="2" fill="white" />
                  <rect x="10" y="4" width="4" height="16" rx="2" fill="white" />
                  <rect x="16" y="8" width="4" height="8" rx="2" fill="white" />
              </svg>
            </div>
            <span className="text-3xl font-bold tracking-tight text-white font-sans">Zylin</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Positioned Absolutely */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden bg-black border-b border-zinc-800 shadow-2xl">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="mt-6 block w-full rounded-lg bg-white px-5 py-4 text-center text-base font-bold text-black hover:bg-zinc-200"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;