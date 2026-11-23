import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section id="details" className="relative py-28 sm:py-36 bg-slate-950 font-sans text-white overflow-hidden border-t border-white/10">
      
      {/* Background Photograph with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/worship-crowd.jpg"
          alt="Crusade crowd gathering background"
          className="w-full h-full object-cover object-center filter brightness-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
          Essential Information
        </div>
        <h2 className="reveal-on-scroll delay-100 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-14">
          EVENT DETAILS
        </h2>

        {/* Large Prominent Typographic Display (No Boxed Cards!) */}
        <div className="space-y-12">
          
          {/* DATE */}
          <div className="reveal-on-scroll border-b border-white/15 pb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-1">
              EVENT DATE
            </span>
            <span className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white block">
              {EVENT_DATA.dates}
            </span>
            <span className="text-sm text-slate-300 block mt-2">
              Wednesday, 2nd December through Saturday, 5th December 2026
            </span>
          </div>

          {/* TIME */}
          <div className="reveal-on-scroll delay-100 border-b border-white/15 pb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-1">
              CRUSADE TIME
            </span>
            <span className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-orange-500 block">
              4:00 PM DAILY
            </span>
            <div className="mt-2 text-sm text-slate-300">
              <span className="font-bold text-white uppercase text-xs tracking-wider block sm:inline">
                Special Ministers Conference:
              </span>{' '}
              Saturday, 5th December 2026 @ 9:00 AM
            </div>
          </div>

          {/* VENUE */}
          <div className="reveal-on-scroll delay-150 border-b border-white/15 pb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-1">
              LOCATION & VENUE
            </span>
            <span className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white block">
              NGWA HIGH SCHOOL
            </span>
            <span className="text-xl sm:text-3xl font-bold text-slate-300 block mt-1">
              Playground, Aba, Abia State
            </span>
            <div className="mt-4">
              <a
                href={EVENT_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Ministers & Organizing attribution */}
          <div className="reveal-on-scroll delay-200 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300 text-sm">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-1">
                Guest Speaker
              </span>
              <span className="text-base font-bold text-white block">
                The Rt. Rev. Dr. Iyke J. Egbuonu
              </span>
              <span className="text-xs text-slate-400">Bishop, Diocese of Oji River</span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-1">
                Chief Host
              </span>
              <span className="text-base font-bold text-white block">
                The Rt. Rev. Nathan C. O. Kanu JP, Ph.D.
              </span>
              <span className="text-xs text-slate-400">Bishop, Diocese of Aba Ngwa North</span>
            </div>
          </div>

          {/* REGISTER NOW Button */}
          <div className="reveal-on-scroll delay-250 pt-6">
            <a
              href={EVENT_DATA.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-black tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-all hover:scale-105 shadow-xl shadow-orange-950/60"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
