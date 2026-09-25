import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FactsBanner } from './components/FactsBanner';
import { DevelopmentalPillars } from './components/DevelopmentalPillars';
import { DayAtSchool } from './components/DayAtSchool';
import { ProgramsSection } from './components/ProgramsSection';
import { CurriculumEduMax } from './components/CurriculumEduMax';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookVisitModal } from './components/BookVisitModal';

export default function App() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  const handleOpenVisit = () => {
    setVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-950">
      
      {/* 1. Header with Big Logo, Prominent Address & Call Bar */}
      <Navbar onOpenVisit={handleOpenVisit} />

      <main className="flex-grow">
        {/* 2. Hero Section with Address Badge & Book Visit */}
        <Hero onOpenVisit={handleOpenVisit} />

        {/* 3. 19 Years Legacy & Guwahati Facts */}
        <FactsBanner />

        {/* 4. Developmental Pillars */}
        <DevelopmentalPillars />

        {/* 5. A Day at Shemrock Hearts Routine */}
        <DayAtSchool />

        {/* 6. Programs for Every Step */}
        <ProgramsSection onOpenVisit={handleOpenVisit} />

        {/* 7. ShemEduMAX™ Award-Winning Curriculum */}
        <CurriculumEduMax />

        {/* 8. Parent Experiences */}
        <TestimonialsSection />

        {/* 9. Campus Moments Gallery */}
        <GallerySection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Guwahati Campus Contact & Visit Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Book a School Visit Modal */}
      <BookVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />

    </div>
  );
}
