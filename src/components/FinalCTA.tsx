import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-44 bg-slate-950 font-sans text-white overflow-hidden border-t border-white/10">
      
      {/* Impactful Full-Width Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/worship-hands-raised.jpg"
          alt="Hands raised in praise at crusade"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-400 mb-4">
          Reserve Your Seat • Free Admission
        </div>

        {/* Short Statement as specified */}
        <h2 className="reveal-on-scroll delay-100 text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-6">
          BE PART OF THIS <br />
          <span className="text-orange-500">DIVINE ENCOUNTER.</span>
        </h2>

        {/* Brief Supporting Line */}
        <p className="reveal-on-scroll delay-150 text-base sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed mb-10">
          Four days of uncompromised biblical truth, fervent worship, and spiritual renewal await you at Ngwa High School Playground, Aba.
        </p>

        {/* Prominent REGISTER NOW Button (Redirects to EventRally) */}
        <div className="reveal-on-scroll delay-200">
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

        <div className="reveal-on-scroll delay-250 mt-10 text-xs uppercase tracking-widest text-slate-400">
          {EVENT_DATA.dates} • 4:00 PM Daily • Ngwa High School Playground, Aba
        </div>

      </div>
    </section>
  );
};
