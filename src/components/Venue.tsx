import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { MapPin, Navigation, Calendar, Clock, Car, ShieldAlert, CheckCircle, ExternalLink } from 'lucide-react';

export const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-24 bg-gradient-to-b from-crusade-navy-950 via-crusade-navy-900 to-crusade-navy-950 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-crusade-royal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-royal-800/60 border border-crusade-royal-600/40 text-crusade-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4 text-crusade-orange-500" />
            <span>Crusade Grounds & Location</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            WHERE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 to-amber-400">ENCOUNTER HAPPENS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Join thousands of worshipers at this historic venue in the heart of Aba, Abia State.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-crusade-orange-500 to-crusade-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Venue Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-crusade-navy-900/90 to-crusade-navy-950/90 border border-white/10 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crusade-orange-500/15 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Official Crusade Venue</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-black text-white uppercase mb-4 leading-tight">
                {EVENT_DATA.venue}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Calendar className="w-5 h-5 text-crusade-orange-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Dates</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">{EVENT_DATA.dates}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Clock className="w-5 h-5 text-crusade-gold-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Main Crusade Time</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">{EVENT_DATA.dailyTime}</span>
                    <span className="text-xs text-crusade-gold-400 block font-medium mt-0.5">Ministers Conference: Sat. 5th Dec @ 9:00 AM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Car className="w-5 h-5 text-crusade-royal-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Access & Parking</span>
                    <span className="text-sm font-semibold text-slate-200">Spacious playground with organized parking & ushering protocol</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Central accessibility across Aba metropolis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Adequate security arrangements by diocesan protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Early arrival recommended for prime seating</span>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <a
              href={EVENT_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-crusade-royal-600 via-crusade-royal-700 to-crusade-navy-800 hover:from-crusade-royal-500 hover:to-crusade-royal-600 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-crusade-royal-700/40 border border-crusade-royal-500/50 transition-all hover:scale-[1.01]"
            >
              <Navigation className="w-5 h-5 text-crusade-orange-400" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Interactive Map Preview Card */}
          <div className="lg:col-span-6 flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-crusade-navy-900/80">
            
            {/* Map Frame / Search Visualization */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] bg-slate-900 overflow-hidden">
              <iframe
                title="Google Maps Ngwa High School Aba"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Ngwa+High+School+Aba+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full filter saturate-150 contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              />

              {/* Floating Map Label Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-crusade-navy-950/95 border border-crusade-orange-500/40 backdrop-blur-md shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-crusade-orange-500 animate-ping" />
                  <span className="text-xs font-black uppercase text-white">Event Venue</span>
                </div>
                <p className="text-xs text-crusade-gold-300 font-bold">Ngwa High School Playground</p>
                <p className="text-[11px] text-slate-300">Aba, Abia State, Nigeria</p>
              </div>

              {/* Quick direct overlay button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={EVENT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-crusade-navy-950/90 hover:bg-crusade-navy-900 border border-white/20 text-xs font-bold text-white shadow-lg backdrop-blur-md transition-colors"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-crusade-orange-400" />
                </a>
              </div>
            </div>

            {/* Advisory footer */}
            <div className="p-4 bg-crusade-navy-950/90 border-t border-white/5 flex items-center gap-3 text-xs text-slate-300">
              <ShieldAlert className="w-4 h-4 text-crusade-gold-400 flex-shrink-0" />
              <span>Free entry for all attendees. Directional signposts will be mounted along major access roads in Aba.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
