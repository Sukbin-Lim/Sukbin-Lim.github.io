// Shared content types — plain typed data modules (can migrate to Astro Content
// Collections later — see arch.md §6).

export interface Author {
  name: string;
  self?: boolean;   // bold (the site owner)
  equal?: boolean;  // co-first / equal contribution → superscript *
}

export interface Publication {
  id: string;
  type: 'journal' | 'conference';
  title: string;
  authors: Author[];
  equalNote?: boolean;                 // surface "* Equal contribution" legend
  venue: { abbr: string; full: string };
  year: number;
  note?: string;                       // extra legend text (e.g. "paper C13-1")
  links?: { ieee?: string; doi?: string; pdf?: string };
  metric?: string;                     // one quotable badge, e.g. "2.51× H100"
  bestPaper?: boolean;
  project?: string;                    // chip id cross-link
  featured?: boolean;
}

export interface Kpi { value: string; label: string; hot?: boolean }
export interface Spec { label: string; value: string; hot?: boolean }

export interface Chip {
  id: string;
  codename: string;
  node: string;          // shown as node badge
  accent: 'blue' | 'lime' | 'coral';
  kpis: Kpi[];           // headline pills (fallback for a project's KPIs)
  specs?: Spec[];        // datasheet rows (rendered on the project detail page)
  kicker?: string;
  kind?: string;
  org?: string;
  status?: string;
  narrative?: string;
  venues?: string[];
  publications?: string[];
  featured?: boolean;
}

// ── Projects (grouped by research theme; each project bundles its chip + papers + patents) ──
export type ThemeId = 'llm' | 'vision' | 'training';
export type ProjType = 'ASIC' | 'FPGA' | 'ARCH'; // implementation class — a project may carry several
export interface Theme { id: ThemeId; title: string; blurb: string }

export interface Project {
  id: string;
  codename: string;
  theme: ThemeId;
  tags: ProjType[];               // ASIC / FPGA / ARCH (multi-valued, e.g. LPU = [ASIC, ARCH])
  flagship?: boolean;             // big feature block vs compact tile
  role: string;                   // e.g. "Lead · co-first author", "Contributor (7/17)"
  lead?: boolean;                 // Sukbin is 1st / co-1st author
  node: string;                   // process / platform, e.g. "Samsung 4 nm", "FPGA", "—"
  kind: string;                   // one-line descriptor
  org: string;
  year?: number;                  // most-recent publication year (for ordering)
  accent: 'blue' | 'lime' | 'coral';
  heroMetric?: string;            // single punchy figure for the tile/flagship
  metrics?: Kpi[];                // KPI pills (flagship)
  narrative: string;
  chipId?: string;                // → chips.ts (full datasheet on detail page)
  pubIds: string[];               // → publications.ts
  patentIds?: string[];           // → patents.ts (by id)
}

export interface Experience { org: string; role: string; period: string; note?: string; highlights?: string[] }
export interface Education {
  org: string;
  degree: string;
  period: string;
  focus?: string;
  thesis?: string;
  lab?: string;
  advisor?: string;
  courses?: string;
}
export interface Patent { id: string; title: string; project?: string }
export interface Award { title: string; year?: number; for?: string }

export interface Affiliation { label: string; fill?: boolean }
export interface CredItem { b: string; text: string }
export interface NavItem { label: string; href: string; cta?: boolean }

export interface Profile {
  name: string;
  brand: string;
  tagline: string;
  h1Html: string;
  intro: string;
  affiliations: Affiliation[];
  statement: { kicker: string; lead: string; body: string };
  credibility: CredItem[];
  nav: NavItem[];
  email: string;
  scholar: string;
  linkedin: string;
  orcid?: string;
}
