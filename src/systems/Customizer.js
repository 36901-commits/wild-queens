// ====================================================================
// WILD QUEENS — CHARACTER CUSTOMIZER STUDIO ENGINE
// Handles real-time UI controls, live 3D preview updates, perks & presets
// ====================================================================

export const SKIN_PALETTE = [
  { name: 'Ébano Profundo', color: '#3b2219' },
  { name: 'Bronze Radiante', color: '#754326' },
  { name: 'Dourada Quente', color: '#b87333' },
  { name: 'Morena Mel', color: '#d49b7a' },
  { name: 'Oliva Selvagem', color: '#c89d7c' },
  { name: 'Porcelana Clara', color: '#f5d0b5' }
];

export const HAIR_COLORS = [
  { name: 'Preto Ônix', color: '#171717' },
  { name: 'Castanho Escuro', color: '#3a2016' },
  { name: 'Loiro Platinado', color: '#f59e0b' },
  { name: 'Ruivo Cobre', color: '#b45309' },
  { name: 'Violeta Néon', color: '#9333ea' },
  { name: 'Verde Esmeralda', color: '#10b981' }
];

export const OUTFIT_COLORS = [
  { name: 'Preto Tático', color: '#0f172a' },
  { name: 'Verde Militar', color: '#166534' },
  { name: 'Couro Desgastado', color: '#78350f' },
  { name: 'Vermelho Renegado', color: '#991b1b' },
  { name: 'Cinza Asfalto', color: '#334155' }
];

export const LIPSTICK_COLORS = [
  { name: 'Vinho Selvagem', color: '#881337' },
  { name: 'Vermelho Rubi', color: '#e11d48' },
  { name: 'Nude Natural', color: '#b45309' },
  { name: 'Preto Gótico', color: '#09090b' }
];

export class CustomizerStudio {
  constructor(previewModel, onConfigChange) {
    this.model = previewModel;
    this.onConfigChange = onConfigChange;

    this.currentConfig = {
      name: 'Isadora',
      title: 'A Fênix Renegada',
      personality: 'Destemida',
      skinColor: '#d49b7a',
      hairStyle: 'ponytail',
      hairColor: '#171717',
      makeup: 'guerreira',
      lipstick: '#881337',
      outfitStyle: 'leather',
      outfitColor: '#0f172a',
      bootsStyle: 'combat',
      accessory: 'holster',
      perkClass: 'guerreira'
    };

    this.loadSavedConfig();
    this.buildUI();
    this.bindEvents();
  }

