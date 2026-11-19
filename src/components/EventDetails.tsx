import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-24 sm:py-32 bg-slate-900 text-slate-100 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
          Essential Information
        </div>
        
        <h2 className="reveal-on-scroll delay-100 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-16">
          EVENT DETAILS & SCHEDULE
        </h2>

        {/* Large Prominent Typographic Display of Date, Time, Venue */}
        <div className="space-y-12 mb-20">
          
          {/* Date */}
          <div className="reveal-on-scroll py-8 border-b border-white/15 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="md:col-span-3 text-xs uppercase tracking-widest font-bold text-slate-400">
              OFFICIAL DATE
            </span>
            <div className="md:col-span-9">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white block">
                {EVENT_DATA.dates}
              </span>
              <span className="text-sm text-slate-300 mt-1 block">
                Wednesday, 2nd December through Saturday, 5th December 2026
              </span>
            </div>
          </div>

          {/* Time */}
          <div className="reveal-on-scroll delay-100 py-8 border-b border-white/15 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="md:col-span-3 text-xs uppercase tracking-widest font-bold text-slate-400">
              STARTING TIME
            </span>
            <div className="md:col-span-9 space-y-4">
              <div>
                <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-orange-500 block">
                  4:00 PM DAILY
                </span>
                <span className="text-sm text-slate-300 mt-1 block">
                  Main open-air crusade service held every evening
                </span>
              </div>

              {/* Special Ministers Conference spotlight */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider font-extrabold text-orange-400 block mb-0.5">
                  SPECIAL MINISTERS CONFERENCE
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white block">
                  Saturday, 5th December 2026 @ 9:00 AM
                </span>
                <span className="text-xs sm:text-sm text-slate-400">
                  Tailored leadership session for pastors, evangelists, church officers, and gospel ministers.
                </span>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className="reveal-on-scroll delay-150 py-8 border-b border-white/15 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="md:col-span-3 text-xs uppercase tracking-widest font-bold text-slate-400">
              VENUE & LOCATION
            </span>
            <div className="md:col-span-9">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white block">
                NGWA HIGH SCHOOL
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-300 block mt-1">
                Playground, Aba, Abia State
              </span>
              <div className="mt-4">
                <a
                  href={EVENT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4"
                >
                  <span>Open Directions in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Organizing Ministry */}
          <div className="reveal-on-scroll delay-200 py-8 border-b border-white/15 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="md:col-span-3 text-xs uppercase tracking-widest font-bold text-slate-400">
              ORGANIZED BY
            </span>
            <div className="md:col-span-9">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white block">
                {EVENT_DATA.organizer}
              </span>
              <span className="text-sm text-slate-300 block mt-1">
                Church of Nigeria (Anglican Communion)
              </span>
            </div>
          </div>

        </div>

        {/* Featured Ministers Section: Clean Editorial Presentation with Real Portraits */}
        <div className="reveal-on-scroll delay-250 pt-8">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            Ministry Vessels
          </div>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-10">
            FEATURED MINISTERS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Guest Speaker */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-t border-white/15 pt-6">
              <div className="w-36 h-44 flex-shrink-0 overflow-hidden rounded bg-slate-950 border border-white/20">
                <img
                  src="/assets/speaker-iyke-egbuonu.jpg"
                  alt="The Rt. Rev. Dr. Iyke J. Egbuonu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500 block mb-1">
                  Guest Speaker
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase mb-1">
                  The Rt. Rev. Dr. Iyke J. Egbuonu
                </h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Bishop, Diocese of Oji River
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sound biblical scholar and seasoned teacher of the Gospel known for expository preaching and spiritual empowerment.
                </p>
              </div>
            </div>

            {/* Host */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-t border-white/15 pt-6">
              <div className="w-36 h-44 flex-shrink-0 overflow-hidden rounded bg-slate-950 border border-white/20">
                <img
                  src="/assets/host-nathan-kanu.jpg"
                  alt="The Rt. Rev. Nathan C. O. Kanu JP, PhD."
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-400 block mb-1">
                  Chief Host
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase mb-1">
                  The Rt. Rev. Nathan C. O. Kanu JP, Ph.D.
                </h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Bishop, Diocese of Aba Ngwa North
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visionary diocesan bishop passionately devoted to biblical literacy, spiritual reformation, and the revival of the Church.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
