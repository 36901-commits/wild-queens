// ====================================================================
// WILD QUEENS — FEMALE NPC SURVIVORS & SOCIAL ALLIANCE SYSTEM
// Elena "Valkyrie", Maya "Sombra", Dra. Vanessa Rios
// ====================================================================

import * as THREE from '../three.js';
import { CharacterModel } from './CharacterModel.js';

export class NPCManager {
  constructor(scene, soundEngine) {
    this.scene = scene;
    this.sound = soundEngine;
    this.npcs = [];
    this.activeFollower = null; // Companion following the player

    this.initQueens();
  }

  initQueens() {
    // 1. Elena "Valkyrie" — Ex-Military Engineer Leader
    const elenaModel = new CharacterModel({
      skinColor: '#e0ac69',
      hairStyle: 'undercut',
      hairColor: '#f59e0b', // Golden blonde
      makeup: 'guerreira',
      lipstick: '#9e2a2b',
      outfitStyle: 'valkyrie',
      outfitColor: '#0f172a',
      accessory: 'goggles',
      weaponType: 'machete',
      scale: 1.05
    });
    elenaModel.root.position.set(-25, 0.5, 12);
    this.scene.add(elenaModel.root);

    const elena = {
      id: 'elena',
      name: 'Elena "Valkyrie"',
      title: 'Líder da Resistência Tática',
      role: 'Engenheira Militar & Mestra em Fortificações',
      avatar: '🛡️',
      model: elenaModel,
      pos: elenaModel.root.position,
      affinity: 35, // 0 to 100
      isFollower: false,
      dialogues: {
        intro: {
          text: '"Sobreviveu à névoa de esporos da noite passada? Você tem sangue frio, garota. Nosso mundo ruiu, mas nós não. Está pronta para lutar ao meu lado ou prefere arriscar a sorte sozinha?"',
          options: [
            { text: 'Estou pronta para lutar. O que você precisa?', next: 'quest_offer', repGain: 15 },
            { text: 'Como você sobreviveu tanto tempo aqui fora?', next: 'lore_elena', repGain: 10 },
            { text: 'Preciso de você na minha equipe. Venha comigo!', next: 'recruit_check', repGain: 5 },
            { text: 'Apenas explorando por enquanto. Até logo.', next: 'exit', repGain: 0 }
          ]
        },
        quest_offer: {
          text: '"Os Saqueadores estão roubando peças eletrônicas da rodovia. Se você me trouxer 5 Sucatas Metálicas, vou calibrar sua bancada para forjar lâminas de titânio puro."',
          options: [
            { text: 'Considere feito. Já estou a caminho.', next: 'accept_quest', repGain: 10 },
            { text: 'Preciso me equipar melhor primeiro.', next: 'exit', repGain: 0 }
          ]
        },
        lore_elena: {
          text: '"Eu liderava a guarda militar de Nova Éden quando as plantas romperam o concreto. Vi os homens em pânico abandonarem tudo. Nós, mulheres, nos unimos e criamos as Wild Queens. Não nos curvamos a monstros nem a tiranos."',
          options: [
            { text: 'Sua coragem me inspira, Elena. Vamos reinar juntas.', next: 'intro', repGain: 15 }
          ]
        },
        recruit_check: {
          text: (rep) => rep >= 40
            ? '"Sua determinação me convenceu, irmã de armas. Minha lâmina é sua. Vamos caçar juntas!"'
            : '"Você ainda precisa provar seu valor nos ermos. Ganhe mais experiência e me ajude primeiro."',
          options: [
            { text: 'Perfeito! Vamos em frente.', next: 'toggle_follow', repGain: 10 }
          ]
        }
      }
    };
    this.npcs.push(elena);

    // 2. Maya "Sombra" — Forest Huntress & Shaman
    const mayaModel = new CharacterModel({
      skinColor: '#8d5524',
      hairStyle: 'braid',
      hairColor: '#171717',
      makeup: 'sombra',
      lipstick: '#581c87',
      outfitStyle: 'huntress',
      outfitColor: '#14532d', // Deep woodland green
      accessory: 'scarf',
      weaponType: 'bow',
      scale: 0.98
    });
    mayaModel.root.position.set(22, 1.2, -18);
    this.scene.add(mayaModel.root);

    const maya = {
      id: 'maya',
      name: 'Maya "Sombra"',
      title: 'Guardiã da Floresta Ancestral',
      role: 'Rastreadora Mística & Arqueira Silenciosa',
      avatar: '🏹',
      model: mayaModel,
      pos: mayaModel.root.position,
      affinity: 40,
      isFollower: false,
      dialogues: {
        intro: {
          text: '"Seus passos na relva são como trovões para as feras, viajante. Mas vejo fogo nos seus olhos. A floresta está agitada... a Matriarca dos Esporos espalha sementes venenosas."',
          options: [
            { text: 'Ensine-me a caminhar sem ser ouvida como você.', next: 'stealth_training', repGain: 15 },
            { text: 'O que você sabe sobre a Matriarca no cume?', next: 'boss_hint', repGain: 10 },
            { text: 'Venha comigo, precisamos unir forças.', next: 'recruit_maya', repGain: 5 },
            { text: 'Vou seguir meu caminho em silêncio.', next: 'exit', repGain: 0 }
          ]
        },
        stealth_training: {
          text: '"Agache-se entre as samambaias altas. Respire no ritmo da brisa. Quando o inimigo virar as costas, sua flecha deve encontrar o coração antes que ele perceba sua sombra."',
          options: [
            { text: 'Obrigada pelo ensinamento, Maya.', next: 'intro', repGain: 10 }
          ]
        },
        boss_hint: {
          text: '"A Matriarca alimenta-se das raízes radioativas do Bunker Ômega. Suas cascas são imunes a ataques fracos, mas seu núcleo bioluminescente é vulnerável a cortes rápidos e fogo!"',
          options: [
            { text: 'Vou queimar esse monstro e libertar a montanha.', next: 'intro', repGain: 15 }
          ]
        },
        recruit_maya: {
          text: (rep) => rep >= 45
            ? '"A floresta aprova nossa aliança. Meu arco cobrirá suas costas de onde a luz não alcança."'
            : '"Ainda sinto o cheiro do medo em você. Respire a terra e volte quando estiver em harmonia."',
          options: [
            { text: 'Vamos caçar juntas.', next: 'toggle_follow', repGain: 10 }
          ]
        }
      }
    };
    this.npcs.push(maya);

    // 3. Dra. Vanessa Rios — Chief Biochemist of Omega Bunker
    const vanessaModel = new CharacterModel({
      skinColor: '#f5d0b5',
      hairStyle: 'bob',
      hairColor: '#451a03',
      makeup: 'rainha',
      lipstick: '#b91c1c',
      outfitStyle: 'cyber',
      outfitColor: '#1e3a8a',
      accessory: 'none',
      weaponType: 'none',
      scale: 1.0
    });
    vanessaModel.root.position.set(-50, 4.2, -45);
    this.scene.add(vanessaModel.root);

    const vanessa = {
      id: 'vanessa',
      name: 'Dra. Vanessa Rios',
      title: 'Cientista-Chefe do Projeto Gênesis',
      role: 'Bioquímica & Reveladora da Verdade',
      avatar: '🧬',
      model: vanessaModel,
      pos: vanessaModel.root.position,
      affinity: 50,
      isFollower: false,
      dialogues: {
        intro: {
          text: '"Graças aos céus, você conseguiu chegar até aqui! Pensei que era a última mulher viva com a mente lúcida. O mundo não foi destruído por bombas... foram esporos botânicos geneticamente modificados que saíram do controle no laboratório."',
          options: [
            { text: 'Existe uma cura para o Colapso Verde?', next: 'cure_info', repGain: 20 },
            { text: 'Como abrimos a porta blindada do Bunker Ômega?', next: 'bunker_key', repGain: 15 },
            { text: 'Você causou essa destruição?', next: 'blame_dialogue', repGain: -5 },
            { text: 'Vou me preparar e retorno logo.', next: 'exit', repGain: 0 }
          ]
        },
        cure_info: {
          text: '"Sim! Eu sintetizei a fórmula do Antídoto Gênesis, mas preciso do Cartão de Acesso Ômega e do Núcleo Puro da Matriarca para iniciar os biorreatores subterrâneos. Derrote a criatura e salvaremos este planeta!"',
          options: [
            { text: 'Conte comigo, Dra. Vanessa. A salvação começa agora.', next: 'intro', repGain: 20 }
          ]
        },
        bunker_key: {
          text: '"A Matriarca dos Esporos engoliu o oficial de segurança que portava o Cartão Ômega. Para abrir as portas blindadas, ela deve tombar primeiro."',
          options: [
            { text: 'Ela não verá o amanhecer.', next: 'intro', repGain: 15 }
          ]
        },
        blame_dialogue: {
          text: '"Eu tentei avisar a corporação! Quando os executivos fugiram em seus jatos, fui eu quem ficou para trás tentando salvar as pessoas. Não me julgue sem conhecer minha dor."',
          options: [
            { text: 'Peço desculpas. Vamos focar em consertar isso juntas.', next: 'intro', repGain: 10 }
          ]
        }
      }
    };
    this.npcs.push(vanessa);
  }

