import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-40 bg-slate-950 font-sans text-white overflow-hidden border-t border-white/10">
      
      {/* Full-Width Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/crusade-stage.jpg"
          alt="Outdoor crusade gathering stage at night"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        <div className="reveal-on-scroll text-xs uppercase tracking-widest font-bold text-orange-400 mb-4">
          Aba Citywide Convocation
        </div>

        {/* Short Headline as specified */}
        <h2 className="reveal-on-scroll delay-100 text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl mb-6">
          ONE CITY. <br />
          <span className="text-white">ONE GATHERING. </span>
          <span className="text-orange-500">ONE ENCOUNTER.</span>
        </h2>

        {/* One Brief Supporting Sentence */}
        <p className="reveal-on-scroll delay-150 text-base sm:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
          A divine citywide movement organized by the Diocese of Aba Ngwa North to unite thousands of believers in biblical truth, fervent prayer, and genuine revival.
        </p>

      </div>
    </section>
  );
};
