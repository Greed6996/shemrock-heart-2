import React from 'react';
import { Heart, Phone, Mail, MapPin, Sparkles, Award, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-12 border-t-4 border-amber-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Guwahati legacy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-rose-500 to-amber-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Heart className="w-7 h-7 fill-white text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-2xl text-white" style={{ fontFamily: 'Fredoka, cursive' }}>
                    SHEMROCK
                  </span>
                  <span className="font-black text-2xl text-rose-500" style={{ fontFamily: 'Fredoka, cursive' }}>
                    HEARTS
                  </span>
                </div>
                <div className="text-xs text-amber-400 font-bold">
                  Guwahati • Pre-School & Daycare (19 Years)
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong>Where Little Beginnings Become Big Possibilities.</strong> Nurturing Guwahati's toddlers with love, Montessori sensory exploration, and the award-winning ShemEduMAX™ curriculum since 2005.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-amber-300 font-bold">
                ⭐ 550+ National Branches
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-rose-300 font-bold">
                ❤️ 4.5 Lakh+ Alumni
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition">About Guwahati Campus</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition">Preschool Programs</a></li>
              <li><a href="#learnings" className="hover:text-amber-400 transition">Child Learnings</a></li>
              <li><a href="#school-life" className="hover:text-amber-400 transition">A Day at Shemrock</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Admissions & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Our Classrooms
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>ShemToddler (Playgroup) - 1.5 to 2.5 Yrs</li>
              <li>Pre-Nursery / Nursery - 2.5 to 3.5 Yrs</li>
              <li>Junior KG (LKG) - 3.5 to 4.5 Yrs</li>
              <li>Senior KG (UKG) - 4.5 to 5.5 Yrs</li>
              <li>Daycare & Homework Club (Till 6:00 PM)</li>
              <li>Shemrock Summer Fiesta</li>
            </ul>
          </div>

          {/* Col 4: Guwahati Campus Info */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Guwahati Location
            </h4>
            <p className="text-slate-400">
              House No. 18, Bye Lane 3, Rajgarh Road, Near Commerce College, Guwahati, Assam 781003
            </p>
            <div className="space-y-1.5 pt-1 text-slate-300">
              <div>📞 <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-rose-400 font-bold">{SCHOOL_INFO.phone}</a></div>
              <div>💬 <a href={SCHOOL_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold">WhatsApp: +91 {SCHOOL_INFO.whatsappNumber}</a></div>
              <div>✉️ <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-400">{SCHOOL_INFO.email}</a></div>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              Head Office: Block F, Sec-9, Rohini, New Delhi - 110085
            </div>
          </div>

        </div>

        {/* Bottom copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SHEMROCK Hearts Guwahati. All rights reserved. India's 1st Preschool Chain (Estd. 1989).
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/shemrockschools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            <a href="https://www.instagram.com/shemrockschools/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://www.youtube.com/user/shemrocknurseryrhyme" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center ml-2 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
