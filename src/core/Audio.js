// ====================================================================
// WILD QUEENS — PROCEDURAL WEB AUDIO SOUND ENGINE
// Synthesizes atmospheric ambient music, combat FX, harvesting sounds
// ====================================================================

export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.masterGain = null;
    this.ambientGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.ambientOscillators = [];
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.startAmbientDrone();
      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.7, this.ctx.currentTime);
    }
    return this.muted;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // --- AMBIENT DRONE & ATMOSPHERE ---
  startAmbientDrone() {
    if (!this.ctx) return;
    // Layer 1: Deep low-frequency wilderness sub-drone
    const osc1 = this.ctx.createOscillator();
    const osc1Gain = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
    osc1Gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    osc1.connect(osc1Gain);
    osc1Gain.connect(this.ambientGain);
    osc1.start();
    this.ambientOscillators.push(osc1);

    // Layer 2: Ethereal harmonic wind drone
    const osc2 = this.ctx.createOscillator();
    const osc2Gain = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110, this.ctx.currentTime); // A2
    osc2Gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    osc2.connect(osc2Gain);
    osc2Gain.connect(this.ambientGain);
    osc2.start();
    this.ambientOscillators.push(osc2);

    // Subtle pitch modulation for wind feel
    setInterval(() => {
      if (this.ctx && !this.muted) {
        const time = this.ctx.currentTime;
        const targetFreq = 108 + Math.random() * 8;
        osc2.frequency.linearRampToValueAtTime(targetFreq, time + 4);
      }
    }, 4000);
  }

  // --- SOUND EFFECTS ---
  playFootstep() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    // Soft noise burst (foot hitting grass/earth)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80 + Math.random() * 30, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playAttackSwing() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    // Fast whoosh
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.18);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.19);
  }

  playHitImpact(isCritical = false) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;

    // Bass thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(isCritical ? 180 : 120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.14);

    gain.gain.setValueAtTime(isCritical ? 0.35 : 0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.16);

    // High metal/flesh chime for critical
    if (isCritical) {
      const critOsc = this.ctx.createOscillator();
      const critGain = this.ctx.createGain();
      critOsc.type = 'triangle';
      critOsc.frequency.setValueAtTime(880, now);
      critOsc.frequency.exponentialRampToValueAtTime(440, now + 0.2);

      critGain.gain.setValueAtTime(0.25, now);
      critGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      critOsc.connect(critGain);
      critGain.connect(this.sfxGain);
      critOsc.start(now);
      critOsc.stop(now + 0.22);
    }
  }

  playHarvest(type = 'wood') {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (type === 'wood') {
      // Wood chop 'thock'
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.12);
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else if (type === 'stone') {
      // Metallic clink
      osc.type = 'square';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    } else {
      // Plant rustle
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(250, now + 0.1);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    }

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  playCraftSuccess() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    // Pleasant 3-note chime chord: C5 -> E5 -> G5
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);

      gain.gain.setValueAtTime(0.16, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.36);
    });
  }

  playBuildPlace() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    // Heavy construction clank
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.18);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playDodgeRoll() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.25);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.26);
  }

  playThunder() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    // Deep rumbling white/pink noise simulation
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 1.8);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 2.1);
  }

  playQuestFanfare() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const melody = [392.00, 523.25, 659.25, 1046.50]; // G4, C5, E5, C6
    melody.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + i * 0.12);

      gain.gain.setValueAtTime(0.2, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.45);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.46);
    });
  }

  playUIClick() {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.05);
  }
}
