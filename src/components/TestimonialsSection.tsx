import React, { useState } from 'react';
import { Star, Play, Quote, CheckCircle, Video, MessageCircle, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA, SCHOOL_INFO } from '../data/schoolData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

export const TestimonialsSection: React.FC = () => {
  const [selectedVideoParent, setSelectedVideoParent] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header verbatim from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Happy Families in Guwahati</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Real Parent Experiences & <span className="text-rose-600">Video Stories</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Discover why generations of families in Guwahati trust Shemrock Hearts for their children's very first steps outside home.
          </p>

          <div className="mt-5 inline-flex items-center gap-3 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl">
            <div className="flex text-amber-500 text-base">★★★★★</div>
            <span className="text-xs sm:text-sm font-black text-slate-800">5.0 Star Rating Across 300+ Verified Guwahati Parent Reviews</span>
          </div>
        </div>

        {/* Video Feature Highlight Card */}
        <div className="mb-12 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 rounded-3xl p-1 shadow-xl">
          <div className="bg-white rounded-[22px] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video preview mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg bg-slate-900 group cursor-pointer border-2 border-amber-200">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Guwahati parent video testimonial"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => {
                      playChimeSound();
                      setSelectedVideoParent("Prachi Singh & Aarav");
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer border-4 border-white"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-xl">
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-rose-400" />
                    Parent Video: "Why We Chose Shemrock Hearts"
                  </span>
                  <span>2:45 min</span>
                </div>
              </div>
            </div>

            {/* Video description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-black px-3 py-1 rounded-full mb-3">
                <span>Featured Guwahati Parent Story</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3" style={{ fontFamily: 'Fredoka, cursive' }}>
                "The foundation they gave my child in Guwahati was life-changing."
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Hear directly from Prachi Singh, whose son graduated from Shemrock Hearts and smoothly secured top admission in Class 1. Watch how their family experienced warm communication, caring educators, and visible confidence transformation.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    playChimeSound();
                    setSelectedVideoParent("Prachi Singh & Aarav");
                  }}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Video Review</span>
                </button>
                <a
                  href={SCHOOL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Talk to School Lead</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Parent Reviews Grid (From website & Guwahati reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              onClick={() => playPopSound()}
              className="bg-[#FCFBF7] rounded-3xl p-6 border-2 border-slate-200/80 hover:border-rose-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {rev.reviewDate}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-rose-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.parentName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-rose-300"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-extrabold text-slate-900 truncate">
                    {rev.parentName}
                  </h4>
                  <p className="text-[11px] text-rose-600 font-bold truncate">
                    {rev.childName}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    {rev.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Simulation */}
      {selectedVideoParent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 relative shadow-2xl border-4 border-amber-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-rose-600 text-lg">🎥</span>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Parent Video Experience: {selectedVideoParent}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideoParent(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 relative flex items-center justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Parent review"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute text-center text-white px-6">
                <div className="w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <p className="font-bold text-sm">Playing Parent Reflection...</p>
                <p className="text-xs text-slate-300 mt-1">
                  "The care, hygiene and speech transformation at Shemrock Hearts Guwahati is unmatched!"
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Visit our Guwahati campus on Rajgarh Road to interact directly with our teachers, view student activity portfolios, and witness real classroom learning.
            </p>

            <button
              onClick={() => setSelectedVideoParent(null)}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-sm"
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
