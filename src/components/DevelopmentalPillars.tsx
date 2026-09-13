import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Heart } from 'lucide-react';
import { DEVELOPMENTAL_PILLARS } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface Props {
  onOpenAdmission: () => void;
}

export const DevelopmentalPillars: React.FC<Props> = ({ onOpenAdmission }) => {
  const [activePillarId, setActivePillarId] = useState<string>(DEVELOPMENTAL_PILLARS[0].id);

  const selectedPillar = DEVELOPMENTAL_PILLARS.find(p => p.id === activePillarId) || DEVELOPMENTAL_PILLARS[0];

  return (
    <section id="learnings" className="py-16 sm:py-24 bg-gradient-to-b from-[#FCFBF7] via-[#FFF9F2] to-[#FCFBF7] relative overflow-hidden">
      {/* Playful Floating Shapes */}
      <div className="absolute top-12 right-8 text-2xl animate-float pointer-events-none opacity-60">
        ✨
      </div>
      <div className="absolute bottom-12 left-10 text-2xl animate-wiggle pointer-events-none opacity-60">
        🧩
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Whole-Child Early Milestones</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Your Child Develops <span className="text-rose-600">at Shemrock Hearts</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Early childhood is when 85% of brain architecture develops. Our multi-sensory environment nurtures these six foundational pillars so your little one grows into a happy, confident explorer.
          </p>
        </div>

        {/* 6 Core Developmental Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DEVELOPMENTAL_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => {
                  playPopSound();
                  setActivePillarId(pillar.id);
                }}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-white border-rose-500 shadow-xl shadow-rose-500/10 scale-[1.02]'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl shadow-inner border border-amber-200/50">
                    {pillar.icon}
                  </div>
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${pillar.badgeBg}`}>
                    Core Pillar
                  </span>
                </div>

                <h3
                  className="text-xl font-black text-slate-900 mb-2 tracking-tight"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-rose-600 mb-3">
                  {pillar.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Micro activities preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {pillar.activities.slice(0, 2).map((act, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{act}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-2 flex items-center justify-between text-xs font-bold text-rose-600">
                  <span>{isSelected ? 'Currently Viewing' : 'Tap to expand detail'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Focus Panel for Selected Pillar */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-3">
                <span>{selectedPillar.icon} In-Depth Focus</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                How We Cultivate: {selectedPillar.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedPillar.activities.map((act, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{act}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  playChimeSound();
                  onOpenAdmission();
                }}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Experience This in Person – Enquire Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full lg:w-80 shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-amber-100 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
                  alt="Child developing cognitive and creative skills at Shemrock Hearts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <div className="text-xs font-bold text-amber-300">ShemEduMAX™ Methodology</div>
                  <div className="text-sm font-extrabold">{selectedPillar.tagline}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
