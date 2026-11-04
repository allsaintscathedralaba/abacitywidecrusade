import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown, CheckCircle2, Flame, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenFlyer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFlyer }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Background Graphic Layers */}
      <div className="absolute inset-0 z-0">
        {/* Stadium & Crusade Atmosphere overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transform mix-blend-luminosity filter blur-[1px]"
          style={{ backgroundImage: `url('/assets/crusade-stadium-bg.jpg')` }}
        />
        {/* Gradient overlays matching Brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-crusade-navy-950/95 via-crusade-navy-900/90 to-crusade-navy-950" />
        <div className="absolute inset-0 bg-radial-gradient from-crusade-royal-600/20 via-transparent to-transparent" />
        
        {/* Ambient light glow spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crusade-royal-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-crusade-orange-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-crusade-gold-500/10 rounded-full blur-[90px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Organizing Body Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-crusade-gold-500/30 backdrop-blur-md mb-6 animate-fadeIn">
          <img src="/assets/diocese-logo.png" alt="Crest" className="w-5 h-6 object-contain" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-crusade-gold-300 uppercase">
            {EVENT_DATA.organizer}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-crusade-orange-500 animate-ping hidden sm:inline-block" />
        </div>

        {/* Main Event Name */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl leading-[1.05]">
          <span className="block text-slate-100">ABA CITYWIDE</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            CRUSADE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 via-crusade-orange-500 to-amber-400 font-extrabold italic">2026</span>
          </span>
        </h1>

        {/* Theme Highlight Card */}
        <div className="mt-8 mb-6 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-crusade-navy-900/90 via-crusade-royal-900/60 to-crusade-navy-900/90 border border-crusade-royal-500/40 backdrop-blur-xl shadow-2xl max-w-3xl w-full">
          <div className="flex items-center justify-center gap-2 text-crusade-orange-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-1">
            <Flame className="w-4 h-4 fill-crusade-orange-500" />
            <span>DIVINE THEME</span>
          </div>
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow">
            &ldquo;{EVENT_DATA.theme}&rdquo;
          </div>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crusade-orange-600/20 border border-crusade-orange-500/40 text-crusade-orange-300 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BIBLE REFERENCE: {EVENT_DATA.scriptureReference}</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Join thousands of believers for four powerful days of worship, prayer, biblical teaching, and spiritual awakening in Aba.
        </p>

        {/* Key Event Badges: Date, Time, Venue */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl w-full mb-10 text-left">
          
          {/* Date Badge */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gradient-to-br from-crusade-navy-900/80 to-crusade-navy-950/80 border border-crusade-orange-500/30 backdrop-blur-sm shadow-md group hover:border-crusade-orange-500 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-crusade-orange-500/20 border border-crusade-orange-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-crusade-orange-500 transition-colors">
              <Calendar className="w-6 h-6 text-crusade-orange-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Event Date</span>
              <span className="text-sm sm:text-base font-extrabold text-white block">{EVENT_DATA.dates}</span>
              <span className="text-[11px] text-crusade-orange-400 font-semibold">4 Days of Power</span>
            </div>
          </div>

          {/* Time Badge */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gradient-to-br from-crusade-navy-900/80 to-crusade-navy-950/80 border border-crusade-royal-600/30 backdrop-blur-sm shadow-md group hover:border-crusade-royal-500 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-crusade-royal-600/20 border border-crusade-royal-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-crusade-royal-600 transition-colors">
              <Clock className="w-6 h-6 text-crusade-royal-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Daily Schedule</span>
              <span className="text-sm sm:text-base font-extrabold text-white block">DAILY BY 4:00 PM</span>
              <span className="text-[11px] text-crusade-gold-400 font-semibold">Ministers Conf: Sat 9:00 AM</span>
            </div>
          </div>

          {/* Venue Badge */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gradient-to-br from-crusade-navy-900/80 to-crusade-navy-950/80 border border-crusade-gold-500/30 backdrop-blur-sm shadow-md group hover:border-crusade-gold-500 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-crusade-gold-500/20 border border-crusade-gold-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-crusade-gold-500 transition-colors">
              <MapPin className="w-6 h-6 text-crusade-gold-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Crusade Venue</span>
              <span className="text-sm sm:text-base font-extrabold text-white block leading-snug">NGWA HIGH SCHOOL</span>
              <span className="text-[11px] text-slate-300 font-semibold">Playground, Aba</span>
            </div>
          </div>

        </div>

        {/* Live Countdown Timer */}
        <div className="w-full mb-10">
          <CountdownTimer />
        </div>

        {/* Call to Actions (Two Prominent CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-xl">
          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold tracking-wide text-white uppercase rounded-2xl bg-gradient-to-r from-crusade-orange-600 via-crusade-orange-500 to-amber-500 hover:from-crusade-orange-500 hover:to-amber-400 shadow-2xl shadow-crusade-orange-600/40 hover:shadow-crusade-orange-500/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wide text-slate-100 uppercase rounded-2xl bg-crusade-navy-900/90 hover:bg-crusade-navy-800 border border-slate-700/60 hover:border-crusade-gold-400/50 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE EVENT</span>
            <ChevronDown className="w-4 h-4 text-crusade-gold-400" />
          </a>
        </div>

        {/* Quick Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Admission & Open To All
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sound Biblical Expository Teaching
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Special Ministers Conference
          </span>
          <button
            onClick={onOpenFlyer}
            className="text-xs text-crusade-orange-400 hover:text-crusade-orange-300 underline font-semibold ml-2 cursor-pointer"
          >
            Click to view full flyer
          </button>
        </div>

      </div>

      {/* Decorative Bottom Curve Divider */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-crusade-navy-950 to-transparent pointer-events-none" />
    </section>
  );
};
