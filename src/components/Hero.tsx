import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/soundEffects';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenVisit: () => void;
}

interface HeroSlide {
  url: string;
  title: string;
  tag: string;
  description: string;
}

// Curated authentic, high-quality preschool toddler images
const HERO_SLIDES: HeroSlide[] = [
  {
    url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1000&q=80',
    title: 'Playful Montessori & Building Blocks',
    tag: 'Problem Solving',
    description: 'Developing tactile logic, spatial thinking & fine motor skills',
  },
  {
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    title: 'Curious Minds in Circle Time',
    tag: 'Speech & Phonics',
    description: 'Confidence in speaking, rhymes & interactive story circles',
  },
  {
    url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80',
    title: 'Joyful Arts, Colors & Expression',
    tag: 'Creativity',
    description: 'Messy finger painting, clay craft & imaginative role play',
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    title: 'Happy Classmates & Warm Friends',
    tag: 'Social Confidence',
    description: 'Sharing meals, gentle manners & lifelong friendships',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenVisit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Smooth slide auto-advance (optimized for battery and low-end CPU)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    playPopSound();
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    playPopSound();
    setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIdx];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-76px)] flex items-center justify-center bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4E4] overflow-hidden py-8 sm:py-10 lg:py-12"
    >
      {/* Subtle, zero-lag background decorative accents (No heavy blur or CPU looping) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/25 rounded-full pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Headlines, Address, and Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left flex flex-col justify-center">
            
            {/* Top Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-white/95 border border-amber-200 px-3 py-1 rounded-full shadow-xs mb-3 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                Guwahati's Beloved Playschool • 19 Years of Trust
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-4.5xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-3"
              style={{ fontFamily: 'Fredoka, cursive' }}
            >
              Where Little Beginnings <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">
                Become Big Possibilities.
              </span>
            </h1>

            {/* Prominent Address Badge */}
            <div className="flex items-start sm:items-center gap-2 bg-white/90 border border-amber-300/80 px-3.5 py-2 rounded-2xl text-xs font-semibold text-slate-800 mb-4 shadow-xs mx-auto lg:mx-0 max-w-xl text-left">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <span className="font-extrabold text-slate-900">Campus: </span>
                <span>{SCHOOL_INFO.fullAddress}</span>
              </div>
            </div>

            {/* Subtitle - Short & Direct */}
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              For 19 years in Guwahati, <strong className="text-slate-800">Shemrock Hearts</strong> has nurtured toddlers with love, joyful play, and confident foundational growth through the award-winning <strong className="text-rose-600 font-bold">ShemEduMAX™</strong> curriculum.
            </p>

            {/* Action Buttons: Book a Visit + WhatsApp + Call */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <button
                onClick={() => {
                  playChimeSound();
                  onOpenVisit();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-black text-sm shadow-md shadow-rose-500/25 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-book-visit-btn"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book a School Visit</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={SCHOOL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-white hover:bg-amber-50/80 text-slate-700 font-bold text-sm border-2 border-slate-200 hover:border-amber-300 transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>Call Campus</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-3 border-t border-amber-200/60 text-slate-700">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% CCTV Safety</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1:8 Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Play-Based Learning</span>
              </div>
            </div>

          </div>

          {/* Right Column: Redesigned High-Quality Preschool Showcase Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Showcase Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/15 border-4 border-white bg-white">
                
                {/* Image Viewport */}
                <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[480px] bg-slate-100 overflow-hidden">
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.url}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />

                      {/* Gentle Vignette Gradient for Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                      {/* Content Overlay on Active Slide */}
                      <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                        <div className="inline-flex items-center gap-1.5 bg-rose-600/90 text-white px-2.5 py-0.5 rounded-full text-xs font-black mb-1.5 shadow-sm">
                          <Sparkles className="w-3 h-3 text-amber-200" />
                          <span>{slide.tag}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                          {slide.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-2">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Top Header Badge: Campus Life */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs text-slate-900 px-3 py-1 rounded-full text-xs font-black shadow-md border border-amber-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Real Campus Moments</span>
                  </div>

                  {/* Slide Navigation Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                    <button
                      onClick={handlePrevSlide}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-xs cursor-pointer"
                      title="Previous photo"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-xs cursor-pointer"
                      title="Next photo"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Bottom Slide Indicators & Tag Bar */}
                <div className="p-3 bg-white flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          playPopSound();
                          setCurrentIdx(idx);
                        }}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentIdx
                            ? 'w-6 bg-rose-600'
                            : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                        title={`Slide ${idx + 1}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>5.0 Rated in Guwahati</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
