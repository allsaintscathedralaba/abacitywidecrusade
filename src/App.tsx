import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatToExpect } from './components/WhatToExpect';
import { EventDetails } from './components/EventDetails';
import { Registration } from './components/Registration';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);

  // Initialize smooth scroll reveal animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Navigation Header */}
      <Navbar onOpenFlyer={() => setFlyerModalOpen(true)} />

      {/* Main Continuous Single Page Experience */}
      <main>
        {/* Section A: Hero / Landing Section */}
        <Hero onOpenFlyer={() => setFlyerModalOpen(true)} />

        {/* Section B: About the Crusade */}
        <About />

        {/* Section C: What to Expect */}
        <WhatToExpect />

        {/* Section D: Event Details */}
        <EventDetails />

        {/* Section E: Registration / Participation */}
        <Registration />

        {/* Section F: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section G: Footer */}
      <Footer onOpenFlyer={() => setFlyerModalOpen(true)} />

      {/* Full-resolution official flyer modal */}
      <FlyerModal
        isOpen={flyerModalOpen}
        onClose={() => setFlyerModalOpen(false)}
      />
    </div>
  );
};

export default App;
