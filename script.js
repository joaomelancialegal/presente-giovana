/* ═══════════════════════════════════════════════════════════
   GIOVANA WRAPPED — script.js
   Spotify Wrapped experience para uma retrospectiva romântica
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════════
   ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
  ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
  ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
  ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
  ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
   Edite este objeto para personalizar TUDO
════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── Nomes ── */
  nomeEle:  'João',    // seu nome
  nomeDela: 'Giovana',  // nome dela

  /* ── Datas ── */
  dataConheceram: '2025-08-14',   // quando se conheceram
  dataNamero:     '2026-04-09',   // início do namoro (ISO format)
  dataContagem:   '2026-07-10',   // contagem regressiva para esse dia (ex: 1 ano)
  labelContagem:  '10/07/2026',   // como mostrar essa data na tela

  /* ── Cidades ── */
  cidadeEle: 'São Gonçalo, RJ',
  cidadeDela: 'Porto, Portugal',
  distanciaKm: '9.265 km',       // distância aproximada

  /* ── Música ── */
  musica: {
    titulo:    'borboletas',
    subtitulo: 'mais do que os olhos podem aguentar',
    artista:   'miseryswin',
    nota:      'A música que toca toda vez que penso em você. 🦋',
    arquivo:   'music/borboletas.mp3',
  },

  /* ── Abertura ── */
  abertura: {
    titulo:    'Nossa Retrospectiva',
    subtitulo: 'A nossa história, em modo Wrapped ✨',
    label:     '🎁 Um presente especial para você, chata',
    badge:     'Novo · 2026',
  },

  /* ── Slide: Céu no pedido (dados editáveis) ── */
  ceuNoPedido: {
  titulo: 'O céu quando tudo começou',
  signo: '♈ Áries',
  descricao: 'Assim estavam as estrelas\nquando nossa história começou.',
  local: 'Porto • 09/04/2026'
  },
  

  /* ── Slide: Lua ── */
  lua: {
    fase:      'Lua Crescente',
    iluminacao: 42,                  // 0–100 (%) — controla a sombra no visual
    descricao: 'Naquela noite, a lua crescia — assim como o nosso amor começava a crescer. O universo estava em sintonia com o que estava por vir. 🌙',
  },

  /* ── Slide: Estação ── */
  estacao: {
    nome:        'Primavera',
    emoji:       '🌸',
    eyebrow:     '🌸 Primavera em Portugal',
    sub:         'A estação da sua arvore favorita: Sakura!',
    detalhe:     'Em Portugal, abril marca o coração da primavera. As amendoeiras florescem, o céu clareia e o ar cheira a recomeço. Foi exatamente nisso que você disse sim. 🌺',
    gradiente:   'linear-gradient(160deg, #1a000d 0%, #2d0020 40%, #1a0010 70%, #000 100%)',
    particulas:  '#ff69b4',
  },

  /* ── Slide: Polaroids / Linha do tempo ── */
  polaroids: [
    {
      foto:    'photos/timeline-1.jpg',
      legenda: 'Quando tudo começou 🌱',
      data:    'Agosto 2025',
    },
    {
      foto:    'photos/timeline-2.jpg',
      legenda: 'Primeiras conversas infinitas 💬',
      data:    'Setembro 2025',
    },
    {
      foto:    'photos/timeline-3.jpg',
      legenda: 'Já não conseguia parar de pensar em você ✨',
      data:    'Novembro 2025',
    },
    {
      foto:    'photos/timeline-4.jpg',
      legenda: 'O pedido mais especial da minha vida 💚',
      data:    '9 de Abril, 2026',
    },
    {
      foto:    'photos/timeline-5.jpg',
      legenda: 'E assim, viramos nós. 💑',
      data:    '2026',
    },
  ],

  /* ── Slide: Galeria ── */
  galeria: {
    eyebrow: '🖼 Nossa galeria',
    descricao: 'Cada foto, um momento que guardo no coração.',
    fotos: [
      { src: 'photos/gallery-1.jpg', alt: 'Foto 1' },
      { src: 'photos/gallery-2.jpg', alt: 'Foto 2' },
      { src: 'photos/gallery-3.jpg', alt: 'Foto 3' },
      { src: 'photos/gallery-4.jpg', alt: 'Foto 4' },
    ],
  },

  /* ── Slide: Quiz ── */
  quiz: {
    pergunta: 'O que eu mais<br/>gosto em você?',
    opcoes: [
      { letra: 'A', texto: 'Seu jeito de ser' },
      { letra: 'B', texto: 'Seu sorriso' },
      { letra: 'C', texto: 'Sua inteligência' },
      { letra: 'D', texto: 'Tudo isso junto 💚' },  // ← esta é a correta
    ],
    respostaCorreta: 3,  // índice (0-based) da opção correta
    textoResultado: 'Tudo. Absolutamente tudo em você me faz feliz. Seu jeito único de ser, seu sorriso que ilumina tudo, sua inteligência que me surpreende todo dia. Sou muito sortudo em te ter. 💚',
  },

  /* ── Slide: Roleta ── */
  roleta: {
    titulo: 'O QUE VAMOS<br/>FAZER HOJE?',
    opcoes: [
      'Jogar Roblox 🎮',
      'Ver Attack on Titan ⚔️',
      'Conversar em call 📞',
      'Ver vídeos 📺',
      'Escutar músicas 🎵',
    ],
    cores: [
      '#1db954',
      '#e91e8c',
      '#7c3aed',
      '#f59e0b',
      '#e63946',
    ],
  },

  /* ── Slide: Contagem regressiva ── */
  contagem: {
    subtitulo: 'Cada segundo que passa é um segundo mais perto de te ver. Eu conto os dias, as horas, os minutos. Você vale cada um deles. 💚',
  },

  /* ── Slide Final ── */
  final: {
    mensagem: `Giovana, você entrou na minha vida de um jeito que eu nunca soube que era possível. A distância entre nós não é obstáculo — é apenas o espaço que existe até o momento em que finalmente estarei do seu lado.\n\nObrigado por cada ligação, cada mensagem, cada riso, cada silêncio confortável. Você é a minha melodia favorita, a minha estação preferida, o meu lugar seguro.\n\nEu te amo. 💚`,
    badges: [
      '💚 Namorada do Ano',
      '🌊 Amor à Distância',
      '✨ Para Sempre',
    ],
  },

};

