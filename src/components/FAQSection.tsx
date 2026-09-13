import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { FAQ_DATA, SCHOOL_INFO } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (idx: number) => {
    playPopSound();
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-rose-600" />
            <span>Parent Inquiries Answered</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Frequently Asked Questions <span className="text-rose-600">by Parents</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We understand enrolling your little one is a milestone decision. Here are candid answers to what parents ask us most often.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 bg-amber-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span
                    className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight"
                    style={{ fontFamily: 'Fredoka, cursive' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-rose-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-amber-200/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
              Have a Specific Question About Your Child?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl">
              Our Guwahati principal and admissions counselors are delighted to talk, arrange personal observations, and answer questions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-emerald-700 hover:bg-emerald-50 rounded-2xl font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="px-5 py-3 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-2xl font-extrabold text-xs sm:text-sm border border-white/30 flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
