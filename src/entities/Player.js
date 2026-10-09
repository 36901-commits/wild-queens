// ====================================================================
// WILD QUEENS — PLAYER CONTROLLER & SURVIVAL VITALS
// Vitals: Health, Stamina, Hunger, Thirst, Temperature, Leveling, Combat
// ====================================================================

import * as THREE from '../three.js';
import { CharacterModel } from './CharacterModel.js';

export class Player {
  constructor(scene, soundEngine, customConfig = {}) {
    this.scene = scene;
    this.sound = soundEngine;

    // Survival Vitals
    this.vitals = {
      health: 100,
      maxHealth: 100,
      stamina: 100,
      maxStamina: 100,
      hunger: 90,
      maxHunger: 100,
      thirst: 95,
      maxThirst: 100,
      temperature: 24, // Celsius
      isCold: false,
      isStarving: false,
      isDehydrated: false
    };

    // Progression
    this.level = 1;
    this.xp = 0;
    this.xpToLevel = 100;
    this.kills = 0;
    this.harvestedCount = 0;
    this.daysSurvived = 1;

    // Movement & Physics
    this.position = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.moveSpeed = 4.2;
    this.sprintMultiplier = 1.7;
    this.rotationY = 0;
    this.isCrouched = false;
    this.isDodgeRolling = false;
    this.dodgeCooldown = 0;

    // Combat Stats
    this.baseDamage = 20;
    this.weaponDamage = 15;
    this.defense = 10;
    this.isInvulnerable = false;
    this.attackCooldown = 0;

    // Build 3D Heroine Model
    this.model = new CharacterModel(customConfig);
    this.scene.add(this.model.root);
  }

  update(delta, input, terrain, buildings, onDeath) {
    if (this.vitals.health <= 0) return;

    this.attackCooldown = Math.max(0, this.attackCooldown - delta);
    this.dodgeCooldown = Math.max(0, this.dodgeCooldown - delta);

    // --- 1. SURVIVAL METABOLISM & VITALS DECAY ---
    const isSprinting = input.isSprinting && (input.moveForward || input.moveBackward || input.moveLeft || input.moveRight) && this.vitals.stamina > 5;

    // Stamina
    if (isSprinting) {
      this.vitals.stamina = Math.max(0, this.vitals.stamina - delta * 18);
    } else if (!this.isDodgeRolling) {
      this.vitals.stamina = Math.min(this.vitals.maxStamina, this.vitals.stamina + delta * 22);
    }

    // Hunger & Thirst decay
    const exertion = isSprinting ? 1.8 : 1.0;
    this.vitals.hunger = Math.max(0, this.vitals.hunger - delta * 0.18 * exertion);
    this.vitals.thirst = Math.max(0, this.vitals.thirst - delta * 0.28 * exertion);

    // Starvation / Dehydration effects
    if (this.vitals.hunger <= 0) {
      this.takeDamage(delta * 1.5, 'Fome Extrema');
    }
    if (this.vitals.thirst <= 0) {
      this.takeDamage(delta * 2.5, 'Desidratação Severa');
    }

    // Passive regeneration if well-fed & hydrated
    if (this.vitals.hunger > 60 && this.vitals.thirst > 60 && this.vitals.health < this.vitals.maxHealth) {
      this.vitals.health = Math.min(this.vitals.maxHealth, this.vitals.health + delta * 1.0);
    }

    // Temperature Calculation (near campfire warms up)
    let nearCampfire = false;
    if (buildings && buildings.placedStructures) {
      for (const st of buildings.placedStructures) {
        if (st.type === 'campfire' && st.position.distanceTo(this.position) < 6.0) {
          nearCampfire = true;
          break;
        }
      }
    }
    this.vitals.temperature = nearCampfire ? 28 : 22;

    // --- 2. MOVEMENT LOGIC ---
    const moveInput = input.getMovementVector();
    const hasMoveInput = Math.hypot(moveInput.forward, moveInput.right) > 0.05;

    let currentSpeed = this.moveSpeed;
    if (this.isCrouched) currentSpeed *= 0.55;
    else if (isSprinting) currentSpeed *= this.sprintMultiplier;

    if (hasMoveInput) {
      // Calculate world movement direction based on camera yaw
      const camYaw = input.yaw;
      const moveAngle = Math.atan2(moveInput.right, moveInput.forward) + camYaw;

      const vx = Math.sin(moveAngle) * currentSpeed;
      const vz = Math.cos(moveAngle) * currentSpeed;

      this.position.x += vx * delta;
      this.position.z += vz * delta;

      // Smooth rotate hero towards movement direction
      const targetRotY = moveAngle;
      let diff = targetRotY - this.rotationY;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      this.rotationY += diff * 12 * delta;

      // Play footstep sound periodically
      if (Math.random() < delta * (isSprinting ? 3.5 : 2.2)) {
        if (this.sound) this.sound.playFootstep();
      }
    }

    // Keep hero aligned with terrain height
    const groundY = terrain.getHeight(this.position.x, this.position.z);
    this.position.y = groundY;

    // Sync 3D model transform
    this.model.root.position.copy(this.position);
    this.model.root.rotation.y = this.rotationY;

    // Update animations
    let animState = 'idle';
    if (this.isDodgeRolling) animState = 'dodge';
    else if (this.isCrouched) animState = 'crouch';
    else if (hasMoveInput) animState = isSprinting ? 'run' : 'walk';

    this.model.updateAnimation(delta, animState, hasMoveInput ? (isSprinting ? 5.5 : 3.0) : 0);

    // Death check
    if (this.vitals.health <= 0 && onDeath) {
      onDeath();
    }
  }