/* ════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════ */
const state = {
  currentSlide:  0,
  totalSlides:   13,       // slides 0–12
  isTransitioning: false,
  progressTimers: [],
  quizAnswered:  false,
  spinnerSpinning: false,
  spinnerAngle:  0,
  audioPlaying:  false,
  skyStars:      [],
  finalParticles:[],
};

/* ════════════════════════════════════════════════════════
   DOM HELPERS
════════════════════════════════════════════════════════ */
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

/* ════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initOpeningScreen();
  initParticles('opening-particles', 30, ['#1db954', '#ffffff', '#e91e8c']);
});

/* ════════════════════════════════════════════════════════
   APPLY CONFIG TO DOM
════════════════════════════════════════════════════════ */
function applyConfig() {
  // Opening
  setText('opening-title',     CONFIG.abertura.titulo);
  setText('opening-artist',    CONFIG.abertura.subtitulo);
  setText('opening-badge-text',CONFIG.abertura.badge);
  setText('opening-song-title',CONFIG.musica.titulo);

  // Final slide
  setText('final-name-1', CONFIG.nomeEle);
  setText('final-name-2', CONFIG.nomeDela);
  setText('final-headline', new Date(CONFIG.dataNamero).getFullYear().toString());

  // Final message (with line breaks)
  const finalMsg = $('#final-message');
  if (finalMsg) {
    finalMsg.innerHTML = CONFIG.final.mensagem
      .replace(/\n/g, '<br/>');
  }

  // Final badges
  const badgesEl = $('.final-badges');
  if (badgesEl) {
    badgesEl.innerHTML = CONFIG.final.badges
      .map((b, i) =>
        `<div class="final-badge" style="animation-delay:${0.2 + i * 0.2}s">${b}</div>`)
      .join('');
  }

  // Music slide
  setText('music-song-title',    CONFIG.musica.titulo);
  setText('music-song-subtitle', CONFIG.musica.subtitulo);
  setText('music-artist',        CONFIG.musica.artista);
  setText('music-note',          CONFIG.musica.nota);

  // Audio source
  const audioEl = $('#audio-player');
  if (audioEl) audioEl.src = CONFIG.musica.arquivo;

  // Map distance
  setText('map-distance', CONFIG.distanciaKm);

  // Countdown label
  setText('countdown-date-label', CONFIG.labelContagem);
  setText('countdown-sub', CONFIG.contagem.subtitulo);

  // Season
  const seasonBg = $('#season-bg');
  if (seasonBg) seasonBg.style.background = CONFIG.estacao.gradiente;
  setText('season-eyebrow', CONFIG.estacao.eyebrow);
  setText('season-icon', CONFIG.estacao.emoji);
  setText('season-title', CONFIG.estacao.nome);
  setText('season-sub', CONFIG.estacao.sub);
  const seasonDetail = $('#season-detail');
  if (seasonDetail) seasonDetail.textContent = CONFIG.estacao.detalhe;

  // Moon
  setText('moon-phase-name', CONFIG.lua.fase);
  setText('moon-description', CONFIG.lua.descricao);
  applyMoonPhase(CONFIG.lua.iluminacao);

  // Sky info
  buildSkyInfoCard();

  // Timer date display
  const dateStr = new Date(CONFIG.dataNamero).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
  setText('timer-date-display', dateStr);

  // Spinner title
  const spinnerTitleEl = $('#spinner-title');
  if (spinnerTitleEl) spinnerTitleEl.innerHTML = CONFIG.roleta.titulo;

  // Quiz question
  const quizQEl = $('#quiz-question');
  if (quizQEl) quizQEl.innerHTML = CONFIG.quiz.pergunta;

  // Gallery
  setText('gallery-eyebrow', CONFIG.galeria.eyebrow);
  setText('gallery-desc',    CONFIG.galeria.descricao);
  buildGallery();

  // Polaroids
  buildPolaroids();

  // Quiz options
  buildQuizOptions();
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ════════════════════════════════════════════════════════
   OPENING SCREEN
════════════════════════════════════════════════════════ */
function initOpeningScreen() {
  const btn = $('#opening-cta');
  if (!btn) return;

  btn.addEventListener('click', startWrapped);
  btn.addEventListener('touchend', (e) => { e.preventDefault(); startWrapped(); });
}

function startWrapped() {
  const opening = $('#opening-screen');
  const wrapped = $('#wrapped-container');
  if (!opening || !wrapped) return;

  // Start audio
  startAudio();

  // Animate opening out
  opening.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  opening.style.opacity    = '0';
  opening.style.transform  = 'scale(1.04)';

  setTimeout(() => {
    opening.style.display = 'none';
    wrapped.classList.remove('hidden');
    initWrapped();
  }, 600);
}

/* ════════════════════════════════════════════════════════
   AUDIO / VINYL
════════════════════════════════════════════════════════ */
function startAudio() {
  const audio  = $('#audio-player');
  const vinyl  = $('#vinyl-player');
  if (!audio || !vinyl) return;

  vinyl.classList.add('visible');

  audio.play().then(() => {
    state.audioPlaying = true;
    vinyl.classList.add('playing');
  }).catch(() => {
    // Autoplay blocked — user can tap vinyl to start
  });

  vinyl.addEventListener('click', toggleAudio);
}

function toggleAudio() {
  const audio = $('#audio-player');
  const vinyl = $('#vinyl-player');
  if (!audio || !vinyl) return;

  if (state.audioPlaying) {
    audio.pause();
    state.audioPlaying = false;
    vinyl.classList.remove('playing');
  } else {
    audio.play();
    state.audioPlaying = true;
    vinyl.classList.add('playing');
  }
}

/* ════════════════════════════════════════════════════════
   WRAPPED INIT
════════════════════════════════════════════════════════ */
function initWrapped() {
  buildProgressBars();
  setupSlides();
  setupTapZones();
  goToSlide(0, 'forward');

  // Timers
  setInterval(updateTimer, 1000);
  setInterval(updateCountdown, 1000);
  updateTimer();
  updateCountdown();
}

/* ── Progress bars ── */
function buildProgressBars() {
  const container = $('#progress-bars');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < state.totalSlides; i++) {
    const item = document.createElement('div');
    item.className = 'progress-bar-item';
    item.dataset.index = i;
    const fill = document.createElement('div');
    fill.className = 'progress-bar-fill empty';
    fill.id = `pbf-${i}`;
    item.appendChild(fill);
    container.appendChild(item);
  }
}

