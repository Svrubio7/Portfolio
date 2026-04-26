export type StockTrend = "rising" | "dev" | "stable" | "underperform" | "delisted";

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
};

export const projects: Project[] = [
  {
    ticker: "BRAINY",
    name: "Brainy Buddy",
    oneLiner: "Plan smarter, study calmer.",
    description:
      "AI study planner that ingests syllabi and assignments and auto-syncs a deterministic 15-minute-slot schedule to Google/Apple calendars. Three-system architecture: deterministic planner + trustworthy calendar sync + LLM tool-calling assistant.",
    trend: "rising",
    price: 248.6,
    changePct: 24.6,
    marketCap: "$1.2M ARR potential",
    volume: "Active daily",
    peRatio: "∞ (pre-revenue)",
    sector: "TECH",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "LangGraph", "Gemini"],
    highlight: "Explainable scheduling engine — every slot has a reason.",
    href: "https://brainy-buddy.com",
    github: "https://github.com/Svrubio7/brainybuddy",
    privateRepo: true,
    logo: "/logos/brainy.png",
    status: "LIVE",
    story:
      "Shipped from zero to production. Now expanding with an LTI 1.3 multi-tenant extension for European universities — GDPR/AI-Act compliant, EU data residency, student names never enter the LLM prompt.",
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
      "AI-powered SaaS for video pattern analysis, strategy generation, automated editing, and multi-platform publishing. Analyzes successful video patterns (hooks, pacing, cuts, overlays) and generates platform-optimized variations for Instagram, TikTok, YouTube, Facebook.",
    trend: "dev",
    price: 96.4,
    changePct: 12.7,
    marketCap: "Pre-launch",
    volume: "Heavy dev",
    peRatio: "—",
    sector: "TECH",
    tech: ["Nuxt.js 3", "FastAPI", "Gemini 1.5 Pro", "GPT-4", "FFmpeg", "Celery", "Supabase"],
    highlight: "End-to-end pipeline: analysis → strategy → script → automated edit → publish.",
    github: "https://github.com/Svrubio7/socialmediaAI",
    privateRepo: false,
    status: "DEV PHASE",
    story: "One of my biggest projects — currently in active development.",
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
  current: 1247.83,
  changePct: 8.42,
  open: 1150.32,
  high: 1289.4,
  low: 1148.2,
  volume: "10 holdings",
};
