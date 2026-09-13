import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Heart, Menu, X, Calendar, Sparkles, Volume2, VolumeX, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playPopSound, playChimeSound, toggleSoundMute, getIsMuted } from '../utils/soundEffects';
import { twinkleEngine } from '../utils/twinkleLullaby';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission, onOpenVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = twinkleEngine.subscribe((state) => {
      setMuted(state.isMuted);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = toggleSoundMute();
    twinkleEngine.setMuted(isNowMuted);
    setMuted(isNowMuted);
    if (!isNowMuted) {
      playChimeSound();
      if (!twinkleEngine.getState().isPlaying) {
        twinkleEngine.start();
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Learnings', href: '#learnings' },
    { name: 'School Life', href: '#school-life' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white text-xs sm:text-sm py-1.5 px-4 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span className="inline-flex items-center gap-1 bg-white/20 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
              <Sparkles className="w-3 h-3" /> Admissions 2025-26 Open
            </span>
            <span className="truncate hidden sm:inline text-rose-50">
              Celebrating 19 Years in Guwahati • Award-Winning ShemEduMAX™ Curriculum
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            
            {/* Playful Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              className="flex items-center gap-1 bg-black/15 hover:bg-black/25 px-2.5 py-1 rounded-full text-[11px] font-medium transition cursor-pointer"
              title={muted ? 'Turn playful sounds on' : 'Mute sounds'}
              id="sound-toggle-btn"
            >
              {muted ? <VolumeX className="w-3.5 h-3.5 text-rose-200" /> : <Volume2 className="w-3.5 h-3.5 text-amber-200 animate-pulse" />}
              <span className="hidden sm:inline">{muted ? 'Sounds Off' : 'Sound Fun On'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-[31px] z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-amber-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => playPopSound()}
            id="brand-logo"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-tr from-rose-500 to-amber-400 rounded-2xl flex items-center justify-center text-white shadow-md shadow-rose-500/25 group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-xs" />
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-amber-950 text-[9px] font-black px-1.5 py-0.2 rounded-full border border-white">
                19Y
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-800 tracking-tight leading-none" style={{ fontFamily: 'Fredoka, cursive' }}>
                  SHEMROCK
                </span>
                <span className="font-black text-xl sm:text-2xl text-rose-600 tracking-tight leading-none" style={{ fontFamily: 'Fredoka, cursive' }}>
                  HEARTS
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
                <span className="text-amber-600 font-bold">Guwahati</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>Pre-School & Daycare</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => playPopSound()}
                className="text-slate-700 hover:text-rose-600 font-bold text-sm tracking-wide transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                playPopSound();
                onOpenVisit();
              }}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
              id="book-visit-btn-nav"
            >
              <Calendar className="w-4 h-4 text-rose-500" />
              <span>Book a Visit</span>
            </button>

            <button
              onClick={() => {
                playChimeSound();
                onOpenAdmission();
              }}
              className="relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md shadow-rose-500/30 hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              id="enquire-admission-btn-nav"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Enquire for Admission</span>
              <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-amber-950 text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs animate-bounce">
                Open!
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                playChimeSound();
                onOpenAdmission();
              }}
              className="sm:hidden px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-100 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playPopSound();
                    setMobileMenuOpen(false);
                  }}
                  className="text-base font-bold text-slate-700 hover:text-rose-600 hover:bg-rose-50/60 px-3 py-2 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  playPopSound();
                  setMobileMenuOpen(false);
                  onOpenVisit();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-rose-500" />
                <span>Book Visit</span>
              </button>
              <button
                onClick={() => {
                  playChimeSound();
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Persistent Mobile Bottom Bar (Requested in PDF: 💬 WhatsApp | 📞 Call) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 sm:hidden flex items-center justify-around gap-2">
        <a
          href={SCHOOL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playPopSound()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          onClick={() => playPopSound()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-sky-600 text-white font-extrabold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-call"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => {
            playChimeSound();
            onOpenAdmission();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-enquire"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Admission</span>
        </button>
      </div>
    </>
  );
};