function updateProgressBars(current) {
  for (let i = 0; i < state.totalSlides; i++) {
    const fill = $(`#pbf-${i}`);
    if (!fill) continue;
    fill.style.transition = 'none';
    fill.className = 'progress-bar-fill';
    if (i < current) {
      fill.classList.add('completed');
    } else if (i === current) {
      fill.classList.remove('completed', 'empty');
      fill.style.width = '0%';
      // Animate fill over 8 seconds
      setTimeout(() => {
        fill.style.transition = 'width 8s linear';
        fill.style.width = '100%';
      }, 50);
    } else {
      fill.classList.add('empty');
    }
  }
}

/* ── Slides setup ── */
function setupSlides() {
  const slides = $$('.slide');
  slides.forEach(s => {
    s.classList.remove('active');
    s.style.opacity = '0';
    s.style.pointerEvents = 'none';
  });
}

/* ── Tap zones ── */
function setupTapZones() {
  const left  = $('#tap-left');
  const right = $('#tap-right');

  if (left)  left.addEventListener('click',     () => navigate('prev'));
  if (right) right.addEventListener('click',    () => navigate('next'));
  if (left)  left.addEventListener('touchend',  (e) => { e.preventDefault(); navigate('prev'); });
  if (right) right.addEventListener('touchend', (e) => { e.preventDefault(); navigate('next'); });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') navigate('next');
    if (e.key === 'ArrowLeft')                   navigate('prev');
  });
}

