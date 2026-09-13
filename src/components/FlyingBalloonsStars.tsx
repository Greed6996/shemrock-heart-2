import React, { useState, useEffect, useRef } from 'react';
import { playBalloonPopSound, playStarPopSound } from '../utils/soundEffects';

interface FloatingItem {
  id: number;
  type: 'balloon' | 'star';
  symbol: string;
  colorBg: string;
  colorBorder: string;
  leftPercent: number;
  bottomPercent: number; // starts at -10% or distributed
  speed: number; // percentage upward per second
  swayFreq: number; // sway oscillation rate
  swayAmplitude: number; // pixels left/right
  size: number; // font/size in px
  seed: number;
}

interface PopEffect {
  id: number;
  x: number;
  y: number;
  type: 'balloon' | 'star';
  text: string;
  color: string;
}

const BALLOON_COLORS = [
  { symbol: '🎈', colorBg: 'from-rose-400 to-red-500', colorBorder: 'border-rose-300', text: 'POP! 🎈' },
  { symbol: '🎈', colorBg: 'from-amber-300 to-amber-500', colorBorder: 'border-amber-200', text: 'YAY! 🎈' },
  { symbol: '🎈', colorBg: 'from-sky-400 to-blue-500', colorBorder: 'border-sky-300', text: 'POP! 🎈' },
  { symbol: '🎈', colorBg: 'from-emerald-400 to-green-500', colorBorder: 'border-emerald-300', text: 'WHEEE! 🎈' },
  { symbol: '🎈', colorBg: 'from-purple-400 to-indigo-500', colorBorder: 'border-purple-300', text: 'POP! 🎈' },
  { symbol: '🎈', colorBg: 'from-pink-400 to-rose-500', colorBorder: 'border-pink-300', text: 'BOOM! 🎈' },
];

const STAR_SYMBOLS = [
  { symbol: '⭐', color: 'text-amber-400', text: 'TWINKLE! ⭐' },
  { symbol: '🌟', color: 'text-yellow-400', text: 'SHINE! 🌟' },
  { symbol: '✨', color: 'text-amber-300', text: 'SPARKLE! ✨' },
  { symbol: '💫', color: 'text-sky-400', text: 'MAGIC! 💫' },
  { symbol: '💖', color: 'text-rose-400', text: 'LOVE! ❤️' },
];

let nextId = 1;

