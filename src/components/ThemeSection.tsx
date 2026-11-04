import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { BookOpen, Search, Compass, CheckCircle2 } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  return (
    <section id="theme" className="py-20 lg:py-28 bg-crusade-navy-950 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Biblical Inspiration & Mandate</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            THE EVENT THEME
          </h2>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Big Visual Exposition Banner with Bible Imagery */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-crusade-navy-900 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Column with High-Resolution Bible Study Photo */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
              <img
                src="/assets/bible-study.jpg"
                alt="Open Holy Bible Scriptures"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-crusade-navy-950/90 via-crusade-navy-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-md bg-crusade-orange-600 text-white text-xs font-extrabold uppercase tracking-wider inline-block mb-2">
                  Acts 17:11 (KJV)
                </span>
                <p className="text-white text-sm font-medium italic">
                  &ldquo;...in that they received the word with all readiness of mind, and searched the scriptures daily...&rdquo;
                </p>
              </div>
            </div>

            {/* Exposition Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              
              <div className="space-y-2">
                <span className="text-crusade-orange-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
                  CRUSADE KEYNOTE THEME
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  THINK BEFORE <br />
                  <span className="text-crusade-orange-500">YOU BELIEVE</span>
                </h3>
                <div className="text-xl sm:text-2xl font-black text-crusade-gold-400">
                  {EVENT_DATA.scriptureReference}
                </div>
              </div>

              {/* Full Scripture Verse */}
              <div className="p-5 rounded-2xl bg-crusade-navy-950 border border-white/10">
                <p className="text-slate-100 text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{EVENT_DATA.scriptureVerse}&rdquo;
                </p>
                <cite className="block text-xs font-bold text-crusade-orange-400 uppercase tracking-wider mt-2 not-italic">
                  — Acts 17:11
                </cite>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                In an era filled with contradictory voices and shifting cultural narratives, the Word of God calls believers to noble discernment. Christian faith is neither blind nor impulsive—it is anchored on the rock-solid, examined truth of God&apos;s eternal Scriptures.
              </p>

              <div className="space-y-2.5 pt-1 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Examine the Scriptures with readiness of heart and mind</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Reject falsehood and embrace authentic biblical truth</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Build unshakeable personal faith upon God’s immutable promises</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Actionable Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-orange-500/20 text-crusade-orange-400 flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">1. Noble Examination</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cultivating the Berean habit of verifying teachings through personal, daily engagement with the Bible.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-royal-600/20 text-crusade-royal-400 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">2. Spiritual Discernment</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Protecting hearts and homes from doctrinal deception and spiritual manipulation in today&apos;s world.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-gold-500/20 text-crusade-gold-400 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">3. Unshakeable Conviction</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Developing a mature, rooted conviction that stands triumphant through life&apos;s tribulations and doubts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