function navigate(dir) {
  if (state.isTransitioning) return;

  if (dir === 'next') {
    if (state.currentSlide < state.totalSlides - 1) {
      goToSlide(state.currentSlide + 1, 'forward');
    }
  } else {
    if (state.currentSlide > 0) {
      goToSlide(state.currentSlide - 1, 'backward');
    }
  }
}

function goToSlide(index, direction = 'forward') {
  if (index < 0 || index >= state.totalSlides) return;

  state.isTransitioning = true;
  const slides = $$('.slide');
  const currentEl = slides[state.currentSlide];
  const nextEl    = slides[index];

  if (!nextEl) { state.isTransitioning = false; return; }

  // Hide current
  if (currentEl) {
    currentEl.classList.remove('active');
    currentEl.style.opacity = '0';
    currentEl.style.pointerEvents = 'none';
  }

  // Show next
  nextEl.classList.add('active');
  nextEl.style.opacity = '1';
  nextEl.style.pointerEvents = 'auto';

  // Entry animation
  const entryClass = direction === 'forward' ? 'slide-enter' : 'slide-enter-prev';
  nextEl.classList.add(entryClass);
  setTimeout(() => nextEl.classList.remove(entryClass, 'slide-enter', 'slide-enter-prev'), 400);

  state.currentSlide = index;
  updateProgressBars(index);

  // Per-slide initializations
  onSlideEnter(index);

  setTimeout(() => { state.isTransitioning = false; }, 420);
}

/* ── Per-slide entry actions ── */
function onSlideEnter(index) {
  switch (index) {
    case 0:  initIntroParticles();     break;
    case 2:  initSkyCanvas();          break;
    case 6:  animatePolaroids();       break;
    case 8:  initSpinner();            break;
    case 12: initFinalCanvas();        break;
  }
}

