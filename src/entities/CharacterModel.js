// ====================================================================
// WILD QUEENS — PROCEDURAL 3D FEMALE HEROINE MODEL GENERATOR
// Fully customizable: Skin, Hair, Makeup, Outfits, Boots, Weapons & Rigging
// ====================================================================

import * as THREE from '../three.js';

export class CharacterModel {
  constructor(config = {}) {
    this.config = Object.assign({
      skinColor: '#d49b7a',        // Skin tone
      hairStyle: 'ponytail',       // ponytail, braid, undercut, afro, bob, long
      hairColor: '#2b1b17',        // Hair color
      makeup: 'guerreira',         // guerreira, rainha, sombra, natural
      lipstick: '#9e2a2b',         // Lipstick tone
      outfitStyle: 'leather',      // leather, valkyrie, huntress, cyber
      outfitColor: '#1e293b',      // Outfit primary color
      bootsStyle: 'combat',        // combat, trail, tactical_high
      accessory: 'holster',        // holster, scarf, goggles, none
      weaponType: 'machete',       // machete, bow, spear, none
      scale: 1.0
    }, config);

    this.root = new THREE.Group();
    this.materials = {};
    this.bones = {};
    this.weaponMesh = null;

    // Animation state
    this.animState = 'idle'; // idle, walk, run, attack, harvest, dodge, crouch
    this.animTimer = 0;
    this.attackPhase = 0;
    this.attackProgress = 0;

    this.buildMaterials();
    this.buildCharacterMesh();
    this.updateOutfit();
  }

