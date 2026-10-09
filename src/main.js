// ====================================================================
// WILD QUEENS — MAIN GAME BOOTSTRAP & GAME LOOP
// Integrates 3D Engine, Player, World, Survival, Combat, Social & UI
// ====================================================================

import * as THREE from './three.js';
import { GameEngine } from './core/Engine.js';
import { SoundEngine } from './core/Audio.js';
import { InputManager } from './core/Input.js';
import { WorldTerrain } from './world/Terrain.js';
import { BuildingSystem } from './world/Buildings.js';
import { Player } from './entities/Player.js';
import { EnemyManager } from './entities/Enemies.js';
import { NPCManager } from './entities/NPCs.js';
import { InventorySystem } from './systems/Inventory.js';
import { CraftingSystem } from './systems/Crafting.js';
import { QuestSystem } from './systems/Quests.js';
import { CustomizerStudio } from './systems/Customizer.js';
import { UIManager } from './systems/UI.js';

class WildQueensGame {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.sound = new SoundEngine();
    this.engine = new GameEngine(this.canvas, this.sound);
    this.input = new InputManager(this.canvas);

    // Systems
    this.inventory = new InventorySystem(this.sound);
    this.crafting = new CraftingSystem(this.inventory, this.sound);
    this.quests = new QuestSystem(this.sound);

    // World & Entities (initialized during loading)
    this.terrain = null;
    this.buildings = null;
    this.player = null;
    this.enemies = null;
    this.npcs = null;
    this.ui = null;
    this.customizer = null;

    // State
    this.gameState = 'loading'; // loading, menu, studio, playing, dead
    this.lastTime = performance.now();