/* ════════════════════════════════════════════════════════
   TIMER — slide 2
════════════════════════════════════════════════════════ */
function updateTimer() {
  const start = new Date(CONFIG.dataNamero);
  const now   = new Date();
  let diff    = now - start;

  if (diff < 0) diff = 0;

  const sec  = Math.floor(diff / 1000) % 60;
  const min  = Math.floor(diff / 60000) % 60;
  const hrs  = Math.floor(diff / 3600000) % 24;
  const days = Math.floor(diff / 86400000);
  const mos  = Math.floor(days / 30.44);
  const yrs  = Math.floor(days / 365.25);

  animateTimerCell('t-years',   yrs);
  animateTimerCell('t-months',  mos % 12);
  animateTimerCell('t-days',    days % 30);
  animateTimerCell('t-hours',   hrs);
  animateTimerCell('t-minutes', min);
  animateTimerCell('t-seconds', sec);
}

function animateTimerCell(id, newVal) {
  const cell = $(`#${id}`);
  if (!cell) return;
  const valEl = cell.querySelector('.timer-value');
  if (!valEl) return;
  const current = valEl.textContent;
  if (current !== String(newVal)) {
    valEl.style.transform = 'scale(1.2)';
    valEl.style.color     = 'transparent';
    valEl.style.backgroundImage = 'linear-gradient(135deg, #fff, #ff69b4)';
    valEl.textContent = String(newVal).padStart(2, '0');
    setTimeout(() => {
      valEl.style.transform = 'scale(1)';
    }, 100);
  }
}

/* ════════════════════════════════════════════════════════
   COUNTDOWN — slide 11
════════════════════════════════════════════════════════ */
function updateCountdown() {
  const target = new Date(CONFIG.dataContagem);
  const now    = new Date();
  let diff     = target - now;

  if (diff < 0) {
    // Already passed!
    setText('cd-days',    '0');
    setText('cd-hours',   '0');
    setText('cd-minutes', '0');
    setText('cd-seconds', '0');
    return;
  }

  const sec  = Math.floor(diff / 1000) % 60;
  const min  = Math.floor(diff / 60000) % 60;
  const hrs  = Math.floor(diff / 3600000) % 24;
  const days = Math.floor(diff / 86400000);

  setText('cd-days',    String(days).padStart(2, '0'));
  setText('cd-hours',   String(hrs).padStart(2, '0'));
  setText('cd-minutes', String(min).padStart(2, '0'));
  setText('cd-seconds', String(sec).padStart(2, '0'));
}

/* ════════════════════════════════════════════════════════
   MOON PHASE — slide 4
════════════════════════════════════════════════════════ */
function applyMoonPhase(illumination) {
  // illumination: 0 = nova, 50 = meia, 100 = cheia
  const shadow = $('#moon-shadow');
  if (!shadow) return;

  // Simple visual representation
  if (illumination <= 5) {
    // New moon: full shadow
    shadow.style.cssText = 'inset:0;border-radius:50%;width:100%;height:100%;top:0;left:0;background:#000;opacity:0.95;';
  } else if (illumination <= 50) {
    // Waxing: shadow on left
    const w = Math.round((100 - illumination * 2) * 0.8);
    shadow.style.cssText = `position:absolute;border-radius:50%;width:${w}%;height:100%;top:0;right:0;background:#000;opacity:0.85;`;
  } else if (illumination >= 95) {
    // Full: no shadow
    shadow.style.cssText = 'display:none;';
  } else {
    // Waning: shadow on right
    const w = Math.round((illumination - 50) * 1.6);
    shadow.style.cssText = `position:absolute;border-radius:50%;width:${w}%;height:100%;top:0;left:0;background:#000;opacity:0.85;`;
  }
}

/* ════════════════════════════════════════════════════════
   SKY CANVAS — slide 3
════════════════════════════════════════════════════════ */
function buildSkyInfoCard() {
  const card = $('#sky-info-card');
  if (!card) return;

  card.innerHTML = `
    <div class="sky-custom">
      <h2>${CONFIG.ceuNoPedido.titulo}</h2>

      <div class="sky-sign">
        ${CONFIG.ceuNoPedido.signo}
      </div>

      <p>
        ${CONFIG.ceuNoPedido.descricao.replace(/\n/g, '<br>')}
      </p>

      <small>
        ${CONFIG.ceuNoPedido.local}
      </small>
    </div>
  `;
}

