import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-sans text-white">
      
      {/* Large Full-Screen Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/congregation-praise.jpg"
          alt="Massive worship congregation in praise"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
        />
        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-20 pb-16">
        
        {/* Organizing Ministry Tag */}
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-400 mb-6">
          {EVENT_DATA.organizer}
        </div>

        {/* Official Crusade Theme - Bold & Dominant */}
        <div className="reveal-on-scroll delay-100 max-w-4xl mb-4">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-300 block mb-2">
            CRUSADE THEME
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-2xl">
            THINK BEFORE <br />
            <span className="text-orange-500">YOU BELIEVE</span>
          </h1>
          <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-slate-300 mt-3">
            {EVENT_DATA.scriptureReference}
          </p>
        </div>

        {/* Event Name & Date */}
        <div className="reveal-on-scroll delay-150 my-6">
          <p className="text-xl sm:text-3xl font-black uppercase tracking-wider text-white">
            ABA CITYWIDE CRUSADE 2026
          </p>
          <div className="mt-3 inline-block px-5 py-2 bg-orange-600/90 text-white text-xs sm:text-sm font-black uppercase tracking-widest rounded">
            {EVENT_DATA.dates} • 4:00 PM DAILY
          </div>
        </div>

        {/* Short Invitation */}
        <p className="reveal-on-scroll delay-200 text-base sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed mb-10">
          Join thousands of believers for four transformative days of worship, prayer, biblical teaching, and spiritual renewal in Aba.
        </p>

        {/* REGISTER NOW Button */}
        <div className="reveal-on-scroll delay-250">
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm sm:text-base font-black tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-all hover:scale-105 shadow-2xl shadow-orange-950/60"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
