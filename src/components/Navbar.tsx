import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Heart, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface NavbarProps {
  onOpenVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'A Day at School', href: '#school-life' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Sticky Header Wrapper (Consolidated for zero lag and perfect positioning) */}
      <div className="sticky top-0 z-50 w-full shadow-sm">
        
        {/* Top Address & Contact Bar */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            {/* Prominent Campus Address */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1 font-black bg-black/15 px-2 py-0.5 rounded-full text-amber-200 shrink-0">
                <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                <span>Address:</span>
              </span>
              <span className="hidden md:inline font-medium text-white/95 truncate">
                {SCHOOL_INFO.fullAddress}
              </span>
              <span className="md:hidden font-medium text-white/95 truncate max-w-[200px] sm:max-w-xs">
                Rajgarh Rd, Chandmari, Guwahati
              </span>
            </div>

            {/* Quick Call & Timings */}
            <div className="flex items-center gap-3 text-xs font-bold shrink-0 ml-auto">
              <div className="hidden lg:flex items-center gap-1 text-white/90 font-medium text-[11px]">
                <Clock className="w-3 h-3 text-amber-200" />
                <span>Mon–Fri: 8:30 AM – 2:00 PM</span>
              </div>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full text-white"
              >
                <Phone className="w-3 h-3 text-amber-200" />
                <span>{SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header with Big Logo */}
        <header
          className={`transition-colors duration-200 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
              : 'bg-white py-2.5 border-b border-amber-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            
            {/* BIG PROMINENT LOGO */}
            <a
              href="#home"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => playPopSound()}
              id="brand-logo"
            >
              {/* Big Logo Icon Badge */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 rounded-2xl flex items-center justify-center text-white shadow-md shadow-rose-500/25 group-hover:scale-105 transition-transform duration-200 ring-2 ring-amber-300/60 shrink-0">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-white text-white drop-shadow-sm" />
                <span className="absolute -bottom-1 -right-1 bg-amber-400 text-amber-950 text-[9px] font-black px-1.5 py-0.2 rounded-full border border-white shadow-xs">
                  19Y
                </span>
              </div>

              {/* Brand Typography */}
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span
                    className="font-black text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight leading-none"
                    style={{ fontFamily: 'Fredoka, cursive' }}
                  >
                    SHEMROCK
                  </span>
                  <span
                    className="font-black text-xl sm:text-2xl md:text-3xl text-rose-600 tracking-tight leading-none"
                    style={{ fontFamily: 'Fredoka, cursive' }}
                  >
                    HEARTS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-0.5">
                  <span className="text-rose-600 font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px]">Guwahati</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-600 text-[10px] sm:text-[11px]">Pre-School & Daycare</span>
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
                  className="text-slate-700 hover:text-rose-600 font-bold text-sm tracking-wide transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTAs: Book a Visit & Call */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Campus</span>
              </a>

              <button
                onClick={() => {
                  playChimeSound();
                  onOpenVisit();
                }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md shadow-rose-500/25 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                id="book-visit-btn-nav"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book a Visit</span>
              </button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => {
                  playChimeSound();
                  onOpenVisit();
                }}
                className="sm:hidden px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-200" />
                <span>Visit</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-amber-100 px-4 pt-3 pb-6 mt-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
              <div className="flex flex-col space-y-2 mb-4">
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

              {/* Address inside Mobile Menu */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-slate-700 mb-3 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.fullAddress}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="w-full py-2.5 text-center text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => {
                    playChimeSound();
                    setMobileMenuOpen(false);
                    onOpenVisit();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Persistent Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 sm:hidden flex items-center justify-around gap-2">
        <a
          href={SCHOOL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playPopSound()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          onClick={() => playPopSound()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-sky-600 text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-call"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => {
            playChimeSound();
            onOpenVisit();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-md active:scale-95 transition-transform"
          id="mobile-persistent-visit"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
};
