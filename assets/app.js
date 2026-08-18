/* ============================================================
   KINOPLEX — dados mock compartilhados entre as páginas
   Protótipo de UX. Sem back-end, sem geolocalização real.
   ============================================================ */

const MOVIES = {
  "homem-aranha": {
    title: "Homem-Aranha: Um Novo Dia",
    rating: "12",
    genre: "Ação",
    trending: true,
    runtime: "2h 10min",
    posterClass: "poster-a",
    synopsis: "Depois de ter sua identidade revelada, Peter Parker precisa reconstruir sua vida enquanto equilibra as responsabilidades de ser o Homem-Aranha com os riscos que isso traz para quem ele ama.",
    cast: ["Elenco principal", "Ator A", "Atriz B"]
  },
  "o-fim-da-rua": {
    title: "O Fim da Rua",
    rating: "16",
    genre: "Suspense",
    trending: false,
    runtime: "1h 48min",
    posterClass: "poster-b",
    synopsis: "Um investigador reabre um caso arquivado há 20 anos depois de encontrar uma pista que conecta o crime a um bairro que jurou nunca mais revisitar.",
    cast: ["Elenco principal", "Ator C", "Atriz D"]
  },
  "acompanhamento": {
    title: "Acompanhamento: Missão Adoção",
    rating: "10",
    genre: "Comédia",
    trending: false,
    runtime: "1h 35min",
    posterClass: "poster-c",
    synopsis: "Duas irmãs decidem adotar o mesmo cachorro sem saber, e o desencontro vira uma comédia de erros que atravessa a cidade inteira.",
    cast: ["Elenco principal", "Atriz E", "Ator F"]
  }
};

const THEATERS = [
  { id: "tijuca", name: "Kinoplex Tijuca", city: "Rio de Janeiro", dist: "2.4 km de você" },
  { id: "dom-pedro", name: "Kinoplex Dom Pedro", city: "Rio de Janeiro", dist: "4.2 km de você" },
  { id: "rio-sul", name: "Kinoplex Rio Sul", city: "Rio de Janeiro", dist: "5.8 km de você" },
  { id: "barra", name: "Kinoplex Barra", city: "Rio de Janeiro", dist: "9.1 km de você" },
  { id: "iguatemi", name: "Kinoplex Iguatemi", city: "São Paulo", dist: "690.1 km de você" }
];

/* Ícones inline reutilizados entre páginas */
const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5l9-7 9 7V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>`,
  orders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  films: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`,
  favorites: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  launches: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M4.5 20c1.6-3.6 4.4-5.4 7.5-5.4s5.9 1.8 7.5 5.4"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="2.6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20a1.6 1.6 0 1 1 0-3.2A1.6 1.6 0 0 1 12 20zM6.3 14.3a8 8 0 0 1 11.4 0l-1.8 1.8a5.6 5.6 0 0 0-7.8 0zM3 11a12.3 12.3 0 0 1 18 0l-1.8 1.8a9.9 9.9 0 0 0-14.4 0z"/></svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="18" height="8" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg>`,
  bluetooth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10-5 5V2l5 5L7 17"/></svg>`
};

/* Splash: só roda se o elemento existir na página (index.html) */
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  if (sessionStorage.getItem("kinoplexSplashSeen")) {
    splash.remove();
    return;
  }
  sessionStorage.setItem("kinoplexSplashSeen", "1");
  setTimeout(() => splash.classList.add("fade-out"), 1300);
}

document.addEventListener("DOMContentLoaded", initSplash);
