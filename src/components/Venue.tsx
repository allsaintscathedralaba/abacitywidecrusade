import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { MapPin, Navigation, Calendar, Clock, Car, ExternalLink, ShieldCheck } from 'lucide-react';

export const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-20 lg:py-28 bg-slate-900 border-t border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-crusade-orange-500" />
            <span>Event Grounds & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            WHERE THE <span className="text-crusade-orange-500">ENCOUNTER HAPPENS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Easily accessible open-air grounds prepared to host thousands of worshipers across Aba.
          </p>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Venue Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-crusade-navy-950 border border-white/10 shadow-2xl">
            <div>
              <span className="px-3 py-1 rounded-md bg-crusade-orange-600/20 text-crusade-orange-400 text-xs font-black uppercase tracking-wider inline-block mb-3">
                OFFICIAL VENUE
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4 leading-tight">
                {EVENT_DATA.venue}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <Calendar className="w-5 h-5 text-crusade-orange-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Crusade Dates</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">{EVENT_DATA.dates}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <Clock className="w-5 h-5 text-crusade-gold-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Crusade Timing</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">4:00 PM DAILY</span>
                    <span className="text-xs text-crusade-gold-400 block font-bold mt-0.5">
                      Ministers Conference: Sat. 5th Dec @ 9:00 AM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <Car className="w-5 h-5 text-crusade-royal-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Security & Parking</span>
                    <span className="text-sm font-semibold text-slate-200">
                      Organized parking, security coverage, and protocol teams on ground
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Central location easily reached from all districts in Aba</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Ample seating arrangements with designated protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free admission. Early arrival recommended for prime seating</span>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <a
              href={EVENT_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl bg-crusade-royal-600 hover:bg-crusade-royal-500 text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <Navigation className="w-4 h-4 text-crusade-orange-400" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Visual Stage Atmosphere + Interactive Google Map */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Visual Photo of Crusade Grounds Setting */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56 bg-crusade-navy-950 shadow-lg">
              <img
                src="/assets/crusade-stage.jpg"
                alt="Crusade Stage and Gathering"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crusade-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-white font-extrabold text-sm block">
                  Ngwa High School Playground, Aba
                </span>
                <span className="text-xs text-crusade-orange-400 font-bold">
                  Citywide Gathering Grounds
                </span>
              </div>
            </div>

            {/* Embedded Google Maps View */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[260px] bg-slate-950 shadow-xl">
              <iframe
                title="Google Map of Ngwa High School Aba"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Ngwa+High+School+Aba+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[260px] filter saturate-125 contrast-125"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
