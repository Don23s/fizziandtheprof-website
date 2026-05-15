const EPISODES = {
  phase1: [
    {
      num: "E01", icon: "🔢",
      de: "Zahlen 1–3",       en: "Numbers 1–3",
      fr: "Les chiffres 1–3", es: "Los números 1–3",
      status: "production"
    },
    {
      num: "E02", icon: "🎯",
      de: "Zahlen 4–6",       en: "Numbers 4–6",
      fr: "Les chiffres 4–6", es: "Los números 4–6",
      status: "production"
    },
    {
      num: "E03", icon: "🌟",
      de: "Zahlen 7–9",       en: "Numbers 7–9",
      fr: "Les chiffres 7–9", es: "Los números 7–9",
      status: "production"
    },
    {
      num: "E04", icon: "🔟",
      de: "Die Zahl 10",      en: "The Number 10",
      fr: "Le chiffre 10",    es: "El número 10",
      status: "production"
    },
    {
      num: "E05", icon: "➕",
      de: "Addition",         en: "Addition",
      fr: "Addition",         es: "La suma",
      status: "production"
    },
    {
      num: "E06", icon: "➖",
      de: "Subtraktion",      en: "Subtraction",
      fr: "Soustraction",     es: "La resta",
      status: "production"
    },
    {
      num: "E07", icon: "🔄",
      de: "Grosse Wiederholung", en: "Big Review",
      fr: "Grande révision",     es: "Gran repaso",
      status: "production"
    },
    {
      num: "E08", icon: "⚖️",
      de: "Vergleiche",       en: "Comparisons",
      fr: "Comparaisons",     es: "Comparaciones",
      status: "production"
    },
    {
      num: "E09", icon: "📊",
      de: "Zahlen ordnen",    en: "Ordering Numbers",
      fr: "Ordonner les nombres", es: "Ordenar números",
      status: "production"
    },
    {
      num: "E10", icon: "🔺",
      de: "Geometrische Formen", en: "Geometric Shapes",
      fr: "Formes géométriques",  es: "Formas geométricas",
      status: "production"
    },
    {
      num: "E11", icon: "💭",
      de: "Die Traumwiederholung", en: "The Dream Review",
      fr: "La révision des rêves", es: "El repaso soñado",
      status: "production"
    },
    {
      num: "E12", icon: "🚀",
      de: "Zehnerschritte",   en: "Counting by Tens",
      fr: "Compter par dizaines", es: "Contar de diez en diez",
      status: "production"
    }
  ],
  phase2: [
    {
      num: "P2·01", icon: "🔢",
      de: "Zahlen bis 20",    en: "Numbers up to 20",
      fr: "Les nombres jusqu'à 20", es: "Números hasta 20",
      status: "soon"
    },
    {
      num: "P2·02", icon: "➕",
      de: "Addition bis 20",  en: "Addition up to 20",
      fr: "Addition jusqu'à 20", es: "Suma hasta 20",
      status: "soon"
    },
    {
      num: "P2·03", icon: "➖",
      de: "Subtraktion bis 20", en: "Subtraction up to 20",
      fr: "Soustraction jusqu'à 20", es: "Resta hasta 20",
      status: "soon"
    },
    {
      num: "P2·04", icon: "💯",
      de: "Zahlen bis 100",   en: "Numbers up to 100",
      fr: "Les nombres jusqu'à 100", es: "Números hasta 100",
      status: "soon"
    },
    {
      num: "P2·05", icon: "🧮",
      de: "Addition bis 100", en: "Addition up to 100",
      fr: "Addition jusqu'à 100", es: "Suma hasta 100",
      status: "soon"
    },
    {
      num: "P2·06", icon: "🔁",
      de: "Addition mit Übertrag", en: "Addition with Carrying",
      fr: "Addition avec retenue",  es: "Suma con llevar",
      status: "soon"
    },
    {
      num: "P2·07", icon: "⬇️",
      de: "Subtraktion bis 100", en: "Subtraction up to 100",
      fr: "Soustraction jusqu'à 100", es: "Resta hasta 100",
      status: "soon"
    },
    {
      num: "P2·08", icon: "🔃",
      de: "Subtraktion mit Entlehnen", en: "Subtraction with Borrowing",
      fr: "Soustraction avec emprunt",  es: "Resta con préstamo",
      status: "soon"
    },
    {
      num: "P2·09", icon: "🏔️",
      de: "Zahlen bis 1000",  en: "Numbers up to 1000",
      fr: "Les nombres jusqu'à 1000", es: "Números hasta 1000",
      status: "soon"
    },
    {
      num: "P2·10", icon: "📐",
      de: "Rechengesetze",    en: "Laws of Arithmetic",
      fr: "Lois arithmétiques", es: "Leyes aritméticas",
      status: "soon"
    }
  ]
};

const STATUS_LABELS = {
  production: { de: "In Produktion", en: "In Production", fr: "En production", es: "En producción" },
  soon:       { de: "Bald verfügbar", en: "Coming Soon",  fr: "Bientôt",        es: "Próximamente" },
  available:  { de: "Verfügbar",      en: "Available",    fr: "Disponible",      es: "Disponible" }
};

const AGE_LABELS = {
  phase1: { de: "4–7 Jahre", en: "Ages 4–7", fr: "4–7 ans", es: "4–7 años" },
  phase2: { de: "8–12 Jahre", en: "Ages 8–12", fr: "8–12 ans", es: "8–12 años" }
};

function renderEpisodes(lang) {
  ["phase1", "phase2"].forEach(phase => {
    const grid = document.getElementById("grid-" + phase);
    if (!grid) return;
    grid.innerHTML = EPISODES[phase].map(ep => `
      <div class="episode-card${ep.status === 'soon' ? ' dimmed' : ''}">
        <span class="ep-number">${ep.num}</span>
        <div class="ep-icon">${ep.icon}</div>
        <div class="ep-title">${ep[lang] || ep.en}</div>
        <span class="ep-age${phase === 'phase2' ? ' phase2' : ''}">${AGE_LABELS[phase][lang] || AGE_LABELS[phase].en}</span>
        <span class="ep-status ${ep.status}">${STATUS_LABELS[ep.status][lang] || STATUS_LABELS[ep.status].en}</span>
      </div>
    `).join('');
  });
}
