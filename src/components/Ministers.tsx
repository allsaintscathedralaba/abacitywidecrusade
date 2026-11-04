import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Shield, Sparkles, BookOpen } from 'lucide-react';

export const Ministers: React.FC = () => {
  return (
    <section id="ministers" className="py-20 lg:py-28 bg-crusade-navy-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-4 h-4 text-crusade-orange-500" />
            <span>Episcopal Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            MEET OUR <span className="text-crusade-orange-500">MINISTERS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Anointed servants of God ministering the Word of truth and power at the 2026 crusade.
          </p>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2 Ministers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EVENT_DATA.ministers.map((minister, idx) => {
            const isGuest = minister.role.includes("Guest");
            return (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-crusade-navy-900 border-2 border-white/10 hover:border-crusade-orange-500/60 shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Top Badge Banner */}
                <div className="px-6 py-4 bg-crusade-navy-950 border-b border-white/10 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      isGuest
                        ? 'bg-crusade-orange-600 text-white'
                        : 'bg-crusade-royal-600 text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{minister.designation}</span>
                  </span>

                  <span className="text-xs font-bold text-crusade-gold-400">
                    Anglican Communion
                  </span>
                </div>

                {/* Portrait and Content */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  
                  {/* Portrait Frame */}
                  <div className="w-40 h-48 sm:w-44 sm:h-52 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-crusade-gold-500/50 shadow-xl bg-crusade-navy-950">
                    <img
                      src={minister.image}
                      alt={minister.name}
                      className="w-full h-full object-cover object-top img-zoom"
                    />
                  </div>

                  {/* Minister Bio and Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-xs font-bold text-crusade-gold-400 uppercase tracking-wider block mb-1">
                      {minister.honorific}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight mb-2 group-hover:text-crusade-orange-400 transition-colors">
                      {minister.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-4 bg-white/5 px-2.5 py-1 rounded-md">
                      <BookOpen className="w-3.5 h-3.5 text-crusade-orange-400" />
                      <span>{minister.title}</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {minister.bio}
                    </p>
                  </div>

                </div>

                {/* Bottom Card Footer */}
                <div className="mt-auto px-6 py-3 bg-crusade-navy-950/80 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Aba Citywide Crusade 2026</span>
                  <span className="text-white font-bold">{EVENT_DATA.dates}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