  buildMaterials() {
    // Skin PBR Material
    this.materials.skin = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.config.skinColor),
      roughness: 0.65,
      metalness: 0.05
    });

    // Hair Material
    this.materials.hair = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.config.hairColor),
      roughness: 0.5,
      metalness: 0.1
    });

    // Outfit Material
    this.materials.outfit = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.config.outfitColor),
      roughness: 0.6,
      metalness: 0.15
    });

    // Accent / Armor Plates
    this.materials.armor = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#334155'),
      roughness: 0.35,
      metalness: 0.75
    });

    // Leather details
    this.materials.leather = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#3d2b1f'),
      roughness: 0.7,
      metalness: 0.1
    });

    // Boots
    this.materials.boots = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1a1a1a'),
      roughness: 0.5,
      metalness: 0.3
    });

    // Eyes
    this.materials.eyes = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#10b981'), // Striking emerald eyes
      roughness: 0.2,
      metalness: 0.1
    });

    // Makeup / War paint
    this.materials.warpaint = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ef4444')
    });

    // Lipstick
    this.materials.lipstick = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.config.lipstick),
      roughness: 0.4
    });

    // Gold / Royalty accents
    this.materials.gold = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#fbbf24'),
      roughness: 0.3,
      metalness: 0.85
    });
  }

  buildCharacterMesh() {
    // Clean old children if rebuilding
    while (this.root.children.length > 0) {
      this.root.remove(this.root.children[0]);
    }

    const s = this.config.scale;

    // --- ROOT RIGGING NODES ---
    const pelvis = new THREE.Group();
    pelvis.position.y = 1.0 * s;
    this.root.add(pelvis);
    this.bones.pelvis = pelvis;

    // Pelvis mesh (Hips)
    const hipsGeo = new THREE.CylinderGeometry(0.24 * s, 0.22 * s, 0.22 * s, 10);
    const hipsMesh = new THREE.Mesh(hipsGeo, this.materials.outfit);
    pelvis.add(hipsMesh);

    // --- SPINE & TORSO ---
    const spine = new THREE.Group();
    spine.position.y = 0.15 * s;
    pelvis.add(spine);
    this.bones.spine = spine;

    // Waist / Midsection
    const waistGeo = new THREE.CylinderGeometry(0.20 * s, 0.23 * s, 0.22 * s, 10);
    const waistMesh = new THREE.Mesh(waistGeo, this.materials.outfit);
    waistMesh.position.y = 0.11 * s;
    spine.add(waistMesh);

    // Chest / Bust (Athletic, strong feminine silhouette)
    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.28 * s;
    spine.add(chestGroup);
    this.bones.chest = chestGroup;

    const ribGeo = new THREE.CylinderGeometry(0.23 * s, 0.20 * s, 0.24 * s, 10);
    const ribMesh = new THREE.Mesh(ribGeo, this.materials.outfit);
    ribMesh.position.y = 0.1 * s;
    chestGroup.add(ribMesh);

    // Tactical vest / upper chest curves
    const vestGeo = new THREE.SphereGeometry(0.13 * s, 8, 8);
    const leftVest = new THREE.Mesh(vestGeo, this.materials.outfit);
    leftVest.position.set(-0.09 * s, 0.12 * s, 0.12 * s);
    leftVest.scale.set(0.9, 0.9, 0.7);
    chestGroup.add(leftVest);

    const rightVest = new THREE.Mesh(vestGeo, this.materials.outfit);
    rightVest.position.set(0.09 * s, 0.12 * s, 0.12 * s);
    rightVest.scale.set(0.9, 0.9, 0.7);
    chestGroup.add(rightVest);

    // --- NECK & HEAD ---
    const neck = new THREE.Group();
    neck.position.y = 0.28 * s;
    chestGroup.add(neck);

    const neckGeo = new THREE.CylinderGeometry(0.08 * s, 0.09 * s, 0.14 * s, 8);
    const neckMesh = new THREE.Mesh(neckGeo, this.materials.skin);
    neckMesh.position.y = 0.07 * s;
    neck.add(neckMesh);

    const head = new THREE.Group();
    head.position.y = 0.18 * s;
    neck.add(head);
    this.bones.head = head;

    // Head base (Sculpted Stylized Face)
    const headGeo = new THREE.SphereGeometry(0.18 * s, 16, 14);
    headGeo.scale(0.85, 1.05, 0.95);
    const headMesh = new THREE.Mesh(headGeo, this.materials.skin);
    head.add(headMesh);

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.03 * s, 0.07 * s, 5);
    noseGeo.rotateX(Math.PI / 2);
    const noseMesh = new THREE.Mesh(noseGeo, this.materials.skin);
    noseMesh.position.set(0, 0.01 * s, 0.18 * s);
    head.add(noseMesh);

    // Emerald Eyes with Eyeliner
    const eyeGeo = new THREE.SphereGeometry(0.032 * s, 8, 8);
    const leftEye = new THREE.Mesh(eyeGeo, this.materials.eyes);
    leftEye.position.set(-0.065 * s, 0.05 * s, 0.15 * s);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, this.materials.eyes);
    rightEye.position.set(0.065 * s, 0.05 * s, 0.15 * s);
    head.add(rightEye);

    // Eyeliner / Brow accents
    const linerMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const browGeo = new THREE.BoxGeometry(0.055 * s, 0.012 * s, 0.02 * s);
    const leftBrow = new THREE.Mesh(browGeo, linerMat);
    leftBrow.position.set(-0.065 * s, 0.09 * s, 0.155 * s);
    leftBrow.rotation.z = -0.15;
    head.add(leftBrow);

    const rightBrow = new THREE.Mesh(browGeo, linerMat);
    rightBrow.position.set(0.065 * s, 0.09 * s, 0.155 * s);
    rightBrow.rotation.z = 0.15;
    head.add(rightBrow);

    // Lips / Lipstick
    const lipGeo = new THREE.BoxGeometry(0.055 * s, 0.016 * s, 0.025 * s);
    const lipMesh = new THREE.Mesh(lipGeo, this.materials.lipstick);
    lipMesh.position.set(0, -0.07 * s, 0.17 * s);
    head.add(lipMesh);

    // War Paint / Face Paint Decals
    this.buildMakeup(head, s);

    // Hair Model
    this.buildHair(head, s);

    // --- SHOULDERS & ARMS ---
    this.buildArm(chestGroup, true, s);  // Left arm
    this.buildArm(chestGroup, false, s); // Right arm (Weapon hand)

    // --- LEGS & BOOTS ---
    this.buildLeg(pelvis, true, s);  // Left leg
    this.buildLeg(pelvis, false, s); // Right leg

    // --- ACCESSORIES & WEAPONS ---
    this.buildAccessories(s);
    this.buildWeapon(s);

    // Enable shadows for all meshes
    this.root.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  buildMakeup(head, s) {
    if (this.config.makeup === 'guerreira') {
      // Crimson warrior stripes across cheeks
      const stripeGeo = new THREE.BoxGeometry(0.05 * s, 0.015 * s, 0.01 * s);
      const stripeL = new THREE.Mesh(stripeGeo, this.materials.warpaint);
      stripeL.position.set(-0.09 * s, 0.02 * s, 0.145 * s);
      stripeL.rotation.y = -0.5;
      stripeL.rotation.z = 0.2;
      head.add(stripeL);

      const stripeR = new THREE.Mesh(stripeGeo, this.materials.warpaint);
      stripeR.position.set(0.09 * s, 0.02 * s, 0.145 * s);
      stripeR.rotation.y = 0.5;
      stripeR.rotation.z = -0.2;
      head.add(stripeR);
    } else if (this.config.makeup === 'rainha') {
      // Gold war tiara dot & sharp eyeliner
      const crownDotGeo = new THREE.SphereGeometry(0.02 * s, 6, 6);
      const crownDot = new THREE.Mesh(crownDotGeo, this.materials.gold);
      crownDot.position.set(0, 0.13 * s, 0.16 * s);
      head.add(crownDot);
    } else if (this.config.makeup === 'sombra') {
      // Dark stealth smudge
      const smudgeMat = new THREE.MeshBasicMaterial({ color: 0x1e1e1e });
      const smudgeGeo = new THREE.BoxGeometry(0.07 * s, 0.012 * s, 0.01 * s);
      const smL = new THREE.Mesh(smudgeGeo, smudgeMat);
      smL.position.set(-0.07 * s, 0.015 * s, 0.155 * s);
      head.add(smL);
      const smR = new THREE.Mesh(smudgeGeo, smudgeMat);
      smR.position.set(0.07 * s, 0.015 * s, 0.155 * s);
      head.add(smR);
    }
  }

  buildHair(head, s) {
    const hairGroup = new THREE.Group();
    head.add(hairGroup);
    this.hairGroup = hairGroup;

    // Hair cap (Root volume on skull)
    const capGeo = new THREE.SphereGeometry(0.19 * s, 14, 12);
    capGeo.scale(0.92, 1.05, 0.98);
    const capMesh = new THREE.Mesh(capGeo, this.materials.hair);
    capMesh.position.set(0, 0.03 * s, -0.02 * s);
    hairGroup.add(capMesh);

    if (this.config.hairStyle === 'ponytail') {
      // High warrior ponytail
      const tieGeo = new THREE.TorusGeometry(0.04 * s, 0.015 * s, 6, 12);
      const tieMesh = new THREE.Mesh(tieGeo, this.materials.gold);
      tieMesh.position.set(0, 0.16 * s, -0.16 * s);
      hairGroup.add(tieMesh);

      // Tail volume
      const tailGeo = new THREE.CylinderGeometry(0.04 * s, 0.08 * s, 0.45 * s, 8);
      tailGeo.rotateX(-0.5);
      const tailMesh = new THREE.Mesh(tailGeo, this.materials.hair);
      tailMesh.position.set(0, 0.05 * s, -0.32 * s);
      hairGroup.add(tailMesh);
      this.ponytailMesh = tailMesh;
    } else if (this.config.hairStyle === 'braid') {
      // Valkyrie long braid down the shoulder
      for (let i = 0; i < 6; i++) {
        const segGeo = new THREE.SphereGeometry((0.05 - i * 0.005) * s, 8, 8);
        segGeo.scale(1, 1.4, 0.9);
        const seg = new THREE.Mesh(segGeo, this.materials.hair);
        seg.position.set(0.08 * s, (0.05 - i * 0.09) * s, (-0.12 + i * 0.02) * s);
        hairGroup.add(seg);
      }
    } else if (this.config.hairStyle === 'undercut') {
      // Edgy punk undercut (swept volume on one side, shaved buzz on other)
      const crestGeo = new THREE.BoxGeometry(0.14 * s, 0.16 * s, 0.28 * s);
      const crest = new THREE.Mesh(crestGeo, this.materials.hair);
      crest.position.set(-0.06 * s, 0.18 * s, -0.02 * s);
      crest.rotation.z = -0.25;
      hairGroup.add(crest);
    } else if (this.config.hairStyle === 'afro') {
      // Voluminous afro curls
      const afroGeo = new THREE.SphereGeometry(0.26 * s, 12, 12);
      const afro = new THREE.Mesh(afroGeo, this.materials.hair);
      afro.position.set(0, 0.06 * s, -0.04 * s);
      hairGroup.add(afro);
    } else if (this.config.hairStyle === 'bob') {
      // Chic sharp angled bob
      const bobGeo = new THREE.ConeGeometry(0.24 * s, 0.32 * s, 10);
      bobGeo.rotateX(Math.PI);
      const bob = new THREE.Mesh(bobGeo, this.materials.hair);
      bob.position.set(0, 0.02 * s, -0.04 * s);
      hairGroup.add(bob);
    } else {
      // Long wild flowing locks
      const longGeo = new THREE.CylinderGeometry(0.12 * s, 0.22 * s, 0.55 * s, 8);
      const longMesh = new THREE.Mesh(longGeo, this.materials.hair);
      longMesh.position.set(0, -0.1 * s, -0.12 * s);
      hairGroup.add(longMesh);
    }
  }

  buildArm(parent, isLeft, s) {
    const side = isLeft ? -1 : 1;

    // Shoulder Joint
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.26 * s, 0.22 * s, 0);
    parent.add(shoulder);

    if (isLeft) this.bones.leftShoulder = shoulder;
    else this.bones.rightShoulder = shoulder;

    // Upper Arm
    const bicepGeo = new THREE.CylinderGeometry(0.06 * s, 0.055 * s, 0.28 * s, 8);
    const bicepMesh = new THREE.Mesh(bicepGeo, this.materials.skin);
    bicepMesh.position.y = -0.14 * s;
    shoulder.add(bicepMesh);

    // Shoulder Armor Pauldron
    const pauldronGeo = new THREE.SphereGeometry(0.09 * s, 8, 8);
    pauldronGeo.scale(1, 0.8, 1);
    const pauldron = new THREE.Mesh(pauldronGeo, this.materials.armor);
    pauldron.position.y = 0.02 * s;
    shoulder.add(pauldron);

    // Elbow Joint / Forearm
    const elbow = new THREE.Group();
    elbow.position.y = -0.28 * s;
    shoulder.add(elbow);

    if (isLeft) this.bones.leftElbow = elbow;
    else this.bones.rightElbow = elbow;

    const forearmGeo = new THREE.CylinderGeometry(0.055 * s, 0.05 * s, 0.26 * s, 8);
    const forearmMesh = new THREE.Mesh(forearmGeo, this.materials.leather); // Tactical bracers
    forearmMesh.position.y = -0.13 * s;
    elbow.add(forearmMesh);

    // Hand
    const hand = new THREE.Group();
    hand.position.y = -0.26 * s;
    elbow.add(hand);

    if (isLeft) this.bones.leftHand = hand;
    else this.bones.rightHand = hand;

    const handGeo = new THREE.BoxGeometry(0.06 * s, 0.09 * s, 0.05 * s);
    const handMesh = new THREE.Mesh(handGeo, this.materials.skin);
    handMesh.position.y = -0.04 * s;
    hand.add(handMesh);
  }

  buildLeg(parent, isLeft, s) {
    const side = isLeft ? -1 : 1;

    // Hip Joint
    const hip = new THREE.Group();
    hip.position.set(side * 0.13 * s, -0.05 * s, 0);
    parent.add(hip);

    if (isLeft) this.bones.leftHip = hip;
    else this.bones.rightHip = hip;

    // Thigh (Pants / Armor)
    const thighGeo = new THREE.CylinderGeometry(0.09 * s, 0.075 * s, 0.45 * s, 8);
    const thighMesh = new THREE.Mesh(thighGeo, this.materials.outfit);
    thighMesh.position.y = -0.22 * s;
    hip.add(thighMesh);

    // Knee Joint / Shin
    const knee = new THREE.Group();
    knee.position.y = -0.45 * s;
    hip.add(knee);

    if (isLeft) this.bones.leftKnee = knee;
    else this.bones.rightKnee = knee;

    // Shin / Calf
    const shinGeo = new THREE.CylinderGeometry(0.075 * s, 0.065 * s, 0.42 * s, 8);
    const shinMesh = new THREE.Mesh(shinGeo, this.materials.outfit);
    shinMesh.position.y = -0.21 * s;
    knee.add(shinMesh);

    // Knee Pad Guard
    const kneePadGeo = new THREE.BoxGeometry(0.08 * s, 0.1 * s, 0.04 * s);
    const kneePad = new THREE.Mesh(kneePadGeo, this.materials.armor);
    kneePad.position.set(0, 0, 0.07 * s);
    knee.add(kneePad);

    // Combat Boot
    const foot = new THREE.Group();
    foot.position.y = -0.42 * s;
    knee.add(foot);

    const bootGeo = new THREE.BoxGeometry(0.09 * s, 0.14 * s, 0.22 * s);
    const bootMesh = new THREE.Mesh(bootGeo, this.materials.boots);
    bootMesh.position.set(0, -0.03 * s, 0.04 * s);
    foot.add(bootMesh);
  }

  buildAccessories(s) {
    if (this.config.accessory === 'holster') {
      // Thigh gun/knife holster on right thigh
      if (this.bones.rightHip) {
        const holsterGeo = new THREE.BoxGeometry(0.08 * s, 0.18 * s, 0.07 * s);
        const holsterMesh = new THREE.Mesh(holsterGeo, this.materials.leather);
        holsterMesh.position.set(0.12 * s, -0.22 * s, 0.02 * s);
        holsterMesh.rotation.z = -0.1;
        this.bones.rightHip.add(holsterMesh);
      }
    } else if (this.config.accessory === 'scarf') {
      // Crimson survivor neck scarf
      if (this.bones.chest) {
        const scarfMat = new THREE.MeshStandardMaterial({ color: 0xbe123c, roughness: 0.8 });
        const scarfGeo = new THREE.TorusGeometry(0.14 * s, 0.06 * s, 8, 12);
        const scarfMesh = new THREE.Mesh(scarfGeo, scarfMat);
        scarfMesh.position.set(0, 0.28 * s, 0.02 * s);
        scarfMesh.rotation.x = Math.PI / 2;
        this.bones.chest.add(scarfMesh);
      }
    } else if (this.config.accessory === 'goggles') {
      // Tactical goggles on forehead
      if (this.bones.head) {
        const goggleMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 });
        const goggleGeo = new THREE.BoxGeometry(0.16 * s, 0.05 * s, 0.06 * s);
        const goggle = new THREE.Mesh(goggleGeo, goggleMat);
        goggle.position.set(0, 0.11 * s, 0.14 * s);
        this.bones.head.add(goggle);
      }
    }
  }

  buildWeapon(s) {
    if (!this.bones.rightHand) return;

    if (this.weaponMesh) {
      this.bones.rightHand.remove(this.weaponMesh);
      this.weaponMesh = null;
    }

    if (this.config.weaponType === 'machete') {
      const weaponGroup = new THREE.Group();

      // Handle / Grip
      const gripGeo = new THREE.CylinderGeometry(0.02 * s, 0.02 * s, 0.16 * s, 8);
      const gripMesh = new THREE.Mesh(gripGeo, this.materials.leather);
      gripMesh.position.y = -0.05 * s;
      weaponGroup.add(gripMesh);

      // Pommel / Guard
      const guardGeo = new THREE.BoxGeometry(0.08 * s, 0.02 * s, 0.04 * s);
      const guardMesh = new THREE.Mesh(guardGeo, this.materials.gold);
      guardMesh.position.y = 0.04 * s;
      weaponGroup.add(guardMesh);

      // Titanium Blade
      const bladeMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        metalness: 0.95,
        roughness: 0.2
      });
      const bladeGeo = new THREE.BoxGeometry(0.045 * s, 0.65 * s, 0.012 * s);
      const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
      bladeMesh.position.set(0, 0.36 * s, 0);
      weaponGroup.add(bladeMesh);

      // Tip curve
      const tipGeo = new THREE.ConeGeometry(0.025 * s, 0.1 * s, 4);
      const tipMesh = new THREE.Mesh(tipGeo, bladeMat);
      tipMesh.position.set(0, 0.73 * s, 0);
      weaponGroup.add(tipMesh);

      weaponGroup.rotation.x = Math.PI / 2;
      weaponGroup.position.set(0, -0.05 * s, 0.04 * s);
      this.bones.rightHand.add(weaponGroup);
      this.weaponMesh = weaponGroup;
    } else if (this.config.weaponType === 'bow') {
      const bowGroup = new THREE.Group();
      const bowMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });
      const limbGeo = new THREE.TorusGeometry(0.45 * s, 0.02 * s, 6, 16, Math.PI * 0.7);
      const limbMesh = new THREE.Mesh(limbGeo, bowMat);
      limbMesh.rotation.z = Math.PI * 0.65;
      bowGroup.add(limbMesh);

      // Bowstring
      const stringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const stringGeo = new THREE.CylinderGeometry(0.003 * s, 0.003 * s, 0.7 * s);
      const stringMesh = new THREE.Mesh(stringGeo, stringMat);
      stringMesh.position.x = -0.15 * s;
      bowGroup.add(stringMesh);

      bowGroup.position.set(0, -0.05 * s, 0);
      this.bones.rightHand.add(bowGroup);
      this.weaponMesh = bowGroup;
    }
  }

  updateOutfit() {
    this.materials.skin.color.set(this.config.skinColor);
    this.materials.hair.color.set(this.config.hairColor);
    this.materials.outfit.color.set(this.config.outfitColor);
    this.materials.lipstick.color.set(this.config.lipstick);
  }

  // --- PROCEDURAL ANIMATIONS ---
  updateAnimation(delta, state = 'idle', speed = 0) {
    this.animTimer += delta;
    const t = this.animTimer;

    const {
      pelvis, spine, chest, head,
      leftShoulder, rightShoulder, leftElbow, rightElbow,
      leftHip, rightHip, leftKnee, rightKnee
    } = this.bones;

    if (!pelvis) return;

    if (this.animState === 'attack') {
      this.attackProgress += delta * 6; // Quick swing
      const prog = this.attackProgress;

      if (prog < 1.0) {
        // Swing forward with right arm
        const swing = Math.sin(prog * Math.PI);
        rightShoulder.rotation.x = -1.2 + swing * 2.2;
        rightShoulder.rotation.y = -0.5 + swing * 1.0;
        rightShoulder.rotation.z = 0.4;
        spine.rotation.y = swing * 0.5;
        head.rotation.y = -swing * 0.2;
      } else {
        // Reset to normal state
        this.animState = state;
        this.attackProgress = 0;
      }
      return;
    }

    if (this.animState === 'dodge') {
      this.attackProgress += delta * 4;
      if (this.attackProgress < 1.0) {
        // Roll animation
        pelvis.position.y = 0.5 + Math.sin(this.attackProgress * Math.PI) * 0.3;
        this.root.rotation.x = this.attackProgress * Math.PI * 2;
      } else {
        this.animState = state;
        this.attackProgress = 0;
        this.root.rotation.x = 0;
        pelvis.position.y = 1.0;
      }
      return;
    }

    // Default base resets
    this.root.rotation.x = 0;

    if (state === 'run' || (state === 'walk' && speed > 2)) {
      const freq = speed > 4 ? 12 : 8;
      const legAmp = speed > 4 ? 0.75 : 0.45;
      const armAmp = speed > 4 ? 0.65 : 0.35;

      const cycle = Math.sin(t * freq);

      // Pelvis bob
      pelvis.position.y = 1.0 + Math.abs(Math.sin(t * freq)) * 0.06;
      spine.rotation.x = 0.15; // Lean forward

      // Legs alternate
      leftHip.rotation.x = cycle * legAmp;
      rightHip.rotation.x = -cycle * legAmp;

      leftKnee.rotation.x = Math.max(0, -cycle * legAmp * 1.2);
      rightKnee.rotation.x = Math.max(0, cycle * legAmp * 1.2);

      // Arms swing opposite to legs
      leftShoulder.rotation.x = -cycle * armAmp;
      rightShoulder.rotation.x = cycle * armAmp;
      leftElbow.rotation.x = -0.4;
      rightElbow.rotation.x = -0.4;

      // Ponytail bounce
      if (this.ponytailMesh) {
        this.ponytailMesh.rotation.x = -0.5 + Math.abs(cycle) * 0.25;
      }
    } else if (state === 'crouch') {
      pelvis.position.y = 0.65;
      spine.rotation.x = 0.4; // Deep stealth crouch
      leftHip.rotation.x = -0.6;
      rightHip.rotation.x = -0.6;
      leftKnee.rotation.x = 1.1;
      rightKnee.rotation.x = 1.1;
      leftShoulder.rotation.x = 0.3;
      rightShoulder.rotation.x = 0.3;
      leftElbow.rotation.x = -0.7;
      rightElbow.rotation.x = -0.7;
    } else {
      // IDLE: Subtle breathing and micro weight shift
      const breath = Math.sin(t * 2.2);
      pelvis.position.y = 1.0 + breath * 0.015;
      chest.scale.set(1.0 + breath * 0.02, 1.0, 1.0 + breath * 0.02);

      spine.rotation.x = 0.02 + breath * 0.01;
      head.rotation.y = Math.sin(t * 0.8) * 0.06;

      leftShoulder.rotation.x = 0.1 + breath * 0.02;
      rightShoulder.rotation.x = 0.1 + breath * 0.02;
      leftShoulder.rotation.z = -0.1;
      rightShoulder.rotation.z = 0.1;

      leftElbow.rotation.x = -0.2;
      rightElbow.rotation.x = -0.3;

      leftHip.rotation.x = 0.04;
      rightHip.rotation.x = -0.04;
      leftKnee.rotation.x = 0.04;
      rightKnee.rotation.x = 0.04;
    }
  }

  triggerAttack() {
    this.animState = 'attack';
    this.attackProgress = 0;
  }

  triggerDodge() {
    this.animState = 'dodge';
    this.attackProgress = 0;
  }
}