function initSkyCanvas() {
  const canvas = $('#sky-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.7,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.01,
    });
  }

  const ariesPoints = [
    { x: 0.25, y: 0.42 },
    { x: 0.33, y: 0.35 },
    { x: 0.38, y: 0.18 },
    { x: 0.43, y: 0.30 },
    { x: 0.62, y: 0.38 },
    { x: 0.69, y: 0.37 },
    { x: 0.72, y: 0.48 },
    { x: 0.65, y: 0.45 },
    { x: 0.58, y: 0.45 },
  ];

  const ariesLines = [
    [0,1], [1,2], [2,3], [3,4],
    [4,5], [5,6], [6,7], [7,8], [8,0]
  ];

  const constellationStart = performance.now();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      s.a += s.da;
      if (s.a > 1 || s.a < 0.2) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });

    const elapsed = performance.now() - constellationStart;
    const lineDuration = 650;
    const delayBetweenLines = 180;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ariesLines.forEach((line, index) => {
      const startTime = index * delayBetweenLines;
      const progress = Math.min(Math.max((elapsed - startTime) / lineDuration, 0), 1);
      if (progress <= 0) return;

      const p1 = ariesPoints[line[0]];
      const p2 = ariesPoints[line[1]];

      const x1 = p1.x * canvas.width;
      const y1 = p1.y * canvas.height * 0.65;
      const x2 = p2.x * canvas.width;
      const y2 = p2.y * canvas.height * 0.65;

      const currentX = x1 + (x2 - x1) * progress;
      const currentY = y1 + (y2 - y1) * progress;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = `rgba(255,255,255,${0.25 + progress * 0.65})`;
      ctx.shadowColor = 'rgba(255,255,255,0.9)';
      ctx.shadowBlur = 12;
      ctx.stroke();
    });

    ctx.shadowBlur = 0;

    ariesPoints.forEach((p, index) => {
      const starAppearTime = index * delayBetweenLines;
      const starProgress = Math.min(Math.max((elapsed - starAppearTime) / 500, 0), 1);
      if (starProgress <= 0) return;

      const x = p.x * canvas.width;
      const y = p.y * canvas.height * 0.65;
      const pulse = 1 + Math.sin(performance.now() / 300 + index) * 0.25;

      ctx.beginPath();
      ctx.arc(x, y, (3.2 + (index % 2)) * starProgress * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.75 * starProgress})`;
      ctx.shadowColor = 'rgba(255,255,255,1)';
      ctx.shadowBlur = 18;
      ctx.fill();
    });

    ctx.shadowBlur = 0;

    const grad = ctx.createLinearGradient(0, canvas.height * 0.55, 0, canvas.height);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,5,30,0.8)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, canvas.height * 0.55, canvas.width, canvas.height);

    requestAnimationFrame(draw);
  }

  draw();

  const noteEl = $('#sky-note');
  if (noteEl) noteEl.textContent = '';
}

/* ════════════════════════════════════════════════════════
   POLAROIDS — slide 7
════════════════════════════════════════════════════════ */
function buildPolaroids() {
  const stack = $('#polaroid-stack');
  if (!stack) return;
  stack.innerHTML = CONFIG.polaroids.map((p, i) => `
    <div class="polaroid-item" style="animation-delay:${i * 0.1}s">
      <div class="polaroid-line-wrap">
        <div class="polaroid-dot"></div>
        ${i < CONFIG.polaroids.length - 1 ? '<div class="polaroid-line"></div>' : ''}
      </div>
      <div class="polaroid-card">
        <div class="polaroid-photo">
          <img src="${p.foto}" alt="${p.legenda}" onerror="this.style.display='none'" />
          <div class="polaroid-photo-placeholder">
            <span>📷</span>
            <p>${p.foto.split('/').pop()}</p>
          </div>
        </div>
        <div class="polaroid-caption">${p.legenda}</div>
        <div class="polaroid-date">${p.data}</div>
      </div>
    </div>
  `).join('');
}

function animatePolaroids() {
  const items = $$('.polaroid-item');
  items.forEach((item, i) => {
    item.style.opacity   = '0';
    item.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      item.style.transition = 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      item.style.opacity   = '1';
      item.style.transform = 'translateX(0)';
    }, i * 120 + 100);
  });
}

/* ════════════════════════════════════════════════════════
   GALLERY — slide 8
════════════════════════════════════════════════════════ */
function buildGallery() {
  const thumbs = $('#gallery-thumbs');
  if (!thumbs) return;

  thumbs.innerHTML = CONFIG.galeria.fotos.map((f, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="selectGalleryPhoto(${i})">
      <img src="${f.src}" alt="${f.alt}" onerror="this.parentElement.innerHTML='📸'" />
    </div>
  `).join('');
}

