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
import { KidsFunPop } from './components/KidsFunPop';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { BookVisitModal } from './components/BookVisitModal';
import { TwinkleMusicPlayer } from './components/TwinkleMusicPlayer';
import { FlyingBalloonsStars } from './components/FlyingBalloonsStars';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenAdmission = (programName?: string) => {
    setSelectedProgram(programName);
    setAdmissionModalOpen(true);
  };

  const handleOpenVisit = () => {
    setVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-950">
      
      {/* Navigation with Persistent Mobile Quick Bar */}
      <Navbar
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenVisit={handleOpenVisit}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenAdmission={() => handleOpenAdmission()}
          onOpenVisit={handleOpenVisit}
        />

        {/* 2. Below the Hero: 19 Years of Little Beginnings & Guwahati Facts */}
        <FactsBanner />

        {/* 3. Interactive Kids Fun Bubble Zone (delightful for kids to play!) */}
        <KidsFunPop />

        {/* 4. Your Child Develops: 6 Core Pillars from PDF */}
        <DevelopmentalPillars
          onOpenAdmission={() => handleOpenAdmission()}
        />

        {/* 5. Show REAL School Life: A Day at Shemrock Hearts (Arrival -> Classroom -> ... -> Home) */}
        <DayAtSchool />

        {/* 6. Programs Tailored for Every Tiny Step */}
        <ProgramsSection
          onOpenAdmission={handleOpenAdmission}
          onOpenVisit={handleOpenVisit}
        />

        {/* 7. ShemEduMAX™ Award-Winning Curriculum */}
        <CurriculumEduMax />

        {/* 8. Happy Families: Real Parent Experiences & Video Reviews */}
        <TestimonialsSection />

        {/* 9. Campus Moments Gallery */}
        <GallerySection />

        {/* 10. Frequently Asked Questions by Parents */}
        <FAQSection />

        {/* 11. Guwahati Campus Visit & Admission Callback Form */}
        <ContactSection
          onOpenAdmission={() => handleOpenAdmission()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Gentle Lullaby Music Player (Twinkle Twinkle Little Star Only) */}
      <TwinkleMusicPlayer />

      {/* Whimsical Flying Balloons & Twinkling Stars (Tap to Pop!) */}
      <FlyingBalloonsStars />

      {/* Interactive Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultProgram={selectedProgram}
      />

      {/* Interactive Book a School Visit Modal */}
      <BookVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />

    </div>
  );
}
