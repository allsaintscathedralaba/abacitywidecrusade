import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenFlyer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFlyer }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950 font-sans text-white">
      
      {/* Background Atmosphere directly matching the flyer top section */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity filter blur-[1px]"
          style={{ backgroundImage: `url('/assets/worship-crowd.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Organizing Ministry Tagline */}
        <div className="reveal-on-scroll flex items-center gap-2.5 mb-6 text-xs uppercase tracking-widest font-semibold text-orange-400">
          <span>{EVENT_DATA.organizer}</span>
        </div>

        {/* Event Name */}
        <h1 className="reveal-on-scroll delay-100 text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-4 text-white">
          ABA CITYWIDE <br />
          <span className="text-white">CRUSADE </span>
          <span className="text-orange-500 font-extrabold">2026</span>
        </h1>

        {/* Theme & Scripture - Bold & Editorial */}
        <div className="reveal-on-scroll delay-150 my-6 max-w-3xl">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">
            THEME
          </p>
          <div className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            &ldquo;{EVENT_DATA.theme}&rdquo;
          </div>
          <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-orange-400 mt-2">
            {EVENT_DATA.scriptureReference}
          </p>
        </div>

        {/* Short Compelling Introductory Statement */}
        <p className="reveal-on-scroll delay-200 text-base sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mb-10">
          Join thousands of believers for four powerful days of worship, prayer, biblical teaching, and spiritual awakening in Aba.
        </p>

        {/* Key Event Details: Date, Time, Venue in Clean Minimal Editorial Hierarchy */}
        <div className="reveal-on-scroll delay-250 w-full max-w-3xl py-6 my-2 border-t border-b border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Event Date
            </span>
            <span className="text-lg sm:text-xl font-black text-white uppercase block">
              2nd – 5th Dec. 2026
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Daily Time
            </span>
            <span className="text-lg sm:text-xl font-black text-white uppercase block">
              4:00 PM Daily
            </span>
            <span className="text-[11px] text-orange-400 font-semibold block mt-0.5">
              Ministers Conf: Sat. 5th @ 9:00 AM
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Crusade Venue
            </span>
            <span className="text-lg sm:text-xl font-black text-white uppercase block">
              Ngwa High School
            </span>
            <span className="text-[11px] text-slate-300 block">
              Playground, Aba
            </span>
          </div>
        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="reveal-on-scroll delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-all hover:scale-[1.02] shadow-lg shadow-orange-950/40"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-white border border-white/20 hover:border-white/50 rounded transition-colors"
          >
            <span>EXPLORE CRUSADE</span>
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Quick flyer trigger */}
        <div className="reveal-on-scroll delay-400 mt-8">
          <button
            onClick={onOpenFlyer}
            className="text-xs text-slate-400 hover:text-orange-400 font-medium tracking-wide underline underline-offset-4 transition-colors"
          >
            Click here to view official publicity flyer
          </button>
        </div>

      </div>
    </section>
  );
};
