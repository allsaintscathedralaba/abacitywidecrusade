import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Award, Shield, Sparkles, BookOpen } from 'lucide-react';

export const Ministers: React.FC = () => {
  return (
    <section id="ministers" className="py-24 bg-crusade-navy-950 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-crusade-royal-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4" />
            <span>Spiritual Leadership & Ministry</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 to-amber-400">MINISTERS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Seasoned vessels of God, anointed for sound biblical exposition, apostolic wisdom, and spiritual breakthrough.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-crusade-orange-500 to-crusade-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Featured Minister Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {EVENT_DATA.ministers.map((minister, idx) => {
            const isGuest = minister.role.includes("Guest");
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-crusade-navy-900/90 to-crusade-navy-950/90 border border-white/10 hover:border-crusade-orange-500/50 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Top Role Badge */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
                      isGuest
                        ? 'bg-crusade-orange-500/20 text-crusade-orange-400 border border-crusade-orange-500/40'
                        : 'bg-crusade-royal-600/20 text-crusade-royal-400 border border-crusade-royal-500/40'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{minister.designation}</span>
                  </span>

                  <span className="text-xs font-semibold text-crusade-gold-400/80 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Anglican Episcopate</span>
                  </span>
                </div>

                {/* Portrait Layout */}
                <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  
                  {/* Portrait Frame */}
                  <div className="relative w-44 h-52 sm:w-48 sm:h-56 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-crusade-gold-500/40 shadow-xl bg-crusade-navy-950">
                    <img
                      src={minister.image}
                      alt={minister.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950/80 via-transparent to-transparent" />
                  </div>

                  {/* Minister Bio and Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-xs font-bold text-crusade-gold-400 uppercase tracking-widest mb-1">
                      {minister.honorific}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight mb-2 group-hover:text-crusade-orange-300 transition-colors">
                      {minister.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-4 flex items-center justify-center sm:justify-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-crusade-orange-400" />
                      <span>{minister.title}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {minister.bio}
                    </p>
                  </div>

                </div>

                {/* Card Bottom Accent */}
                <div className="mt-auto px-6 py-3.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Aba Citywide Crusade 2026</span>
                  <span className="text-crusade-gold-400 font-semibold">{EVENT_DATA.dates}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
