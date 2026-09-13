import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Heart, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playCelebrationSound, playPopSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface Props {
  onOpenAdmission: () => void;
}

export const ContactSection: React.FC<Props> = ({ onOpenAdmission }) => {
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
    <section id="contact" className="py-16 sm:py-24 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>Visit Our Guwahati Campus</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Come Experience the Joy at <span className="text-rose-600">Shemrock Hearts</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We are located in a peaceful, safe neighborhood of Guwahati with convenient parking and green surroundings. Drop by with your toddler for a welcoming campus walk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Campus Details & Direct Connect */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Campus Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-xl shadow-md">
                  ❤️
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Fredoka, cursive' }}>
                    Shemrock Hearts Guwahati
                  </h3>
                  <p className="text-xs text-rose-600 font-bold">19 Years of Little Beginnings in Assam</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-600 border border-amber-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold mb-0.5">Address:</strong>
                    <span>{SCHOOL_INFO.fullAddress}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{SCHOOL_INFO.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 border border-rose-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold mb-0.5">Call Helpline:</strong>
                    <div className="flex flex-wrap gap-x-4">
                      <a href={`tel:${SCHOOL_INFO.phone}`} className="text-rose-600 hover:underline font-bold">
                        {SCHOOL_INFO.phone}
                      </a>
                      <a href={`tel:${SCHOOL_INFO.altPhone}`} className="text-slate-600 hover:underline">
                        {SCHOOL_INFO.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 border border-emerald-200">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold mb-0.5">Instant WhatsApp:</strong>
                    <a
                      href={SCHOOL_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>Click to chat: +91 {SCHOOL_INFO.whatsappNumber}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 text-sky-600 border border-sky-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-extrabold mb-0.5">School & Daycare Timings:</strong>
                    <span>{SCHOOL_INFO.timings}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{SCHOOL_INFO.saturdayTimings}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={SCHOOL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Principal on WhatsApp</span>
                </a>

                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  onClick={() => playPopSound()}
                  className="py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Interactive Location Preview Card */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  🗺️ Guwahati Location Map
                </span>
                <span className="text-xs text-rose-600 font-bold">Rajgarh Road / Chandmari</span>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-slate-100 border border-slate-200 flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-800">
                    Shemrock Hearts, Rajgarh Road, Guwahati
                  </div>
                  <a
                    href="https://maps.google.com/?q=Shemrock+Preschool+Guwahati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-white border border-slate-300 text-[11px] font-bold text-rose-600 rounded-lg shadow-xs hover:bg-slate-50"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Callback / Parent Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black mb-3">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Instant Callback Guarantee</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                Request Admission Callback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in your contact details below and our senior Guwahati admissions counselor will reach out within 2 working hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 text-center animate-in zoom-in-95">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl shadow-md">
                    ✓
                  </div>
                  <h4 className="text-lg font-black text-emerald-900 mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                    Thank you! We received your enquiry.
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mb-4">
                    Our Shemrock Hearts Guwahati team will call you shortly on <strong>{formData.phone}</strong> with fee details, brochures, and trial class timings.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g., Rohit Baruah"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., 98640 XXXXX"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Child's Age / Program *
                      </label>
                      <select
                        required
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm transition bg-white"
                      >
                        <option value="">Select Age Group</option>
                        <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup / Toddler (1.5 - 2.5 yrs)</option>
                        <option value="Nursery (2.5 - 3.5 yrs)">Pre-Nursery / Nursery (2.5 - 3.5 yrs)</option>
                        <option value="LKG (3.5 - 4.5 yrs)">Junior KG / LKG (3.5 - 4.5 yrs)</option>
                        <option value="UKG (4.5 - 5.5 yrs)">Senior KG / UKG (4.5 - 5.5 yrs)</option>
                        <option value="Daycare">Daycare / Extended Club</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Any questions or preferred visit timing?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      placeholder="e.g., Would love to visit this Saturday morning to see the play area and meet teachers..."
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 hover:from-rose-700 hover:to-pink-700 text-white font-black text-sm rounded-xl shadow-lg shadow-rose-600/25 transition active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Request</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Your details are 100% confidential. No spam calls.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
