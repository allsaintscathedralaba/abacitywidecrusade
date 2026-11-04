import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUp, Calendar, MapPin, Shield, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenFlyer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFlyer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-crusade-navy-950 border-t border-white/10 pt-16 pb-12 text-slate-300 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-crusade-royal-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Diocesan Entity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-16 flex-shrink-0">
                <img
                  src="/assets/diocese-logo.png"
                  alt="Diocese Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-crusade-gold-400 block">
                  Organizing Body
                </span>
                <h4 className="font-display font-extrabold text-lg text-white leading-tight">
                  {EVENT_DATA.organizer}
                </h4>
                <p className="text-xs text-slate-400">Church of Nigeria (Anglican Communion)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              The Aba Citywide Crusade 2026 is an interdenominational revival mandate dedicated to preaching the unadulterated Word of God, spiritual awakening, and sound biblical discernment.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5 text-xs text-slate-300">
              <p className="font-bold text-white uppercase text-[11px] tracking-wider text-crusade-orange-400">
                Event Mandate
              </p>
              <p className="font-display font-semibold text-white">
                {EVENT_DATA.theme} — {EVENT_DATA.scriptureReference}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-crusade-orange-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-crusade-orange-400 transition-colors">About Crusade</a>
              </li>
              <li>
                <a href="#theme" className="hover:text-crusade-orange-400 transition-colors">The Theme & Acts 17:11</a>
              </li>
              <li>
                <a href="#programme" className="hover:text-crusade-orange-400 transition-colors">Event Programme</a>
              </li>
              <li>
                <a href="#ministers" className="hover:text-crusade-orange-400 transition-colors">Featured Ministers</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-crusade-orange-400 transition-colors">Venue & Directions</a>
              </li>
              <li>
                <a href="#register" className="hover:text-crusade-orange-400 transition-colors">Registration & Attendance</a>
              </li>
              <li>
                <button
                  onClick={onOpenFlyer}
                  className="hover:text-crusade-gold-300 transition-colors text-left font-semibold text-crusade-orange-400"
                >
                  View Official Flyer
                </button>
              </li>
            </ul>
          </div>

          {/* Event Details Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Crusade Information
            </h5>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-crusade-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">{EVENT_DATA.dates}</span>
                  <span className="text-slate-400 text-xs">Daily by 4:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-crusade-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">{EVENT_DATA.ministersConference.title}</span>
                  <span className="text-slate-400 text-xs">Saturday, 5th December 2026 @ 9:00 AM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crusade-royal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">{EVENT_DATA.venue}</span>
                  <span className="text-slate-400 text-xs">{EVENT_DATA.state}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white font-bold text-xs uppercase shadow transition-colors"
              >
                <span>Event Registration Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {EVENT_DATA.organizer}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Aba Citywide Crusade 2026
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-crusade-navy-900 hover:bg-crusade-orange-600 border border-white/10 hover:border-crusade-orange-500 text-white transition-all shadow-md group"
              title="Back to top of page"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
