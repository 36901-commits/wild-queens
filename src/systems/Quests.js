// ====================================================================
// WILD QUEENS — NARRATIVE QUEST & PROGRESSION SYSTEM
// "O Despertar da Rainha", "A Aliança das Rainhas", "O Segredo do Bunker Ômega"
// ====================================================================

export const QUEST_LIST = [
  {
    id: 'quest_1',
    title: 'O Despertar da Rainha',
    tag: 'SOBREVIVÊNCIA BÁSICA',
    desc: 'Colete 10 Madeiras e 5 Pedras para erguer sua primeira Fogueira Acolhedora.',
    req: {
      type: 'harvest',
      wood: 10,
      stone: 5
    },
    reward: {
      xp: 120,
      text: '+120 XP • Desbloqueio da Bancada de Armas'
    }
  },
  {
    id: 'quest_2',
    title: 'A Aliança de Nova Éden',
    tag: 'EXPLORAÇÃO & COMBATE',
    desc: 'Localize Elena "Valkyrie" nas ruínas e derrote 3 Mutantes dos Esporos.',
    req: {
      type: 'combat',
      kills: 3,
      talkTo: 'elena'
    },
    reward: {
      xp: 250,
      text: '+250 XP • Aliança Tática com Elena • Esquema Militar'
    }
  },
  {
    id: 'quest_3',
    title: 'A Sabedoria das Sombras',
    tag: 'FLORESTA ANCESTRAL',
    desc: 'Fale com Maya "Sombra" no bosque e colete 4 Ervas Medicinais.',
    req: {
      type: 'harvest',
      herb: 4,
      talkTo: 'maya'
    },
    reward: {
      xp: 350,
      text: '+350 XP • Arco Composto • Camuflagem Mística'
    }
  },
  {
    id: 'quest_4',
    title: 'O Fim do Colapso Verde',
    tag: 'CHEFE FINAL & VERDADE',
    desc: 'Fale com a Dra. Vanessa Rios e derrote A Matriarca dos Esporos para obter o Cartão Ômega.',
    req: {
      type: 'boss',
      killBoss: true,
      talkTo: 'vanessa'
    },
    reward: {
      xp: 1000,
      text: '+1000 XP • Título Lendário: Rainha Soberana dos Ermos!'
    }
  }
];

export class QuestSystem {
  constructor(soundEngine) {
    this.sound = soundEngine;
    this.currentQuestIndex = 0;
    this.progress = {
      wood: 0,
      stone: 0,
      herb: 0,
      kills: 0,
      spokeToElena: false,
      spokeToMaya: false,
      spokeToVanessa: false,
      bossDefeated: false
    };
  }

  getCurrentQuest() {
    return QUEST_LIST[this.currentQuestIndex] || null;
  }

  getProgressFraction() {
    const q = this.getCurrentQuest();
    if (!q) return 1.0;

    if (q.id === 'quest_1') {
      const pWood = Math.min(1, this.progress.wood / 10);
      const pStone = Math.min(1, this.progress.stone / 5);
      return (pWood + pStone) / 2;
    } else if (q.id === 'quest_2') {
      const pKills = Math.min(1, this.progress.kills / 3);
      const pTalk = this.progress.spokeToElena ? 1 : 0;
      return (pKills + pTalk) / 2;
    } else if (q.id === 'quest_3') {
      const pHerbs = Math.min(1, this.progress.herb / 4);
      const pTalk = this.progress.spokeToMaya ? 1 : 0;
      return (pHerbs + pTalk) / 2;
    } else if (q.id === 'quest_4') {
      const pBoss = this.progress.bossDefeated ? 1 : 0;
      const pTalk = this.progress.spokeToVanessa ? 1 : 0;
      return (pBoss + pTalk) / 2;
    }
    return 0;
  }

  checkCompletion(player, onQuestComplete) {
    const q = this.getCurrentQuest();
    if (!q) return;

    let isComplete = false;
    if (q.id === 'quest_1' && this.progress.wood >= 10 && this.progress.stone >= 5) {
      isComplete = true;
    } else if (q.id === 'quest_2' && this.progress.kills >= 3 && this.progress.spokeToElena) {
      isComplete = true;
    } else if (q.id === 'quest_3' && this.progress.herb >= 4 && this.progress.spokeToMaya) {
      isComplete = true;
    } else if (q.id === 'quest_4' && this.progress.bossDefeated && this.progress.spokeToVanessa) {
      isComplete = true;
    }

    if (isComplete) {
      player.gainXp(q.reward.xp);
      if (this.sound) this.sound.playQuestFanfare();
      if (onQuestComplete) onQuestComplete(q);
      this.currentQuestIndex++;
    }
  }

  registerHarvest(type, count = 1) {
    if (this.progress[type] !== undefined) {
      this.progress[type] += count;
    }
  }

  registerKill(isBoss = false) {
    this.progress.kills += 1;
    if (isBoss) {
      this.progress.bossDefeated = true;
    }
  }

  registerNPCTalk(npcId) {
    if (npcId === 'elena') this.progress.spokeToElena = true;
    if (npcId === 'maya') this.progress.spokeToMaya = true;
    if (npcId === 'vanessa') this.progress.spokeToVanessa = true;
  }
}
