import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Menu, X, Calendar, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenFlyer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFlyer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Theme', href: '#theme' },
    { name: 'Programme', href: '#programme' },
    { name: 'Ministers', href: '#ministers' },
    { name: 'Venue', href: '#venue' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-crusade-navy-950/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-crusade-navy-950/95 via-crusade-navy-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Official Diocesan Identity */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-14 sm:w-14 sm:h-16 flex-shrink-0 bg-white/95 p-1 rounded-xl shadow-md border border-crusade-gold-500/40 flex items-center justify-center">
              <img
                src="/assets/diocese-logo.png"
                alt="Diocese of Aba Ngwa North Crest"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-crusade-gold-400">
                Diocese of Aba Ngwa North
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white uppercase leading-none">
                ABA CRUSADE <span className="text-crusade-orange-500">2026</span>
              </span>
              <span className="text-[10px] text-slate-300 font-medium tracking-wide">
                Anglican Communion
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-crusade-orange-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-crusade-orange-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenFlyer}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-crusade-orange-400" />
              <span>Official Flyer</span>
            </button>

            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 shadow-lg shadow-crusade-orange-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>REGISTER NOW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-white rounded-lg bg-crusade-orange-600 sm:hidden"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-crusade-navy-950 border-b border-white/10 shadow-2xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-crusade-orange-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="w-full py-3 rounded-xl bg-white/10 text-white text-sm font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-crusade-orange-400" />
                <span>View Official Event Flyer</span>
              </button>

              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-crusade-orange-600 text-white font-bold text-center text-sm uppercase shadow-lg flex items-center justify-center gap-2"
              >
                <span>REGISTER NOW (FREE SEAT)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
