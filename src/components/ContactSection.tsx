import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle, Sparkles, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playCelebrationSound, playPopSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childAge: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCelebrationSound();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Visit Campus</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Visit Our <span className="text-rose-600">Guwahati Campus</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Located in a safe, peaceful neighborhood in Guwahati with convenient parking and lush green surroundings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Campus Details */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Campus Info Card with Big Address */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-rose-500 text-white flex items-center justify-center text-lg shadow-sm">
                  ❤️
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900" style={{ fontFamily: 'Fredoka, cursive' }}>
                    Shemrock Hearts Guwahati
                  </h3>
                  <p className="text-xs text-rose-600 font-bold">19 Years of Little Beginnings in Assam</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 text-amber-600 border border-amber-200 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold">Campus Address:</strong>
                    <span className="text-slate-800 font-medium">{SCHOOL_INFO.fullAddress}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{SCHOOL_INFO.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 border border-rose-200 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold">Phone Numbers:</strong>
                    <div className="flex flex-wrap gap-x-3 text-xs">
                      <a href={`tel:${SCHOOL_INFO.phone}`} className="text-rose-600 hover:underline font-bold">
                        {SCHOOL_INFO.phone}
                      </a>
                      <span className="text-slate-400">•</span>
                      <a href={`tel:${SCHOOL_INFO.altPhone}`} className="text-slate-600 hover:underline">
                        {SCHOOL_INFO.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0 text-sky-600 border border-sky-200 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold">Timings:</strong>
                    <span>{SCHOOL_INFO.timings}</span>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={SCHOOL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Principal</span>
                </a>

                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  onClick={() => playPopSound()}
                  className="py-2.5 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Campus</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Shemrock+Preschool+Guwahati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Maps ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Book a Visit / Quick Callback Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-5 sm:p-7 border-2 border-amber-200 shadow-sm relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-2">
                <Calendar className="w-3.5 h-3.5 text-rose-600" />
                <span>Visit Campus</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                Book a School Tour
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Leave your details below and we will confirm your personal campus walkthrough.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg shadow-xs">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 mb-1">
                    Visit Request Received!
                  </h4>
                  <p className="text-xs text-emerald-800 mb-3">
                    We will call you at <strong>{formData.phone}</strong> to confirm your visit time.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rohit Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Child's Age</label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs bg-white"
                      >
                        <option value="">Select age...</option>
                        <option value="1.5-2.5">1.5 – 2.5 Yrs (Toddler)</option>
                        <option value="2.5-3.5">2.5 – 3.5 Yrs (Nursery)</option>
                        <option value="3.5-4.5">3.5 – 4.5 Yrs (Junior KG)</option>
                        <option value="4.5-5.5">4.5 – 5.5 Yrs (Senior KG)</option>
                        <option value="daycare">Daycare (2-8 Yrs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Visit Date / Note</label>
                    <input
                      type="text"
                      placeholder="e.g. This Saturday morning"
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-rose-500 text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl font-extrabold text-xs shadow-sm transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-200" />
                    <span>Confirm Campus Visit Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