  triggerAttack() {
    if (this.attackCooldown > 0 || this.vitals.stamina < 8) return false;
    this.attackCooldown = 0.45;
    this.vitals.stamina = Math.max(0, this.vitals.stamina - 8);
    this.model.triggerAttack();
    if (this.sound) this.sound.playAttackSwing();
    return true;
  }

  triggerDodge() {
    if (this.dodgeCooldown > 0 || this.vitals.stamina < 20) return false;
    this.dodgeCooldown = 0.8;
    this.isDodgeRolling = true;
    this.isInvulnerable = true;
    this.vitals.stamina -= 20;

    // Swift forward thrust
    const thrustDist = 4.5;
    this.position.x += Math.sin(this.rotationY) * thrustDist * 0.4;
    this.position.z += Math.cos(this.rotationY) * thrustDist * 0.4;

    this.model.triggerDodge();
    if (this.sound) this.sound.playDodgeRoll();

    setTimeout(() => {
      this.isDodgeRolling = false;
      this.isInvulnerable = false;
    }, 450);

    return true;
  }

  toggleCrouch(isCrouched) {
    this.isCrouched = isCrouched;
  }

  takeDamage(amount, source = 'Inimigo') {
    if (this.isInvulnerable) return;

    // Defense mitigation
    const mitigated = Math.max(1, amount * (100 / (100 + this.defense)));
    this.vitals.health = Math.max(0, this.vitals.health - mitigated);

    if (this.sound) this.sound.playHitImpact();
    return Math.round(mitigated);
  }

  heal(amount) {
    this.vitals.health = Math.min(this.vitals.maxHealth, this.vitals.health + amount);
  }

  eat(foodVal) {
    this.vitals.hunger = Math.min(this.vitals.maxHunger, this.vitals.hunger + foodVal);
  }

  drink(waterVal) {
    this.vitals.thirst = Math.min(this.vitals.maxThirst, this.vitals.thirst + waterVal);
  }

  gainXp(amount, onLevelUp) {
    this.xp += amount;
    while (this.xp >= this.xpToLevel) {
      this.xp -= this.xpToLevel;
      this.level += 1;
      this.xpToLevel = Math.round(this.xpToLevel * 1.5);
      this.vitals.maxHealth += 15;
      this.vitals.health = this.vitals.maxHealth;
      this.baseDamage += 4;
      if (onLevelUp) onLevelUp(this.level);
    }
  }

  getAttackHitbox() {
    // 2.6 meter reach in front of the character
    const reach = 2.6;
    const hitCenter = new THREE.Vector3(
      this.position.x + Math.sin(this.rotationY) * reach,
      this.position.y + 0.8,
      this.position.z + Math.cos(this.rotationY) * reach
    );
    return { center: hitCenter, radius: 2.0 };
  }
}
