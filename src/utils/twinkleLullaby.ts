// Web Audio API Synthesizer for "Twinkle Twinkle Little Star"
// Pure celesta & music box tones tuned specifically for soothing preschool background vibes

export interface MelodicNote {
  note: number;
  duration: number; // in beats (1 = quarter note, 2 = half note, etc.)
  bass?: number[];
}

export const NOTE_FREQS = {
  C3: 130.81,
  D3: 146.83,
  E3: 164.81,
  F3: 174.61,
  G3: 196.00,
  A3: 220.00,
  B3: 246.94,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.00,
  B5: 987.77,
  C6: 1046.50,
};

// "Twinkle Twinkle Little Star" Complete Melodic Score
export const TWINKLE_SCORE: MelodicNote[] = [
  // 1. Twin-kle, twin-kle, lit-tle star,
  { note: NOTE_FREQS.C5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.C5, duration: 1 },
  { note: NOTE_FREQS.G5, duration: 1, bass: [NOTE_FREQS.E3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.G5, duration: 1 },
  { note: NOTE_FREQS.A5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.C4] },
  { note: NOTE_FREQS.A5, duration: 1 },
  { note: NOTE_FREQS.G5, duration: 2, bass: [NOTE_FREQS.C3, NOTE_FREQS.E4] },

  // 2. How I won-der what you are!
  { note: NOTE_FREQS.F5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.A3] },
  { note: NOTE_FREQS.F5, duration: 1 },
  { note: NOTE_FREQS.E5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.E5, duration: 1 },
  { note: NOTE_FREQS.D5, duration: 1, bass: [NOTE_FREQS.G3, NOTE_FREQS.B3] },
  { note: NOTE_FREQS.D5, duration: 1 },
  { note: NOTE_FREQS.C5, duration: 2, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },

  // 3. Up a-bove the world so high,
  { note: NOTE_FREQS.G5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.E4] },
  { note: NOTE_FREQS.G5, duration: 1 },
  { note: NOTE_FREQS.F5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.C4] },
  { note: NOTE_FREQS.F5, duration: 1 },
  { note: NOTE_FREQS.E5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.E5, duration: 1 },
  { note: NOTE_FREQS.D5, duration: 2, bass: [NOTE_FREQS.G3, NOTE_FREQS.B3] },

  // 4. Like a dia-mond in the sky.
  { note: NOTE_FREQS.G5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.E4] },
  { note: NOTE_FREQS.G5, duration: 1 },
  { note: NOTE_FREQS.F5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.C4] },
  { note: NOTE_FREQS.F5, duration: 1 },
  { note: NOTE_FREQS.E5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.E5, duration: 1 },
  { note: NOTE_FREQS.D5, duration: 2, bass: [NOTE_FREQS.G3, NOTE_FREQS.B3] },

  // 5. Twin-kle, twin-kle, lit-tle star,
  { note: NOTE_FREQS.C5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.C5, duration: 1 },
  { note: NOTE_FREQS.G5, duration: 1, bass: [NOTE_FREQS.E3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.G5, duration: 1 },
  { note: NOTE_FREQS.A5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.C4] },
  { note: NOTE_FREQS.A5, duration: 1 },
  { note: NOTE_FREQS.G5, duration: 2, bass: [NOTE_FREQS.C3, NOTE_FREQS.E4] },

  // 6. How I won-der what you are!
  { note: NOTE_FREQS.F5, duration: 1, bass: [NOTE_FREQS.F3, NOTE_FREQS.A3] },
  { note: NOTE_FREQS.F5, duration: 1 },
  { note: NOTE_FREQS.E5, duration: 1, bass: [NOTE_FREQS.C3, NOTE_FREQS.G3] },
  { note: NOTE_FREQS.E5, duration: 1 },
  { note: NOTE_FREQS.D5, duration: 1, bass: [NOTE_FREQS.G3, NOTE_FREQS.B3] },
  { note: NOTE_FREQS.D5, duration: 1 },
  { note: NOTE_FREQS.C5, duration: 3, bass: [NOTE_FREQS.C3, NOTE_FREQS.E3, NOTE_FREQS.G3] },
];

export interface EngineState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
}

class LullabyEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private lowpassFilter: BiquadFilterNode | null = null;
  private isPlaying = false;
  private isMuted = false;
  // Set volume to 60% default
  private volume = 0.60;
  private tempo = 82; // gentle lullaby tempo
  private currentNoteIndex = 0;
  private noteTimer: number | null = null;
  private nextLoopTimeout: number | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private listeners: Array<(state: EngineState) => void> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        if (this.ctx && this.ctx.state === 'suspended' && this.isPlaying) {
          this.ctx.resume().then(() => {
            this.notify();
          }).catch(() => {});
        }
      };

      window.addEventListener('click', unlockAudio, { passive: true });
      window.addEventListener('touchstart', unlockAudio, { passive: true });
      window.addEventListener('scroll', unlockAudio, { passive: true, once: true });
      window.addEventListener('keydown', unlockAudio, { passive: true, once: true });
    }
  }

  private initAudio() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master lowpass filter to produce sweet, soft, rounded music box tines
      this.lowpassFilter = this.ctx.createBiquadFilter();
      this.lowpassFilter.type = 'lowpass';
      this.lowpassFilter.frequency.setValueAtTime(2600, this.ctx.currentTime);
      this.lowpassFilter.Q.setValueAtTime(1.0, this.ctx.currentTime);

      this.masterGain = this.ctx.createGain();
      const targetGain = this.isMuted ? 0 : this.volume * 0.16;
      this.masterGain.gain.setValueAtTime(targetGain, this.ctx.currentTime);

      this.lowpassFilter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    } catch {
      // AudioContext unavailable
    }
  }

  public subscribe(fn: (state: EngineState) => void) {
    this.listeners.push(fn);
    fn(this.getState());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((fn) => fn(state));
  }

  public getState(): EngineState {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
    };
  }

  public stopAllSound() {
    if (this.noteTimer !== null) {
      window.clearTimeout(this.noteTimer);
      this.noteTimer = null;
    }
    if (this.nextLoopTimeout !== null) {
      window.clearTimeout(this.nextLoopTimeout);
      this.nextLoopTimeout = null;
    }

    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Already stopped or disconnected
      }
    });
    this.activeOscillators = [];
    this.currentNoteIndex = 0;
  }

  public start() {
    this.initAudio();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    // Smooth ramp in master gain
    if (this.masterGain && !this.isMuted) {
      const targetGain = this.volume * 0.16;
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(targetGain, this.ctx.currentTime + 0.4);
    }

    this.stopAllSound();
    this.playNextStep();
    this.notify();
  }

  public pause() {
    this.isPlaying = false;
    this.stopAllSound();
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      if (muted) {
        this.masterGain.gain.linearRampToValueAtTime(0, now + 0.15);
      } else {
        const targetGain = this.volume * 0.16;
        this.masterGain.gain.linearRampToValueAtTime(targetGain, now + 0.25);
      }
    }
    this.notify();
  }

  public toggleMute() {
    this.setMuted(!this.isMuted);
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx && !this.isMuted) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(this.volume * 0.16, now + 0.08);
    }
    this.notify();
  }

  private playTone(freq: number, startTime: number, durationSec: number, isBass = false) {
    if (!this.ctx || !this.lowpassFilter) return;

    // 1. Primary pure sine chime
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    const peakGain = isBass ? 0.28 : 0.42;
    gain1.gain.setValueAtTime(0.0001, startTime);
    gain1.gain.linearRampToValueAtTime(peakGain, startTime + 0.008);
    const releaseTime = durationSec * (isBass ? 1.4 : 1.2);
    gain1.gain.exponentialRampToValueAtTime(0.0001, startTime + releaseTime);

    osc1.connect(gain1);
    gain1.connect(this.lowpassFilter);

    osc1.start(startTime);
    osc1.stop(startTime + releaseTime + 0.04);
    this.activeOscillators.push(osc1);

    osc1.onended = () => {
      this.activeOscillators = this.activeOscillators.filter((o) => o !== osc1);
      try {
        osc1.disconnect();
        gain1.disconnect();
      } catch {}
    };

    // 2. Harmonic overtone (crystal chime effect)
    if (!isBass) {
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, startTime);

      gain2.gain.setValueAtTime(0.0001, startTime);
      gain2.gain.linearRampToValueAtTime(0.1, startTime + 0.006);
      gain2.gain.exponentialRampToValueAtTime(0.0001, startTime + (durationSec * 0.5));

      osc2.connect(gain2);
      gain2.connect(this.lowpassFilter);

      osc2.start(startTime);
      osc2.stop(startTime + (durationSec * 0.5) + 0.04);
      this.activeOscillators.push(osc2);

      osc2.onended = () => {
        this.activeOscillators = this.activeOscillators.filter((o) => o !== osc2);
        try {
          osc2.disconnect();
          gain2.disconnect();
        } catch {}
      };
    }
  }

  private playNextStep() {
    if (!this.isPlaying || !this.ctx) return;

    if (this.currentNoteIndex >= TWINKLE_SCORE.length) {
      // Loop: pause 2 seconds peacefully before restarting Twinkle Twinkle
      this.currentNoteIndex = 0;
      this.nextLoopTimeout = window.setTimeout(() => {
        if (this.isPlaying) {
          this.playNextStep();
        }
      }, 2000);
      return;
    }

    const step = TWINKLE_SCORE[this.currentNoteIndex];
    const beatSec = 60 / this.tempo;
    const noteDuration = step.duration * beatSec;

    const now = this.ctx.currentTime;
    this.playTone(step.note, now, noteDuration, false);

    if (step.bass && step.bass.length > 0) {
      step.bass.forEach((bassFreq, idx) => {
        this.playTone(bassFreq, now + (idx * 0.02), noteDuration * 1.3, true);
      });
    }

    this.currentNoteIndex++;

    this.noteTimer = window.setTimeout(() => {
      if (this.isPlaying) {
        this.playNextStep();
      }
    }, noteDuration * 1000);
  }
}

// Global Singleton Engine
export const twinkleEngine = new LullabyEngine();
