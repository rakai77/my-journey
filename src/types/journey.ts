export type ViewMode = '3d-story' | 'quick-cv';

export type PropType = 
  | 'bootcamp-terminal' 
  | 'tricor-globe' 
  | 'btn-modular' 
  | 'kompas-player' 
  | 'pegadaian-vault' 
  | 'livin-pos' 
  | 'ai-core';

export interface ThemeColor {
  primary: string;
  accent: string;
  glow: string;
}

export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ArchitectureInfo {
  style: string;
  description: string;
  keyDecisions: string[];
}

export interface JourneyPhase {
  id: string;
  phaseNumber: number;
  badge: string;
  title: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  clientOrScale: string;
  location: string;
  shortSummary: string;
  overview: string;
  keyResponsibilities: string[];
  architecture: ArchitectureInfo;
  techStack: string[];
  metrics: Metric[];
  challenges: TechnicalChallenge[];
  lessonsLearned: string[];
  themeColor: ThemeColor;
  propType: PropType;
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  stats: Metric[];
  socialLinks: {
    label: string;
    url: string;
    icon: string;
  }[];
}