  getNearestNPC(playerPos, maxDist = 3.5) {
    for (const npc of this.npcs) {
      if (npc.pos.distanceTo(playerPos) <= maxDist) {
        return npc;
      }
    }
    return null;
  }

  update(delta, playerPos, enemies) {
    // Animate idle animations for stationary NPCs
    for (const npc of this.npcs) {
      if (npc.isFollower) {
        // COMPANION AI: Follows the player and helps attack nearby enemies!
        const dist = npc.pos.distanceTo(playerPos);
        if (dist > 3.0) {
          const dir = new THREE.Vector3().subVectors(playerPos, npc.pos).normalize();
          dir.y = 0;
          npc.model.root.rotation.y = Math.atan2(dir.x, dir.z);
          npc.pos.addScaledVector(dir, 4.0 * delta);
          npc.model.updateAnimation(delta, 'run', 5.0);
        } else {
          npc.model.updateAnimation(delta, 'idle');
        }

        // Companion Combat: If an enemy is within 4 meters, companion attacks!
        if (enemies && enemies.length > 0) {
          const target = enemies.find(e => !e.isDead && e.pos.distanceTo(npc.pos) < 4.0);
          if (target) {
            npc.model.triggerAttack();
            if (this.sound) this.sound.playAttackSwing();
          }
        }
      } else {
        npc.model.updateAnimation(delta, 'idle');
      }
    }
  }

  toggleFollower(npcId) {
    const npc = this.npcs.find(n => n.id === npcId);
    if (!npc) return false;

    if (npc.isFollower) {
      npc.isFollower = false;
      this.activeFollower = null;
      return { following: false, name: npc.name };
    } else {
      // Disband existing follower
      this.npcs.forEach(n => n.isFollower = false);
      npc.isFollower = true;
      this.activeFollower = npc;
      return { following: true, name: npc.name };
    }
  }
}
