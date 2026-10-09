// ====================================================================
// WILD QUEENS — ENEMY FACTIONS & BOSS SYSTEM
// Spore Mutants, Timber Wolves, Hostile Raiders, & Boss "A Matriarca"
// ====================================================================

import * as THREE from '../three.js';

export class EnemyManager {
  constructor(scene, soundEngine) {
    this.scene = scene;
    this.sound = soundEngine;
    this.enemies = [];

    // Shared Materials
    this.materials = {
      mutantSkin: new THREE.MeshStandardMaterial({
        color: 0x3d493a, // Ashen decaying green
        roughness: 0.8
      }),
      sporePustule: new THREE.MeshBasicMaterial({
        color: 0x84cc16 // Glowing radioactive chartreuse fungus
      }),
      wolfFur: new THREE.MeshStandardMaterial({
        color: 0x334155, // Dark gray wolf fur
        roughness: 0.9
      }),
      raiderGear: new THREE.MeshStandardMaterial({
        color: 0x475569,
        roughness: 0.7,
        metalness: 0.3
      }),
      bossRoot: new THREE.MeshStandardMaterial({
        color: 0x1f2937,
        roughness: 0.85
      }),
      bossSporeCore: new THREE.MeshBasicMaterial({
        color: 0xa855f7 // Bioluminescent violet core
      })
    };

    this.spawnAllEnemies();
  }

  spawnAllEnemies() {
    // 1. Spore Mutants in the forest & ruin borders
    const mutantSpawns = [
      { x: -15, z: 25 },
      { x: -28, z: 35 },
      { x: 10, z: 50 },
      { x: -35, z: 60 },
      { x: -50, z: 30 }
    ];
    mutantSpawns.forEach(pos => this.createSporeMutant(pos.x, pos.z));

    // 2. Timber Wolves near the lake perimeter
    const wolfSpawns = [
      { x: 25, z: 30 },
      { x: 55, z: 25 },
      { x: 35, z: 65 }
    ];
    wolfSpawns.forEach(pos => this.createTimberWolf(pos.x, pos.z));

    // 3. Hostile Raiders in Nova Éden ruins
    const raiderSpawns = [
      { x: -20, z: 45 },
      { x: -10, z: 62 },
      { x: -40, z: 48 }
    ];
    raiderSpawns.forEach(pos => this.createRaider(pos.x, pos.z));

    // 4. World Boss: A Matriarca dos Esporos (Guarding Bunker Ômega at -58, -58)
    this.createBossMatriarch(-55, -55);
  }

  createSporeMutant(x, z) {
    const group = new THREE.Group();

    // Torso (Hunched)
    const torsoGeo = new THREE.BoxGeometry(0.7, 0.9, 0.5);
    const torso = new THREE.Mesh(torsoGeo, this.materials.mutantSkin);
    torso.position.y = 1.0;
    torso.rotation.x = 0.25;
    group.add(torso);

    // Glowing fungal pustules
    const pustuleGeo = new THREE.SphereGeometry(0.18, 6, 6);
    const p1 = new THREE.Mesh(pustuleGeo, this.materials.sporePustule);
    p1.position.set(0.3, 1.4, 0.1);
    group.add(p1);

    const p2 = new THREE.Mesh(pustuleGeo, this.materials.sporePustule);
    p2.position.set(-0.25, 1.2, 0.2);
    group.add(p2);

    // Head
    const headGeo = new THREE.SphereGeometry(0.24, 8, 8);
    const head = new THREE.Mesh(headGeo, this.materials.mutantSkin);
    head.position.set(0, 1.6, 0.2);
    group.add(head);

    // Arms
    const armGeo = new THREE.BoxGeometry(0.18, 0.8, 0.18);
    const armL = new THREE.Mesh(armGeo, this.materials.mutantSkin);
    armL.position.set(-0.5, 0.9, 0.1);
    group.add(armL);

    const armR = new THREE.Mesh(armGeo, this.materials.mutantSkin);
    armR.position.set(0.5, 0.9, 0.1);
    group.add(armR);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.22, 0.75, 0.22);
    const legL = new THREE.Mesh(legGeo, this.materials.mutantSkin);
    legL.position.set(-0.22, 0.4, 0);
    group.add(legL);

    const legR = new THREE.Mesh(legGeo, this.materials.mutantSkin);
    legR.position.set(0.22, 0.4, 0);
    group.add(legR);

    group.position.set(x, 0, z);
    this.scene.add(group);

