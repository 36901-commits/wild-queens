// ====================================================================
// WILD QUEENS — CRAFTING RECIPE BOOK & PRODUCTION ENGINE
// Recipes for tools, weapons, medicines, survival kits & armor
// ====================================================================

import { ITEM_DATABASE } from './Inventory.js';

export const CRAFTING_RECIPES = [
  // --- SOBREVIVÊNCIA ---
  {
    id: 'craft_bandage',
    result: 'bandage',
    count: 2,
    category: 'survival',
    name: 'Atadura de Ervas (x2)',
    desc: 'Bandeja medicinal feita de folhas e fibras para tratar feridas.',
    req: { herb: 2, wood: 1 },
    time: 1.0
  },
  {
    id: 'craft_cooked_meat',
    result: 'cooked_meat',
    count: 1,
    category: 'survival',
    name: 'Carne Assada Nutritiva',
    desc: 'Cozinhe a carne caçada para consumo seguro e rico em proteínas.',
    req: { meat: 1, wood: 1 },
    time: 1.5
  },
  {
    id: 'craft_water_flask',
    result: 'water_flask',
    count: 1,
    category: 'survival',
    name: 'Cantil de Água Purificada',
    desc: 'Filtra e armazena água fresca para longas expedições.',
    req: { scrap: 2, wood: 1 },
    time: 1.5
  },
  {
    id: 'craft_medkit',
    result: 'medkit',
    count: 1,
    category: 'survival',
    name: 'Kit Médico Militar',
    desc: 'Combina ataduras com essência fúngica para máxima recuperação biológica.',
    req: { bandage: 2, spore_essence: 1, scrap: 2 },
    time: 3.0
  },

  // --- FERRAMENTAS ---
  {
    id: 'craft_axe',
    result: 'stone_axe',
    count: 1,
    category: 'tools',
    name: 'Machado de Pedra Afiado',
    desc: 'Permite derrubar árvores com maior velocidade e eficiência.',
    req: { wood: 5, stone: 3 },
    time: 2.0
  },

  // --- ARMAS ---
  {
    id: 'craft_bow',
    result: 'hunting_bow',
    count: 1,
    category: 'weapons',
    name: 'Arco Composto das Rainhas',
    desc: 'Arma silenciosa ideal para caça e combate furtivo.',
    req: { wood: 8, scrap: 3 },
    time: 2.5
  },
  {
    id: 'craft_arrows',
    result: 'arrows',
    count: 10,
    category: 'weapons',
    name: 'Flechas Emplumadas (x10)',
    desc: 'Projéteis de alta penetração com ponta de sílex.',
    req: { wood: 4, stone: 2 },
    time: 1.0
  },
  {
    id: 'craft_machete',
    result: 'titanium_machete',
    count: 1,
    category: 'weapons',
    name: 'Machete Tática de Titânio',
    desc: 'Lâmina militar resistente, causa cortes profundos e sangramento.',
    req: { wood: 6, iron_ore: 4, scrap: 2 },
    time: 3.5
  },

  // --- ROUPAS & ARMADURAS ---
  {
    id: 'craft_vest',
    result: 'tactical_vest',
    count: 1,
    category: 'clothing',
    name: 'Colete Blindado Valkyrie',
    desc: 'Placas reforçadas que absorvem impactos de feras e armas de fogo.',
    req: { scrap: 6, iron_ore: 3 },
    time: 4.0
  }
];

export class CraftingSystem {
  constructor(inventory, soundEngine) {
    this.inv = inventory;
    this.sound = soundEngine;
  }

  canCraft(recipe) {
    for (const [res, count] of Object.entries(recipe.req)) {
      if (this.inv.getCount(res) < count) return false;
    }
    return true;
  }

  craft(recipe) {
    if (!this.canCraft(recipe)) return { success: false, reason: 'Materiais insuficientes!' };

    // Deduct requirements
    for (const [res, count] of Object.entries(recipe.req)) {
      this.inv.removeItem(res, count);
    }

    // Add result item
    this.inv.addItem(recipe.result, recipe.count);

    if (this.sound) this.sound.playCraftSuccess();

    const itemData = ITEM_DATABASE[recipe.result];
    return {
      success: true,
      name: itemData ? itemData.name : recipe.name,
      count: recipe.count
    };
  }
}
