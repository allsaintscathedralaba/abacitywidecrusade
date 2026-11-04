import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Calendar, Clock, MapPin, Award, ArrowRight, Users } from 'lucide-react';

export const Programme: React.FC = () => {
  const crusadeDays = [
    {
      day: "DAY 1",
      date: "Wednesday, 2nd December 2026",
      time: "4:00 PM Daily",
      sessionTitle: "Crusade Opening Rally & Spiritual Awakening",
      summary: "Mass gathering of believers across Aba for fervent worship, spiritual revival, and expository preaching of the Word.",
      badge: "Opening Night"
    },
    {
      day: "DAY 2",
      date: "Thursday, 3rd December 2026",
      time: "4:00 PM Daily",
      sessionTitle: "Word Exposition & Divine Healing Encounter",
      summary: "Deep examination of Biblical truth, intensive intercession, healing of the sick, and breaking of spiritual yokes.",
      badge: "Faith & Healing"
    },
    {
      day: "DAY 3",
      date: "Friday, 4th December 2026",
      time: "4:00 PM Daily",
      sessionTitle: "Holy Ghost Revival & Citywide Salvation",
      summary: "Mass salvation call, prophetic prayer for the peace of Aba city, and personal spiritual breakthroughs.",
      badge: "Holy Ghost Night"
    },
    {
      day: "DAY 4",
      date: "Saturday, 5th December 2026",
      time: "4:00 PM Daily",
      sessionTitle: "Grand Finale & Apostolic Impartation",
      summary: "The glorious climax of the 2026 crusade, corporate Thanksgiving, overflow anointing, and commissioning.",
      badge: "Grand Climax"
    }
  ];

  return (
    <section id="programme" className="py-20 lg:py-28 bg-slate-900 border-t border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-royal-600/10 border border-crusade-royal-500/30 text-crusade-royal-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4 text-crusade-orange-500" />
            <span>Event Itinerary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            FOUR DAYS OF <span className="text-crusade-orange-500">DIVINE ENCOUNTER</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Daily open-air revival gatherings at Ngwa High School Playground, Aba. Free and open to all.
          </p>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Days Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {crusadeDays.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-crusade-navy-950 border border-white/10 hover:border-crusade-orange-500 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-crusade-orange-600 text-white">
                    {item.day}
                  </span>
                  <span className="text-[11px] font-bold text-crusade-gold-400 uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-crusade-orange-400 transition-colors">
                  {item.sessionTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Calendar className="w-4 h-4 text-crusade-orange-400 flex-shrink-0" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-crusade-gold-400 font-bold">
                  <Clock className="w-4 h-4 text-crusade-gold-400 flex-shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="truncate">Ngwa High School, Aba</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DISTINCT HIGHLIGHTED SECTION: MINISTERS CONFERENCE */}
        <div className="rounded-3xl overflow-hidden border-2 border-crusade-gold-500 bg-crusade-navy-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Column with Ministers Conference Photo */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
              <img
                src="/assets/ministers-auditorium.jpg"
                alt="Ministers and Church Leaders in Conference"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-crusade-navy-950 via-crusade-navy-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-crusade-gold-500 text-crusade-navy-950 text-xs font-black uppercase tracking-wider shadow">
                  SPECIAL SESSION
                </span>
              </div>
            </div>

            {/* Conference Details */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-crusade-gold-400 text-xs font-extrabold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Leadership Impartation & Strategy</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {EVENT_DATA.ministersConference.title}
              </h3>

              <p className="text-slate-200 text-base leading-relaxed">
                {EVENT_DATA.ministersConference.description}
              </p>

              {/* Time & Date Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Date</span>
                  <span className="text-sm font-extrabold text-white">{EVENT_DATA.ministersConference.date}</span>
                </div>
                <div className="p-3 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Morning Time</span>
                  <span className="text-sm font-extrabold text-crusade-orange-400">{EVENT_DATA.ministersConference.time}</span>
                </div>
                <div className="p-3 rounded-xl bg-crusade-navy-900 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Venue</span>
                  <span className="text-sm font-extrabold text-white">Ngwa High School</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={EVENT_DATA.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-crusade-gold-500 hover:bg-crusade-gold-400 text-crusade-navy-950 font-black text-sm uppercase tracking-wider transition-colors shadow-lg"
                >
                  <Users className="w-4 h-4 text-crusade-navy-950" />
                  <span>Register for Ministers Conference</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400">
                  Open to all pastors, evangelists & church workers.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
