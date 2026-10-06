export type StockTrend =
  | "rising"
  | "dev"
  | "stable"
  | "underperform"
  | "acquired"
  | "delisted";

export type Project = {
  ticker: string;
  name: string;
  oneLiner: string;
  description: string;
  trend: StockTrend;
  price: number;
  changePct: number;
  marketCap: string;
  volume: string;
  peRatio: string;
  sector: "TECH" | "PERSONAL" | "ACADEMIC" | "DELISTED";
  tech: string[];
  highlight: string;
  href?: string;
  github?: string;
  /** True if the GitHub repo is private (no public source). */
  privateRepo?: boolean;
  logo?: string;
  status: string;
  story?: string;
  /** The flagship holding: rendered as the hero card on the trading floor. */
  flagship?: boolean;
  /** Headline numbers shown on the flagship card. */
  stats?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    ticker: "QTZL",
    name: "Quetzal",
    oneLiner: "Your social media, on autopilot.",
    description:
      "AI-native social media autopilot for small businesses. Connect your accounts and brand once, and Quetzal researches trends, writes platform-native posts, generates images, carousels and reels, runs safety and quality checks, then schedules and publishes across Instagram, Facebook, LinkedIn, TikTok, X and YouTube. It learns from the real results.",
    trend: "rising",
    price: 412.8,
    changePct: 41.2,
    marketCap: "Founder stake",
    volume: "2,500+ commits",
    peRatio: "Live · Spain-first",
    sector: "TECH",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Inngest",
      "Remotion",
      "Gemini",
      "Contextual bandits",
      "Stripe",
      "Hetzner workers",
    ],
    highlight:
      "Two-stage video pipeline: a reasoning model plans an edit decision list, Remotion renders it, and no model ever touches the pixels directly.",
    href: "https://www.quetzaltech.es",
    github: "https://github.com/Svrubio7/Quetzal",
    privateRepo: true,
    logo: "/logos/quetzal.png",
    status: "LIVE",
    flagship: true,
    story:
      "My startup. Two founders, and I'm the engineer and architect behind the whole product. Built in public from Spain since June 2026: fail-closed by design, row-level security for every tenant, OAuth tokens kept in a vault, and an approval queue so a person always has the last word.",
    stats: [
      { label: "PLATFORMS", value: "6" },
      { label: "COMMITS SINCE JUNE", value: "2,500+" },
      { label: "FOUNDED", value: "2026" },
      { label: "MY ROLE", value: "Co-founder" },
    ],
  },
  {
    ticker: "CASA",
    name: "Casa del Sol Holidays",
    oneLiner: "Where every property finds its buyer.",
    description:
      "Production short-term rental management webapp for Casa del Sol Holidays. Listings, bookings, admin tooling, dockerized deployment.",
    trend: "rising",
    price: 184.2,
    changePct: 18.4,
    marketCap: "Operating",
    volume: "Daily traffic",
    peRatio: "Profitable",
    sector: "PERSONAL",
    tech: ["Django", "Vue.js", "DRF", "PostgreSQL", "Docker", "Nginx"],
    highlight: "Production-grade Django + Vue platform, live and serving real customers.",
    href: "https://casadelsolholidays.es",
    github: "https://github.com/Svrubio7/Casadelsol",
    logo: "/logos/casa.jpg",
    status: "LIVE",
  },
  {
    ticker: "SOCIAL",
    name: "SocialMedia AI",
    oneLiner: "AI that learns what makes your videos work.",
    description:
      "AI-powered SaaS for video pattern analysis, strategy generation, automated editing, and multi-platform publishing. Analyzed successful video patterns (hooks, pacing, cuts, overlays) and generated platform-optimized variations for Instagram, TikTok, YouTube, Facebook.",
    trend: "acquired",
    price: 96.4,
    changePct: 0,
    marketCap: "Merged into $QTZL",
    volume: "—",
    peRatio: "—",
    sector: "TECH",
    tech: ["Nuxt.js 3", "FastAPI", "Gemini 1.5 Pro", "GPT-4", "FFmpeg", "Celery", "Supabase"],
    highlight: "End-to-end pipeline: analysis → strategy → script → automated edit → publish.",
    github: "https://github.com/Svrubio7/socialmediaAI",
    privateRepo: false,
    status: "ACQUIRED",
    story:
      "Absorbed by $QTZL. The video-pattern research and publishing pipeline I started here became the starting point for Quetzal.",
  },
  {
    ticker: "FINHUB",
    name: "FinanceHub",
    oneLiner: "My personal market-analysis cockpit.",
    description:
      "Personal market analysis and investment tooling I built and use myself. Custom indicators, screening, and decision support for picking the best companies to invest in.",
    trend: "dev",
    price: 72.1,
    changePct: 7.8,
    marketCap: "Personal use",
    volume: "Daily use",
    peRatio: "—",
    sector: "PERSONAL",
    tech: ["Python", "Vue.js", "TypeScript", "Docker"],
    highlight: "I eat my own cooking — this is the tool I trust with my own portfolio.",
    github: "https://github.com/Svrubio7/FinanceHub",
    privateRepo: true,
    status: "DEV PHASE",
  },
  {
    ticker: "JARVIS",
    name: "Jarvis 2.0",
    oneLiner: "An agent you call, that calls you back.",
    description:
      "Voice-first personal AI agent. You talk to it from your iPhone, it does real work on your computer, and it calls you when it needs a decision. A fast model speaks, a stronger model directs it turn by turn, and background agents (a planner, browser and desktop operators, Claude Code or Codex) do the work. Desktop app for Windows, macOS and Linux, plus an iOS app and an end-to-end encrypted relay.",
    trend: "dev",
    price: 88.3,
    changePct: 9.6,
    marketCap: "Pre-release",
    volume: "~3,350 tests",
    peRatio: "—",
    sector: "PERSONAL",
    tech: ["Python", "Swift", "Tauri", "LiveKit", "MCP", "OpenAI", "Anthropic"],
    highlight:
      "The security model assumes a model can be fooled, and limits what a fooled model can do: permission tiers, approvals, an audit log and screen redaction.",
    github: "https://github.com/Svrubio7/jarvis-2.0",
    privateRepo: true,
    status: "DEV PHASE",
    story:
      "All of v2 is merged and covered by tests that fake every paid service. Next up: running it against real models and a real iPhone.",
  },
  {
    ticker: "IBERD",
    name: "Iberdrola Datathon",
    oneLiner: "Charging Spain's electric future.",
    description:
      "IE Sustainability Datathon 2026 submission: optimal EV charging network across Spain via SARIMAX demand forecasting and minimax p-centre facility-location optimization. Self-contained Folium BI deliverable with interactive coverage slider.",
    trend: "rising",
    price: 142.0,
    changePct: 14.2,
    marketCap: "Competition",
    volume: "Recent IPO",
    peRatio: "—",
    sector: "ACADEMIC",
    tech: ["Python", "SARIMAX", "Mapbox", "Folium", "geohash"],
    highlight: "Hybrid forecasting + facility-location pipeline in one judge-friendly notebook.",
    github: "https://github.com/Svrubio7/Iberdrola-Datathon",
    privateRepo: true,
    status: "RECENTLY SUBMITTED",
  },
  {
    ticker: "PSCOUT",
    name: "ProScout",
    oneLiner: "Smarter signings. Stronger squads.",
    description:
      "Football scouting ML pipeline. Scrapes match/player data, builds a 560-match dataset with 80+ features, predicts xG/xGA per team using Multi-Output XGBoost with SHAP explainability for every prediction.",
    trend: "stable",
    price: 64.0,
    changePct: 0.4,
    marketCap: "Shipped",
    volume: "Stable",
    peRatio: "Delivered",
    sector: "ACADEMIC",
    tech: ["Python", "XGBoost", "SHAP", "BeautifulSoup", "scikit-learn"],
    highlight: "Multi-output XGBoost (xG RMSE ~0.44) with SHAP for interpretability.",
    github: "https://github.com/Svrubio7/ProScout",
    status: "SHIPPED",
  },
  {
    ticker: "TENNIS",
    name: "Tennis Match Length",
    oneLiner: "Predicting tennis, point by point.",
    description:
      "ML model for predicting total games in pro tennis matches by jointly modeling competitive balance, playstyle interaction, and recent workload. 68,803-match dataset, 146 features across four Elo variants, two-stage decomposition + point-level Monte Carlo.",
    trend: "stable",
    price: 58.4,
    changePct: 0.2,
    marketCap: "Shipped",
    volume: "Stable",
    peRatio: "Delivered",
    sector: "ACADEMIC",
    tech: ["Python", "XGBoost", "SHAP", "networkx", "fuzzy k-medoids", "Monte Carlo"],
    highlight: "Point-level Monte Carlo (1,000 simulations) for distributional forecasts.",
    github: "https://github.com/Svrubio7/Tennis-Match-Length",
    status: "SHIPPED",
  },
  {
    ticker: "PREMIER",
    name: "PremierBot",
    oneLiner: "From HTML rows to match-day calls.",
    description:
      "Earlier ML attempt at predicting Premier League match statistics. Self-built scraping pipeline feeding a predictive workflow over a full season. Predecessor of ProScout — taught me a lot, but the model didn't perform.",
    trend: "underperform",
    price: 18.6,
    changePct: -8.4,
    marketCap: "Closed",
    volume: "Low",
    peRatio: "n/a",
    sector: "ACADEMIC",
    tech: ["Python", "Jupyter", "HTML scraping", "pandas"],
    highlight: "Honest record: it didn't go well. ProScout is what I built next, smarter.",
    github: "https://github.com/Svrubio7/PremierLeagueModel",
    status: "UNDERPERFORM",
    story: "The trade that didn't work — kept on the books because it taught me what ProScout needed to be.",
  },
  {
    ticker: "BRAINY",
    name: "Brainy Buddy",
    oneLiner: "Plan smarter, study calmer.",
    description:
      "AI study planner that ingests syllabi and assignments and auto-syncs a deterministic 15-minute-slot schedule to Google/Apple calendars. Three-system architecture: deterministic planner + trustworthy calendar sync + LLM tool-calling assistant.",
    trend: "delisted",
    price: 0,
    changePct: -100,
    marketCap: "DELISTED",
    volume: "0",
    peRatio: "—",
    sector: "DELISTED",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "LangGraph", "Gemini"],
    highlight: "Explainable scheduling engine — every slot has a reason.",
    github: "https://github.com/Svrubio7/brainybuddy",
    privateRepo: true,
    logo: "/logos/brainy.png",
    status: "DELISTED",
    story:
      "Took it from zero to production, then built an LTI 1.3 multi-tenant extension for European universities: GDPR and AI-Act compliant, EU data residency, and student names never entered the LLM prompt. No longer active, but still on the books.",
  },
  {
    ticker: "ALCNZ",
    name: "Alcanza",
    oneLiner: "Every scholarship you're owed, found for you.",
    description:
      "Smart aggregator for the 200+ scholarship calls open in Spain at any time. A three-minute conversational profile, an AI matcher that ranks every call by amount and compatibility, and guided preparation of each application. Built for the roughly 35% of eligible students who never apply.",
    trend: "delisted",
    price: 0,
    changePct: -100,
    marketCap: "DELISTED",
    volume: "0",
    peRatio: "—",
    sector: "DELISTED",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "LLM matching"],
    highlight:
      "Went through three rounds of security hardening: XSS, SSRF, prompt injection, IDOR and race conditions.",
    github: "https://github.com/Svrubio7/alcanza",
    status: "DELISTED",
    story:
      "Its sibling, Devenga, did the same for public subsidies for Spanish SMEs. Both are no longer active.",
  },
  {
    ticker: "DEGU",
    name: "DEGU",
    oneLiner: "Mapping power, exposing abuse.",
    description:
      "Departamento de Eficiencia Gubernamental — interactive web portal mapping government corruption cases by country. Multi-country GeoJSON pipeline, custom geometry validation, Django + Vue + Docker. Got real traction before I had to shut it down.",
    trend: "delisted",
    price: 0,
    changePct: -100,
    marketCap: "DELISTED",
    volume: "0",
    peRatio: "—",
    sector: "DELISTED",
    tech: ["Django", "Vue.js", "GeoJSON", "Docker", "Nginx"],
    highlight: "Audited government spending across multiple countries. Traction came; hosting bills did too.",
    github: "https://github.com/Svrubio7/corrupciongob",
    logo: "/logos/degu.png",
    status: "DELISTED",
    story:
      "Was getting real traction — but the hosting costs were unsustainable. Closed the doors. The data and the lessons remain.",
  },
  {
    ticker: "ETERNAL",
    name: "Eternal",
    oneLiner: "Memories that outlive the phone.",
    description:
      "Privacy-first digital memory vault preserving WhatsApp/iMessage conversations, voice notes, and media. Zero-knowledge end-to-end encryption with WebCrypto, multi-platform import pipeline, audio transcoding so voice notes stay playable forever.",
    trend: "delisted",
    price: 0,
    changePct: -100,
    marketCap: "DELISTED",
    volume: "0",
    peRatio: "—",
    sector: "DELISTED",
    tech: ["Django", "Vue 3", "PostgreSQL", "Celery", "AWS S3", "WebCrypto"],
    highlight: "Zero-knowledge encryption + audio transcoding — built so memories never lock you out.",
    github: "https://github.com/Svrubio7/Eternal",
    privateRepo: true,
    status: "DELISTED",
    story: "Same story as DEGU — beautiful product, unsustainable cost structure. Paused indefinitely.",
  },
];

