import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Menu, X, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenFlyer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFlyer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Theme', href: '#theme' },
    { name: 'Programme', href: '#programme' },
    { name: 'Speakers', href: '#ministers' },
    { name: 'Venue', href: '#venue' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-crusade-navy-950/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-crusade-navy-950/90 via-crusade-navy-950/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-crusade-orange-500 rounded-lg p-1">
            <div className="relative w-11 h-14 sm:w-12 sm:h-16 flex-shrink-0 flex items-center justify-center">
              <img
                src="/assets/diocese-logo.png"
                alt="Diocese of Aba Ngwa North Logo"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-crusade-gold-400 leading-tight">
                Diocese of Aba Ngwa North
              </span>
              <span className="font-display font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white group-hover:text-crusade-orange-400 transition-colors">
                ABA CRUSADE <span className="text-crusade-orange-500">2026</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium text-slate-300 uppercase tracking-widest hidden sm:block">
                Anglican Communion
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-crusade-orange-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-crusade-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenFlyer}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-crusade-navy-800/80 hover:bg-crusade-navy-700 text-crusade-gold-300 border border-crusade-gold-500/30 transition-all duration-200 hover:border-crusade-gold-400 flex items-center gap-1.5"
              title="View Official Crusade Flyer"
            >
              <Calendar className="w-3.5 h-3.5 text-crusade-orange-400" />
              <span>Official Flyer</span>
            </button>

            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white transition-all duration-300 rounded-full bg-gradient-to-r from-crusade-orange-600 via-crusade-orange-500 to-amber-500 hover:from-crusade-orange-500 hover:to-amber-400 shadow-lg shadow-crusade-orange-600/30 hover:shadow-crusade-orange-500/50 hover:scale-[1.02] active:scale-[0.98]"
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
              className="px-3 py-1.5 text-xs font-bold text-white rounded-full bg-crusade-orange-600 hover:bg-crusade-orange-500 sm:hidden shadow-md"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-crusade-navy-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-crusade-orange-400 transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="w-full py-3 rounded-xl bg-crusade-navy-800 text-crusade-gold-300 border border-crusade-gold-500/30 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-crusade-orange-400" />
                <span>View Official Event Flyer</span>
              </button>

              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-crusade-orange-600 to-amber-500 text-white font-bold text-center shadow-lg shadow-crusade-orange-600/30 flex items-center justify-center gap-2"
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
