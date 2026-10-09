// ====================================================================
// WILD QUEENS — BASE BUILDING & SHELTER SYSTEM
// Foundations, Walls, Doors, Campfire, Workbenches, Chests & Defenses
// ====================================================================

import * as THREE from '../three.js';

export class BuildingSystem {
  constructor(scene, soundEngine) {
    this.scene = scene;
    this.sound = soundEngine;
    this.placedStructures = [];
    this.activeGhostMesh = null;
    this.selectedBuildingType = 'campfire';
    this.rotationAngle = 0;
    this.isBuildModeActive = false;

    // Materials
    this.woodMat = new THREE.MeshStandardMaterial({
      color: 0x854d0e,
      roughness: 0.85
    });

    this.stoneMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.9,
      metalness: 0.1
    });

    this.fireMat = new THREE.MeshBasicMaterial({
      color: 0xf97316
    });

    // Ghost materials (Holographic green / red)
    this.ghostValidMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    this.ghostInvalidMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    // Building blueprints definitions
    this.blueprints = {
      campfire: {
        id: 'campfire',
        name: 'Fogueira Acolhedora',
        desc: 'Aquece a sobrevivente, ilumina a noite e assa carnes.',
        cost: { wood: 5, stone: 3 },
        icon: '🔥'
      },
      foundation: {
        id: 'foundation',
        name: 'Fundação de Madeira',
        desc: 'Base nivelada para erguer paredes e abrigos.',
        cost: { wood: 8 },
        icon: '🪵'
      },
      wall: {
        id: 'wall',
        name: 'Parede de Troncos Reforçada',
        desc: 'Bloqueia o vento frio e ataques de feras.',
        cost: { wood: 6 },
        icon: '🧱'
      },
      door: {
        id: 'door',
        name: 'Portal com Tranca Tática',
        desc: 'Entrada segura para seu abrigo.',
        cost: { wood: 7, iron_ore: 1 },
        icon: '🚪'
      },
      chest: {
        id: 'chest',
        name: 'Baú de Suprimentos',
        desc: 'Armazena com segurança recursos e armas valiosas.',
        cost: { wood: 10, scrap: 2 },
        icon: '📦'
      },
      workbench: {
        id: 'workbench',
        name: 'Bancada de Armas Avançada',
        desc: 'Desbloqueia receitas bélicas de nível superior.',
        cost: { wood: 12, iron_ore: 3, scrap: 4 },
        icon: '🔨'
      },
      spikes: {
        id: 'spikes',
        name: 'Estacas Defensivas',
        desc: 'Armadilha pontiaguda que perfura invasores.',
        cost: { wood: 6 },
        icon: '⚔️'
      }
    };
  }

  createStructureMesh(type) {
    const group = new THREE.Group();

    if (type === 'campfire') {
      // Ring of stones
      const stones = new THREE.Group();
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const s = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2, 0), this.stoneMat);
        s.position.set(Math.cos(a) * 0.7, 0.1, Math.sin(a) * 0.7);
        stones.add(s);
      }
      group.add(stones);

      // Wood logs crossed
      const logGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.0, 6);
      const l1 = new THREE.Mesh(logGeo, this.woodMat);
      l1.rotation.set(0.4, 0.4, 0.8);
      l1.position.y = 0.2;
      group.add(l1);

      const l2 = new THREE.Mesh(logGeo, this.woodMat);
      l2.rotation.set(-0.4, -0.4, 0.8);
      l2.position.y = 0.2;
      group.add(l2);

      // Embers flame
      const flameGeo = new THREE.ConeGeometry(0.35, 0.7, 6);
      const flame = new THREE.Mesh(flameGeo, this.fireMat);
      flame.position.y = 0.45;
      group.add(flame);

      // Real dynamic light
      const fireLight = new THREE.PointLight(0xf97316, 2.0, 16);
      fireLight.position.y = 0.8;
      fireLight.castShadow = true;
      group.add(fireLight);
      group.userData.light = fireLight;
    } else if (type === 'foundation') {
      const geo = new THREE.BoxGeometry(4.0, 0.4, 4.0);
      const mesh = new THREE.Mesh(geo, this.woodMat);
      mesh.position.y = 0.2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    } else if (type === 'wall') {
      const geo = new THREE.BoxGeometry(4.0, 3.2, 0.35);
      const mesh = new THREE.Mesh(geo, this.woodMat);
      mesh.position.y = 1.6;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    } else if (type === 'door') {
      // Wall with doorway cutout
      const postL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.2, 0.35), this.woodMat);
      postL.position.set(-1.4, 1.6, 0);
      group.add(postL);

      const postR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.2, 0.35), this.woodMat);
      postR.position.set(1.4, 1.6, 0);
      group.add(postR);

      const top = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.8, 0.35), this.woodMat);
      top.position.set(0, 2.8, 0);
      group.add(top);

      // Wooden door
      const doorMesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.3, 0.15), this.stoneMat);
      doorMesh.position.set(0, 1.2, 0);
      group.add(doorMesh);
    } else if (type === 'chest') {
      const boxGeo = new THREE.BoxGeometry(1.2, 0.8, 0.8);
      const box = new THREE.Mesh(boxGeo, this.woodMat);
      box.position.y = 0.4;
      group.add(box);

      // Metal straps
      const strapGeo = new THREE.BoxGeometry(1.22, 0.1, 0.82);
      const strap = new THREE.Mesh(strapGeo, this.stoneMat);
      strap.position.y = 0.4;
      group.add(strap);
    } else if (type === 'workbench') {
      const tableGeo = new THREE.BoxGeometry(2.0, 0.9, 1.2);
      const table = new THREE.Mesh(tableGeo, this.woodMat);
      table.position.y = 0.45;
      group.add(table);

      // Anvil / Tool
      const anvilGeo = new THREE.BoxGeometry(0.5, 0.3, 0.3);
      const anvil = new THREE.Mesh(anvilGeo, this.stoneMat);
      anvil.position.set(-0.5, 1.05, 0);
      group.add(anvil);
    } else if (type === 'spikes') {
      for (let i = -1; i <= 1; i++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.2, 5), this.woodMat);
        spike.rotation.x = 0.4;
        spike.position.set(i * 0.8, 0.5, 0);
        group.add(spike);
      }
    }

    return group;
  }

  setBuildMode(active, type = 'campfire') {
    this.isBuildModeActive = active;
    this.selectedBuildingType = type;

    if (this.activeGhostMesh) {
      this.scene.remove(this.activeGhostMesh);
      this.activeGhostMesh = null;
    }

    if (active) {
      this.activeGhostMesh = this.createStructureMesh(type);
      // Apply ghost transparent material to all meshes in group
      this.activeGhostMesh.traverse(child => {
        if (child.isMesh) {
          child.material = this.ghostValidMat;
        }
      });
      this.scene.add(this.activeGhostMesh);
    }
  }

  updateGhost(targetPosition, isValid = true) {
    if (!this.activeGhostMesh) return;
    this.activeGhostMesh.position.copy(targetPosition);
    this.activeGhostMesh.rotation.y = this.rotationAngle;

    const targetMat = isValid ? this.ghostValidMat : this.ghostInvalidMat;
    this.activeGhostMesh.traverse(child => {
      if (child.isMesh) {
        child.material = targetMat;
      }
    });
  }

  rotateBuilding() {
    this.rotationAngle += Math.PI / 4;
  }

  placeStructure(pos, inventory) {
    const bp = this.blueprints[this.selectedBuildingType];
    if (!bp) return false;

    // Check inventory cost
    for (const [res, count] of Object.entries(bp.cost)) {
      if ((inventory[res] || 0) < count) {
        return { success: false, reason: `Requer ${count} de ${res}!` };
      }
    }

    // Deduct cost
    for (const [res, count] of Object.entries(bp.cost)) {
      inventory[res] -= count;
    }

    // Create real solid structure
    const structure = this.createStructureMesh(this.selectedBuildingType);
    structure.position.copy(pos);
    structure.rotation.y = this.rotationAngle;
    this.scene.add(structure);

    this.placedStructures.push({
      type: this.selectedBuildingType,
      mesh: structure,
      position: pos.clone(),
      hp: 100
    });

    if (this.sound) this.sound.playBuildPlace();

    return { success: true, name: bp.name };
  }

  // Animate dynamic lights (e.g. flickering campfire)
  update(time) {
    this.placedStructures.forEach(item => {
      if (item.type === 'campfire' && item.mesh.userData.light) {
        // Flicker intensity
        item.mesh.userData.light.intensity = 1.8 + Math.sin(time * 12) * 0.4 + Math.cos(time * 7) * 0.3;
      }
    });
  }
}