function selectGalleryPhoto(index) {
  const foto    = CONFIG.galeria.fotos[index];
  const mainImg = $('#gallery-main-img');
  const ph      = $('#gallery-placeholder');
  if (!foto) return;

  if (mainImg) {
    mainImg.src = foto.src;
    mainImg.style.display = '';
  }
  if (ph) ph.style.display = 'none';

  $$('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

/* ════════════════════════════════════════════════════════
   QUIZ — slide 9
════════════════════════════════════════════════════════ */
function buildQuizOptions() {
  const container = $('#quiz-options');
  if (!container) return;

  container.innerHTML = CONFIG.quiz.opcoes.map((op, i) => `
    <button class="quiz-option" data-index="${i}" onclick="answerQuiz(${i})">
      <span class="quiz-option-letter">${op.letra}</span>
      <span>${op.texto}</span>
    </button>
  `).join('');
}

function answerQuiz(index) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const btns = $$('.quiz-option');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === CONFIG.quiz.respostaCorreta) {
      btn.classList.add('correct');
    } else if (i === index && i !== CONFIG.quiz.respostaCorreta) {
      btn.classList.add('wrong');
    } else {
      btn.classList.add('wrong');
    }
  });

  const result = $('#quiz-result');
  const text   = $('#quiz-result-text');
  if (result && text) {
    text.textContent = CONFIG.quiz.textoResultado;
    result.classList.remove('hidden');
  }
}

/* ════════════════════════════════════════════════════════
   SPINNER — slide 10
════════════════════════════════════════════════════════ */
function initSpinner() {
  drawSpinner(state.spinnerAngle);
}

function drawSpinner(offset = 0) {
  const canvas  = $('#spinner-canvas');
  if (!canvas) return;
  const ctx     = canvas.getContext('2d');
  const cx      = canvas.width  / 2;
  const cy      = canvas.height / 2;
  const radius  = cx - 6;
  const items   = CONFIG.roleta.opcoes;
  const colors  = CONFIG.roleta.cores;
  const slice   = (Math.PI * 2) / items.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  items.forEach((item, i) => {
    const startAngle = offset + i * slice;
    const endAngle   = startAngle + slice;

    // Slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    // Border
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth   = 1.5;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + slice / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle  = '#fff';
    ctx.font       = `bold ${canvas.width < 280 ? 10 : 11}px Inter, sans-serif`;
    ctx.shadowColor   = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur    = 4;
    const label = item.length > 14 ? item.slice(0, 13) + '…' : item;
    ctx.fillText(label, radius - 10, 4);
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#0a0a0a';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth   = 2;
  ctx.stroke();

  ctx.fillStyle = '#1db954';
  ctx.font      = 'bold 14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★', cx, cy);
}

const spinnerBtn = $('#spinner-btn');
if (spinnerBtn) {
  spinnerBtn.addEventListener('click', spinWheel);
}

function spinWheel() {
  if (state.spinnerSpinning) return;
  state.spinnerSpinning = true;

  const btn    = $('#spinner-btn');
  const result = $('#spinner-result');
  const text   = $('#spinner-result-text');
  if (btn)    btn.disabled = true;
  if (result) result.classList.add('hidden');

  const extraSpins    = (5 + Math.floor(Math.random() * 5)) * Math.PI * 2;
  const items         = CONFIG.roleta.opcoes;
  const slice         = (Math.PI * 2) / items.length;
  const randomOffset  = Math.random() * Math.PI * 2;
  const targetAngle   = state.spinnerAngle + extraSpins + randomOffset;

  const duration = 4000;
  const start    = performance.now();
  const from     = state.spinnerAngle;

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const angle    = from + (targetAngle - from) * easeOut(progress);

    state.spinnerAngle = angle;
    drawSpinner(angle);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Determine winner
      const normalised = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      // Pointer is at top (270° or -PI/2) → we invert
      const pointerAngle = (Math.PI * 2 - normalised + (3 * Math.PI / 2)) % (Math.PI * 2);
      const idx = Math.floor(pointerAngle / slice) % items.length;

      if (result && text) {
        text.textContent = items[idx];
        result.classList.remove('hidden');
      }

      if (btn) btn.disabled = false;
      state.spinnerSpinning = false;
    }
  }

  requestAnimationFrame(step);
}

