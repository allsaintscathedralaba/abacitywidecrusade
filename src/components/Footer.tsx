import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Organizing Ministry Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-10 bg-white p-0.5 rounded shadow-sm flex items-center justify-center">
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
              <span className="text-sm font-black uppercase text-white block">
                {EVENT_DATA.organizer}
              </span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#details" className="hover:text-white transition-colors">Event Details</a>
            <a 
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              Register
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {EVENT_DATA.organizer}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-bold uppercase tracking-wider">
              CITYWIDE CRUSADE 2026
            </span>
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
