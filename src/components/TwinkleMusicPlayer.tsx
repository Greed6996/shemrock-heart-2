import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { twinkleEngine } from '../utils/twinkleLullaby';
import { playPopSound } from '../utils/soundEffects';

export const TwinkleMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.60); // 60% default volume
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Start playback immediately on load
    twinkleEngine.start();

    // Subscribe to engine state
    const unsubscribe = twinkleEngine.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setIsMuted(state.isMuted);
      setVolume(state.volume);
    });

    // Browser autoplay policy handler:
    // If browser blocks audio on initial page load, first user gesture (touch, click, scroll) will resume it
    const handleFirstGesture = () => {
      twinkleEngine.start();
    };

    window.addEventListener('click', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('scroll', handleFirstGesture, { passive: true, once: true });

    return () => {
      unsubscribe();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
    };
  }, []);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPopSound();
    twinkleEngine.togglePlay();
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPopSound();
    twinkleEngine.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    twinkleEngine.setVolume(val);
    if (isMuted && val > 0) {
      twinkleEngine.setMuted(false);
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-5 left-3 sm:left-5 z-40">
      <div
        className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-2 transition-all duration-300 ${
          isPlaying && !isMuted ? 'border-amber-300 shadow-amber-500/15' : 'border-slate-200'
        } p-2.5 sm:p-3 flex flex-col gap-2 w-[270px] sm:w-[295px]`}
      >
        {/* Main Music Pill Row */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Track Info */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none group min-w-0 flex-1"
            onClick={() => setIsExpanded(!isExpanded)}
            title="Click to adjust lullaby volume"
          >
            <div
              className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-base shadow-xs transition-transform ${
                isPlaying && !isMuted
                  ? 'bg-gradient-to-tr from-amber-400 to-rose-400 text-white animate-pulse'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              ⭐
            </div>

            <div className="text-left min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs font-black text-slate-900 truncate tracking-tight"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  Twinkle Twinkle
                </span>
                {isPlaying && !isMuted && (
                  <span className="flex gap-0.5 items-end h-3 shrink-0">
                    <span className="w-0.5 bg-rose-500 rounded-full animate-[bounce_1s_infinite_100ms] h-3"></span>
                    <span className="w-0.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_300ms] h-2"></span>
                    <span className="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_200ms] h-3.5"></span>
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500 font-medium truncate">
                {isPlaying && !isMuted ? 'Soft Lullaby Playing' : isMuted ? 'Sound muted' : 'Paused'}
              </p>
            </div>
          </div>

          {/* Controls: Play/Pause, Mute, Expand */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleTogglePlay}
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition active:scale-90 cursor-pointer ${
                isPlaying
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-xs'
              }`}
              title={isPlaying ? 'Pause music' : 'Play Twinkle Twinkle'}
              aria-label={isPlaying ? 'Pause music' : 'Play Twinkle Twinkle'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={handleToggleMute}
              className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-90 cursor-pointer"
              title={isMuted ? 'Unmute music' : 'Mute music'}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-6 h-6 rounded-md hover:bg-slate-100 text-slate-400 flex items-center justify-center transition"
              title={isExpanded ? 'Hide volume slider' : 'Adjust volume'}
            >
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Volume Slider Drawer */}
        {isExpanded && (
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-[11px] text-slate-600 font-bold">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Lullaby Volume:</span>
              </span>
              <span className="text-rose-600 font-extrabold">{Math.round((isMuted ? 0 : volume) * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              title="Twinkle Twinkle volume slider (default 60%)"
            />
            <div className="text-[9px] text-slate-400 text-center pt-0.5">
              Celesta music box • Pure background vibes
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
