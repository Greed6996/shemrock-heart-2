import React, { useState } from 'react';
import { Sparkles, Trophy, RotateCcw, Volume2 } from 'lucide-react';
import { playPopSound, playChimeSound, playCelebrationSound } from '../utils/soundEffects';

interface Bubble {
  id: number;
  label: string;
  color: string;
  size: string;
  popped: boolean;
}

const INITIAL_BUBBLES: Bubble[] = [
  { id: 1, label: '🅰️', color: 'from-rose-400 to-pink-500', size: 'w-14 h-14 sm:w-16 sm:h-16', popped: false },
  { id: 2, label: '🅱️', color: 'from-amber-400 to-orange-500', size: 'w-16 h-16 sm:w-20 sm:h-20', popped: false },
  { id: 3, label: '🅲', color: 'from-emerald-400 to-teal-500', size: 'w-14 h-14 sm:w-16 sm:h-16', popped: false },
  { id: 4, label: '❤️', color: 'from-red-400 to-rose-600', size: 'w-16 h-16 sm:w-18 sm:h-18', popped: false },
  { id: 5, label: '⭐', color: 'from-yellow-300 to-amber-500', size: 'w-14 h-14 sm:w-16 sm:h-16', popped: false },
  { id: 6, label: '🐶', color: 'from-sky-400 to-blue-500', size: 'w-16 h-16 sm:w-20 sm:h-20', popped: false },
  { id: 7, label: '🎈', color: 'from-purple-400 to-pink-500', size: 'w-14 h-14 sm:w-16 sm:h-16', popped: false },
  { id: 8, label: '🦁', color: 'from-orange-400 to-amber-600', size: 'w-16 h-16 sm:w-18 sm:h-18', popped: false },
];

export const KidsFunPop: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>(INITIAL_BUBBLES);
  const [score, setScore] = useState(0);

  const popBubble = (id: number) => {
    playPopSound();
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
    const newScore = score + 1;
    setScore(newScore);

    if (newScore === INITIAL_BUBBLES.length) {
      playCelebrationSound();
    }
  };

  const resetBubbles = () => {
    playChimeSound();
    setBubbles(INITIAL_BUBBLES.map((b) => ({ ...b, popped: false })));
    setScore(0);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-amber-100 via-rose-100 to-sky-100 border-y-4 border-amber-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Playful Header */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black text-rose-600 shadow-sm mb-3">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
          <span>Kids Play Zone • Pop the Learning Bubbles!</span>
        </div>

        <h3
          className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2"
          style={{ fontFamily: 'Fredoka, cursive' }}
        >
          Hey Little Explorer! Can You Pop Them All? 🎈
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto mb-6">
          Tap or click on the floating bubbles to pop them with cheerful sounds!
        </p>

        {/* Score and Reset Bar */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-white px-5 py-2 rounded-2xl shadow-sm border border-amber-200 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-black text-slate-800">
              Score: {score} / {INITIAL_BUBBLES.length}
            </span>
          </div>

          {score > 0 && (
            <button
              onClick={resetBubbles}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-2xl text-xs font-black shadow-sm flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Blow New Bubbles!</span>
            </button>
          )}
        </div>

        {/* Bubbles Arena */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-white shadow-inner flex items-center justify-center gap-4 sm:gap-6 flex-wrap min-h-[140px]">
          {bubbles.map((b) => (
            <div key={b.id} className="relative">
              {!b.popped ? (
                <button
                  onClick={() => popBubble(b.id)}
                  className={`${b.size} rounded-full bg-gradient-to-tr ${b.color} text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg hover:scale-125 active:scale-90 transition-all duration-200 cursor-pointer animate-float border-2 border-white`}
                  style={{ animationDelay: `${b.id * 0.3}s` }}
                  title="Click to pop!"
                >
                  <span className="drop-shadow-sm select-none">{b.label}</span>
                </button>
              ) : (
                <div className={`${b.size} flex items-center justify-center text-amber-500 font-black text-xl animate-ping`}>
                  ✨
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reward celebration when all are popped */}
        {score === INITIAL_BUBBLES.length && (
          <div className="mt-6 bg-white p-4 rounded-2xl border-2 border-emerald-400 shadow-lg inline-block animate-bounce">
            <span className="text-sm sm:text-base font-black text-emerald-700 flex items-center gap-2">
              🎉 Wow, Super Star! You popped all bubbles! You are ready for Shemrock Hearts! 🌟
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
