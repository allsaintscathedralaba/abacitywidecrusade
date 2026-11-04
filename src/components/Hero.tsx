import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Shield, Flame, Eye } from 'lucide-react';

interface HeroProps {
  onOpenFlyer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFlyer }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-crusade-navy-950 via-crusade-navy-900 to-crusade-navy-950">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-luminosity filter blur-[1px]"
          style={{ backgroundImage: `url('/assets/worship-crowd.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crusade-navy-950 via-crusade-navy-950/90 to-crusade-navy-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Event Credentials & Heading */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Organizing Body Crest Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-crusade-gold-500/40 backdrop-blur-md">
              <img src="/assets/diocese-logo.png" alt="Crest" className="w-5 h-6 object-contain" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crusade-gold-400">
                {EVENT_DATA.organizer}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <span className="text-crusade-orange-500 font-extrabold text-sm sm:text-base uppercase tracking-widest block">
                ANNUAL SPIRITUAL HARVEST & REVIVAL
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
                ABA CITYWIDE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-crusade-orange-400">
                  CRUSADE 2026
                </span>
              </h1>
            </div>

            {/* Divine Theme Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-crusade-orange-600/15 border-2 border-crusade-orange-500/50 backdrop-blur-md">
              <div className="flex items-center gap-2 text-crusade-orange-400 text-xs font-bold uppercase tracking-widest mb-1">
                <Flame className="w-4 h-4 fill-crusade-orange-500" />
                <span>OFFICIAL THEME</span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
                &ldquo;{EVENT_DATA.theme}&rdquo;
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-crusade-navy-950 text-crusade-gold-400 text-xs font-extrabold uppercase tracking-wider border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-crusade-orange-400" />
                <span>BIBLE REFERENCE: {EVENT_DATA.scriptureReference}</span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Join thousands of believers for four powerful days of worship, prayer, biblical teaching, and spiritual awakening in Aba.
            </p>

            {/* Event Key Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                <div className="flex items-center gap-2 text-crusade-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </div>
                <div className="text-sm font-extrabold text-white">{EVENT_DATA.dates}</div>
                <div className="text-[11px] text-slate-300">4 Days Encounter</div>
              </div>

              <div className="p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                <div className="flex items-center gap-2 text-crusade-royal-500 text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Daily Time</span>
                </div>
                <div className="text-sm font-extrabold text-white">4:00 PM DAILY</div>
                <div className="text-[11px] text-crusade-gold-400 font-semibold">Ministers Conf: Sat 9AM</div>
              </div>

              <div className="p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                <div className="flex items-center gap-2 text-crusade-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Venue</span>
                </div>
                <div className="text-sm font-extrabold text-white leading-tight">NGWA HIGH SCHOOL</div>
                <div className="text-[11px] text-slate-300">Playground, Aba</div>
              </div>
            </div>

            {/* Live Countdown Timer */}
            <div className="pt-2">
              <CountdownTimer />
            </div>

            {/* Two Primary CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold tracking-wider text-white uppercase rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 shadow-xl shadow-crusade-orange-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>REGISTER NOW (FREE SEAT)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#programme"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold tracking-wider text-white uppercase rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
              >
                <span>EXPLORE PROGRAMME</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition with Photos of Worship & The Ministers */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Featured Image: Crusade Worship Atmosphere */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-crusade-navy-900 group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/worship-crowd.jpg"
                  alt="Believers gathered in worship at crusade"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950 via-crusade-navy-950/30 to-transparent" />
              
              {/* Badge on Image */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-crusade-navy-950/90 border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Citywide Revival Encounter</span>
              </div>

              {/* Bottom Label on Image */}
              <div className="absolute bottom-4 inset-x-4">
                <h3 className="text-white font-extrabold text-base leading-tight">
                  Worship, Miracles & Spiritual Renewal
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Ngwa High School Playground, Aba • 2nd - 5th December 2026
                </p>
              </div>
            </div>

            {/* Overlaid Card: Authentic Ministers from Flyer */}
            <div className="p-5 rounded-2xl bg-crusade-navy-900 border-2 border-crusade-gold-500/40 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crusade-gold-400">
                  <Shield className="w-4 h-4 text-crusade-orange-500" />
                  <span>Featured Ministers</span>
                </div>
                <button
                  onClick={onOpenFlyer}
                  className="text-xs text-crusade-orange-400 hover:text-crusade-orange-300 font-bold flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Flyer</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Guest Speaker */}
                <div className="p-3 rounded-xl bg-crusade-navy-950 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-20 h-24 rounded-lg overflow-hidden border border-crusade-orange-500/50 mb-2 shadow">
                    <img
                      src="/assets/speaker-iyke-egbuonu.jpg"
                      alt="The Rt. Rev. Dr. Iyke J. Egbuonu"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase text-crusade-orange-400 leading-tight">
                    Guest Speaker
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 leading-snug">
                    Rt. Rev&apos;d Dr. Iyke J. Egbuonu
                  </span>
                </div>

                {/* Host */}
                <div className="p-3 rounded-xl bg-crusade-navy-950 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-20 h-24 rounded-lg overflow-hidden border border-crusade-royal-500/50 mb-2 shadow">
                    <img
                      src="/assets/host-nathan-kanu.jpg"
                      alt="The Rt. Rev. Nathan C. O. Kanu JP, PhD"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase text-crusade-royal-400 leading-tight">
                    Host Bishop
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 leading-snug">
                    Rt. Rev&apos;d Nathan C. O. Kanu JP, PhD.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