    this.init();
  }

  async init() {
    try {
      this.updateLoadingProgress(25, 'Gerando relevo e biomas da floresta...');
      await this.wait(100);

      // World terrain
      this.terrain = new WorldTerrain(this.engine.scene);
      this.buildings = new BuildingSystem(this.engine.scene, this.sound);

      this.updateLoadingProgress(55, 'Configurando sistemas de sobrevivência e atmosfera...');
      await this.wait(100);

      // Load heroine configuration
      let heroConfig = {};
      try {
        const saved = localStorage.getItem('wild_queens_hero');
        if (saved) heroConfig = JSON.parse(saved);
      } catch (e) {}

      // Player Heroine
      this.player = new Player(this.engine.scene, this.sound, heroConfig);
      this.applyClassPerks(heroConfig.perkClass || 'guerreira');

      this.updateLoadingProgress(80, 'Populando rainhas aliadas, fauna e colônias de esporos...');
      await this.wait(100);

      // Enemies & NPCs
      this.enemies = new EnemyManager(this.engine.scene, this.sound);
      this.npcs = new NPCManager(this.engine.scene, this.sound);

      // UI Orchestrator
      this.ui = new UIManager(this);

      // Customizer Studio
      this.customizer = new CustomizerStudio(this.player.model, (newConf) => {
        this.applyClassPerks(newConf.perkClass);
        const hudName = document.getElementById('hud-hero-name');
        const hudTitle = document.getElementById('hud-hero-title');
        if (hudName) hudName.textContent = newConf.name;
        if (hudTitle) hudTitle.textContent = newConf.title;
      });

      this.bindGameEvents();

      this.updateLoadingProgress(100, 'Os ermos aguardam sua liderança!');
      await this.wait(150);

      const btnStart = document.getElementById('btn-start-game');
      const loadingScreen = document.getElementById('loading-screen');

      const enterMenu = () => {
        if (this._hasEnteredMenu) return;
        this._hasEnteredMenu = true;
        this.sound.init();
        loadingScreen?.classList.add('hidden');
        this.showMainMenu();
      };

      if (btnStart) {
        btnStart.style.display = 'inline-block';
        btnStart.addEventListener('click', enterMenu);
      }

      // Also allow clicking anywhere on loading screen to enter immediately
      loadingScreen?.addEventListener('click', enterMenu);

      // Auto-transition to main menu after 1.2s so it never freezes
      setTimeout(enterMenu, 1200);

    } catch (err) {
      console.error('Init error:', err);
      const tipEl = document.getElementById('loading-tip');
      if (tipEl) {
        tipEl.innerHTML = `<span style="color: #ef4444;">Aviso: ${err.message}</span><br><button id="btn-force-enter" class="btn-primary" style="margin-top: 10px;">ENTRAR NO JOGO</button>`;
        document.getElementById('btn-force-enter')?.addEventListener('click', () => {
          document.getElementById('loading-screen')?.classList.add('hidden');
          this.showMainMenu();
        });
      }
    }
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  updateLoadingProgress(pct, tip) {
    const bar = document.getElementById('loading-progress');
    const tipEl = document.getElementById('loading-tip');
    if (bar) bar.style.width = `${pct}%`;
    if (tipEl && tip) tipEl.textContent = tip;
  }

  showMainMenu() {
    this.gameState = 'menu';
    const menu = document.getElementById('main-menu');
    if (menu) menu.classList.remove('hidden');

    if (!this._menuEventsBound) {
      this._menuEventsBound = true;
      document.getElementById('btn-menu-new')?.addEventListener('click', () => {
        this.sound.init();
        menu?.classList.add('hidden');
        this.startGame();
      });

      document.getElementById('btn-menu-continue')?.addEventListener('click', () => {
        this.sound.init();
        menu?.classList.add('hidden');
        this.startGame();
      });

      document.getElementById('btn-menu-customize')?.addEventListener('click', () => {
        menu?.classList.add('hidden');
        this.openCustomizerStudio();
      });

      document.getElementById('btn-menu-lore')?.addEventListener('click', () => {
        alert('WILD QUEENS: O Colapso Verde transformou a Terra em uma selva hostil. Grupos de mulheres formaram irmandades independentes para preservar o conhecimento e reconstruir uma sociedade justa.');
      });
    }
  }

  openCustomizerStudio() {
    this.gameState = 'studio';
    const studio = document.getElementById('customizer-screen');
    if (studio) studio.classList.remove('hidden');

    // Position camera for Heroine Portrait in studio
    this.engine.camera.position.set(0, 1.4, 2.8);
    this.engine.camera.lookAt(0, 1.3, 0);

    document.getElementById('btn-custom-back')?.addEventListener('click', () => {
      studio?.classList.add('hidden');
      this.showMainMenu();
    });

    document.getElementById('btn-custom-save')?.addEventListener('click', () => {
      this.customizer.saveConfig();
      studio?.classList.add('hidden');
      this.startGame();
    });
  }

  startGame() {
    this.gameState = 'playing';
    document.getElementById('game-hud')?.classList.remove('hidden');
    this.sound.resume();

    // Start autosave
    setInterval(() => this.autosave(), 25000);

    // Initial Quest Toast
    const q = this.quests.getCurrentQuest();
    if (q) {
      this.ui.showToast(`🎯 Missão Ativa: ${q.title}`);
    }

    // Start animation loop
    this.loop();
  }

  bindGameEvents() {
    // Input events
    this.input.on('attack', () => {
      if (this.gameState !== 'playing') return;

      if (this.buildings.isBuildModeActive) {
        // Place building if in build mode
        this.attemptPlaceBuilding();
        return;
      }

      const attacked = this.player.triggerAttack();
      if (attacked) {
        this.checkCombatHits();
        this.checkHarvestHits();
      }
    });

    this.input.on('dodge', () => {
      if (this.gameState !== 'playing') return;
      this.player.triggerDodge();
    });

    this.input.on('toggleCrouch', (isCrouched) => {
      this.player.toggleCrouch(isCrouched);
    });

    this.input.on('interact', () => {
      if (this.gameState !== 'playing') return;
      this.checkInteractPrompt(true);
    });

    this.input.on('toggleInventory', () => {
      this.ui.toggleModal('modal-inventory');
    });

    this.input.on('keyDown', (code) => {
      if (this.gameState !== 'playing') return;

      if (code === 'KeyB') {
        this.ui.toggleBuildHUD();
      } else if (code === 'KeyM') {
        this.ui.toggleModal('modal-map');
      } else if (code === 'KeyI' || code === 'Tab') {
        this.ui.toggleModal('modal-inventory');
      } else if (code === 'Digit1') this.selectHotbar(0);
      else if (code === 'Digit2') this.selectHotbar(1);
      else if (code === 'Digit3') this.selectHotbar(2);
      else if (code === 'Digit4') this.selectHotbar(3);
      else if (code === 'Digit5') this.selectHotbar(4);
      else if (code === 'Digit6') this.selectHotbar(5);
    });
  }

  selectHotbar(index) {
    this.inventory.selectedHotbarIndex = index;
    const itemId = this.inventory.hotbar[index];
    if (itemId) {
      this.inventory.useItem(itemId, this.player);
      this.ui.updateHUDVitals();
    }
  }

  applyClassPerks(perkClass) {
    if (perkClass === 'guerreira') {
      this.player.baseDamage = 25;
      this.player.defense = 14;
    } else if (perkClass === 'cacadora') {
      this.player.moveSpeed = 4.6;
      this.player.baseDamage = 20;
    } else if (perkClass === 'engenheira') {
      this.player.defense = 16;
    } else if (perkClass === 'fitoterapeuta') {
      this.player.vitals.maxHunger = 120;
      this.player.vitals.maxThirst = 120;
    }
  }

  checkCombatHits() {
    const hitbox = this.player.getAttackHitbox();
    const isStealth = this.player.isCrouched;

    // Check hit against enemies
    for (const enemy of this.enemies.enemies) {
      if (enemy.isDead) continue;
      const dist = enemy.pos.distanceTo(hitbox.center);
      if (dist <= hitbox.radius) {
        // Calculate damage
        let dmg = this.player.baseDamage + this.player.weaponDamage;
        const isCrit = isStealth || Math.random() < 0.25;
        if (isCrit) dmg = Math.round(dmg * 2.2);

        this.ui.spawnDamageNumber(dmg, isCrit);
        const result = this.enemies.damageEnemy(enemy.id, dmg, isCrit);

        if (result && result.killed) {
          this.player.kills += 1;
          this.player.gainXp(35, (lvl) => {
            this.ui.showToast(`🎉 NÍVEL ACIMA! Você alcançou o Nível ${lvl}!`);
          });

          // Drop loot to inventory
          if (result.drops) {
            this.inventory.addItem(result.drops.item, result.drops.count);
            this.ui.showToast(`🎁 Coletou: ${result.drops.count}x ${result.drops.name}`);
          }

          // Register quest kill
          this.quests.registerKill(enemy.type === 'boss');
          this.quests.checkCompletion(this.player, (q) => {
            this.ui.showToast(`🏆 Missão Concluída: ${q.title}! ${q.reward.text}`);
          });
        }
        break; // Hit one enemy per swing
      }
    }
  }

  checkHarvestHits() {
    const hitbox = this.player.getAttackHitbox();

    for (const node of this.terrain.nodes) {
      if (node.isHarvested) continue;
      const dist = node.position.distanceTo(hitbox.center);
      if (dist <= hitbox.radius + 1.2) {
        this.sound.playHarvest(node.type);
        const reward = this.terrain.harvestNode(node, 1);
        if (reward) {
          this.inventory.addItem(reward.item, reward.count);
          this.player.harvestedCount += reward.count;
          this.ui.showToast(`📦 +${reward.count} ${reward.name}`);

          // Register quest harvest
          this.quests.registerHarvest(reward.item, reward.count);
          this.quests.checkCompletion(this.player, (q) => {
            this.ui.showToast(`🏆 Missão Concluída: ${q.title}! ${q.reward.text}`);
          });

          this.ui.updateHUDVitals();
        }
        break;
      }
    }
  }

  checkInteractPrompt(triggerAction = false) {
    // 1. Check nearby NPCs (Elena, Maya, Vanessa)
    const nearNPC = this.npcs.getNearestNPC(this.player.position, 3.8);
    if (nearNPC) {
      this.ui.showInteractionPrompt('E', `Conversar com ${nearNPC.name}`);
      if (triggerAction) {
        this.ui.showDialogue(nearNPC);
      }
      return;
    }

    // 2. Check nearby lake water for drinking
    const distToLake = Math.hypot(this.player.position.x - 45, this.player.position.z - 45);
    if (distToLake < 32 && this.player.vitals.thirst < 90) {
      this.ui.showInteractionPrompt('E', 'Beber Água Limpa [Lago da Névoa]');
      if (triggerAction) {
        this.player.drink(40);
        this.ui.showToast('💧 Bebeu água fresca do lago. Sede saciada!');
        this.ui.updateHUDVitals();
      }
      return;
    }

    // 3. Check harvestable nodes nearby
    let nearNode = null;
    for (const node of this.terrain.nodes) {
      if (!node.isHarvested && node.position.distanceTo(this.player.position) < 3.0) {
        nearNode = node;
        break;
      }
    }
    if (nearNode) {
      this.ui.showInteractionPrompt('F / Clique', `Coletar [${nearNode.name}]`);
      return;
    }

    this.ui.hideInteractionPrompt();
  }

  attemptPlaceBuilding() {
    const buildPos = new THREE.Vector3(
      this.player.position.x + Math.sin(this.player.rotationY) * 3.5,
      0,
      this.player.position.z + Math.cos(this.player.rotationY) * 3.5
    );
    buildPos.y = this.terrain.getHeight(buildPos.x, buildPos.z);

    const res = this.buildings.placeStructure(buildPos, this.inventory.items);
    if (res.success) {
      this.ui.showToast(`✅ Construiu: ${res.name}!`);
      this.ui.updateHUDVitals();
    } else {
      this.ui.showToast(`❌ ${res.reason}`);
    }
  }

  respawnPlayer() {
    this.player.vitals.health = 100;
    this.player.vitals.hunger = 80;
    this.player.vitals.thirst = 80;
    this.player.position.set(0, 0, 0);
    this.player.daysSurvived += 1;

    this.ui.hideGameOver();
    this.gameState = 'playing';
    this.ui.showToast('🔥 Você renasceu sob o sol dos ermos!');
    this.ui.updateHUDVitals();
  }

  autosave() {
    try {
      const data = {
        vitals: this.player.vitals,
        pos: { x: this.player.position.x, z: this.player.position.z },
        items: this.inventory.items,
        level: this.player.level,
        kills: this.player.kills
      };
      localStorage.setItem('wild_queens_save', JSON.stringify(data));
    } catch (e) {}
  }

  // MAIN GAME TICK LOOP
  loop() {
    requestAnimationFrame(() => this.loop());

    const now = performance.now();
    const delta = Math.min(0.1, (now - this.lastTime) * 0.001);
    this.lastTime = now;

    if (this.gameState === 'studio') {
      // Rotate heroine model gently in the studio
      this.player.model.root.rotation.y += delta * 0.6;
      this.player.model.updateAnimation(delta, 'idle');
      this.engine.render();
      return;
    }

    if (this.gameState === 'playing') {
      // 1. Update Player & Vitals
      this.player.update(delta, this.input, this.terrain, this.buildings, () => {
        this.gameState = 'dead';
        this.ui.showGameOver();
      });

      // 2. Update Atmosphere & Day/Night
      this.engine.updateAtmosphere(delta, this.player.position);

      // 3. Update Camera
      this.engine.updateCamera(this.player.position, this.input);

      // 4. Update Enemies AI
      this.enemies.update(delta, this.player.position, this.player.isCrouched, (dmg, enemyName) => {
        const received = this.player.takeDamage(dmg, enemyName);
        if (received) {
          this.ui.showToast(`⚠️ Sofreu ${received} de dano de ${enemyName}!`);
          this.ui.updateHUDVitals();
        }
      });

      // 5. Update NPCs & Companion AI
      this.npcs.update(delta, this.player.position, this.enemies.enemies);

      // 6. Update Base Buildings (flickering campfires)
      this.buildings.update(now * 0.001);

      // 7. Update Building Ghost Mesh position if in build mode
      if (this.buildings.isBuildModeActive) {
        const ghostPos = new THREE.Vector3(
          this.player.position.x + Math.sin(this.player.rotationY) * 3.5,
          0,
          this.player.position.z + Math.cos(this.player.rotationY) * 3.5
        );
        ghostPos.y = this.terrain.getHeight(ghostPos.x, ghostPos.z);
        this.buildings.updateGhost(ghostPos, true);
      }

      // 8. Interaction prompts check
      this.checkInteractPrompt(false);

      // 9. Update HUD Vitals & Minimap
      this.ui.updateHUDVitals();
      this.ui.updateMinimap();

      // 10. Render 3D Scene
      this.engine.render();
    }
  }
}

// Start application safely
function launchWildQueens() {
  if (window.__wildQueensInstance) return;
  try {
    window.__wildQueensInstance = new WildQueensGame();
  } catch (e) {
    console.error('Fatal bootstrap error:', e);
    const tip = document.getElementById('loading-tip');
    if (tip) {
      tip.style.color = '#ef4444';
      tip.textContent = 'Erro ao iniciar: ' + e.message;
    }
  }
}

// Immediate execution if DOM is ready, or wait for DOMContentLoaded, plus backup timeout
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  launchWildQueens();
} else {
  document.addEventListener('DOMContentLoaded', launchWildQueens);
  window.addEventListener('load', launchWildQueens);
  setTimeout(launchWildQueens, 300);
}
