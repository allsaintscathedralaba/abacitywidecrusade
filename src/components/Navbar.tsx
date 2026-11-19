import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenFlyer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFlyer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What to Expect', href: '#expect' },
    { name: 'Event Details', href: '#details' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Organizing Ministry */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-12 flex-shrink-0 bg-white p-0.5 rounded shadow-sm flex items-center justify-center">
              <img
                src="/assets/diocese-logo.png"
                alt="Diocese of Aba Ngwa North Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Diocese of Aba Ngwa North
              </span>
              <span className="text-sm sm:text-base font-black tracking-tight text-white uppercase leading-none">
                CITYWIDE CRUSADE <span className="text-orange-500">2026</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenFlyer}
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white border border-white/20 rounded hover:border-white/40 transition-colors"
            >
              View Flyer
            </button>

            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-orange-600 rounded"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-orange-400 py-1"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-300 border border-white/20 rounded"
              >
                View Official Flyer
              </button>

              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-xs font-bold uppercase tracking-widest text-center text-white bg-orange-600 rounded flex items-center justify-center gap-1.5"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
