import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Calendar, Clock, MapPin, Users, Award, ArrowUpRight } from 'lucide-react';

export const Programme: React.FC = () => {
  const mainCrusadeDays = [
    {
      day: "DAY 1",
      date: "Wednesday, 2nd December 2026",
      time: "4:00 PM",
      title: "Opening Crusade Rally",
      desc: "Mass gathering of believers across Aba for explosive praise, spiritual awakening, and expository preaching of God's Word.",
      badge: "Opening Night"
    },
    {
      day: "DAY 2",
      date: "Thursday, 3rd December 2026",
      time: "4:00 PM",
      title: "Word & Power Encounter",
      desc: "Deep dive into biblical truth, healing of the sick, deliverance, and divine breakthroughs for families and youths.",
      badge: "Miracle Service"
    },
    {
      day: "DAY 3",
      date: "Friday, 4th December 2026",
      time: "4:00 PM",
      title: "Holy Ghost Revival & Salvation",
      desc: "A night of intensive intercession, soul winning, Holy Ghost baptism, and spiritual realignment for the city of Aba.",
      badge: "Revival Encounter"
    },
    {
      day: "DAY 4",
      date: "Saturday, 5th December 2026",
      time: "4:00 PM",
      title: "Grand Crusade Finale & Overflow",
      desc: "The glorious climax of the crusade. Prophetic blessing, commissioning, corporate Thanksgiving, and apostolic impartation.",
      badge: "Grand Climax"
    }
  ];

  return (
    <section id="programme" className="py-24 bg-gradient-to-b from-crusade-navy-950 via-crusade-navy-900 to-crusade-navy-950 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-crusade-royal-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-crusade-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-royal-800/60 border border-crusade-royal-600/40 text-crusade-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar className="w-4 h-4 text-crusade-orange-500" />
            <span>Event Itinerary</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            FOUR DAYS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 to-amber-400">DIVINE ENCOUNTER</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Daily open-air crusade services at Ngwa High School Playground, Aba. Free admission for all believers, families, and seekers.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-crusade-orange-500 to-crusade-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Days Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainCrusadeDays.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-6 bg-gradient-to-b from-crusade-navy-900/90 to-crusade-navy-950/90 border border-white/10 hover:border-crusade-orange-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {/* Day badge top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-crusade-orange-500/20 text-crusade-orange-400 border border-crusade-orange-500/40 group-hover:bg-crusade-orange-500 group-hover:text-white transition-colors">
                    {item.day}
                  </span>
                  <span className="text-[11px] font-semibold text-crusade-gold-400/90 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-white mb-2 group-hover:text-crusade-orange-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Time & Venue Footer info */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-crusade-gold-300 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-crusade-orange-400 flex-shrink-0" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <Clock className="w-3.5 h-3.5 text-crusade-orange-400 flex-shrink-0" />
                  <span>{item.time} Daily</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">Ngwa High School, Aba</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SPECIAL HIGHLIGHTED SECTION: MINISTERS CONFERENCE */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-crusade-gold-500/40 bg-gradient-to-r from-crusade-navy-900 via-crusade-royal-950 to-crusade-navy-900 shadow-2xl p-8 sm:p-12">
          
          {/* Subtle Glow Effects */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-crusade-gold-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-crusade-orange-600/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-gold-500/20 border border-crusade-gold-500/50 text-crusade-gold-300 text-xs font-extrabold uppercase tracking-widest">
                <Award className="w-4 h-4 text-crusade-gold-400" />
                <span>Special Programme Spotlight</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                {EVENT_DATA.ministersConference.title}
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                {EVENT_DATA.ministersConference.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-crusade-gold-400" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Date</span>
                    <span className="text-sm font-extrabold text-white">{EVENT_DATA.ministersConference.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-crusade-orange-400" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Morning Time</span>
                    <span className="text-sm font-extrabold text-white">{EVENT_DATA.ministersConference.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-crusade-gold-400" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Venue</span>
                    <span className="text-sm font-extrabold text-white truncate">Ngwa High School</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-crusade-navy-950/70 border border-crusade-gold-500/30">
              <Users className="w-12 h-12 text-crusade-gold-400 mb-3" />
              <h4 className="text-white font-extrabold text-lg mb-1">Calling All Ministers & Leaders</h4>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Open to all pastors, evangelists, church workers, and Christian ministry leaders across denomination lines.
              </p>
              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-crusade-gold-500 to-amber-600 hover:from-crusade-gold-400 hover:to-amber-500 text-crusade-navy-950 font-black text-sm uppercase shadow-lg shadow-crusade-gold-500/30 transition-all hover:scale-[1.02]"
              >
                <span>Register for Conference</span>
                <ArrowUpRight className="w-4 h-4 text-crusade-navy-950 stroke-[2.5]" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
