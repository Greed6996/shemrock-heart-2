import React from 'react';
import { Award, Check } from 'lucide-react';
import { playPopSound } from '../utils/soundEffects';

export const CurriculumEduMax: React.FC = () => {
  const pillars = [
    {
      title: 'Brain Stimulation',
      desc: 'Age-appropriate neuro-cognitive activities sparking curiosity.',
      icon: '🧠',
    },
    {
      title: 'Montessori & Playway',
      desc: 'Hands-on sensory apparatus combined with joyful discovery.',
      icon: '🧩',
    },
    {
      title: 'Phonics & Speech',
      desc: 'Synthetic phonics and rhymes ensuring natural bilingual fluency.',
      icon: '🔤',
    },
    {
      title: 'Parent Partnership',
      desc: 'Regular updates, portfolio reviews, and collaborative guidance.',
      icon: '🤝',
    },
  ];

  return (
    <section id="curriculum" className="py-10 sm:py-14 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-sky-500/10 relative overflow-hidden border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300/80 text-amber-950 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Proprietary System</span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
              style={{ fontFamily: 'Fredoka, cursive' }}
            >
              ShemEduMAX™ <span className="text-rose-600">Curriculum</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
              A research-backed blend of play and purposeful learning developed by educationists Dr. D.R. Arora & Dr. (Mrs.) Bimla Arora.
            </p>

            <div className="space-y-2 mb-4 text-left">
              {[
                'Proven across 650+ schools & 4.5 Lakh+ happy alumni',
                'Featured in Limca Book of Records',
                'Prepares children for premier formal schools in Guwahati',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-200/80 text-xs font-bold text-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                onClick={() => playPopSound()}
                className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-100 hover:border-amber-300 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-base font-black text-slate-900 mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
