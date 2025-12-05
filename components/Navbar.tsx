import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
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
            className="flex flex-shrink-0 items-center gap-2 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Zylin</span>
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