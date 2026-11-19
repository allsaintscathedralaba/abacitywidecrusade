import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenFlyer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFlyer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Organizing Ministry Details */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-12 bg-white p-0.5 rounded shadow-sm flex items-center justify-center">
                <img
                  src="/assets/diocese-logo.png"
                  alt="Diocese of Aba Ngwa North"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block">
                  ORGANIZED BY
                </span>
                <span className="text-base font-black uppercase text-white block">
                  {EVENT_DATA.organizer}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An interdenominational revival mandate dedicated to preaching the truth of God&apos;s Word, spiritual awakening, and sound biblical discernment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs uppercase tracking-widest">
            <span className="font-bold text-white block mb-3">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#expect" className="hover:text-white transition-colors">What to Expect</a></li>
              <li><a href="#details" className="hover:text-white transition-colors">Event Details</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
              <li>
                <button onClick={onOpenFlyer} className="text-orange-400 hover:text-orange-300">
                  Official Flyer
                </button>
              </li>
            </ul>
          </div>

          {/* Event Quick Summary */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold uppercase tracking-widest text-white block mb-3">Crusade Details</span>
            <p className="text-slate-300"><strong>Theme:</strong> {EVENT_DATA.theme}</p>
            <p className="text-slate-300"><strong>Scripture:</strong> {EVENT_DATA.scriptureReference}</p>
            <p className="text-slate-300"><strong>Date:</strong> {EVENT_DATA.dates}</p>
            <p className="text-slate-300"><strong>Venue:</strong> {EVENT_DATA.venue}</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {EVENT_DATA.organizer}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>CITYWIDE CRUSADE 2026</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-white rounded transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
