import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { DEVELOPMENTAL_PILLARS } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const DevelopmentalPillars: React.FC = () => {
  return (
    <section id="learnings" className="py-10 sm:py-16 bg-gradient-to-b from-[#FCFBF7] via-[#FFF9F2] to-[#FCFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Whole-Child Milestones</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            What Your Child Develops <span className="text-rose-600">at Shemrock</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Our multi-sensory environment nurtures 6 foundational pillars during the critical early years of rapid brain development.
          </p>
        </div>

        {/* 6 Core Developmental Pillar Cards - Compact & Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {DEVELOPMENTAL_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => playPopSound()}
              className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-slate-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl shadow-inner border border-amber-200/50">
                    {pillar.icon}
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${pillar.badgeBg}`}>
                    Pillar
                  </span>
                </div>

                <h3
                  className="text-lg font-black text-slate-900 mb-1 tracking-tight"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  {pillar.title}
                </h3>

                <p className="text-xs font-bold text-rose-600 mb-2">
                  {pillar.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {pillar.description}
                </p>
              </div>

              {/* Activities mini-bullets */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                {pillar.activities.map((act, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
