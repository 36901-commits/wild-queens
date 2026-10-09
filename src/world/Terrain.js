// ====================================================================
// WILD QUEENS — PROCEDURAL OPEN-WORLD TERRAIN & HARVESTABLE NODES
// Biomes: Bosque dos Sussurros, Ruínas de Nova Éden, Lago, Bunker Ômega
// ====================================================================

import * as THREE from '../three.js';

export class WorldTerrain {
  constructor(scene) {
    this.scene = scene;
    this.worldSize = 300; // 300x300 meters open world
    this.segments = 120;
    this.nodes = []; // Harvestable resources
    this.staticDecor = [];

    this.materials = {
      ground: new THREE.MeshStandardMaterial({
        color: 0x223824, // Deep mossy woodland green
        roughness: 0.9,
        metalness: 0.05,
        flatShading: true
      }),
      water: new THREE.MeshStandardMaterial({
        color: 0x1e3a8a,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85
      }),
      ruinConcrete: new THREE.MeshStandardMaterial({
        color: 0x475569,
        roughness: 0.85,
        metalness: 0.15
      }),
      rustMetal: new THREE.MeshStandardMaterial({
        color: 0x7c2d12,
        roughness: 0.75,
        metalness: 0.6
      }),
      woodTrunk: new THREE.MeshStandardMaterial({
        color: 0x3f2e21,
        roughness: 0.9
      }),
      leaves: new THREE.MeshStandardMaterial({
        color: 0x15803d,
        roughness: 0.6
      }),
      boulder: new THREE.MeshStandardMaterial({
        color: 0x64748b,
        roughness: 0.8,
        metalness: 0.2
      }),
      ironVein: new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.3,
        metalness: 0.9
      }),
      hazardRed: new THREE.MeshBasicMaterial({ color: 0xef4444 })
    };

    this.buildTerrain();
    this.buildWater();
    this.populateForestNodes();
    this.populateRuinNodes();
    this.buildBunkerOmega();
  }

  // Procedural height function based on coordinates
  getHeight(x, z) {
    // Distance from center
    const d = Math.sqrt(x * x + z * z);

    // River / lake depression in South-East quadrant
    const lakeDist = Math.sqrt((x - 45) ** 2 + (z - 45) ** 2);
    let h = Math.sin(x * 0.04) * 2.5 + Math.cos(z * 0.04) * 2.5;
    h += Math.sin(x * 0.1) * 1.0 + Math.cos(z * 0.1) * 1.0;

    // Mountainous ridge in North-West (where Bunker Ômega is embedded)
    if (x < -30 && z < -30) {
      const ridgeDist = Math.sqrt((x + 70) ** 2 + (z + 70) ** 2);
      h += Math.max(0, 16 - ridgeDist * 0.3);
    }

    // Lake carving
    if (lakeDist < 35) {
      h -= (35 - lakeDist) * 0.3;
    }

    return h;
  }

  buildTerrain() {
    const geo = new THREE.PlaneGeometry(this.worldSize, this.worldSize, this.segments, this.segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = this.getHeight(x, z);
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const terrainMesh = new THREE.Mesh(geo, this.materials.ground);
    terrainMesh.receiveShadow = true;
    this.scene.add(terrainMesh);
    this.terrainMesh = terrainMesh;
  }

  buildWater() {
    // Water plane at the lake
    const waterGeo = new THREE.CircleGeometry(32, 24);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMesh = new THREE.Mesh(waterGeo, this.materials.water);
    waterMesh.position.set(45, -0.6, 45);
    this.scene.add(waterMesh);
  }

  populateForestNodes() {
    // Spawn 65 Choppable Trees, 45 Minable Boulders, 30 Berry/Herb Bushes
    for (let i = 0; i < 65; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 10 + Math.random() * 110;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      // Avoid lake center & bunker entrance
      if (Math.hypot(x - 45, z - 45) < 30) continue;
      if (x < -50 && z < -50) continue;

      const y = this.getHeight(x, z);
      this.createTree(x, y, z);
    }

    // Minable boulders & Iron deposits
    for (let i = 0; i < 45; i++) {
      const x = (Math.random() - 0.5) * 220;
      const z = (Math.random() - 0.5) * 220;
      if (Math.hypot(x - 45, z - 45) < 28) continue;

      const y = this.getHeight(x, z);
      this.createBoulder(x, y, z, Math.random() > 0.65 ? 'iron' : 'stone');
    }

    // Herb and Berry Bushes
    for (let i = 0; i < 35; i++) {
      const x = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      if (Math.hypot(x - 45, z - 45) < 26) continue;

      const y = this.getHeight(x, z);
      this.createBush(x, y, z, Math.random() > 0.5 ? 'herb' : 'berry');
    }
  }

  createTree(x, y, z) {
    const treeGroup = new THREE.Group();
    const h = 4.0 + Math.random() * 2.5;

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.35, 0.5, h, 7);
    const trunkMesh = new THREE.Mesh(trunkGeo, this.materials.woodTrunk);
    trunkMesh.position.y = h / 2;
    trunkMesh.castShadow = true;
    treeGroup.add(trunkMesh);

    // Leaves layers (Cone pine/oak layers)
    for (let j = 0; j < 3; j++) {
      const foliageGeo = new THREE.ConeGeometry(2.4 - j * 0.45, 2.2, 7);
      const foliageMesh = new THREE.Mesh(foliageGeo, this.materials.leaves);
      foliageMesh.position.y = h * 0.6 + j * 1.3;
      foliageMesh.castShadow = true;
      treeGroup.add(foliageMesh);
    }

    treeGroup.position.set(x, y, z);
    this.scene.add(treeGroup);

    this.nodes.push({
      type: 'wood',
      name: 'Carvalho Antigo',
      mesh: treeGroup,
      position: new THREE.Vector3(x, y, z),
      hp: 3,
      maxHp: 3,
      gives: { item: 'wood', count: 4, name: 'Madeira' },
      isHarvested: false
    });
  }

  createBoulder(x, y, z, subType = 'stone') {
    const rockGroup = new THREE.Group();
    const rad = 1.0 + Math.random() * 0.7;

    const geo = new THREE.DodecahedronGeometry(rad, 1);
    const mat = subType === 'iron' ? this.materials.ironVein : this.materials.boulder;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.set(1.1, 0.8, 1.2);
    mesh.position.y = rad * 0.6;
    mesh.castShadow = true;
    rockGroup.add(mesh);

    // Extra little crystalline/iron chunks
    if (subType === 'iron') {
      const bitGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const bitMesh = new THREE.Mesh(bitGeo, this.materials.hazardRed);
      bitMesh.position.set(0.3, rad * 0.8, 0.2);
      rockGroup.add(bitMesh);
    }

    rockGroup.position.set(x, y, z);
    this.scene.add(rockGroup);

    this.nodes.push({
      type: subType,
      name: subType === 'iron' ? 'Filão de Ferro Puro' : 'Pedregulho de Granito',
      mesh: rockGroup,
      position: new THREE.Vector3(x, y, z),
      hp: 4,
      maxHp: 4,
      gives: {
        item: subType === 'iron' ? 'iron_ore' : 'stone',
        count: subType === 'iron' ? 2 : 4,
        name: subType === 'iron' ? 'Minério de Ferro' : 'Pedra'
      },
      isHarvested: false
    });
  }

  createBush(x, y, z, subType = 'berry') {
    const bushGroup = new THREE.Group();
    const bushGeo = new THREE.SphereGeometry(0.9, 7, 7);
    bushGeo.scale(1.2, 0.8, 1.1);
    const bushMesh = new THREE.Mesh(bushGeo, this.materials.leaves);
    bushMesh.position.y = 0.6;
    bushGroup.add(bushMesh);

    // Tiny colored berry/flower spheres
    const dotMat = new THREE.MeshBasicMaterial({
      color: subType === 'berry' ? 0xf43f5e : 0x38bdf8
    });
    for (let k = 0; k < 6; k++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 5), dotMat);
      dot.position.set((Math.random() - 0.5) * 1.2, 0.6 + Math.random() * 0.5, (Math.random() - 0.5) * 1.2);
      bushGroup.add(dot);
    }

    bushGroup.position.set(x, y, z);
    this.scene.add(bushGroup);

    this.nodes.push({
      type: subType,
      name: subType === 'berry' ? 'Arbusto de Frutas Silvestres' : 'Erva Medicinal dos Ermos',
      mesh: bushGroup,
      position: new THREE.Vector3(x, y, z),
      hp: 1,
      maxHp: 1,
      gives: {
        item: subType === 'berry' ? 'berry' : 'herb',
        count: 3,
        name: subType === 'berry' ? 'Frutas Silvestres' : 'Erva Medicinal'
      },
      isHarvested: false
    });
  }

  populateRuinNodes() {
    // Ruínas de Nova Éden (Overgrown Highway, Rusted Cars, Overhangs at (x: -40 to 10, z: 20 to 65))
    for (let i = 0; i < 7; i++) {
      const x = -30 + i * 10;
      const z = 40 + (i % 3) * 8;
      const y = this.getHeight(x, z);

      // Collapsed concrete pillar
      const pillarGeo = new THREE.BoxGeometry(2.5, 6.0, 2.5);
      const pillar = new THREE.Mesh(pillarGeo, this.materials.ruinConcrete);
      pillar.position.set(x, y + 2.5, z);
      pillar.rotation.z = (Math.random() - 0.5) * 0.3;
      pillar.castShadow = true;
      this.scene.add(pillar);

      // Rusted Car wreck near pillar
      const carGroup = new THREE.Group();
      const carBody = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 1.8), this.materials.rustMetal);
      carBody.position.y = 0.6;
      carGroup.add(carBody);

      // Cabin roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.9, 1.6), this.materials.ruinConcrete);
      roof.position.set(-0.2, 1.4, 0);
      carGroup.add(roof);

      carGroup.position.set(x + 4, y, z + 2);
      carGroup.rotation.y = Math.random() * Math.PI;
      carGroup.castShadow = true;
      this.scene.add(carGroup);

      // Interactable Scrap Metal Node
      this.nodes.push({
        type: 'scrap',
        name: 'Carcaça de Veículo Militar',
        mesh: carGroup,
        position: new THREE.Vector3(x + 4, y, z + 2),
        hp: 3,
        maxHp: 3,
        gives: { item: 'scrap', count: 3, name: 'Sucata & Peças Eletrônicas' },
        isHarvested: false
      });
    }
  }

  buildBunkerOmega() {
    // Bunker Ômega at high mountain coordinates (-70, -70)
    const bx = -68;
    const bz = -68;
    const by = this.getHeight(bx, bz);

    const bunkerGroup = new THREE.Group();

    // Heavy reinforced blast door frame
    const frameGeo = new THREE.BoxGeometry(10, 8, 4);
    const frame = new THREE.Mesh(frameGeo, this.materials.ruinConcrete);
    frame.position.set(0, 4, 0);
    bunkerGroup.add(frame);

    // Blast Metal Door
    const doorGeo = new THREE.BoxGeometry(6, 6, 0.5);
    const door = new THREE.Mesh(doorGeo, this.materials.rustMetal);
    door.position.set(0, 3.5, 1.8);
    bunkerGroup.add(door);

    // Red warning emergency beacon
    const beaconGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 8);
    const beacon = new THREE.Mesh(beaconGeo, this.materials.hazardRed);
    beacon.position.set(0, 7.5, 2.0);
    bunkerGroup.add(beacon);

    bunkerGroup.position.set(bx, by, bz);
    bunkerGroup.rotation.y = Math.PI * 0.25;
    this.scene.add(bunkerGroup);

    this.bunkerPosition = new THREE.Vector3(bx, by, bz);
  }

  // Harvest logic
  harvestNode(node, damage = 1) {
    if (node.isHarvested) return null;

    node.hp -= damage;

    // Small vibration / shake effect
    const origY = node.mesh.position.y;
    node.mesh.position.y += 0.2;
    setTimeout(() => {
      node.mesh.position.y = origY;
    }, 100);

    if (node.hp <= 0) {
      node.isHarvested = true;
      // Shrink node away smoothly
      let scale = 1.0;
      const interval = setInterval(() => {
        scale -= 0.15;
        if (scale <= 0.05) {
          clearInterval(interval);
          this.scene.remove(node.mesh);
        } else {
          node.mesh.scale.set(scale, scale, scale);
        }
      }, 30);

      return node.gives;
    }

    return null;
  }
}
