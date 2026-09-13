import React from 'react';
import { Heart, Sparkles, Award, Users, BookOpen, Clock } from 'lucide-react';
import { FACTS_DATA, SCHOOL_INFO } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const FactsBanner: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 relative bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header verbatim from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Guwahati's Legacy of Love & Early Learning</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 flex items-center justify-center gap-2 flex-wrap"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            <span>19 Years of Little Beginnings</span>
            <span className="text-rose-500 inline-block animate-pulse">❤️</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            For <strong className="text-rose-600 font-bold">19 years</strong>, <strong className="text-slate-800">Shemrock Hearts</strong> has been part of the early learning journey of children and families in Guwahati. Backed by India's first preschool chain (Estd. 1989), we create an environment where natural curiosity turns into confident character.
          </p>
        </div>

        {/* 4 Simple Facts Grid from PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACTS_DATA.map((fact, idx) => (
            <div
              key={idx}
              onClick={() => playPopSound()}
              className="group relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-100 hover:border-amber-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top color highlight */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${fact.color}`} />

              <div>
                {/* Emoji / Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center text-3xl shadow-inner mb-5 border border-amber-200/60">
                  {fact.emoji}
                </div>

                {/* Stat / Value */}
                <div
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  {fact.value}
                </div>

                {/* Stat Label */}
                <div className="text-base font-extrabold text-rose-600 mb-2">
                  {fact.label}
                </div>

                {/* Fact Subtext */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fact.subtext}
                </p>
              </div>

              {/* Bottom interactive touch */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                <span>Shemrock Standard</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨ Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* National Shemrock Heritage Trust Band */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-amber-500 border border-amber-200">
              <Award className="w-8 h-8 text-rose-500" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900" style={{ fontFamily: 'Fredoka, cursive' }}>
                Promoted by India’s 1st Preschool Chain Since 1989
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Founded by renowned educationists Dr. D.R. Arora & Dr. (Mrs.) Bimla Arora with 100+ years of cumulative academic experience. Over <strong>650+ branches</strong> and <strong>4,50,000+ happy children</strong> across India, Nepal & Bangladesh.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-center">
            <div className="px-3">
              <div className="text-2xl font-black text-rose-600" style={{ fontFamily: 'Fredoka, cursive' }}>650+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Branches</div>
            </div>
            <div className="w-px h-10 bg-amber-300/60" />
            <div className="px-3">
              <div className="text-2xl font-black text-amber-600" style={{ fontFamily: 'Fredoka, cursive' }}>4.5 Lakh+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Happy Alumni</div>
            </div>
            <div className="w-px h-10 bg-amber-300/60" />
            <div className="px-3">
              <div className="text-2xl font-black text-emerald-600" style={{ fontFamily: 'Fredoka, cursive' }}>Limca</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Book Record</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
