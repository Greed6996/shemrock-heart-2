import React from 'react';
import { Quote, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Guwahati Parent Reviews</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Loved by <span className="text-rose-600">Guwahati Families</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <div className="flex text-amber-500 text-sm">★★★★★</div>
            <span>5.0 Star Rating Across 300+ Verified Parent Reviews</span>
          </div>
        </div>

        {/* Parent Reviews Grid - 3 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS_DATA.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              onClick={() => playPopSound()}
              className="bg-[#FCFBF7] rounded-2xl p-5 border-2 border-slate-100 hover:border-rose-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {rev.badge}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-rose-300 mb-1.5" />
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2.5">
                <img
                  src={rev.avatar}
                  alt={rev.parentName}
                  className="w-9 h-9 rounded-full object-cover border border-rose-300"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {rev.parentName}
                  </h4>
                  <p className="text-[11px] text-rose-600 font-medium truncate">
                    {rev.childName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
