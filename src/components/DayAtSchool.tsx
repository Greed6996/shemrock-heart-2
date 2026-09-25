import React, { useState } from 'react';
import { Clock, ChevronRight, ChevronLeft, Heart, CheckCircle2 } from 'lucide-react';
import { DAY_AT_SCHOOL_STEPS } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

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
    <section id="school-life" className="py-10 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Real School Life</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            A Day at <span className="text-rose-600">Shemrock Hearts</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            From the first morning smile at the gate to joyful pickup, every moment is planned with care.
          </p>

          {/* Daily Flow Pills */}
          <div className="mt-6 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-xs font-bold text-slate-700 bg-amber-50/70 p-2 sm:p-2.5 rounded-2xl border border-amber-200">
            {DAY_AT_SCHOOL_STEPS.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => {
                    playPopSound();
                    setActiveStepIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                    activeStepIndex === idx
                      ? 'bg-rose-600 text-white shadow-sm scale-105 font-black'
                      : 'bg-white hover:bg-amber-100 text-slate-700 border border-slate-200 font-semibold'
                  }`}
                >
                  <span>{step.icon}</span>
                  <span>{step.tag}</span>
                </button>
                {idx < DAY_AT_SCHOOL_STEPS.length - 1 && (
                  <span className="text-amber-400 font-bold text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Compact Daily Routine Visualizer Card */}
        <div className="bg-gradient-to-br from-[#FFFDF8] via-white to-amber-50/40 rounded-3xl border-2 border-amber-200 shadow-md p-5 sm:p-7 relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Real Photo */}
            <div className="md:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] group">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs text-xs font-black text-rose-600 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{currentStep.time}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-3 text-xs font-bold">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <span className="text-slate-500">
                  {activeStepIndex + 1} of {DAY_AT_SCHOOL_STEPS.length}
                </span>

                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Short & Direct Content */}
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-black mb-2">
                <span>{currentStep.icon}</span>
                <span>{currentStep.tag}</span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2"
                style={{ fontFamily: 'Fredoka, cursive' }}
              >
                {currentStep.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/70 w-fit mb-3">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>{currentStep.time}</span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {currentStep.description}
              </p>

              {/* Highlight */}
              <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200/60 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 fill-rose-500" />
                <span className="text-xs font-semibold text-slate-800">{currentStep.funFact}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
