import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { BookOpen, Flame, HeartHandshake, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Biblical Truth & Sound Doctrine",
      desc: "Challenging believers to examine the scriptures daily, cultivate discernment, and stand immovable upon the unadulterated Word of God."
    },
    {
      icon: Flame,
      title: "Spiritual Awakening & Revival",
      desc: "Igniting hearts with passion for righteousness, fervent prayer, Holy Ghost deliverance, and divine encounters across the entire city of Aba."
    },
    {
      icon: HeartHandshake,
      title: "Unity & Christian Fellowship",
      desc: "Gathering ministers, families, and believers from every walk of life in one accord under the lordship of Jesus Christ."
    },
    {
      icon: Sparkles,
      title: "Transformation & Miracles",
      desc: "Experiencing the tangible power of God through salvation, healing of bodies, breakthrough for families, and lasting community impact."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-crusade-navy-950 via-crusade-navy-900 to-crusade-navy-950 relative overflow-hidden">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-crusade-royal-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crusade-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-royal-800/60 border border-crusade-royal-600/40 text-crusade-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-crusade-orange-500" />
            <span>Divine Gathering & Vision</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            ABOUT ABA CITYWIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 to-amber-400">CRUSADE 2026</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crusade-orange-500 to-crusade-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Deep Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-3xl bg-crusade-navy-900/80 border border-white/10 backdrop-blur-md shadow-xl relative">
              <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-5">
                The <strong className="text-white font-bold">{EVENT_DATA.name}</strong> is a divine gathering organized by the <span className="text-crusade-gold-300 font-semibold">{EVENT_DATA.organizer}</span> to bring people together in worship, prayer, biblical teaching, and spiritual renewal.
              </p>
              <p className="text-slate-300 leading-relaxed mb-5">
                Anchored on the theme <strong className="text-crusade-orange-400 font-bold tracking-wide uppercase">{EVENT_DATA.theme}</strong>, drawn from <span className="text-white font-semibold underline decoration-crusade-orange-500 underline-offset-4">{EVENT_DATA.scriptureReference}</span>, this gathering encourages believers and seekers alike to examine the Scriptures, embrace biblical truth, and develop a deeper understanding of God's Word.
              </p>
              <p className="text-slate-300 leading-relaxed">
                It promises to be a memorable encounter of faith, fellowship, spiritual enlightenment, and transformation for every family, leader, and resident across Aba and environs.
              </p>
            </div>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle className="w-5 h-5 text-crusade-orange-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Expository Bible Ministry</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle className="w-5 h-5 text-crusade-orange-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Special Ministers Conference</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle className="w-5 h-5 text-crusade-orange-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Massive Deliverance & Prayer</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle className="w-5 h-5 text-crusade-orange-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Free Open-Air Crusade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden border border-crusade-gold-500/30 shadow-2xl bg-crusade-navy-900">
              
              {/* Official Flyer Visual Preview */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src="/assets/crusade-flyer.jpg"
                  alt="Aba Citywide Crusade 2026 Artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950 via-crusade-navy-950/40 to-transparent" />
                
                {/* Floating Diocese Crest Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-crusade-navy-950/90 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <img src="/assets/diocese-logo.png" alt="Diocese Logo" className="w-8 h-10 object-contain" />
                  <div>
                    <p className="text-[10px] font-bold uppercase text-crusade-gold-400 leading-tight">Diocese of</p>
                    <p className="text-xs font-black text-white leading-tight">Aba Ngwa North</p>
                  </div>
                </div>

                {/* Overlaid Banner info */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-crusade-navy-950/95 border border-crusade-orange-500/40 backdrop-blur-md">
                  <span className="text-[11px] font-bold text-crusade-orange-400 uppercase tracking-widest block mb-0.5">
                    Official Event Reference
                  </span>
                  <p className="text-white font-extrabold text-sm sm:text-base leading-tight">
                    {EVENT_DATA.dates} • 4:00 PM Daily
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {EVENT_DATA.venue}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-b from-crusade-navy-900/60 to-crusade-navy-950/80 border border-white/5 hover:border-crusade-orange-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-crusade-orange-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-crusade-royal-700/30 border border-crusade-royal-600/40 flex items-center justify-center mb-5 group-hover:bg-crusade-orange-500/20 group-hover:border-crusade-orange-500/60 transition-colors">
                  <Icon className="w-6 h-6 text-crusade-gold-400 group-hover:text-crusade-orange-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-crusade-orange-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