    this.enemies.push({
      id: `mutant_${Math.random().toString(36).substr(2, 6)}`,
      name: 'Mutante dos Esporos',
      type: 'mutant',
      mesh: group,
      spawnPos: new THREE.Vector3(x, 0, z),
      pos: group.position,
      hp: 45,
      maxHp: 45,
      damage: 12,
      speed: 3.4,
      aggroDist: 14,
      attackDist: 2.0,
      attackCooldown: 1.5,
      lastAttackTime: 0,
      state: 'patrol',
      patrolTimer: Math.random() * 5,
      patrolTarget: new THREE.Vector3(x, 0, z),
      limbs: { armL, armR, legL, legR, head },
      drops: { item: 'spore_essence', count: 1, name: 'Essência Fúngica' }
    });
  }

  createTimberWolf(x, z) {
    const group = new THREE.Group();

    // Body (Horizontal quadruped)
    const bodyGeo = new THREE.BoxGeometry(0.5, 0.5, 1.3);
    const body = new THREE.Mesh(bodyGeo, this.materials.wolfFur);
    body.position.y = 0.65;
    group.add(body);

    // Wolf Head & Snout
    const headGeo = new THREE.ConeGeometry(0.24, 0.55, 5);
    headGeo.rotateX(Math.PI / 2);
    const head = new THREE.Mesh(headGeo, this.materials.wolfFur);
    head.position.set(0, 0.85, 0.8);
    group.add(head);

    // Wolf Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.55, 6);
    const fl = new THREE.Mesh(legGeo, this.materials.wolfFur);
    fl.position.set(-0.2, 0.28, 0.45);
    group.add(fl);

    const fr = new THREE.Mesh(legGeo, this.materials.wolfFur);
    fr.position.set(0.2, 0.28, 0.45);
    group.add(fr);

    const bl = new THREE.Mesh(legGeo, this.materials.wolfFur);
    bl.position.set(-0.2, 0.28, -0.45);
    group.add(bl);

    const br = new THREE.Mesh(legGeo, this.materials.wolfFur);
    br.position.set(0.2, 0.28, -0.45);
    group.add(br);

    group.position.set(x, 0, z);
    this.scene.add(group);

    this.enemies.push({
      id: `wolf_${Math.random().toString(36).substr(2, 6)}`,
      name: 'Lobo Cinzento dos Ermos',
      type: 'wolf',
      mesh: group,
      spawnPos: new THREE.Vector3(x, 0, z),
      pos: group.position,
      hp: 35,
      maxHp: 35,
      damage: 15,
      speed: 4.8,
      aggroDist: 18,
      attackDist: 2.2,
      attackCooldown: 1.2,
      lastAttackTime: 0,
      state: 'patrol',
      patrolTimer: Math.random() * 4,
      patrolTarget: new THREE.Vector3(x, 0, z),
      limbs: { fl, fr, bl, br },
      drops: { item: 'meat', count: 2, name: 'Carne Crua de Caça' }
    });
  }

  createRaider(x, z) {
    const group = new THREE.Group();

    // Humanoid raider
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.9, 0.4), this.materials.raiderGear);
    body.position.y = 1.0;
    group.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), this.materials.raiderGear);
    head.position.y = 1.6;
    group.add(head);

    // Spiked Club weapon in hand
    const club = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.04, 0.9, 6), this.materials.raiderGear);
    club.position.set(0.45, 1.1, 0.3);
    club.rotation.x = 0.5;
    group.add(club);

    group.position.set(x, 0, z);
    this.scene.add(group);

    this.enemies.push({
      id: `raider_${Math.random().toString(36).substr(2, 6)}`,
      name: 'Saqueador Renegado',
      type: 'raider',
      mesh: group,
      spawnPos: new THREE.Vector3(x, 0, z),
      pos: group.position,
      hp: 60,
      maxHp: 60,
      damage: 18,
      speed: 3.6,
      aggroDist: 15,
      attackDist: 2.4,
      attackCooldown: 1.6,
      lastAttackTime: 0,
      state: 'patrol',
      patrolTimer: Math.random() * 5,
      patrolTarget: new THREE.Vector3(x, 0, z),
      drops: { item: 'scrap', count: 3, name: 'Sucata & Munição' }
    });
  }

  createBossMatriarch(x, z) {
    const group = new THREE.Group();

    // Giant towering creature (4m tall)
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.8, 3.5, 8);
    const base = new THREE.Mesh(baseGeo, this.materials.bossRoot);
    base.position.y = 1.75;
    base.castShadow = true;
    group.add(base);

    // Glowing pulsating core
    const coreGeo = new THREE.SphereGeometry(0.8, 10, 10);
    const core = new THREE.Mesh(coreGeo, this.materials.bossSporeCore);
    core.position.set(0, 2.8, 0.3);
    group.add(core);

    // Giant Crown of Thorns
    const crown = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.8, 5), this.materials.bossRoot);
      spike.position.set(Math.cos(a) * 1.0, 3.8, Math.sin(a) * 1.0);
      spike.rotation.z = Math.cos(a) * 0.4;
      crown.add(spike);
    }
    group.add(crown);

    group.position.set(x, 0, z);
    this.scene.add(group);

    this.boss = {
      id: 'boss_matriarch',
      name: 'A Matriarca dos Esporos (CHEFE DOS ERMOS)',
      type: 'boss',
      mesh: group,
      spawnPos: new THREE.Vector3(x, 0, z),
      pos: group.position,
      hp: 350,
      maxHp: 350,
      damage: 32,
      speed: 2.6,
      aggroDist: 26,
      attackDist: 3.8,
      attackCooldown: 2.2,
      lastAttackTime: 0,
      state: 'idle',
      coreMesh: core,
      drops: { item: 'omega_keycard', count: 1, name: 'Cartão de Acesso Ômega' }
    };
    this.enemies.push(this.boss);
  }

  update(delta, playerPos, isPlayerStealth, onPlayerHit) {
    const time = performance.now() * 0.001;

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (e.isDead) continue;

      const distToPlayer = e.pos.distanceTo(playerPos);
      // If player is crouched in stealth, detection radius is cut by half!
      const effectiveAggro = isPlayerStealth ? e.aggroDist * 0.45 : e.aggroDist;

      // Animate Boss core glow
      if (e.type === 'boss' && e.coreMesh) {
        const pulse = 1.0 + Math.sin(time * 4) * 0.15;
        e.coreMesh.scale.set(pulse, pulse, pulse);
      }

      if (distToPlayer < effectiveAggro) {
        // CHASE PLAYER
        e.state = 'chase';
        const dir = new THREE.Vector3().subVectors(playerPos, e.pos).normalize();
        dir.y = 0;

        // Face player
        e.mesh.rotation.y = Math.atan2(dir.x, dir.z);

        if (distToPlayer > e.attackDist) {
          e.pos.addScaledVector(dir, e.speed * delta);
        } else {
          // ATTACK PLAYER
          if (time - e.lastAttackTime >= e.attackCooldown) {
            e.lastAttackTime = time;
            if (onPlayerHit) {
              onPlayerHit(e.damage, e.name);
            }
            if (this.sound) this.sound.playHitImpact();
          }
        }
      } else {
        // PATROL / IDLE
        e.state = 'patrol';
        e.patrolTimer -= delta;
        if (e.patrolTimer <= 0) {
          e.patrolTimer = 3 + Math.random() * 4;
          const offsetAngle = Math.random() * Math.PI * 2;
          const offsetDist = Math.random() * 8;
          e.patrolTarget.set(
            e.spawnPos.x + Math.cos(offsetAngle) * offsetDist,
            0,
            e.spawnPos.z + Math.sin(offsetAngle) * offsetDist
          );
        }

        const distToPatrol = e.pos.distanceTo(e.patrolTarget);
        if (distToPatrol > 0.8) {
          const pDir = new THREE.Vector3().subVectors(e.patrolTarget, e.pos).normalize();
          pDir.y = 0;
          e.mesh.rotation.y = Math.atan2(pDir.x, pDir.z);
          e.pos.addScaledVector(pDir, (e.speed * 0.45) * delta);
        }
      }
    }
  }

  damageEnemy(enemyId, dmg, isCrit = false) {
    const e = this.enemies.find(item => item.id === enemyId);
    if (!e || e.isDead) return null;

    e.hp -= dmg;

    // Flash white/red
    e.mesh.traverse(child => {
      if (child.isMesh && child.material) {
        const origColor = child.material.color ? child.material.color.clone() : null;
        if (origColor) {
          child.material.color.set(0xff0000);
          setTimeout(() => {
            child.material.color.copy(origColor);
          }, 120);
        }
      }
    });

    if (e.hp <= 0) {
      e.isDead = true;
      e.hp = 0;

      // Death fall animation
      let fallAngle = 0;
      const fallInt = setInterval(() => {
        fallAngle += 0.2;
        e.mesh.rotation.z = fallAngle;
        if (fallAngle >= Math.PI / 2) {
          clearInterval(fallInt);
          setTimeout(() => {
            this.scene.remove(e.mesh);
          }, 2500);
        }
      }, 30);

      return { killed: true, enemy: e, drops: e.drops };
    }

    return { killed: false, enemy: e };
  }
}
