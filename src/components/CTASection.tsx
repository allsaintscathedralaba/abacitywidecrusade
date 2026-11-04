import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowRight, Calendar, MapPin, Flame } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-crusade-navy-950 font-sans">
      
      {/* Background Graphic Visual with Worship Crowd */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter brightness-90 contrast-125"
          style={{ backgroundImage: `url('/assets/worship-crowd.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950 via-crusade-navy-950/90 to-crusade-navy-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crusade-orange-500/20 border border-crusade-orange-500/40 text-crusade-orange-400 text-xs font-black uppercase tracking-widest mb-6">
          <Flame className="w-4 h-4 fill-crusade-orange-500" />
          <span>FOUR DAYS OF SPIRITUAL AWAKENING</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6">
          DON&apos;T MISS THIS <br />
          <span className="text-crusade-orange-500">DIVINE ENCOUNTER!</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 leading-relaxed mb-8">
          Four days of worship, prayer, biblical truth, and spiritual awakening await you.
          Join us at Ngwa High School Playground, Aba.
        </p>

        {/* Date & Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 py-3 rounded-2xl bg-crusade-navy-900 border border-white/10 text-xs sm:text-sm text-slate-200 mb-10 font-bold">
          <span className="flex items-center gap-2 text-crusade-orange-400">
            <Calendar className="w-4 h-4" />
            <span>{EVENT_DATA.dates} • 4:00 PM Daily</span>
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-500" />
          <span className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 text-crusade-gold-400" />
            <span>{EVENT_DATA.venue}</span>
          </span>
        </div>

        {/* Join The Crusade Button */}
        <div>
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black tracking-wide text-white uppercase rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 shadow-2xl shadow-crusade-orange-600/50 transition-all hover:scale-105 active:scale-95 group"
          >
            <span>JOIN THE CRUSADE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400 font-semibold">
          Free admission for all believers, families, and seekers across Aba.
        </p>

      </div>
    </section>
  );
};