/* ════════════════════════════════════════════════════════
   FINAL CANVAS — slide 12
════════════════════════════════════════════════════════ */
function initFinalCanvas() {
  const canvas = $('#final-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      r:   Math.random() * 2.5 + 0.5,
      vx:  (Math.random() - 0.5) * 0.4,
      vy:  -Math.random() * 0.6 - 0.1,
      a:   Math.random(),
      da:  (Math.random() - 0.5) * 0.008,
      color: ['#1db954','#ffffff','#e91e8c','#f59e0b'][Math.floor(Math.random() * 4)],
    });
  }

  function drawFinal() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.a += p.da;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.x < 0)   p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.a > 0.8 || p.a < 0.1) p.da *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.round(p.a * 255).toString(16).padStart(2, '0');
      ctx.fill();
    });
    requestAnimationFrame(drawFinal);
  }

  drawFinal();
}

/* ════════════════════════════════════════════════════════
   INTRO PARTICLES — slide 0
════════════════════════════════════════════════════════ */
function initIntroParticles() {
  initParticles('particles-0', 40, ['#1db954', '#ffffff', '#1ed760']);
}

/* ════════════════════════════════════════════════════════
   GENERIC PARTICLE ENGINE
════════════════════════════════════════════════════════ */
function initParticles(containerId, count, colors) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      width:  ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      left:   ${Math.random() * 100}%;
      top:    ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      opacity: ${Math.random() * 0.6 + 0.1};
      animation: particle-float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite;
    `;
    container.appendChild(p);
  }

  // Add keyframes if not already added
  if (!document.getElementById('particle-keyframes')) {
    const style = document.createElement('style');
    style.id = 'particle-keyframes';
    style.textContent = `
      @keyframes particle-float {
        0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
        33%       { transform: translateY(-${15 + Math.random() * 20}px) translateX(${Math.random() * 10 - 5}px) scale(1.2); opacity: 0.7; }
        66%       { transform: translateY(${5 + Math.random() * 10}px)  translateX(${Math.random() * 10 - 5}px) scale(0.8); opacity: 0.2; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ════════════════════════════════════════════════════════
   OPENING PARTICLES
════════════════════════════════════════════════════════ */
function initOpeningParticles() {
  initParticles('opening-particles', 30, ['#1db954', '#ffffff', '#e91e8c']);
}

/* ════════════════════════════════════════════════════════
   SEASON PARTICLES
════════════════════════════════════════════════════════ */
(function initSeasonParticles() {
  initParticles('particles-season', 25, [
    CONFIG.estacao.particulas || '#ff69b4',
    '#fff',
    '#ffb6c1',
  ]);
})();

/* ════════════════════════════════════════════════════════
   COUNTDOWN PARTICLES
════════════════════════════════════════════════════════ */
(function initCountdownParticles() {
  initParticles('particles-countdown', 20, ['#7c3aed', '#c030c8', '#ffffff']);
})();

/* ════════════════════════════════════════════════════════
   EXPOSE FUNCTIONS NEEDED FROM HTML onclick
════════════════════════════════════════════════════════ */
window.answerQuiz         = answerQuiz;
window.selectGalleryPhoto = selectGalleryPhoto;

/* ════════════════════════════════════════════════════════
   DEFER SPINNER BUTTON BINDING (needs DOM ready)
════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const sb = document.getElementById('spinner-btn');
  if (sb) sb.addEventListener('click', spinWheel);
});
