import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight, Flame, Calendar, MapPin } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-crusade-navy-950">
      
      {/* Background Graphic Visual with Stadium Lighting Texture */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity filter brightness-75 contrast-125"
          style={{ backgroundImage: `url('/assets/crusade-stadium-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950 via-crusade-navy-900/90 to-crusade-navy-950" />
        <div className="absolute inset-0 bg-radial-gradient from-crusade-orange-600/15 via-crusade-royal-900/30 to-crusade-navy-950/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Glow pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crusade-orange-500/20 border border-crusade-orange-500/40 text-crusade-orange-300 text-xs sm:text-sm font-black uppercase tracking-widest mb-6">
          <Flame className="w-4 h-4 text-crusade-orange-400 fill-crusade-orange-400" />
          <span>REVIVAL AWAITS ABA</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-2xl mb-6">
          DON&apos;T MISS THIS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 via-crusade-orange-500 to-amber-300">
            DIVINE ENCOUNTER!
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-medium leading-relaxed mb-8">
          Four days of worship, prayer, biblical truth, and spiritual awakening await you.
          Join us at Ngwa High School Playground, Aba.
        </p>

        {/* Date & Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-200 mb-10 font-bold">
          <span className="flex items-center gap-2 text-crusade-gold-300">
            <Calendar className="w-4 h-4 text-crusade-orange-400" />
            <span>{EVENT_DATA.dates} • 4:00 PM Daily</span>
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-500" />
          <span className="flex items-center gap-2 text-slate-200">
            <MapPin className="w-4 h-4 text-crusade-gold-400" />
            <span>{EVENT_DATA.venue}</span>
          </span>
        </div>

        {/* Large Button */}
        <div>
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black tracking-wide text-white uppercase rounded-2xl bg-gradient-to-r from-crusade-orange-600 via-crusade-orange-500 to-amber-500 hover:from-crusade-orange-500 hover:to-amber-400 shadow-2xl shadow-crusade-orange-600/50 hover:shadow-crusade-orange-500/70 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>JOIN THE CRUSADE</span>
            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400 font-medium">
          Admission is completely free. All are cordially welcome in the Name of the Lord.
        </p>

      </div>
    </section>
  );
};
