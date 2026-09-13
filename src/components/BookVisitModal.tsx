import React, { useState } from 'react';
import { X, Calendar, Clock, Heart, CheckCircle2, User, Phone, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { playCelebrationSound, playPopSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookVisitModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    visitDate: '',
    timeSlot: 'Morning Slot (10:00 AM – 11:00 AM)',
    childAge: 'Toddler (1.5 - 3 yrs)',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCelebrationSound();
    confetti({
      particleCount: 90,
      spread: 70,
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
      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-rose-300 my-8">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-black transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-black px-3 py-1 rounded-full mb-2">
              <Calendar className="w-3.5 h-3.5 text-rose-600" />
              <span>Campus Walkthrough</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
              Book a School Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Bring your child along! See our classrooms, sanitized ball pool, and observe a real ongoing circle session.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g., Rahul Kalita"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g., 98640 XXXXX"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Child's Age Group *
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm bg-white"
                  >
                    <option value="Toddler (1.5 - 2.5 yrs)">Toddler (1.5 - 2.5 yrs)</option>
                    <option value="Nursery (2.5 - 3.5 yrs)">Nursery (2.5 - 3.5 yrs)</option>
                    <option value="LKG (3.5 - 4.5 yrs)">LKG (3.5 - 4.5 yrs)</option>
                    <option value="UKG (4.5 - 5.5 yrs)">UKG (4.5 - 5.5 yrs)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Slot *
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-rose-500 outline-none text-sm bg-white"
                >
                  <option value="Morning Slot (9:30 AM – 10:30 AM)">Morning Session (9:30 AM – 10:30 AM)</option>
                  <option value="Mid-day Slot (11:00 AM – 12:00 PM)">Mid-day Session (11:00 AM – 12:00 PM)</option>
                  <option value="Afternoon Slot (2:00 PM – 3:30 PM)">Afternoon Quiet Hours (2:00 PM – 3:30 PM)</option>
                  <option value="Saturday Special (10:00 AM – 1:00 PM)">Saturday Special (10:00 AM – 1:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-black text-sm rounded-xl shadow-lg transition active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Visit Reservation</span>
              </button>

              <div className="text-[11px] text-slate-500 text-center">
                📍 Location: Rajgarh Road, Near Commerce College, Guwahati
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 text-3xl">
              🎈
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
              Visit Reserved!
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              We are eagerly waiting to welcome you, <strong>{formData.parentName}</strong>, on <strong>{formData.visitDate || 'your selected date'}</strong> ({formData.timeSlot}).
            </p>

            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 text-xs text-rose-900 mb-6 text-left space-y-1">
              <div className="font-extrabold">📌 Visiting Tip:</div>
              <div>Feel free to let your child try the slide, hold the Montessori shapes, and greet our warm teachers!</div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-sm"
            >
              Great, See You Soon!
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
