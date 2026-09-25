import React from 'react';
import { Heart, Award } from 'lucide-react';
import { FACTS_DATA } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const FactsBanner: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 relative bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Guwahati's Legacy of Love & Early Learning</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            19 Years of Little Beginnings <span className="text-rose-500">❤️</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Part of Guwahati's families since 2005. Backed by India's first preschool chain (Estd. 1989), nurturing natural curiosity into confident character.
          </p>
        </div>

        {/* 4 Simple Facts Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FACTS_DATA.map((fact, idx) => (
            <div
              key={idx}
              onClick={() => playPopSound()}
              className="group relative bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${fact.color}`} />

              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 group-hover:scale-105 transition-transform flex items-center justify-center text-2xl shadow-inner mb-3 border border-amber-200/60">
                  {fact.emoji}
                </div>

                <div
                  className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-0.5"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  {fact.value}
                </div>

                <div className="text-xs sm:text-sm font-extrabold text-rose-600 mb-1">
                  {fact.label}
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                  {fact.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* National Shemrock Heritage Trust Band - Compact */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-amber-500 border border-amber-200">
              <Award className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900" style={{ fontFamily: 'Fredoka, cursive' }}>
                India’s 1st Preschool Chain Since 1989
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600">
                Founded by Dr. D.R. Arora & Dr. (Mrs.) Bimla Arora with 100+ years combined academic legacy.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-center">
            <div className="px-2">
              <div className="text-lg font-black text-rose-600" style={{ fontFamily: 'Fredoka, cursive' }}>650+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Branches</div>
            </div>
            <div className="w-px h-6 bg-amber-300/60" />
            <div className="px-2">
              <div className="text-lg font-black text-amber-600" style={{ fontFamily: 'Fredoka, cursive' }}>4.5L+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Alumni</div>
            </div>
            <div className="w-px h-6 bg-amber-300/60" />
            <div className="px-2">
              <div className="text-lg font-black text-emerald-600" style={{ fontFamily: 'Fredoka, cursive' }}>Limca</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Record</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
