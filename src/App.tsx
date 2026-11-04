import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ThemeSection } from './components/ThemeSection';
import { Programme } from './components/Programme';
import { Ministers } from './components/Ministers';
import { Venue } from './components/Venue';
import { Registration } from './components/Registration';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';

export const App: React.FC = () => {
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-crusade-navy-950 text-slate-100 flex flex-col font-sans selection:bg-crusade-orange-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenFlyer={() => setFlyerModalOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        <Hero onOpenFlyer={() => setFlyerModalOpen(true)} />
        <About />
        <ThemeSection />
        <Programme />
        <Ministers />
        <Venue />
        <Registration />
        <CTASection />
      </main>

      {/* Footer Section */}
      <Footer onOpenFlyer={() => setFlyerModalOpen(true)} />

      {/* Modal for official flyer viewing */}
      <FlyerModal
        isOpen={flyerModalOpen}
        onClose={() => setFlyerModalOpen(false)}
      />
    </div>
  );
};

export default App;
