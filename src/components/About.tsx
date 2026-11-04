import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { BookOpen, Flame, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const visualGallery = [
    {
      img: '/assets/worship-crowd.jpg',
      title: 'Passionate Mass Worship',
      caption: 'Gathering thousands in heartfelt praise and spiritual renewal in Aba.'
    },
    {
      img: '/assets/bible-study.jpg',
      title: 'Sound Biblical Teaching',
      caption: 'Examining the Scriptures daily to understand God’s immutable truth.'
    },
    {
      img: '/assets/prayer-hands.jpg',
      title: 'Fervent Prayer & Healing',
      caption: 'Interceding for families, the sick, and spiritual revival across the land.'
    },
    {
      img: '/assets/ministers-auditorium.jpg',
      title: 'Ministers & Leaders Impartation',
      caption: 'Special Saturday morning conference equipping Christian leaders.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900 border-t border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-500 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Divine Mandate & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            ABOUT ABA CITYWIDE <span className="text-crusade-orange-500">CRUSADE 2026</span>
          </h2>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Visual Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
              The <strong className="text-crusade-orange-400 font-extrabold">{EVENT_DATA.name}</strong> is a divine gathering organized by the <strong className="text-crusade-gold-400 font-bold">{EVENT_DATA.organizer}</strong> to bring people together in worship, prayer, biblical teaching, and spiritual renewal.
            </p>

            <p className="leading-relaxed">
              Anchored on the theme <strong className="text-white font-bold">{EVENT_DATA.theme}</strong>, drawn from <span className="text-crusade-orange-400 font-bold underline decoration-crusade-orange-500 underline-offset-4">{EVENT_DATA.scriptureReference}</span>, this gathering encourages believers and seekers alike to examine the Scriptures, embrace biblical truth, and develop a deeper understanding of God&apos;s Word.
            </p>

            <p className="leading-relaxed">
              It promises to be a memorable encounter of faith, fellowship, spiritual enlightenment, and transformation for every attendee across Abia State and beyond.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>4 Days of Holy Ghost Power</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Special Ministers Conference</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Sound Biblical Teaching</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>100% Free Open-Air Admission</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-crusade-royal-600 hover:bg-crusade-royal-500 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow"
              >
                <span>Reserve Your Free Seat Now</span>
              </a>
            </div>
          </div>

          {/* Photographic 4-Card Grid Demonstrating the Event */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {visualGallery.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-crusade-navy-900 shadow-lg flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="p-3.5 bg-crusade-navy-950 flex-1 flex flex-col justify-between">
                  <h3 className="text-white font-bold text-sm leading-tight mb-1 group-hover:text-crusade-orange-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {card.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Core Ministry Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-orange-500/20 text-crusade-orange-400 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Biblical Truth</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Grounding faith in the unadulterated Scriptures and sound Christian doctrine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-royal-600/20 text-crusade-royal-400 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Spiritual Revival</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Igniting passion for prayer, righteousness, and the moving of the Holy Spirit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-crusade-gold-500/20 text-crusade-gold-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fellowship</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Uniting believers, ministers, and families in common faith across Aba city.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-crusade-navy-900 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Transformation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Experiencing divine healings, miracles, deliverances, and personal breakthroughs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