  loadSavedConfig() {
    try {
      const saved = localStorage.getItem('wild_queens_hero');
      if (saved) {
        this.currentConfig = Object.assign(this.currentConfig, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
  }

  saveConfig() {
    try {
      localStorage.setItem('wild_queens_hero', JSON.stringify(this.currentConfig));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  buildUI() {
    // Skin palette
    const skinContainer = document.getElementById('palette-skin');
    if (skinContainer) {
      skinContainer.innerHTML = '';
      SKIN_PALETTE.forEach(item => {
        const div = document.createElement('div');
        div.className = `color-swatch ${this.currentConfig.skinColor === item.color ? 'active' : ''}`;
        div.style.backgroundColor = item.color;
        div.title = item.name;
        div.addEventListener('click', () => {
          this.currentConfig.skinColor = item.color;
          this.refreshPreview();
          skinContainer.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
          div.classList.add('active');
        });
        skinContainer.appendChild(div);
      });
    }

    // Hairstyles cards
    const hairContainer = document.getElementById('picker-hair');
    if (hairContainer) {
      const styles = [
        { id: 'ponytail', name: 'Rabo de Cavalo Tático' },
        { id: 'braid', name: 'Trança Guerreira' },
        { id: 'undercut', name: 'Undercut Selvagem' },
        { id: 'afro', name: 'Cachos Volumosos' },
        { id: 'bob', name: 'Bob Desfiado' },
        { id: 'long', name: 'Longo ao Vento' }
      ];
      hairContainer.innerHTML = '';
      styles.forEach(st => {
        const btn = document.createElement('div');
        btn.className = `style-card ${this.currentConfig.hairStyle === st.id ? 'active' : ''}`;
        btn.textContent = st.name;
        btn.addEventListener('click', () => {
          this.currentConfig.hairStyle = st.id;
          this.refreshPreview();
          hairContainer.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
        });
        hairContainer.appendChild(btn);
      });
    }

    // Hair colors
    const hairColorContainer = document.getElementById('palette-hair-color');
    if (hairColorContainer) {
      hairColorContainer.innerHTML = '';
      HAIR_COLORS.forEach(item => {
        const div = document.createElement('div');
        div.className = `color-swatch ${this.currentConfig.hairColor === item.color ? 'active' : ''}`;
        div.style.backgroundColor = item.color;
        div.title = item.name;
        div.addEventListener('click', () => {
          this.currentConfig.hairColor = item.color;
          this.refreshPreview();
          hairColorContainer.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
          div.classList.add('active');
        });
        hairColorContainer.appendChild(div);
      });
    }

    // Lipstick
    const lipContainer = document.getElementById('palette-lipstick');
    if (lipContainer) {
      lipContainer.innerHTML = '';
      LIPSTICK_COLORS.forEach(item => {
        const div = document.createElement('div');
        div.className = `color-swatch ${this.currentConfig.lipstick === item.color ? 'active' : ''}`;
        div.style.backgroundColor = item.color;
        div.title = item.name;
        div.addEventListener('click', () => {
          this.currentConfig.lipstick = item.color;
          this.refreshPreview();
          lipContainer.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
          div.classList.add('active');
        });
        lipContainer.appendChild(div);
      });
    }

    // Outfits
    const outfitContainer = document.getElementById('picker-outfit');
    if (outfitContainer) {
      const outfits = [
        { id: 'leather', name: 'Jaqueta Renegade' },
        { id: 'valkyrie', name: 'Tático Valkyrie' },
        { id: 'huntress', name: 'Caçadora dos Ermos' },
        { id: 'cyber', name: 'Nômade Cibernética' }
      ];
      outfitContainer.innerHTML = '';
      outfits.forEach(o => {
        const btn = document.createElement('div');
        btn.className = `style-card ${this.currentConfig.outfitStyle === o.id ? 'active' : ''}`;
        btn.textContent = o.name;
        btn.addEventListener('click', () => {
          this.currentConfig.outfitStyle = o.id;
          this.refreshPreview();
          outfitContainer.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
        });
        outfitContainer.appendChild(btn);
      });
    }

    // Outfit Color
    const outfitColorContainer = document.getElementById('palette-outfit-color');
    if (outfitColorContainer) {
      outfitColorContainer.innerHTML = '';
      OUTFIT_COLORS.forEach(item => {
        const div = document.createElement('div');
        div.className = `color-swatch ${this.currentConfig.outfitColor === item.color ? 'active' : ''}`;
        div.style.backgroundColor = item.color;
        div.title = item.name;
        div.addEventListener('click', () => {
          this.currentConfig.outfitColor = item.color;
          this.refreshPreview();
          outfitColorContainer.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
          div.classList.add('active');
        });
        outfitColorContainer.appendChild(div);
      });
    }
  }

  bindEvents() {
    // Tab switching
    document.querySelectorAll('.custom-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.custom-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panelId = `tab-${tab.dataset.tab}`;
        const panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
      });
    });

    // Name & Title
    const nameInput = document.getElementById('cust-name');
    if (nameInput) {
      nameInput.value = this.currentConfig.name;
      nameInput.addEventListener('input', (e) => {
        this.currentConfig.name = e.target.value.trim() || 'Isadora';
      });
    }

    const titleSelect = document.getElementById('cust-title');
    if (titleSelect) {
      titleSelect.value = this.currentConfig.title;
      titleSelect.addEventListener('change', (e) => {
        this.currentConfig.title = e.target.value;
      });
    }

    // Makeup buttons
    const makeupContainer = document.getElementById('picker-makeup');
    if (makeupContainer) {
      makeupContainer.querySelectorAll('.badge-option').forEach(btn => {
        btn.addEventListener('click', () => {
          makeupContainer.querySelectorAll('.badge-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentConfig.makeup = btn.dataset.val;
          this.refreshPreview();
        });
      });
    }

    // Boots buttons
    const bootsContainer = document.getElementById('picker-boots');
    if (bootsContainer) {
      bootsContainer.querySelectorAll('.badge-option').forEach(btn => {
        btn.addEventListener('click', () => {
          bootsContainer.querySelectorAll('.badge-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentConfig.bootsStyle = btn.dataset.val;
          this.refreshPreview();
        });
      });
    }

    // Accessory buttons
    const accContainer = document.getElementById('picker-acc');
    if (accContainer) {
      accContainer.querySelectorAll('.badge-option').forEach(btn => {
        btn.addEventListener('click', () => {
          accContainer.querySelectorAll('.badge-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentConfig.accessory = btn.dataset.val;
          this.refreshPreview();
        });
      });
    }

    // Class perks
    const classContainer = document.getElementById('picker-class');
    if (classContainer) {
      classContainer.querySelectorAll('.class-card').forEach(card => {
        card.addEventListener('click', () => {
          classContainer.querySelectorAll('.class-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.currentConfig.perkClass = card.dataset.class;
        });
      });
    }

    // Randomize button
    const randBtn = document.getElementById('btn-custom-randomize');
    if (randBtn) {
      randBtn.addEventListener('click', () => {
        this.randomize();
      });
    }
  }

  randomize() {
    const skin = SKIN_PALETTE[Math.floor(Math.random() * SKIN_PALETTE.length)];
    const hairStyle = ['ponytail', 'braid', 'undercut', 'afro', 'bob', 'long'][Math.floor(Math.random() * 6)];
    const hairColor = HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)];
    const makeup = ['guerreira', 'rainha', 'sombra', 'natural'][Math.floor(Math.random() * 4)];
    const outfit = ['leather', 'valkyrie', 'huntress', 'cyber'][Math.floor(Math.random() * 4)];
    const outfitColor = OUTFIT_COLORS[Math.floor(Math.random() * OUTFIT_COLORS.length)];
    const lipstick = LIPSTICK_COLORS[Math.floor(Math.random() * LIPSTICK_COLORS.length)];

    this.currentConfig.skinColor = skin.color;
    this.currentConfig.hairStyle = hairStyle;
    this.currentConfig.hairColor = hairColor.color;
    this.currentConfig.makeup = makeup;
    this.currentConfig.outfitStyle = outfit;
    this.currentConfig.outfitColor = outfitColor.color;
    this.currentConfig.lipstick = lipstick.color;

    this.buildUI();
    this.refreshPreview();
  }

  refreshPreview() {
    if (this.model) {
      this.model.config = Object.assign(this.model.config, this.currentConfig);
      this.model.buildMaterials();
      this.model.buildCharacterMesh();
    }
    if (this.onConfigChange) {
      this.onConfigChange(this.currentConfig);
    }
  }
}
