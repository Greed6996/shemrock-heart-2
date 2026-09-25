import React, { useState } from 'react';
import { Users, Clock, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface Props {
  onOpenVisit: () => void;
}

export const ProgramsSection: React.FC<Props> = ({ onOpenVisit }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>('toddlers');

  return (
    <section id="programs" className="py-10 sm:py-16 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-rose-600" />
            <span>Early Learning Programs</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Programs Tailored for <span className="text-rose-600">Every Child</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Age-appropriate, joyful learning tailored for emotional, physical, and cognitive growth.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {PROGRAMS_DATA.map((prog) => (
            <button
              key={prog.id}
              onClick={() => {
                playPopSound();
                setActiveProgramId(prog.id);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeProgramId === prog.id
                  ? 'bg-rose-600 text-white shadow-md scale-105'
                  : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{prog.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeProgramId === prog.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {prog.age}
              </span>
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS_DATA.map((program) => {
            const isSelected = program.id === activeProgramId;
            return (
              <div
                key={program.id}
                className={`rounded-2xl bg-white border-2 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'border-rose-500 ring-2 ring-rose-500/20'
                    : 'border-slate-200 hover:border-amber-300'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-black text-rose-600 shadow-xs">
                    Age: {program.age}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <h3 className="text-lg font-black tracking-tight" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info strip */}
                    <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px]">
                      <div className="flex items-center gap-1 text-slate-600 truncate">
                        <Clock className="w-3 h-3 text-rose-500 shrink-0" />
                        <span className="truncate">{program.timing}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 truncate">
                        <Users className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{program.ratio}</span>
                      </div>
                    </div>

                    <p className="text-xs font-bold text-rose-700 mb-1.5">
                      {program.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1 mb-4">
                      {program.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Clean "Book a Visit" (Enquire button removed) */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        playChimeSound();
                        onOpenVisit();
                      }}
                      className="w-full py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold shadow-xs transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book a Visit for This Class</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
