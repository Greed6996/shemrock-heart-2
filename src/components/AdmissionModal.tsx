import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Heart, Send, MessageCircle, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playCelebrationSound, playPopSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const AdmissionModal: React.FC<Props> = ({ isOpen, onClose, defaultProgram = '' }) => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: defaultProgram || 'Pre-Nursery / Nursery',
    parentName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCelebrationSound();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-black transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-black uppercase tracking-wider bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Admissions 2025-26 Session
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
              Enquire for Admission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Shemrock Hearts Guwahati • Only 15 children per batch to ensure intimate 1:8 attention.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Child's Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  placeholder="e.g., Aarav Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Applying For Program *
                  </label>
                  <select
                    required
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm bg-white"
                  >
                    <option value="ShemToddler (1.5 - 2.5 yrs)">ShemToddler (1.5 - 2.5 yrs)</option>
                    <option value="Pre-Nursery / Nursery">Pre-Nursery / Nursery (2.5 - 3.5 yrs)</option>
                    <option value="Junior KG (LKG)">Junior KG (3.5 - 4.5 yrs)</option>
                    <option value="Senior KG (UKG)">Senior KG (4.5 - 5.5 yrs)</option>
                    <option value="Daycare & Activity Club">Daycare & Activity Club</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g., Ananya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., 95608 XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your child's interests, food allergies, or any queries..."
                  className="w-full px-4 py-2 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-sm rounded-xl shadow-lg shadow-rose-600/30 transition active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>We look forward to meeting you and your little one!</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-3xl">
              🎉
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
              Enquiry Received Successfully!
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you, <strong>{formData.parentName}</strong>! Our admissions coordinator for <strong>Shemrock Hearts Guwahati</strong> will call you at <strong>{formData.phone}</strong> with fee structures, sample kits, and trial schedule.
            </p>

            <div className="space-y-3">
              <a
                href={`${SCHOOL_INFO.whatsappLink}%20(Child:%20${encodeURIComponent(formData.childName)},%20Program:%20${encodeURIComponent(formData.childAge)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Continue Direct Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-bold"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