export const indexQuotes = {
  current: 1412.56,
  changePct: 13.2,
  open: 1247.83,
  high: 1430.1,
  low: 1241.05,
};

export const flagship = projects.find((p) => p.flagship)!;

/** Breadth for the index boxes, computed so it never drifts from the data. */
export function breadth() {
  const n = (t: StockTrend[]) => projects.filter((p) => t.includes(p.trend)).length;
  return {
    total: projects.length,
    advancing: n(["rising", "dev"]),
    stable: n(["stable"]),
    underperform: n(["underperform"]),
    acquired: n(["acquired"]),
    delisted: n(["delisted"]),
  };
}

export type ClientMandate = {
  client: string;
  where: string;
  kind: string;
  what: string;
  tech: string[];
};

/** Work done for other companies: websites, internal tools and automations. */
export const clientWork: ClientMandate[] = [
  {
    client: "Chaparral Golf Club",
    where: "Mijas · Costa del Sol",
    kind: "WEBSITE + CMS",
    what: "Full rebuild of the club's site in five languages, with an admin where one edit reaches every language, slope tables with a handicap calculator, and a direct path to tee-time booking.",
    tech: ["Next.js", "Supabase", "GSAP", "i18n"],
  },
  {
    client: "VAMOZ Marbella",
    where: "Marbella",
    kind: "AI AUTOMATION",
    what: "Internal blog studio: researches a topic with search grounding, writes a Dutch article from the sources, links back to the agency's own pages, generates the images and queues a draft every two days.",
    tech: ["Next.js", "Gemini", "Supabase", "Scheduled jobs"],
  },
  {
    client: "Palacete 10",
    where: "Málaga",
    kind: "WEBSITE + LEADS",
    what: "Bilingual corporate-housing site for a restored 1908 villa. It was mid-renovation with no photos yet, so the scroll sequence through the villa is generated with fal.ai and Nano Banana Pro.",
    tech: ["Next.js", "Supabase", "GSAP ScrollTrigger", "fal.ai"],
  },
  {
    client: "La Montada",
    where: "Spain",
    kind: "WEBSITE + SEO",
    what: "Replaced their Framer site with 38 static pages and an admin: a homepage 12× lighter (8.8 MB down to 709 KB), structured data on every page, and photos synced from Google Drive.",
    tech: ["Next.js", "Supabase", "SEO", "Drive API"],
  },
  {
    client: "Olla GM",
    where: "Spain",
    kind: "E-COMMERCE",
    what: "Official storefront for a manufacturer of programmable cookers: catalogue, card or cash-on-delivery checkout, and warranty information.",
    tech: ["Next.js", "Vercel"],
  },
  {
    client: "ProPadel Coslada",
    where: "Madrid",
    kind: "WEBSITE",
    what: "Animated website for a padel club.",
    tech: ["Next.js", "Framer Motion"],
  },
];
