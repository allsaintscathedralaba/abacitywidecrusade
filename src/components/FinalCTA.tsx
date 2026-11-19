import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight, Share2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Join thousands of believers at the ABA CITYWIDE CRUSADE 2026!\n` +
      `Theme: THINK BEFORE YOU BELIEVE (Acts 17:11)\n` +
      `Date: 2nd - 5th December 2026 • 4:00 PM Daily\n` +
      `Venue: Ngwa High School Playground, Aba\n\n` +
      `Register for free: ${EVENT_DATA.registrationUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-28 sm:py-36 bg-slate-950 text-white font-sans overflow-hidden border-t border-white/10">
      
      {/* Background with subtle crowd atmosphere */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter contrast-125"
          style={{ backgroundImage: `url('/assets/worship-crowd.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-500 mb-4">
          Aba Citywide Revival Mandate
        </div>

        {/* Compelling Headline as requested */}
        <h2 className="reveal-on-scroll delay-100 text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-6">
          YOUR CITY. <br />
          <span className="text-white">ONE ALTAR. </span>
          <span className="text-orange-500">ONE ENCOUNTER.</span>
        </h2>

        {/* Brief Invitation */}
        <p className="reveal-on-scroll delay-150 text-base sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mb-10">
          Four days of uncompromised biblical truth, fervent worship, and spiritual renewal await you at Ngwa High School Playground, Aba. Make plans to attend and invite your loved ones.
        </p>

        {/* Action Button & Share */}
        <div className="reveal-on-scroll delay-200 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-all hover:scale-[1.02] shadow-xl"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
          >
            <Share2 className="w-4 h-4 text-emerald-400" />
            <span>Invite Friends & Family</span>
          </button>
        </div>

        <div className="reveal-on-scroll delay-250 mt-10 text-xs uppercase tracking-widest text-slate-400">
          {EVENT_DATA.dates} • 4:00 PM Daily • Free Admission
        </div>

      </div>
    </section>
  );
};
