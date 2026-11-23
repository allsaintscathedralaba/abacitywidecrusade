import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorshipExperience } from './components/WorshipExperience';
import { EventDetails } from './components/EventDetails';
import { CrusadeGallery } from './components/CrusadeGallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  // Initialize smooth scroll reveal transitions
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white antialiased overflow-x-hidden">
      {/* Minimal Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About the Crusade */}
        <About />

        {/* Section 3: Worship & Crusade Experience (Horizontal Carousel 1) */}
        <WorshipExperience />

        {/* Section 4: Event Details */}
        <EventDetails />

        {/* Section 5: Crusade Image Gallery (Horizontal Carousel 2) */}
        <CrusadeGallery />

        {/* Section 6: Final Registration Call-To-Action */}
        <FinalCTA />
      </main>

      {/* Section 7: Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