export const FlyingBalloonsStars: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);
  const [popEffects, setPopEffects] = useState<PopEffect[]>([]);
  const [popCount, setPopCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  // Initialize with a few items already floating in mid-air
  useEffect(() => {
    const initialItems: FloatingItem[] = [];
    for (let i = 0; i < 6; i++) {
      const isBalloon = i % 2 === 0;
      const bColor = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
      const sColor = STAR_SYMBOLS[Math.floor(Math.random() * STAR_SYMBOLS.length)];

      initialItems.push({
        id: nextId++,
        type: isBalloon ? 'balloon' : 'star',
        symbol: isBalloon ? bColor.symbol : sColor.symbol,
        colorBg: bColor.colorBg,
        colorBorder: bColor.colorBorder,
        leftPercent: 6 + Math.random() * 88,
        bottomPercent: 10 + i * 14 + Math.random() * 8, // distributed up screen
        speed: 4.5 + Math.random() * 3.5, // 4.5% to 8% per second
        swayFreq: 0.8 + Math.random() * 1.2,
        swayAmplitude: 10 + Math.random() * 10,
        size: isBalloon ? 19 + Math.random() * 4 : 16 + Math.random() * 4,
        seed: Math.random() * 100,
      });
    }
    setItems(initialItems);

    // Spawner timer: spawn a new flying item every 2.4 seconds
    const spawnTimer = setInterval(() => {
      setItems((prev) => {
        if (prev.length >= 10) return prev; // keep performance optimal

        const isBalloon = Math.random() > 0.45;
        const bColor = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
        const sColor = STAR_SYMBOLS[Math.floor(Math.random() * STAR_SYMBOLS.length)];

        const newItem: FloatingItem = {
          id: nextId++,
          type: isBalloon ? 'balloon' : 'star',
          symbol: isBalloon ? bColor.symbol : sColor.symbol,
          colorBg: bColor.colorBg,
          colorBorder: bColor.colorBorder,
          leftPercent: 5 + Math.random() * 90,
          bottomPercent: -5, // start slightly below screen
          speed: 4.5 + Math.random() * 3.5,
          swayFreq: 0.8 + Math.random() * 1.2,
          swayAmplitude: 10 + Math.random() * 10,
          size: isBalloon ? 19 + Math.random() * 4 : 16 + Math.random() * 4,
          seed: Math.random() * 100,
        };
        return [...prev, newItem];
      });
    }, 2400);

    return () => clearInterval(spawnTimer);
  }, []);

  // Animation loop: smoothly advance each item upward
  useEffect(() => {
    const loop = () => {
      const now = Date.now();
      const deltaSec = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      setItems((prevItems) => {
        return prevItems
          .map((item) => ({
            ...item,
            bottomPercent: item.bottomPercent + item.speed * deltaSec,
          }))
          .filter((item) => item.bottomPercent < 108); // remove when leaves top of screen
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    lastTimeRef.current = Date.now();
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Handle user tapping/clicking on a flying item to pop it!
  const handlePop = (e: React.MouseEvent | React.TouchEvent, item: FloatingItem) => {
    e.stopPropagation();

    // Get click/tap coordinates for burst visual
    let clientX = 0;
    let clientY = 0;
    if ('clientX' in e && e.clientX !== undefined && e.clientX !== 0) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      const target = (e.currentTarget as HTMLElement).getBoundingClientRect();
      clientX = target.left + target.width / 2;
      clientY = target.top + target.height / 2;
    }

    if (item.type === 'balloon') {
      playBalloonPopSound();
    } else {
      playStarPopSound();
    }

    // Add pop effect
    const popText =
      item.type === 'balloon'
        ? BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)].text
        : STAR_SYMBOLS[Math.floor(Math.random() * STAR_SYMBOLS.length)].text;

    const newEffect: PopEffect = {
      id: nextId++,
      x: clientX,
      y: clientY,
      type: item.type,
      text: popText,
      color: item.type === 'balloon' ? 'text-rose-600' : 'text-amber-500',
    };

    setPopEffects((prev) => [...prev, newEffect]);

    // Clean up pop effect after animation
    setTimeout(() => {
      setPopEffects((prev) => prev.filter((eff) => eff.id !== newEffect.id));
    }, 850);

    // Remove popped item
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    setPopCount((c) => c + 1);
  };

  return (
    <>
      {/* Interactive Floating Screen Container */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
        
        {/* Floating Items */}
        {items.map((item) => {
          // calculate sway horizontal offset based on current vertical progress
          const sway = Math.sin((item.bottomPercent * 0.15) + item.seed) * item.swayAmplitude;

          return (
            <div
              key={item.id}
              onClick={(e) => handlePop(e, item)}
              onTouchStart={(e) => handlePop(e, item)}
              className="absolute pointer-events-auto cursor-pointer select-none inline-flex items-center justify-center leading-none p-0 m-0 transition-transform duration-100 active:scale-90"
              style={{
                left: `calc(${item.leftPercent}% + ${sway}px)`,
                bottom: `${item.bottomPercent}%`,
                fontSize: `${item.size}px`,
                lineHeight: 1,
                width: `${item.size}px`,
                height: `${item.size}px`,
                filter:
                  item.type === 'star'
                    ? 'drop-shadow(0 1px 3px rgba(245, 158, 11, 0.4))'
                    : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12))',
              }}
              title={item.type === 'balloon' ? 'Tap to pop! 🎈' : 'Tap to pop! ⭐'}
              aria-label={item.type === 'balloon' ? 'Tap to pop!' : 'Tap to pop!'}
            >
              {item.type === 'balloon' ? (
                <span className="block leading-none select-none animate-wiggle">
                  {item.symbol}
                </span>
              ) : (
                <span className="block leading-none select-none animate-gentle-pulse">
                  {item.symbol}
                </span>
              )}
            </div>
          );
        })}

        {/* Pop Visual Bursts */}
        {popEffects.map((eff) => (
          <div
            key={eff.id}
            className="fixed pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: eff.x, top: eff.y }}
          >
            {/* Sparkling Confetti Particles */}
            <div className="relative flex items-center justify-center">
              <span className="absolute -top-4 -left-4 text-xs animate-bounce">✨</span>
              <span className="absolute -top-5 right-3 text-xs animate-pulse">🌟</span>
              <span className="absolute bottom-3 -left-4 text-xs animate-wiggle">🎈</span>
              <span className="absolute -bottom-4 right-3 text-xs animate-bounce">💫</span>
              
              {/* Playful Floating Pop Text */}
              <div
                className={`font-black text-xs sm:text-sm ${eff.color} bg-white/95 px-2.5 py-0.5 rounded-full shadow-md border border-amber-200 animate-in fade-in zoom-in slide-out-to-top duration-600`}
                style={{ fontFamily: 'Fredoka, cursive' }}
              >
                {eff.text}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Playful Interactive Joy Counter (Bottom Right or Floating) */}
      {popCount > 0 && showCounter && (
        <div className="fixed bottom-20 sm:bottom-5 right-3 sm:right-5 z-40 animate-in slide-in-from-bottom-3 duration-300">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-2 border-amber-300 p-2.5 sm:p-3 flex items-center gap-2.5 text-xs font-bold text-slate-800">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white text-base shadow-xs animate-wiggle">
              🎈
            </span>
            <div>
              <div className="text-[11px] font-black text-rose-600 uppercase tracking-wide" style={{ fontFamily: 'Fredoka, cursive' }}>
                Toddler Fun!
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900">
                {popCount} {popCount === 1 ? 'Pop!' : 'Pops!'} ✨
              </div>
            </div>
            <button
              onClick={() => setShowCounter(false)}
              className="text-slate-400 hover:text-slate-600 text-xs px-1.5 py-0.5 rounded-md hover:bg-slate-100 transition cursor-pointer ml-1"
              title="Hide counter"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};
