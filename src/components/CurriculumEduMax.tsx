import React from 'react';
import { Award, BookOpen, Sparkles, Brain, Cpu, Users, Layers, Check } from 'lucide-react';
import { playPopSound } from '../utils/soundEffects';

export const CurriculumEduMax: React.FC = () => {
  const pillars = [
    {
      title: 'Scientific Early Brain Stimulation',
      desc: 'Based on neuro-cognitive milestones tailored for ages 1.5 to 5.5 to spark synaptogenesis through multi-sensory tools.',
      icon: '🧠',
      tag: 'Brain Science',
    },
    {
      title: 'Montessori & Playway Blend',
      desc: 'Self-correcting hands-on didactic apparatus combined with spontaneous joy, music, and social pretend play.',
      icon: '🧩',
      tag: 'Hands-On',
    },
    {
      title: 'Phonics & Thematic Vocabulary',
      desc: 'Structured synthetic phonics with multisensory actions, rhymes, and flash stories ensuring English fluency effortlessly.',
      icon: '🔤',
      tag: 'Language Power',
    },
    {
      title: 'Parent Collaboration (PPP)',
      desc: 'Parent Participation Programme with real-time portfolio updates, workshop sessions, and shared home activities.',
      icon: '🤝',
      tag: 'Family Centred',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-sky-500/10 relative overflow-hidden border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300/80 text-amber-950 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Proprietary Educational System</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
              style={{ fontFamily: 'Fredoka, cursive' }}
            >
              ShemEduMAX™ <br />
              <span className="text-rose-600">The Award-Winning Curriculum</span>
            </h2>

            <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">
              Unlike ordinary nursery schools that rely on rote drills, Shemrock revolutionized early childhood education in India by creating <strong>ShemEduMAX™</strong>—a child-centric curriculum blending play with purpose.
            </p>

            <div className="space-y-3 mb-8 text-left">
              {[
                'Proven across 650+ schools and 4,50,000+ happy alumni',
                'Featured in Limca Book of Records for fastest preschool growth',
                'Developed by leading academicians Dr. D.R. Arora & Dr. (Mrs.) Bimla Arora',
                'Prepares children seamlessly for premier CBSE & ICSE formal schools in Guwahati',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-amber-200/80 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-black" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-amber-300 text-xs font-black text-amber-900 shadow-sm">
              <span>🏆 100+ Years Combined Educational Legacy</span>
            </div>
          </div>

          {/* Right Column: 4 Educational Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                onClick={() => playPopSound()}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-200">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-600 flex items-center gap-1">
                  <span>Child-Friendly Delivery</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
