// ====================================================================
// WILD QUEENS — DUAL INPUT CONTROLLER (DESKTOP & MOBILE TOUCH)
// Supports Keyboard/Mouse & Virtual Touch Joysticks seamlessly
// ====================================================================

export class InputManager {
  constructor(canvas) {
    this.canvas = canvas;

    // Movement state
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.isSprinting = false;
    this.isCrouched = false;
    this.isJumping = false;
    this.isAttacking = false;
    this.isInteracting = false;

    // Camera angles
    this.yaw = 0;       // horizontal orbit
    this.pitch = 0.25;  // vertical elevation
    this.zoom = 5.5;

    // Mouse drag
    this.isMouseDown = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Mobile touch state
    this.touchJoyId = null;
    this.touchJoyOrigin = { x: 0, y: 0 };
    this.touchJoyVector = { x: 0, y: 0 }; // Normalized -1 to 1

    this.touchLookId = null;
    this.lastTouchLookX = 0;
    this.lastTouchLookY = 0;

    // Key callbacks
    this.onKeyDownCallbacks = [];

    this.setupListeners();
  }

  setupListeners() {
    // --- KEYBOARD ---
    window.addEventListener('keydown', (e) => {
      // Ignore if typing inside text input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.moveForward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.moveBackward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.moveLeft = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.moveRight = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.isSprinting = true;
          break;
        case 'Space':
          this.isJumping = true;
          break;
        case 'KeyC':
          this.isCrouched = !this.isCrouched;
          this.emit('toggleCrouch', this.isCrouched);
          break;
        case 'KeyE':
          this.isInteracting = true;
          this.emit('interact');
          break;
        case 'KeyF':
          this.isAttacking = true;
          this.emit('attack');
          break;
        default:
          this.emit('keyDown', e.code);
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.moveForward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.moveBackward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.moveLeft = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.moveRight = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.isSprinting = false;
          break;
        case 'Space':
          this.isJumping = false;
          break;
        case 'KeyE':
          this.isInteracting = false;
          break;
        case 'KeyF':
          this.isAttacking = false;
          break;
      }
    });

    // --- MOUSE ORBIT & ATTACK ---
    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { // Left click
        // If not dragging much, trigger attack
        this.isMouseDown = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.isAttacking = true;
        this.emit('attack');
      } else if (e.button === 2) { // Right click
        this.isMouseDown = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
      this.isAttacking = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isMouseDown) {
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.yaw -= dx * 0.006;
        this.pitch = Math.max(0.05, Math.min(1.2, this.pitch + dy * 0.005));
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    // Mouse scroll zoom
    window.addEventListener('wheel', (e) => {
      this.zoom = Math.max(3.0, Math.min(12.0, this.zoom + e.deltaY * 0.005));
    }, { passive: true });

    // --- MOBILE TOUCH LISTENERS ---
    this.setupMobileTouch();
  }

  setupMobileTouch() {
    const joyBase = document.getElementById('joy-move-base');
    const joyThumb = document.getElementById('joy-move-thumb');
    const joyZone = document.getElementById('joy-move-zone');

    if (!joyZone) return;

    joyZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      this.touchJoyId = touch.identifier;
      const rect = joyBase.getBoundingClientRect();
      this.touchJoyOrigin = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      this.updateJoystick(touch.clientX, touch.clientY, joyThumb);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.touchJoyId) {
          e.preventDefault();
          this.updateJoystick(touch.clientX, touch.clientY, joyThumb);
        } else if (touch.identifier === this.touchLookId) {
          // Camera Look swipe
          const dx = touch.clientX - this.lastTouchLookX;
          const dy = touch.clientY - this.lastTouchLookY;
          this.yaw -= dx * 0.008;
          this.pitch = Math.max(0.05, Math.min(1.2, this.pitch + dy * 0.006));
          this.lastTouchLookX = touch.clientX;
          this.lastTouchLookY = touch.clientY;
        }
      }
    }, { passive: false });

    const endJoystick = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.touchJoyId) {
          this.touchJoyId = null;
          this.touchJoyVector = { x: 0, y: 0 };
          if (joyThumb) {
            joyThumb.style.transform = 'translate(0px, 0px)';
          }
        }
        if (touch.identifier === this.touchLookId) {
          this.touchLookId = null;
        }
      }
    };

    window.addEventListener('touchend', endJoystick);
    window.addEventListener('touchcancel', endJoystick);

    // Screen touch look for right side
    this.canvas.addEventListener('touchstart', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        // If on the right half of the screen
        if (touch.clientX > window.innerWidth * 0.35 && this.touchLookId === null) {
          this.touchLookId = touch.identifier;
          this.lastTouchLookX = touch.clientX;
          this.lastTouchLookY = touch.clientY;
        }
      }
    }, { passive: true });

    // Mobile buttons
    const bindBtn = (id, onDown, onUp) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (onDown) onDown();
      }, { passive: false });
      if (onUp) {
        el.addEventListener('touchend', (e) => {
          e.preventDefault();
          onUp();
        }, { passive: false });
      }
    };

    bindBtn('m-btn-attack', () => { this.isAttacking = true; this.emit('attack'); }, () => { this.isAttacking = false; });
    bindBtn('m-btn-interact', () => { this.isInteracting = true; this.emit('interact'); }, () => { this.isInteracting = false; });
    bindBtn('m-btn-dodge', () => { this.isJumping = true; this.emit('dodge'); }, () => { this.isJumping = false; });
    bindBtn('m-btn-crouch', () => {
      this.isCrouched = !this.isCrouched;
      this.emit('toggleCrouch', this.isCrouched);
    });
    bindBtn('m-btn-inv', () => { this.emit('toggleInventory'); });
  }

  updateJoystick(cx, cy, thumbEl) {
    const maxDist = 45;
    let dx = cx - this.touchJoyOrigin.x;
    let dy = cy - this.touchJoyOrigin.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > maxDist) {
      dx = (dx / dist) * maxDist;
      dy = (dy / dist) * maxDist;
    }

    if (thumbEl) {
      thumbEl.style.transform = `translate(${dx}px, ${dy}px)`;
    }

    this.touchJoyVector.x = dx / maxDist;
    this.touchJoyVector.y = -dy / maxDist; // Positive is forward
  }

  // Returns normalized movement vector based on camera yaw
  getMovementVector() {
    let forward = 0;
    let right = 0;

    if (this.moveForward) forward += 1;
    if (this.moveBackward) forward -= 1;
    if (this.moveRight) right += 1;
    if (this.moveLeft) right -= 1;

    // Mobile joystick contribution
    if (this.touchJoyId !== null) {
      forward += this.touchJoyVector.y;
      right += this.touchJoyVector.x;
    }

    const length = Math.sqrt(forward * forward + right * right);
    if (length > 1) {
      forward /= length;
      right /= length;
    }

    return { forward, right };
  }

  on(event, callback) {
    if (!this.onKeyDownCallbacks[event]) {
      this.onKeyDownCallbacks[event] = [];
    }
    this.onKeyDownCallbacks[event].push(callback);
  }

  emit(event, data) {
    if (this.onKeyDownCallbacks[event]) {
      this.onKeyDownCallbacks[event].forEach(cb => cb(data));
    }
  }
}
