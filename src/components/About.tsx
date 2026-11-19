import React from 'react';
import { EVENT_DATA } from '../data/eventData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-900 text-slate-100 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-500 mb-3">
          Vision & Spiritual Significance
        </div>

        {/* Compelling Headline */}
        <h2 className="reveal-on-scroll delay-100 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-4xl leading-tight mb-12">
          A CITYWIDE GATHERING FOR TRUTH, WORSHIP & SPIRITUAL RENEWAL
        </h2>

        {/* Editorial Layout: Left Narrative, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            <p className="reveal-on-scroll delay-150 text-xl sm:text-2xl font-light text-slate-100 leading-snug">
              The <strong className="font-bold text-white">{EVENT_DATA.name}</strong> is a divine convocation organized by the <strong className="font-bold text-orange-400">{EVENT_DATA.organizer}</strong> to unite believers and seekers in prayer, worship, sound biblical doctrine, and spiritual awakening.
            </p>

            <p className="reveal-on-scroll delay-200">
              Anchored on the theme <strong className="text-white font-bold">&ldquo;{EVENT_DATA.theme}&rdquo;</strong> drawn from <strong className="text-orange-400 font-bold">{EVENT_DATA.scriptureReference}</strong>, this gathering challenges believers to emulate the Berean nobility—examining the Scriptures daily with readiness of mind, testing all teachings against God&apos;s Word, and building unshakeable convictions on biblical truth.
            </p>

            <div className="reveal-on-scroll delay-250 pt-4 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
                What This Crusade Seeks to Accomplish
              </h3>
              
              <ul className="space-y-4 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black">—</span>
                  <span><strong>Spiritual Reformation:</strong> Turning hearts back to uncompromised biblical truth and Christ-centered worship.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black">—</span>
                  <span><strong>Citywide Intercession:</strong> Lifting a unified altar of prayer for healing, deliverance, peace, and righteous transformation in Aba.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black">—</span>
                  <span><strong>Kingdom Empowerment:</strong> Equipping ministers and believers through expository teaching and Holy Ghost impartation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 reveal-on-scroll delay-200 space-y-4">
            <div className="relative overflow-hidden rounded bg-slate-950 border border-white/15">
              <img
                src="/assets/bible-study.jpg"
                alt="Open Holy Bible Scriptures"
                className="w-full h-auto object-cover filter contrast-105"
              />
              <div className="p-4 bg-slate-950/90 text-xs text-slate-400 border-t border-white/10">
                <span className="text-orange-400 font-bold uppercase tracking-wider block mb-0.5">
                  Acts 17:11 (KJV)
                </span>
                <span>&ldquo;These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily...&rdquo;</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 tracking-wide">
              Free and open-air event at Ngwa High School Playground, Aba • 2nd to 5th December 2026.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
