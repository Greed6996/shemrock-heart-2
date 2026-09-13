import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Heart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenVisit: () => void;
}

interface HeroSlide {
  url: string;
  title: string;
  tag: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    title: 'Hands-on Montessori & Block Play',
    tag: '🧱 Problem Solving',
  },
  {
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    title: 'Circle Time, Rhymes & Phonics',
    tag: '📚 Story & Speech',
  },
  {
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80',
    title: 'Vibrant Finger Painting & Arts',
    tag: '🎨 Creative Expression',
  },
  {
    url: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1000&q=80',
    title: 'Outdoor Play & Ball Pool Fun',
    tag: '🏃 Gross Motor Skills',
  },
  {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    title: 'Little Stars Celebrating Together',
    tag: '❤️ Social Confidence',
  },
  {
    url: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=1000&q=80',
    title: 'Warm 1:8 Care from Loving Mentors',
    tag: '✨ Safe & Nurturing',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onOpenVisit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Continuously auto-moving images without stopping
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-3 sm:py-4 lg:py-4 xl:py-7 bg-gradient-to-b from-[#FFFDF8] via-[#FFF8EE] to-[#FFF4E5]"
    >
      {/* Floating Whimsical Background Stars & Playful Toys */}
      <div className="absolute top-3 left-6 text-xl sm:text-2xl animate-float pointer-events-none select-none opacity-80" aria-hidden="true">
        🎈
      </div>
      <div className="absolute top-6 right-8 text-xl sm:text-2xl animate-float-delayed pointer-events-none select-none opacity-80" aria-hidden="true">
        🌈
      </div>
      <div className="absolute bottom-4 left-8 text-xl sm:text-2xl animate-wiggle pointer-events-none select-none opacity-75" aria-hidden="true">
        🧸
      </div>

      {/* Extra Whimsical Floating Stars as requested */}
      <div className="absolute top-2 left-1/4 text-xl animate-float pointer-events-none select-none opacity-75" aria-hidden="true" title="Twinkling star">
        ⭐
      </div>
      <div className="absolute top-8 left-[18%] text-base animate-gentle-pulse pointer-events-none select-none opacity-85" aria-hidden="true">
        ✨
      </div>
      <div className="absolute top-4 right-1/3 text-xl animate-float-delayed pointer-events-none select-none opacity-80" aria-hidden="true" title="Twinkling star">
        🌟
      </div>
      <div className="absolute top-1/2 left-4 text-lg animate-float pointer-events-none select-none opacity-75" aria-hidden="true">
        ⭐
      </div>
      <div className="absolute top-2/3 left-1/3 text-base animate-float-delayed pointer-events-none select-none opacity-80" aria-hidden="true">
        ✨
      </div>
      <div className="absolute top-1/2 right-4 text-xl sm:text-2xl animate-gentle-pulse pointer-events-none select-none opacity-85" aria-hidden="true" title="Twinkling star">
        ⭐
      </div>
      <div className="absolute bottom-8 right-1/4 text-lg animate-float pointer-events-none select-none opacity-80" aria-hidden="true">
        🌟
      </div>
      <div className="absolute bottom-12 right-10 text-base animate-float-delayed pointer-events-none select-none opacity-75" aria-hidden="true">
        ✨
      </div>

      {/* Soft color glow orbs */}
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-10 w-60 h-60 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Headline, Trust Pill & Interactive CTA Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-1.5 bg-white/90 border border-amber-200/80 px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs mb-1.5 sm:mb-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-rose-500 text-rose-500 inline" />
                Guwahati's Beloved Playschool • 19 Years of Trust
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-2xl sm:text-3xl lg:text-3.5xl xl:text-4.5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-1.5 sm:mb-2"
              style={{ fontFamily: 'Fredoka, cursive' }}
            >
              Where Little Beginnings <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">
                Become Big Possibilities.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 mb-3 sm:mb-3.5 leading-relaxed">
              Welcome to <strong className="text-slate-800">Shemrock Hearts Guwahati</strong>. For 19 years, we’ve nurtured toddlers with love, laughter, and lifelong foundational growth through the award-winning <strong className="text-rose-600 font-bold">ShemEduMAX™</strong> play-based curriculum.
            </p>

            {/* Primary Action Buttons with Playful Hover Bounce/Pop Animations */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-3 sm:mb-3.5">
              <button
                onClick={() => {
                  playChimeSound();
                  onOpenVisit();
                }}
                className="btn-playful-bounce w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group border border-rose-400/30"
                id="hero-book-visit-btn"
              >
                <Calendar className="w-4 h-4 text-amber-200 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                <span>Book a School Visit</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  onOpenAdmission();
                }}
                className="btn-playful-bounce w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-amber-50/90 text-slate-800 font-extrabold text-xs sm:text-sm border-2 border-amber-300 hover:border-amber-400 shadow-sm hover:shadow-lg hover:shadow-amber-400/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
                id="hero-enquire-admission-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300" />
                <span>Enquire for Admission</span>
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto lg:mx-0 pt-1.5 border-t border-amber-200/60 text-slate-700">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>100% CCTV Safety</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>1:8 Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Play-Based Learning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Image Pure Auto-Moving Hero Showcase (No pause/prev/next buttons) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-white shadow-xl shadow-amber-900/10 border-2 sm:border-3 border-amber-200">
                
                {/* Continuous Slideshow Screen (Pure Auto Moving) */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[4/3] max-h-[220px] sm:max-h-[250px] lg:max-h-[260px] xl:max-h-[310px] bg-amber-100">
                  
                  {/* Moving Slides */}
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.url}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      
                      {/* Gradient Bottom Shading */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                      {/* Real Life Badge on Image */}
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-bold">
                        <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="truncate max-w-[170px] sm:max-w-none">{slide.title}</span>
                        </span>
                        <span className="bg-rose-600/90 px-2 py-0.5 rounded-full text-[10px] shrink-0 font-extrabold">
                          {slide.tag}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Top Continuous Real Life Tag */}
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[10px] font-bold pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>Real Shemrock Guwahati Life</span>
                  </div>

                </div>

                {/* Subtle Moving Indicator Line */}
                <div className="flex items-center justify-between pt-1.5 px-1">
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          dotIdx === currentIdx
                            ? 'w-5 bg-gradient-to-r from-rose-500 to-amber-500'
                            : 'w-1.5 bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] text-slate-400 font-bold">
                    Moments of Joy & Growth
                  </span>
                </div>

              </div>

              {/* Floating Child Joy Badge */}
              <div className="hidden xl:flex absolute -top-3 -right-2 bg-white p-2 rounded-xl shadow-lg border border-rose-200 items-center gap-2 animate-float pointer-events-none">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white text-xs">
                  ❤️
                </div>
                <div>
                  <div className="text-[9px] font-black text-rose-600 uppercase">19+ Years</div>
                  <div className="text-[11px] font-extrabold text-slate-800">4,500+ Little Hearts</div>
                </div>
              </div>

              {/* Floating Parent Rating Badge */}
              <div className="hidden xl:flex absolute -bottom-3 -left-2 bg-white p-1.5 px-2 rounded-xl shadow-lg border border-amber-200 items-center gap-2 animate-float-delayed pointer-events-none">
                <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-black text-[10px]">
                  ⭐ 5.0
                </div>
                <div>
                  <div className="text-[9px] text-amber-500 font-black">★★★★★</div>
                  <div className="text-[10px] font-bold text-slate-800">Guwahati's Choice</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Playful Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-5 text-white overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-5 fill-[#FCFBF7]">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};
