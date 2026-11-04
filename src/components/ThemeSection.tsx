import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { BookOpen, Sparkles, Compass, Lightbulb } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  return (
    <section id="theme" className="py-24 relative overflow-hidden bg-crusade-navy-950">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-crusade-royal-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-crusade-orange-500/10 rounded-full blur-[130px] pointer-events-none" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>THE DIVINE THEME & MANDATE</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[1.05] drop-shadow-xl">
            THINK <span className="text-slate-400 font-light">BEFORE</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 via-crusade-orange-500 to-amber-300">
              YOU BELIEVE
            </span>
          </h2>

          <div className="mt-4 inline-flex items-center gap-3 text-lg sm:text-2xl font-display font-bold text-crusade-gold-300">
            <span className="w-8 h-[2px] bg-crusade-gold-400 hidden sm:inline-block" />
            <span>{EVENT_DATA.scriptureReference}</span>
            <span className="w-8 h-[2px] bg-crusade-gold-400 hidden sm:inline-block" />
          </div>
        </div>

        {/* Biblical Exposition Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-crusade-navy-900/90 via-crusade-royal-950/80 to-crusade-navy-950/90 border border-crusade-gold-500/30 backdrop-blur-xl shadow-2xl">
            
            {/* Top quote mark */}
            <div className="text-crusade-orange-500/30 font-display text-8xl leading-none select-none absolute top-4 left-6 pointer-events-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10 text-center">
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-slate-100 font-semibold italic leading-relaxed mb-6">
                &ldquo;{EVENT_DATA.scriptureVerse}&rdquo;
              </p>
              <cite className="block text-sm sm:text-base font-bold uppercase tracking-widest text-crusade-gold-400 not-italic">
                — {EVENT_DATA.scriptureReference} (King James Version)
              </cite>
            </blockquote>

            <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              In an age of sensational claims and spiritual deception, the Word of God calls believers to noble discernment. Genuine Christian faith is not blind gullibility—it is rooted deeply in the living truth of the Scriptures.
            </div>
          </div>
        </div>

        {/* 3 Theological Pillars of the Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-crusade-navy-900/50 border border-white/10 hover:border-crusade-orange-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-crusade-orange-500/20 border border-crusade-orange-500/40 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-crusade-orange-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Daily Examination of Scripture
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Like the Berean believers praised in Acts 17:11, we must test every teaching against God's eternal Word. True spiritual nobility begins when personal Bible study anchors our daily walk.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-crusade-navy-900/50 border border-white/10 hover:border-crusade-royal-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-crusade-royal-600/20 border border-crusade-royal-500/40 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-crusade-royal-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Spiritual Discernment
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Thinking before believing protects the flock of Christ from false doctrines, manipulation, and empty promises, establishing believers in genuine righteousness and peace.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-crusade-navy-900/50 border border-white/10 hover:border-crusade-gold-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-crusade-gold-500/20 border border-crusade-gold-500/40 flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-crusade-gold-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Unshakable Conviction
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Faith born out of reasoned understanding and deep encounter with Christ withstands every trial. Discover how to build a resilient life upon the Solid Rock.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
