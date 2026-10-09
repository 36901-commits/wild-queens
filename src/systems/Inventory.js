// ====================================================================
// WILD QUEENS — INVENTORY & ITEM REGISTRY SYSTEM
// Manages items, quick hotbar slots, equipment loadout & item usage
// ====================================================================

export const ITEM_DATABASE = {
  wood: {
    id: 'wood',
    name: 'Madeira Firme',
    desc: 'Tronco resistente colhido das árvores antigas. Essencial para abrigos e ferramentas.',
    category: 'materials',
    icon: '🪵',
    maxStack: 99
  },
  stone: {
    id: 'stone',
    name: 'Pedra de Granito',
    desc: 'Mineral denso usado para afiar lâminas e construir fogueiras.',
    category: 'materials',
    icon: '🪨',
    maxStack: 99
  },
  iron_ore: {
    id: 'iron_ore',
    name: 'Minério de Ferro',
    desc: 'Metal bruto para forjar lâminas pesadas e armaduras reforçadas.',
    category: 'materials',
    icon: '⚙️',
    maxStack: 99
  },
  scrap: {
    id: 'scrap',
    name: 'Sucata & Circuitos',
    desc: 'Componentes recolhidos de carcaças da antiga civilização.',
    category: 'materials',
    icon: '🔩',
    maxStack: 99
  },
  herb: {
    id: 'herb',
    name: 'Erva Medicinal',
    desc: 'Planta nativa com propriedades regenerativas e antitóxicas.',
    category: 'materials',
    icon: '🌿',
    maxStack: 99
  },
  berry: {
    id: 'berry',
    name: 'Frutas Silvestres',
    desc: 'Bagas frescas e doces. Restaura um pouco de fome e sede.',
    category: 'consumables',
    icon: '🍓',
    maxStack: 50,
    effect: { hunger: 15, thirst: 10, hp: 5 }
  },
  meat: {
    id: 'meat',
    name: 'Carne Crua de Caça',
    desc: 'Carne fresca obtida de animais. Deve ser cozida em fogueira para evitar doenças.',
    category: 'materials',
    icon: '🥩',
    maxStack: 30
  },
  cooked_meat: {
    id: 'cooked_meat',
    name: 'Bife Assado na Fogueira',
    desc: 'Refeição suculenta e nutritiva. Restaura muita fome e vida.',
    category: 'consumables',
    icon: '🍖',
    maxStack: 30,
    effect: { hunger: 45, hp: 20 }
  },
  water_flask: {
    id: 'water_flask',
    name: 'Cantil de Água Purificada',
    desc: 'Água límpida filtrada. Sacie a sede imediatamente.',
    category: 'consumables',
    icon: '🍶',
    maxStack: 10,
    effect: { thirst: 50 }
  },
  bandage: {
    id: 'bandage',
    name: 'Atadura de Ervas',
    desc: 'Faixa estéril com infusão de ervas que estanca sangramentos.',
    category: 'consumables',
    icon: '🩹',
    maxStack: 20,
    effect: { hp: 35 }
  },
  medkit: {
    id: 'medkit',
    name: 'Kit Médico Militar',
    desc: 'Soro e analgésicos avançados pré-colapso. Cura quase toda a vida.',
    category: 'consumables',
    icon: '💉',
    maxStack: 5,
    effect: { hp: 80 }
  },
  stone_axe: {
    id: 'stone_axe',
    name: 'Machado de Pedra',
    desc: 'Corta árvores duas vezes mais rápido.',
    category: 'equipment',
    icon: '🪓',
    maxStack: 1,
    stats: { atk: 15 }
  },
  titanium_machete: {
    id: 'titanium_machete',
    name: 'Machete Tática de Titânio',
    desc: 'Lâmina afiada mortal com equilíbrio impecável.',
    category: 'equipment',
    icon: '🗡️',
    maxStack: 1,
    stats: { atk: 35 }
  },
  hunting_bow: {
    id: 'hunting_bow',
    name: 'Arco Composto das Rainhas',
    desc: 'Dispara flechas silenciosas a longa distância.',
    category: 'equipment',
    icon: '🏹',
    maxStack: 1,
    stats: { atk: 30 }
  },
  arrows: {
    id: 'arrows',
    name: 'Flechas Emplumadas (x5)',
    desc: 'Projéteis afiados para arco.',
    category: 'materials',
    icon: '🎯',
    maxStack: 99
  },
  tactical_vest: {
    id: 'tactical_vest',
    name: 'Colete Blindado Valkyrie',
    desc: 'Proteção balística leve com placas de cerâmica.',
    category: 'equipment',
    icon: '🦺',
    maxStack: 1,
    stats: { def: 25 }
  },
  spore_essence: {
    id: 'spore_essence',
    name: 'Essência Fúngica Pura',
    desc: 'Extraída de mutantes. Usada para sintetizar antídotos com a Dra. Vanessa.',
    category: 'materials',
    icon: '🧪',
    maxStack: 30
  },
  omega_keycard: {
    id: 'omega_keycard',
    name: 'Cartão de Acesso Ômega',
    desc: 'Cartão criptografado da Matriarca. Abre o laboratório subterrâneo!',
    category: 'equipment',
    icon: '💳',
    maxStack: 1
  }
};

export class InventorySystem {
  constructor(soundEngine) {
    this.sound = soundEngine;
    this.items = {}; // { itemId: count }
    this.hotbar = ['titanium_machete', 'berry', 'bandage', 'water_flask', null, null];
    this.selectedHotbarIndex = 0;

    // Loadout equipped
    this.equipped = {
      weapon: 'titanium_machete',
      armor: 'tactical_vest',
      boots: 'combat',
      accessory: 'holster'
    };

    // Starting survival items
    this.addItem('wood', 12);
    this.addItem('stone', 6);
    this.addItem('berry', 8);
    this.addItem('water_flask', 2);
    this.addItem('bandage', 3);
    this.addItem('titanium_machete', 1);
  }

  addItem(id, count = 1) {
    if (!ITEM_DATABASE[id]) return false;
    this.items[id] = (this.items[id] || 0) + count;
    return true;
  }

  removeItem(id, count = 1) {
    if (!this.items[id] || this.items[id] < count) return false;
    this.items[id] -= count;
    if (this.items[id] <= 0) {
      delete this.items[id];
    }
    return true;
  }

  getCount(id) {
    return this.items[id] || 0;
  }

  has(id, count = 1) {
    return this.getCount(id) >= count;
  }

  useItem(id, player) {
    const itemData = ITEM_DATABASE[id];
    if (!itemData || !this.has(id, 1)) return false;

    if (itemData.category === 'consumables' && itemData.effect) {
      if (itemData.effect.hp) player.heal(itemData.effect.hp);
      if (itemData.effect.hunger) player.eat(itemData.effect.hunger);
      if (itemData.effect.thirst) player.drink(itemData.effect.thirst);

      this.removeItem(id, 1);
      if (this.sound) this.sound.playUIClick();
      return { success: true, message: `Usou ${itemData.name}` };
    }

    if (itemData.category === 'equipment') {
      if (id.includes('machete') || id.includes('bow') || id.includes('axe')) {
        this.equipped.weapon = id;
        player.weaponDamage = itemData.stats?.atk || 15;
        player.model.config.weaponType = id.includes('bow') ? 'bow' : 'machete';
        player.model.buildWeapon(player.model.config.scale);
        return { success: true, message: `Equipou ${itemData.name}` };
      }
    }

    return false;
  }
}
