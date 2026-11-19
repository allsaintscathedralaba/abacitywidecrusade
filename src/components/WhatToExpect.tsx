import React from 'react';

export const WhatToExpect: React.FC = () => {
  const experiences = [
    {
      num: '01',
      title: 'Powerful Worship and Praise',
      desc: 'Uninhibited, spirit-filled congregational praise and deep worship led in unity, creating an atmosphere charged for the miraculous moving of God.'
    },
    {
      num: '02',
      title: 'The Preaching of God’s Word',
      desc: 'Expository biblical teaching rooted in sound doctrine, unveiling the truth of the Gospel to challenge the intellect and awaken the spirit.'
    },
    {
      num: '03',
      title: 'Prayer and Spiritual Renewal',
      desc: 'Intensive intercession for personal revival, healing of infirmities, deliverance from oppression, and the outpouring of the Holy Spirit.'
    },
    {
      num: '04',
      title: 'A Transformational Encounter',
      desc: 'An authentic meeting with the living Christ that redirects lives, restores hope, breaks generational yokes, and activates divine destinies.'
    }
  ];

  return (
    <section id="expect" className="py-24 sm:py-32 bg-slate-950 text-slate-100 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            The Crusade Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            WHAT TO EXPECT
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Four consecutive days structured to encounter the raw power, wisdom, and presence of God.
          </p>
        </div>

        {/* Clean Typographic List (Not Boxed Cards!) */}
        <div className="divide-y divide-white/15">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              {/* Number */}
              <div className="md:col-span-2 text-2xl sm:text-3xl font-black tracking-widest text-orange-500 font-mono">
                {item.num}
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
