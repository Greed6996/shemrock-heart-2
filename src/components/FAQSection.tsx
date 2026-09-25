import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQ_DATA, SCHOOL_INFO } from '../data/schoolData';
import { playPopSound } from '../utils/soundEffects';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    playPopSound();
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Common Questions</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Frequently Asked <span className="text-rose-600">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-8">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 bg-amber-50/40 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span
                    className="font-bold text-sm sm:text-base text-slate-900 tracking-tight"
                    style={{ fontFamily: 'Fredoka, cursive' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-rose-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-3.5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-amber-200/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card - Compact */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black" style={{ fontFamily: 'Fredoka, cursive' }}>
              Still have questions?
            </h3>
            <p className="text-xs text-rose-100">
              We're happy to answer your questions or schedule a personal visit.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl font-bold text-xs shadow-xs flex items-center gap-1.5 transition active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="px-4 py-2 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-xl font-bold text-xs border border-white/30 flex items-center gap-1.5 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
