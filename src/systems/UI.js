// ====================================================================
// WILD QUEENS — HUD & MODAL USER INTERFACE ORCHESTRATOR
// Vitals bars, Minimap radar, World map, Inventory grid, Crafting & Dialogues
// ====================================================================

import { ITEM_DATABASE } from './Inventory.js';
import { CRAFTING_RECIPES } from './Crafting.js';

export class UIManager {
  constructor(game) {
    this.game = game;
    this.selectedInvItem = null;
    this.selectedRecipe = null;

    this.bindHUDButtons();
    this.setupMinimap();
    this.setupWorldMap();
    this.setupBuildingPalette();
  }

  bindHUDButtons() {
    // Nav buttons
    document.getElementById('btn-open-map')?.addEventListener('click', () => this.toggleModal('modal-map'));
    document.getElementById('btn-open-crafting')?.addEventListener('click', () => {
      this.populateCrafting();
      this.toggleModal('modal-crafting');
    });
    document.getElementById('btn-open-build')?.addEventListener('click', () => this.toggleBuildHUD());
    document.getElementById('btn-open-journal')?.addEventListener('click', () => this.showToast('📜 Missões em andamento rastreadas no HUD!'));

    document.getElementById('btn-toggle-sound')?.addEventListener('click', () => {
      const isMuted = this.game.sound.toggleMute();
      const btn = document.getElementById('btn-toggle-sound');
      if (btn) btn.textContent = isMuted ? '🔇' : '🔊';
      this.showToast(isMuted ? 'Áudio Desativado' : 'Áudio Ativado');
    });

    document.getElementById('minimap-toggle-btn')?.addEventListener('click', () => this.toggleModal('modal-map'));

    // Modal close buttons
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.close;
        if (modalId) {
          document.getElementById(modalId)?.classList.add('hidden');
        }
      });
    });

    // Inventory buttons
    document.getElementById('btn-inv-use')?.addEventListener('click', () => {
      if (!this.selectedInvItem) return;
      const res = this.game.inventory.useItem(this.selectedInvItem, this.game.player);
      if (res && res.success) {
        this.showToast(`✨ ${res.message}`);
        this.updateInventoryGrid();
        this.updateHUDVitals();
      }
    });

    document.getElementById('btn-inv-drop')?.addEventListener('click', () => {
      if (!this.selectedInvItem) return;
      this.game.inventory.removeItem(this.selectedInvItem, 1);
      this.showToast(`🗑️ Descartou 1x ${ITEM_DATABASE[this.selectedInvItem]?.name}`);
      this.updateInventoryGrid();
    });

    // Inventory category filters
    document.querySelectorAll('.inv-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.inv-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.updateInventoryGrid(btn.dataset.filter);
      });
    });

    // Building HUD buttons
    document.getElementById('btn-rotate-build')?.addEventListener('click', () => {
      this.game.buildings.rotateBuilding();
    });

    document.getElementById('btn-cancel-build')?.addEventListener('click', () => {
      this.toggleBuildHUD(false);
    });

    // Respawn button
    document.getElementById('btn-respawn')?.addEventListener('click', () => {
      this.game.respawnPlayer();
    });
  }

  toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const isHidden = modal.classList.contains('hidden');

    // Close all others first
    document.querySelectorAll('.game-modal').forEach(m => m.classList.add('hidden'));

    if (isHidden) {
      modal.classList.remove('hidden');
      if (modalId === 'modal-inventory') this.updateInventoryGrid();
      if (modalId === 'modal-map') this.drawWorldMap();
    }
  }

  toggleBuildHUD(forceState) {
    const hud = document.getElementById('building-hud');
    if (!hud) return;

    const isActive = forceState !== undefined ? forceState : hud.classList.contains('hidden');
    if (isActive) {
      hud.classList.remove('hidden');
      this.game.buildings.setBuildMode(true, 'campfire');
      this.showToast('🏠 Modo Construção Ativado! Clique no chão para posicionar.');
    } else {
      hud.classList.add('hidden');
      this.game.buildings.setBuildMode(false);
    }
  }

  setupBuildingPalette() {
    const container = document.getElementById('build-palette');
    if (!container) return;
    container.innerHTML = '';

    const bps = this.game.buildings.blueprints;
    Object.values(bps).forEach((bp, idx) => {
      const btn = document.createElement('button');
      btn.className = `build-item-btn ${idx === 0 ? 'active' : ''}`;
      btn.dataset.type = bp.id;
      btn.innerHTML = `<span>${bp.icon}</span><span>${bp.name.split(' ')[0]}</span>`;
      btn.addEventListener('click', () => {
        container.querySelectorAll('.build-item-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.game.buildings.setBuildMode(true, bp.id);
      });
      container.appendChild(btn);
    });
  }

  updateHUDVitals() {
    const p = this.game.player;
    if (!p) return;

    // HP Bar
    const hpPct = Math.max(0, Math.min(100, (p.vitals.health / p.vitals.maxHealth) * 100));
    const hpBar = document.getElementById('bar-hp');
    if (hpBar) hpBar.style.width = `${hpPct}%`;
    const hpVal = document.getElementById('val-hp');
    if (hpVal) hpVal.textContent = `${Math.round(p.vitals.health)}/${p.vitals.maxHealth}`;

    // Stamina Bar
    const stPct = (p.vitals.stamina / p.vitals.maxStamina) * 100;
    const stBar = document.getElementById('bar-stamina');
    if (stBar) stBar.style.width = `${stPct}%`;
    const stVal = document.getElementById('val-stamina');
    if (stVal) stVal.textContent = `${Math.round(p.vitals.stamina)}/${p.vitals.maxStamina}`;

    // Hunger
    const foodBar = document.getElementById('bar-hunger');
    if (foodBar) foodBar.style.width = `${p.vitals.hunger}%`;
    const foodVal = document.getElementById('val-hunger');
    if (foodVal) foodVal.textContent = `${Math.round(p.vitals.hunger)}%`;

    // Thirst
    const waterBar = document.getElementById('bar-thirst');
    if (waterBar) waterBar.style.width = `${p.vitals.thirst}%`;
    const waterVal = document.getElementById('val-thirst');
    if (waterVal) waterVal.textContent = `${Math.round(p.vitals.thirst)}%`;

    // Environment & Time
    const timeText = document.getElementById('val-time');
    if (timeText) timeText.textContent = `${this.game.engine.getClockFormatted()} • Dia ${p.daysSurvived}`;

    const tempText = document.getElementById('val-temp');
    if (tempText) tempText.textContent = `${p.vitals.temperature}°C • Confortável`;

    // Level
    const lvlText = document.getElementById('hud-level');
    if (lvlText) lvlText.textContent = p.level;

    // Stealth Indicator
    const stealthEl = document.getElementById('stealth-indicator');
    if (stealthEl) {
      if (p.isCrouched) stealthEl.classList.remove('hidden');
      else stealthEl.classList.add('hidden');
    }

    // Biome label
    const biomeLabel = document.getElementById('hud-biome-name');
    if (biomeLabel) {
      const px = p.position.x;
      const pz = p.position.z;
      if (px < -40 && pz < -40) biomeLabel.textContent = 'Bunker Ômega (Cume)';
      else if (px < 0 && pz > 15) biomeLabel.textContent = 'Ruínas de Nova Éden';
      else if (Math.hypot(px - 45, pz - 45) < 35) biomeLabel.textContent = 'Lago da Névoa';
      else biomeLabel.textContent = 'Bosque dos Sussurros';
    }

    // Quest Tracker
    const quest = this.game.quests.getCurrentQuest();
    if (quest) {
      const qTitle = document.getElementById('quest-title');
      const qDesc = document.getElementById('quest-desc');
      const qFill = document.getElementById('quest-progress-fill');
      if (qTitle) qTitle.textContent = quest.title;
      if (qDesc) qDesc.textContent = quest.desc;
      if (qFill) qFill.style.width = `${this.game.quests.getProgressFraction() * 100}%`;
    }

    // Hotbar sync
    this.updateHotbar();
  }

  updateHotbar() {
    const container = document.getElementById('hud-hotbar');
    if (!container) return;

    container.innerHTML = '';
    const inv = this.game.inventory;

    for (let i = 0; i < 6; i++) {
      const slot = document.createElement('div');
      slot.className = `hotbar-slot ${inv.selectedHotbarIndex === i ? 'active' : ''}`;
      slot.innerHTML = `<span class="hotbar-num">${i + 1}</span>`;

      const itemId = inv.hotbar[i];
      if (itemId && ITEM_DATABASE[itemId]) {
        const itemData = ITEM_DATABASE[itemId];
        const count = inv.getCount(itemId);
        slot.innerHTML += `
          <span class="hotbar-icon">${itemData.icon}</span>
          ${count > 1 ? `<span class="hotbar-count">${count}</span>` : ''}
        `;
      }

      slot.addEventListener('click', () => {
        inv.selectedHotbarIndex = i;
        if (itemId) {
          inv.useItem(itemId, this.game.player);
          this.updateHUDVitals();
        }
      });

      container.appendChild(slot);
    }
  }

  updateInventoryGrid(filter = 'all') {
    const grid = document.getElementById('inv-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const inv = this.game.inventory;
    const items = inv.items;

    Object.entries(items).forEach(([itemId, count]) => {
      const itemData = ITEM_DATABASE[itemId];
      if (!itemData) return;

      if (filter !== 'all' && itemData.category !== filter) return;

      const card = document.createElement('div');
      card.className = `inv-item-card ${this.selectedInvItem === itemId ? 'selected' : ''}`;
      card.innerHTML = `
        <span class="item-icon">${itemData.icon}</span>
        <span class="item-qty">${count}</span>
      `;
      card.title = `${itemData.name} - ${itemData.desc}`;

      card.addEventListener('click', () => {
        this.selectedInvItem = itemId;
        grid.querySelectorAll('.inv-item-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        const btnUse = document.getElementById('btn-inv-use');
        const btnDrop = document.getElementById('btn-inv-drop');
        if (btnUse) btnUse.disabled = false;
        if (btnDrop) btnDrop.disabled = false;
      });

      grid.appendChild(card);
    });

    // Update equipment stats
    const atkVal = document.getElementById('stat-atk');
    if (atkVal) atkVal.textContent = this.game.player.baseDamage + this.game.player.weaponDamage;

    const defVal = document.getElementById('stat-def');
    if (defVal) defVal.textContent = this.game.player.defense;
  }

  populateCrafting(cat = 'survival') {
    const list = document.getElementById('recipe-list');
    if (!list) return;
    list.innerHTML = '';

    // Filter recipes
    const filtered = CRAFTING_RECIPES.filter(r => r.category === cat);
    filtered.forEach((r, idx) => {
      const row = document.createElement('div');
      row.className = `recipe-row ${idx === 0 ? 'selected' : ''}`;
      const itemData = ITEM_DATABASE[r.result] || {};
      row.innerHTML = `
        <span class="r-icon">${itemData.icon || '🔨'}</span>
        <div class="r-info">
          <h5>${r.name}</h5>
          <span>${r.desc}</span>
        </div>
      `;

      row.addEventListener('click', () => {
        list.querySelectorAll('.recipe-row').forEach(rw => rw.classList.remove('selected'));
        row.classList.add('selected');
        this.showRecipeDetail(r);
      });

      list.appendChild(row);
      if (idx === 0) this.showRecipeDetail(r);
    });

    // Tab buttons
    document.querySelectorAll('.craft-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.craft-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.populateCrafting(btn.dataset.cat);
      });
    });
  }

  showRecipeDetail(r) {
    const container = document.getElementById('recipe-detail');
    if (!container) return;

    const canCraft = this.game.crafting.canCraft(r);
    let reqHtml = '';
    for (const [res, count] of Object.entries(r.req)) {
      const cur = this.game.inventory.getCount(res);
      const hasEnough = cur >= count;
      const resData = ITEM_DATABASE[res] || { name: res, icon: '📦' };
      reqHtml += `
        <div class="req-item-row" style="color: ${hasEnough ? '#a7f3d0' : '#fca5a5'};">
          <span>${resData.icon} ${resData.name}</span>
          <span>${cur}/${count}</span>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="detail-content">
        <h4>${r.name}</h4>
        <p style="font-size: 0.85rem; color: #94a3b8;">${r.desc}</p>
        <div class="req-item-list">
          <div style="font-size: 0.75rem; color: #cbd5e1; font-weight: 700;">MATERIAIS NECESSÁRIOS:</div>
          ${reqHtml}
        </div>
      </div>
      <button id="btn-do-craft" class="btn-primary" ${canCraft ? '' : 'disabled style="opacity: 0.5;"'}>
        FABRICAR AGORA
      </button>
    `;

    document.getElementById('btn-do-craft')?.addEventListener('click', () => {
      const res = this.game.crafting.craft(r);
      if (res.success) {
        this.showToast(`🔨 Fabricou: ${res.count}x ${res.name}!`);
        this.showRecipeDetail(r);
        this.updateHUDVitals();
      } else {
        this.showToast(`❌ ${res.reason}`);
      }
    });
  }

  setupMinimap() {
    this.minimapCanvas = document.getElementById('minimap-canvas');
    if (this.minimapCanvas) {
      this.minimapCtx = this.minimapCanvas.getContext('2d');
    }
  }

  updateMinimap() {
    if (!this.minimapCtx) return;
    const ctx = this.minimapCtx;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;
    const p = this.game.player;
    if (!p) return;

    ctx.clearRect(0, 0, w, h);

    // Background terrain representation
    ctx.fillStyle = '#0b1610';
    ctx.fillRect(0, 0, w, h);

    // Center is player
    const cx = w / 2;
    const cy = h / 2;
    const scale = 0.9; // 1 meter = 0.9 pixels

    // Draw Lake (45, 45)
    const lx = cx + (45 - p.position.x) * scale;
    const ly = cy + (45 - p.position.z) * scale;
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath();
    ctx.arc(lx, ly, 25 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Draw Bunker (-68, -68)
    const bx = cx + (-68 - p.position.x) * scale;
    const by = cy + (-68 - p.position.z) * scale;
    ctx.fillStyle = '#a855f7';
    ctx.fillRect(bx - 5, by - 5, 10, 10);

    // Draw Wild Queens Allies
    if (this.game.npcs) {
      this.game.npcs.npcs.forEach(npc => {
        const nx = cx + (npc.pos.x - p.position.x) * scale;
        const ny = cy + (npc.pos.z - p.position.z) * scale;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw Enemies in radar range
    if (this.game.enemies) {
      this.game.enemies.enemies.forEach(e => {
        if (e.isDead) return;
        const ex = cx + (e.pos.x - p.position.x) * scale;
        const ey = cy + (e.pos.z - p.position.z) * scale;
        ctx.fillStyle = e.type === 'boss' ? '#ec4899' : '#ef4444';
        ctx.beginPath();
        ctx.arc(ex, ey, e.type === 'boss' ? 6 : 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw Player Arrow at Center
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-p.rotationY);
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 6);
    ctx.lineTo(0, 3);
    ctx.lineTo(-5, 6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  setupWorldMap() {
    this.worldMapCanvas = document.getElementById('world-map-canvas');
    if (this.worldMapCanvas) {
      this.worldMapCtx = this.worldMapCanvas.getContext('2d');
    }
  }

  drawWorldMap() {
    if (!this.worldMapCtx) return;
    const ctx = this.worldMapCtx;
    const w = this.worldMapCanvas.width;
    const h = this.worldMapCanvas.height;
    const p = this.game.player;

    ctx.fillStyle = '#0a1017';
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < w; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Map Center is world (0, 0)
    const mapScale = 2.2;
    const cx = w / 2;
    const cy = h / 2;

    const toMapX = (wx) => cx + wx * mapScale;
    const toMapY = (wz) => cy + wz * mapScale;

    // Draw Lake
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath();
    ctx.arc(toMapX(45), toMapY(45), 32 * mapScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#60a5fa';
    ctx.font = '11px sans-serif';
    ctx.fillText('Lago da Névoa', toMapX(45) - 35, toMapY(45));

    // Draw Ruínas de Nova Éden
    ctx.fillStyle = 'rgba(71, 85, 105, 0.5)';
    ctx.fillRect(toMapX(-40), toMapY(20), 45 * mapScale, 40 * mapScale);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Ruínas de Nova Éden', toMapX(-40), toMapY(20) - 5);

    // Draw Bunker Ômega
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(toMapX(-68), toMapY(-68), 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('Bunker Ômega (Laboratório Secreto)', toMapX(-68) - 60, toMapY(-68) - 14);

    // Draw NPCs
    if (this.game.npcs) {
      this.game.npcs.npcs.forEach(n => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(toMapX(n.pos.x), toMapY(n.pos.z), 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(n.name, toMapX(n.pos.x) + 8, toMapY(n.pos.z) + 4);
      });
    }

    // Draw Player
    if (p) {
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(toMapX(p.position.x), toMapY(p.position.z), 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      const coordsEl = document.getElementById('map-coords');
      if (coordsEl) coordsEl.textContent = `X: ${Math.round(p.position.x)} | Z: ${Math.round(p.position.z)}`;
    }
  }

  showDialogue(npc, nodeKey = 'intro') {
    const modal = document.getElementById('modal-dialogue');
    if (!modal) return;

    modal.classList.remove('hidden');

    const node = npc.dialogues[nodeKey];
    if (!node) {
      modal.classList.add('hidden');
      return;
    }

    const nameEl = document.getElementById('npc-name');
    const roleEl = document.getElementById('npc-role');
    const avatarEl = document.getElementById('npc-avatar');
    const textEl = document.getElementById('dialogue-text');
    const optionsEl = document.getElementById('dialogue-options');
    const repFill = document.getElementById('npc-rep-fill');
    const repText = document.getElementById('npc-rep-text');

    if (nameEl) nameEl.textContent = npc.name;
    if (roleEl) roleEl.textContent = npc.role;
    if (avatarEl) avatarEl.textContent = npc.avatar;

    const dialogueStr = typeof node.text === 'function' ? node.text(npc.affinity) : node.text;
    if (textEl) textEl.textContent = dialogueStr;

    if (repFill) repFill.style.width = `${npc.affinity}%`;
    if (repText) repText.textContent = npc.affinity > 50 ? 'Aliada Fiel' : 'Amigável';

    // Dialogue options
    if (optionsEl) {
      optionsEl.innerHTML = '';
      node.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'dialogue-opt-btn';
        btn.innerHTML = `<span>💬</span> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          npc.affinity = Math.min(100, Math.max(0, npc.affinity + (opt.repGain || 0)));

          if (opt.next === 'exit') {
            modal.classList.add('hidden');
          } else if (opt.next === 'toggle_follow') {
            const followRes = this.game.npcs.toggleFollower(npc.id);
            if (followRes.following) {
              this.showToast(`🤝 ${npc.name} agora está seguindo e lutará ao seu lado!`);
            } else {
              this.showToast(`👋 ${npc.name} voltou ao seu acampamento.`);
            }
            modal.classList.add('hidden');
          } else {
            this.showDialogue(npc, opt.next);
          }
        });
        optionsEl.appendChild(btn);
      });
    }

    // Register quest trigger
    this.game.quests.registerNPCTalk(npc.id);
  }

  showInteractionPrompt(key, text) {
    const prompt = document.getElementById('interaction-prompt');
    const keyBadge = document.getElementById('prompt-key');
    const textEl = document.getElementById('prompt-text');

    if (prompt && keyBadge && textEl) {
      keyBadge.textContent = key;
      textEl.textContent = text;
      prompt.classList.remove('hidden');
    }
  }

  hideInteractionPrompt() {
    const prompt = document.getElementById('interaction-prompt');
    if (prompt) prompt.classList.add('hidden');
  }

  spawnDamageNumber(dmg, isCrit = false) {
    const container = document.getElementById('combat-log');
    if (!container) return;

    const el = document.createElement('div');
    el.className = `dmg-number ${isCrit ? 'crit-number' : ''}`;
    el.textContent = isCrit ? `CRÍTICO! -${dmg}` : `-${dmg}`;

    container.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 900);
  }

  showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  showGameOver() {
    const screen = document.getElementById('game-over-screen');
    if (!screen) return;

    const daysEl = document.getElementById('death-days');
    const killsEl = document.getElementById('death-kills');
    const harvestEl = document.getElementById('death-harvested');

    if (daysEl) daysEl.textContent = this.game.player.daysSurvived;
    if (killsEl) killsEl.textContent = this.game.player.kills;
    if (harvestEl) harvestEl.textContent = this.game.player.harvestedCount;

    screen.classList.remove('hidden');
  }

  hideGameOver() {
    const screen = document.getElementById('game-over-screen');
    if (screen) screen.classList.add('hidden');
  }
}
