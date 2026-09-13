import React, { useState } from 'react';
import { Sparkles, Users, Clock, CheckCircle2, ArrowRight, BookOpen, GraduationCap, Baby, HeartHandshake } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface Props {
  onOpenAdmission: (programName?: string) => void;
  onOpenVisit: () => void;
}

export const ProgramsSection: React.FC<Props> = ({ onOpenAdmission, onOpenVisit }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>('toddlers');

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <GraduationCap className="w-4 h-4 text-rose-600" />
            <span>Age-Appropriate Stages of Joy</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Programs Tailored for <span className="text-rose-600">Every Tiny Step</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Every age group has unique emotional, motor, and cognitive requirements. Our curriculum gently builds upon the prior stage for effortless readiness.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {PROGRAMS_DATA.map((prog) => (
            <button
              key={prog.id}
              onClick={() => {
                playPopSound();
                setActiveProgramId(prog.id);
              }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeProgramId === prog.id
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/25 scale-105'
                  : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{prog.title}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeProgramId === prog.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {prog.age}
              </span>
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((program) => {
            const isSelected = program.id === activeProgramId;
            return (
              <div
                key={program.id}
                className={`rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl ${
                  isSelected
                    ? 'border-rose-500 ring-4 ring-rose-500/10 -translate-y-1'
                    : 'border-slate-200 hover:border-amber-300'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Age Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black text-rose-600 shadow-sm">
                    Age: {program.age}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-xl font-black tracking-tight" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info strip */}
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{program.timing}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{program.ratio}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-rose-700 mb-2">
                      {program.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {program.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => {
                        playChimeSound();
                        onOpenAdmission(program.title);
                      }}
                      className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-sm transition active:scale-95 cursor-pointer text-center"
                    >
                      Enquire for {program.title.split(' ')[0]}
                    </button>
                    
                    <button
                      onClick={() => {
                        playPopSound();
                        onOpenVisit();
                      }}
                      className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
                      title="Book Visit"
                    >
                      <ArrowRight className="w-4 h-4" />
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
