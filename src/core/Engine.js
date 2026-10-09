// ====================================================================
// WILD QUEENS — CINEMATIC 3D ENGINE & ATMOSPHERE
// Day/Night Cycle, Volumetric Fog, Weather (Rain/Thunder), Dynamic Lighting
// ====================================================================

import * as THREE from '../three.js';

export class GameEngine {
  constructor(canvas, soundEngine) {
    this.canvas = canvas;
    this.sound = soundEngine;

    // Ensure canvas exists
    if (!this.canvas) {
      this.canvas = document.getElementById('game-canvas');
    }

    // Resilient WebGL Renderer
    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        powerPreference: 'default'
      });
    } catch (e) {
      console.warn('Falling back to basic WebGL renderer:', e);
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: false,
        powerPreference: 'low-power'
      });
    }

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene & Fog
    this.scene = new THREE.Scene();
    this.fog = new THREE.FogExp2(0x1a2e26, 0.012);
    this.scene.fog = this.fog;

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 400);

    // Cinematic Lighting
    this.hemiLight = new THREE.HemisphereLight(0x86efac, 0x14532d, 0.6);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfef08a, 1.8);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 120;
    this.sunLight.shadow.camera.left = -40;
    this.sunLight.shadow.camera.right = 40;
    this.sunLight.shadow.camera.top = 40;
    this.sunLight.shadow.camera.bottom = -40;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    // Weather Particles (Rain)
    this.isRaining = false;
    this.rainParticles = null;
    this.rainCount = 2000;
    this.setupRain();

    // Day/Night Cycle variables
    this.dayTime = 0.35; // 0.0 to 1.0 (0.25 = sunrise, 0.5 = noon, 0.75 = sunset, 0.0/1.0 = midnight)
    this.dayDurationSeconds = 360; // 6 minutes full cycle

    this.setupResize();
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  setupRain() {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.rainCount * 3);
    for (let i = 0; i < this.rainCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = Math.random() * 30;
      positions[i + 2] = (Math.random() - 0.5) * 60;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.15,
      transparent: true,
      opacity: 0.65
    });

    this.rainParticles = new THREE.Points(geo, mat);
    this.rainParticles.visible = false;
    this.scene.add(this.rainParticles);
  }

  updateAtmosphere(delta, playerPos) {
    // Advance Day/Night time
    this.dayTime = (this.dayTime + delta / this.dayDurationSeconds) % 1.0;

    // Calculate Sun/Moon position
    const sunAngle = this.dayTime * Math.PI * 2;
    const sunDist = 65;
    const sunX = Math.cos(sunAngle) * sunDist;
    const sunY = Math.sin(sunAngle) * sunDist;
    const sunZ = 20;

    this.sunLight.position.set(playerPos.x + sunX, playerPos.y + sunY, playerPos.z + sunZ);
    this.sunLight.target.position.copy(playerPos);
    this.sunLight.target.updateMatrixWorld();

    // Sky & Fog color transitions
    const isDay = sunY > 0;
    const dayProgress = Math.sin(sunAngle); // -1 to 1

    if (dayProgress > 0.2) {
      // Clear Day
      this.scene.background = new THREE.Color(0x38bdf8);
      this.fog.color.set(0x7dd3fc);
      this.sunLight.color.set(0xfef08a);
      this.sunLight.intensity = 1.8;
      this.hemiLight.color.set(0x86efac);
      this.hemiLight.groundColor.set(0x14532d);
      this.hemiLight.intensity = 0.7;
    } else if (dayProgress > -0.1) {
      // Sunset / Dawn Golden Hour
      this.scene.background = new THREE.Color(0xf97316);
      this.fog.color.set(0xfb923c);
      this.sunLight.color.set(0xf43f5e);
      this.sunLight.intensity = 1.2;
      this.hemiLight.color.set(0xfbbf24);
      this.hemiLight.intensity = 0.5;
    } else {
      // Midnight Moonlit
      this.scene.background = new THREE.Color(0x05070d);
      this.fog.color.set(0x0a101d);
      this.sunLight.color.set(0x60a5fa);
      this.sunLight.intensity = 0.4;
      this.hemiLight.color.set(0x1e293b);
      this.hemiLight.groundColor.set(0x020617);
      this.hemiLight.intensity = 0.25;
    }

    // Dynamic Weather triggers
    if (Math.random() < 0.0003) {
      this.toggleRain(!this.isRaining);
    }

    // Update Rain Particles
    if (this.isRaining && this.rainParticles) {
      this.rainParticles.position.x = playerPos.x;
      this.rainParticles.position.z = playerPos.z;

      const pos = this.rainParticles.geometry.attributes.position;
      for (let i = 1; i < pos.count * 3; i += 3) {
        pos.array[i] -= 28 * delta;
        if (pos.array[i] < 0) {
          pos.array[i] = 30;
        }
      }
      pos.needsUpdate = true;

      // Occasional Thunder
      if (Math.random() < 0.001) {
        this.triggerLightning();
      }
    }
  }

  toggleRain(enable) {
    this.isRaining = enable;
    if (this.rainParticles) {
      this.rainParticles.visible = enable;
    }
    if (enable) {
      this.fog.density = 0.022; // Thicker fog during storm
    } else {
      this.fog.density = 0.012;
    }
  }

  triggerLightning() {
    const origExp = this.renderer.toneMappingExposure;
    this.renderer.toneMappingExposure = 3.5; // Flash!
    setTimeout(() => {
      this.renderer.toneMappingExposure = origExp;
      if (this.sound) this.sound.playThunder();
    }, 100);
  }

  updateCamera(playerPos, input) {
    const distance = input.zoom;
    const yaw = input.yaw;
    const pitch = input.pitch;

    // Camera offset based on orbit
    const cx = playerPos.x - Math.sin(yaw) * Math.cos(pitch) * distance;
    const cy = playerPos.y + Math.sin(pitch) * distance + 1.6;
    const cz = playerPos.z - Math.cos(yaw) * Math.cos(pitch) * distance;

    // Smooth lerp
    this.camera.position.lerp(new THREE.Vector3(cx, cy, cz), 0.15);

    // Look at player chest
    const lookTarget = new THREE.Vector3(playerPos.x, playerPos.y + 1.4, playerPos.z);
    this.camera.lookAt(lookTarget);
  }

  getClockFormatted() {
    const totalMinutes = Math.floor(this.dayTime * 24 * 60);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const hStr = hours.toString().padStart(2, '0');
    const mStr = mins.toString().padStart(2, '0');
    const icon = (hours >= 6 && hours < 18) ? '☀️' : '🌙';
    return `${icon} ${hStr}:${mStr}`;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
