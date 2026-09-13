import React, { useState } from 'react';
import { Clock, Sparkles, ChevronRight, ChevronLeft, Heart, CheckCircle2 } from 'lucide-react';
import { DAY_AT_SCHOOL_STEPS } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

export const DayAtSchool: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = DAY_AT_SCHOOL_STEPS[activeStepIndex];

  const handleNext = () => {
    playPopSound();
    setActiveStepIndex((prev) => (prev + 1) % DAY_AT_SCHOOL_STEPS.length);
  };

  const handlePrev = () => {
    playPopSound();
    setActiveStepIndex((prev) => (prev - 1 + DAY_AT_SCHOOL_STEPS.length) % DAY_AT_SCHOOL_STEPS.length);
  };

  return (
    <section id="school-life" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative kids background elements */}
      <div className="absolute top-10 left-5 text-4xl animate-float pointer-events-none opacity-40">
        🎈
      </div>
      <div className="absolute bottom-10 right-5 text-4xl animate-float-delayed pointer-events-none opacity-40">
        ⭐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header verbatim from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Show REAL School Life</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            A Day at <span className="text-rose-600">Shemrock Hearts</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            From the first morning hug at the gate to the proud goodbye wave, every hour is intentionally mapped for joy, discovery, physical energy, and emotional security.
          </p>

          {/* Journey Path Pills as specified in PDF: Arrival → Classroom → Activity → Play → Interaction → Learning → Home */}
          <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm font-extrabold text-slate-700 bg-amber-50/80 p-2.5 sm:p-3.5 rounded-2xl border border-amber-200">
            {DAY_AT_SCHOOL_STEPS.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => {
                    playPopSound();
                    setActiveStepIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeStepIndex === idx
                      ? 'bg-rose-600 text-white shadow-md scale-105'
                      : 'bg-white hover:bg-amber-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{step.icon}</span>
                  <span>{step.tag}</span>
                </button>
                {idx < DAY_AT_SCHOOL_STEPS.length - 1 && (
                  <span className="text-amber-400 font-black text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Stage Visualizer Card */}
        <div className="bg-gradient-to-br from-[#FFFDF8] via-white to-amber-50/40 rounded-3xl border-2 border-amber-200 shadow-xl p-6 sm:p-10 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Real Photo with play tag */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group">
                <img
                  src={currentStep.image}
                  alt={`${currentStep.title} at Shemrock Hearts Guwahati`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-black text-rose-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentStep.time}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ShemEduMAX™ Daily Routine</span>
                  </div>
                  <div className="text-lg font-bold truncate">{currentStep.activity}</div>
                </div>
              </div>

              {/* Navigation Arrows for Kids & Parents */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-xs active:scale-95 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                <div className="text-xs font-bold text-slate-500">
                  Step {activeStepIndex + 1} of {DAY_AT_SCHOOL_STEPS.length}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition cursor-pointer"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Detailed Description & What Kids Love */}
            <div className="lg:col-span-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black mb-3">
                <span className="text-base">{currentStep.icon}</span>
                <span>Stage {activeStepIndex + 1}: {currentStep.tag}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3"
                style={{ fontFamily: 'Fredoka, cursive' }}
              >
                {currentStep.title}
              </h3>

              <div className="flex items-center gap-2 text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/70 w-fit mb-5">
                <Clock className="w-4 h-4" />
                <span>Daily Timing: {currentStep.time}</span>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {currentStep.description}
              </p>

              {/* What Happens Here */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-6 shadow-xs">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                  What Happens Here
                </h4>
                <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                  {currentStep.activity}
                </p>
              </div>

              {/* What Kids Love Most */}
              <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs sm:text-sm mb-1">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
                  <span>Why Kids Love This Step:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  "{currentStep.funFact}"
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
