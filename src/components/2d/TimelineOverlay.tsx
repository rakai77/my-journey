import React, { useState, useEffect } from 'react';
import { journeyPhases, profileInfo, skillCategories } from '../../data/journeyData';
import { GalleryItem3D, JourneyPhase } from '../../types/journey';
import { useJourneyState, journeyStore, SlideType } from '../../hooks/useJourneyState';
import { getAssetUrl } from '../../utils/formatters';
import { 
  ArrowDown, 
  ArrowUp, 
  CheckCircle2, 
  Target, 
  Wrench, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles, 
  X, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Smartphone,
  ExternalLink,
  BookOpen
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                           METRIC TYPOGRAPHY HELPERS                        */
/* -------------------------------------------------------------------------- */
const getIntroMetricFontSize = (val: string) => {
  if (val.length > 11) return 'text-xs sm:text-sm lg:text-[15px] xl:text-base leading-snug';
  if (val.length > 7) return 'text-sm sm:text-base lg:text-lg xl:text-xl leading-snug';
  return 'text-lg sm:text-xl lg:text-2xl xl:text-[26px]';
};

const getDetailMetricFontSize = (val: string) => {
  if (val.length > 11) return 'text-lg sm:text-xl lg:text-2xl leading-snug';
  if (val.length > 7) return 'text-xl sm:text-2xl lg:text-3xl leading-snug';
  return 'text-2xl sm:text-3xl lg:text-4xl';
};

/* -------------------------------------------------------------------------- */
/*                               PHASE INTRO CARD                             */
/* -------------------------------------------------------------------------- */
const PhaseIntroCard: React.FC<{
  phase: JourneyPhase;
  index: number;
  total: number;
}> = ({ phase, index, total }) => {
  const detailSlideId = `slide-phase-${index}-detail`;

  return (
    <div className="w-full lg:w-[56%] xl:w-[57%] 2xl:w-[57%] max-w-4xl xl:max-w-5xl ml-auto mr-0 sm:mr-2 lg:mr-4 xl:mr-6 h-[calc(100vh-120px)] max-h-[780px] my-auto flex flex-col justify-between bg-slate-900/95 border border-slate-700/80 backdrop-blur-2xl p-4 sm:p-6 lg:p-7 xl:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl text-left overflow-y-auto custom-scrollbar">
      
      {/* Top Header: Badge, Period, Location */}
      <div className="flex flex-col gap-1.5 shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span 
              className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase border border-slate-700/60 px-3 py-0.5 rounded-full bg-slate-950/60 shadow-sm"
              style={{ color: phase.themeColor.accent }}
            >
              {phase.badge}
            </span>
            <span className="text-xs sm:text-sm font-mono px-3 py-0.5 rounded-full bg-slate-800/80 text-cyan-300 font-bold hidden sm:inline">
              Interactive 3D Mockup
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
            <span>{phase.period}</span>
            <span>•</span>
            <span>{phase.duration}</span>
            {phase.location && (
              <>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline text-slate-400">{phase.location}</span>
              </>
            )}
          </div>
        </div>

        {/* Main Title & Role */}
        <div className="flex flex-col gap-1 mt-0.5">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight leading-tight">
            {phase.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm lg:text-base text-slate-300 font-medium">
            <span className="font-bold text-white">{phase.company}</span>
            <span className="text-slate-600">•</span>
            <span className="font-semibold" style={{ color: phase.themeColor.accent }}>{phase.role}</span>
            {phase.clientOrScale && (
              <>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-[11px] sm:text-xs font-mono text-slate-300 bg-slate-800/90 border border-slate-700/60 px-2 py-0.5 rounded-lg whitespace-nowrap">
                  {phase.clientOrScale}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Middle Body: 2-Column Content Layout for Optimal Vertical & Horizontal Fit */}
      <div className="grid lg:grid-cols-12 gap-3.5 lg:gap-4 my-auto py-1 shrink-0">
        {/* Left Column (7 cols): Executive Summary & Core Deliverables */}
        <div className="lg:col-span-7 flex flex-col gap-3 justify-between">
          <div className="bg-slate-950/70 p-3.5 sm:p-4 rounded-2xl border border-slate-800/80 shadow-inner space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Executive Summary & Mission
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-4 xl:line-clamp-5">
              {phase.overview}
            </p>
          </div>

          {phase.keyResponsibilities && phase.keyResponsibilities.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Core Deliverables
              </span>
              <div className="flex flex-col gap-1.5">
                {phase.keyResponsibilities.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 sm:p-3 rounded-xl border border-slate-800/70">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: phase.themeColor.primary }} />
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (5 cols): Impact Metrics & Tech Stack */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          {/* Metrics */}
          {phase.metrics && phase.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {phase.metrics.map((m, i) => (
                <div key={i} className="min-w-0 overflow-hidden bg-slate-950/80 p-2.5 sm:p-3 rounded-xl border border-slate-800/90 shadow-inner flex flex-col justify-between min-h-[84px]">
                  <span className="text-[10px] sm:text-[11px] xl:text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold leading-tight">
                    {m.label}
                  </span>
                  <span className={`font-black text-white block mt-1 tracking-tight break-words ${getIntroMetricFontSize(m.value)}`} style={{ color: phase.themeColor.accent }}>
                    {m.value}
                  </span>
                  {m.detail && (
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 leading-tight">{m.detail}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Architecture & Tech Stack */}
          <div className="bg-slate-950/60 p-3.5 sm:p-4 rounded-xl border border-slate-800/80 space-y-2">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 block font-bold">
              Architecture & Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-950/60 border border-cyan-800/70 rounded-lg text-xs sm:text-sm font-mono text-cyan-300 font-bold">
                {phase.architecture.style}
              </span>
              {phase.techStack.slice(0, 4).map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
              {phase.techStack.length > 4 && (
                <span className="px-2 py-1 bg-slate-800/40 border border-slate-700/40 rounded-lg text-xs font-mono text-slate-400">
                  +{phase.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="pt-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/70 shrink-0">
        <button
          onClick={() => journeyStore.scrollToSlide(detailSlideId)}
          className="px-7 sm:px-8 py-3 rounded-full text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-xl group"
          style={{ 
            backgroundColor: phase.themeColor.primary, 
            boxShadow: `0 10px 30px -8px ${phase.themeColor.glow}` 
          }}
        >
          <span>Explore Deep Dive Details</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </button>

        <span className="text-xs sm:text-sm font-mono text-slate-400">
          Phase 0{index + 1} of 0{total} • Overview
        </span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               PHASE DETAIL CARD                            */
/* -------------------------------------------------------------------------- */
const PhaseDetailCard: React.FC<{
  phase: JourneyPhase;
  index: number;
  total: number;
  onOpenLightbox: (item: GalleryItem3D) => void;
}> = ({ phase, index, total, onOpenLightbox }) => {
  const introSlideId = `slide-phase-${index}-intro`;
  const nextSlideId = index < total - 1 ? `slide-phase-${index + 1}-intro` : 'slide-contact';
  
  // Tab switching: clicking a tab directly switches the active view without any auto-scroll
  const [activeTab, setActiveTab] = useState<'overview' | 'responsibilities' | 'architecture' | 'challenges' | 'gallery'>('overview');
  const { selectedScreenshots } = useJourneyState();

  const currentScreenshot = selectedScreenshots[index] || phase.gallery3D?.[0]?.imageUrl;

  return (
    <div className="w-full lg:w-[56%] xl:w-[57%] 2xl:w-[57%] max-w-4xl xl:max-w-5xl ml-auto mr-0 sm:mr-2 lg:mr-4 xl:mr-6 h-[calc(100vh-120px)] max-h-[780px] my-auto flex flex-col bg-slate-900/95 border border-slate-700/80 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-7 xl:p-8 shadow-2xl relative text-left overflow-hidden">
      
      {/* Top Header (Strictly pinned at top of card, never moves) */}
      <div className="flex flex-col gap-3 pb-3.5 border-b border-slate-800/80 shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span 
              className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase border border-slate-700/60 px-3.5 py-1 rounded-full bg-slate-950/60"
              style={{ color: phase.themeColor.accent }}
            >
              {phase.badge}
            </span>
            <span className="text-xs sm:text-sm font-mono px-3.5 py-1 rounded-full bg-slate-800 text-slate-300 font-bold">
              Deep Dive
            </span>
          </div>

          <button
            onClick={() => journeyStore.scrollToSlide(introSlideId)}
            className="text-xs sm:text-sm font-mono text-slate-300 hover:text-white flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 transition-colors"
          >
            <ArrowUp className="w-4 h-4" /> Back to Overview
          </button>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-white tracking-tight">
            {phase.title}
          </h3>
          <span className="text-base sm:text-lg font-mono text-slate-400 hidden sm:inline">
            {phase.company} • {phase.role}
          </span>
        </div>

        {/* Tab Switcher: Direct Tab View (Zero window or card auto-scrolling) */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none text-xs sm:text-sm font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('responsibilities')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'responsibilities' 
                ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Responsibilities
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'architecture' 
                ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Architecture
          </button>
          {phase.challenges && phase.challenges.length > 0 && (
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'challenges' 
                  ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Challenges
            </button>
          )}
          {phase.gallery3D && phase.gallery3D.length > 0 && (
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'gallery' 
                  ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Screenshots ({phase.gallery3D.length})
            </button>
          )}
        </div>
      </div>

      {/* Tab Body: Rich, multi-column tab views that completely fill the card */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-1 sm:px-2 pr-4 sm:pr-5 pt-6 pb-12 sm:pb-14 space-y-8 custom-scrollbar">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in pb-4">
            {/* Project Overview & Mission Card */}
            <div className="space-y-2.5">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Code2 className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                Project Mission & Strategic Scope
              </h4>
              <div className="bg-slate-950/60 p-6 sm:p-7 rounded-2xl border border-slate-800/80 shadow-inner space-y-3">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {phase.overview}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                  <span>Organization: <strong className="text-white">{phase.company}</strong></span>
                  <span>•</span>
                  <span>Timeline: <strong className="text-white">{phase.period} ({phase.duration})</strong></span>
                  {phase.clientOrScale && (
                    <>
                      <span>•</span>
                      <span>Scale: <strong className="text-cyan-300">{phase.clientOrScale}</strong></span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Impact Metrics in Deep Dive */}
            {phase.metrics && phase.metrics.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                  <Target className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                  Measurable Business & Technical Impact
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {phase.metrics.map((m, i) => (
                    <div key={i} className="min-w-0 overflow-hidden bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80 shadow-inner flex flex-col justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block leading-snug">{m.label}</span>
                      <span className={`font-black text-white block mt-1.5 break-words tracking-tight ${getDetailMetricFontSize(m.value)}`} style={{ color: phase.themeColor.accent }}>
                        {m.value}
                      </span>
                      {m.detail && <span className="text-xs sm:text-sm text-slate-400 block mt-1">{m.detail}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Pillar Preview */}
            <div className="space-y-2.5">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Layers className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                Architectural Pillar
              </h4>
              <div className="bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80 shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Design Pattern
                  </span>
                  <h5 className="text-lg sm:text-xl font-bold" style={{ color: phase.themeColor.accent }}>
                    {phase.architecture.style}
                  </h5>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    {phase.architecture.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-white shrink-0 transition-colors"
                >
                  View Architecture Details →
                </button>
              </div>
            </div>

            {/* Core Tech Stack */}
            <div className="space-y-2.5">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Wrench className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                Core Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2.5 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 shadow-inner">
                {phase.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-900 border border-slate-700/60 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Production Store References if available */}
            {phase.references && phase.references.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">Live Production References:</span>
                  {phase.references.map((ref, i) => (
                    <a
                      key={i}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-2 transition-colors border border-slate-700"
                    >
                      <span>{ref.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RESPONSIBILITIES */}
        {activeTab === 'responsibilities' && (
          <div className="space-y-8 animate-fade-in pb-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                  <Target className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                  Key Responsibilities & Deliverables
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  {phase.keyResponsibilities.length} Deliverables
                </span>
              </div>
              
              {/* 2-column grid of deliverables for full horizontal and vertical presence */}
              <div className="grid sm:grid-cols-2 gap-4">
                {phase.keyResponsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-200 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 shadow-inner group hover:border-slate-700 transition-colors">
                    <CheckCircle2 
                      className="w-5 h-5 shrink-0 mt-0.5" 
                      style={{ color: phase.themeColor.primary }} 
                    />
                    <span className="leading-relaxed font-normal">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Context & Engineering Scope Card */}
            <div className="bg-slate-950/60 p-6 sm:p-7 rounded-2xl border border-slate-800/80 shadow-inner space-y-3">
              <h5 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Engineering Scope & Operational Dynamics
              </h5>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="text-xs font-mono text-cyan-400 block font-bold mb-1">Cross-Functional Sync</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collaborated closely across Android, iOS, Backend API, QA, and Product teams for synchronized bi-weekly releases.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="text-xs font-mono text-cyan-400 block font-bold mb-1">Quality Rigor</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enforced strict automated unit testing, standardized pull request reviews, and zero-crash deployment targets.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="text-xs font-mono text-cyan-400 block font-bold mb-1">Store Publishing</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Managed end-to-end production store releases on Google Play Store and Apple App Store across multiple regional variants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="space-y-8 animate-fade-in pb-4">
            {/* Main Architecture Style */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Layers className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                Architecture Pattern & System Philosophy
              </h4>
              <div className="bg-slate-950/60 p-6 sm:p-7 rounded-2xl border border-slate-800/80 shadow-inner space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Primary Architecture
                    </span>
                    <h5 className="text-xl sm:text-2xl font-bold" style={{ color: phase.themeColor.accent }}>
                      {phase.architecture.style}
                    </h5>
                  </div>
                  <span className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                    Production Proven
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-1">
                  {phase.architecture.description}
                </p>
              </div>
            </div>

            {/* Key Decisions Grid */}
            {phase.architecture.keyDecisions && phase.architecture.keyDecisions.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                  <Cpu className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                  Key Architectural Decisions
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {phase.architecture.keyDecisions.map((dec, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 shadow-inner">
                      <span className="font-bold text-xl leading-none text-cyan-400 shrink-0">›</span>
                      <span className="leading-relaxed font-normal">{dec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Tenets */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80 shadow-inner space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                  Data Persistence & Offline Strategy
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Implemented robust caching layers with RoomDB and structured repositories, ensuring fluid user experience and offline data resilience.
                </p>
              </div>
              <div className="bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800/80 shadow-inner space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                  Testing & Verification Rigor
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Enforced unit test coverage for viewmodels and repository mappers using MockK and Turbine to validate reactive coroutine flows.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CHALLENGES */}
        {activeTab === 'challenges' && phase.challenges && (
          <div className="space-y-8 animate-fade-in pb-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2.5">
              <Cpu className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
              Business Challenges & Engineering Solutions
            </h4>
            
            {/* 2-column grid of challenges */}
            <div className="grid sm:grid-cols-2 gap-4">
              {phase.challenges.map((c, i) => (
                <div key={i} className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 shadow-inner space-y-3.5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block mb-1">
                        The Challenge
                      </span>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Technical Implementation
                      </span>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      Business & Technical Outcome
                    </span>
                    <p className="text-sm sm:text-base text-slate-400 italic leading-relaxed">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lessons Learned card */}
            {phase.lessonsLearned && phase.lessonsLearned.length > 0 && (
              <div className="bg-slate-950/60 p-6 sm:p-7 rounded-2xl border border-slate-800/80 shadow-inner space-y-2.5">
                <h5 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  Key Takeaways & Engineering Mindset
                </h5>
                <ul className="space-y-2">
                  {phase.lessonsLearned.map((lesson, i) => (
                    <li key={i} className="text-sm text-slate-200 leading-relaxed flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: SCREENSHOTS / GALLERY */}
        {activeTab === 'gallery' && phase.gallery3D && (
          <div className="space-y-6 animate-fade-in pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Smartphone className="w-5 h-5" style={{ color: phase.themeColor.primary }} />
                App Screenshots & Live Screens ({phase.gallery3D.length})
              </h4>
              <span className="text-xs font-mono text-cyan-400">
                Tip: Click any screenshot to preview in the interactive 3D showcase on the left
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
              {phase.gallery3D.map((item) => {
                const isSelected = currentScreenshot === item.imageUrl;
                return (
                  <div 
                    key={item.id}
                    onClick={() => journeyStore.setPhaseScreenshot(index, item.imageUrl)}
                    className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 bg-slate-950/70 ${
                      isSelected 
                        ? 'border-cyan-400 shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] scale-[1.02]' 
                        : 'border-slate-800 hover:border-slate-600 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden bg-slate-950 relative">
                      <img 
                        src={getAssetUrl(item.imageUrl)} 
                        alt={item.title} 
                        className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />
                      
                      {/* Top badge */}
                      <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-sm border border-slate-700/80 text-slate-300 font-bold">
                        {item.badge}
                      </span>

                      {/* Expand / Lightbox button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenLightbox(item);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        title="View Fullscreen"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      {/* Bottom Info */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left pointer-events-none">
                        <span className="text-xs sm:text-sm font-bold text-white block truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 block truncate">
                          {item.subtitle || item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Active on 3D Indicator */}
                    {isSelected && (
                      <div className="py-1.5 px-3 bg-cyan-500/10 border-t border-cyan-500/30 text-center">
                        <span className="text-xs font-mono text-cyan-400 font-bold">
                          ✓ Active in 3D Showcase
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Bottom Footer Action Bar */}
      <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-4 shrink-0">
        <button
          onClick={() => journeyStore.scrollToSlide(introSlideId)}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <ArrowUp className="w-4 h-4" /> Back to Overview
        </button>

        <button
          onClick={() => journeyStore.scrollToSlide(nextSlideId)}
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-mono font-bold text-slate-950 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-lg"
          style={{ backgroundColor: phase.themeColor.primary }}
        >
          <span>{index < total - 1 ? `Next: Phase 0${index + 2}` : 'View Profile & Contact'}</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            CLOSING / CONTACT SLIDE                         */
/* -------------------------------------------------------------------------- */
const ContactSlide: React.FC = () => {
  return (
    <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center justify-center text-center p-5 sm:p-6 lg:p-7 max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar bg-slate-900/95 border border-slate-700/80 backdrop-blur-2xl rounded-[2.2rem] shadow-2xl space-y-3.5 sm:space-y-4 pointer-events-auto">
      {/* Header */}
      <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase border border-slate-700/60 px-3 py-1 rounded-full bg-slate-950/60 text-cyan-400">
          The Journey Continues
        </span>

        {profileInfo.avatarUrl && (
          <div className="relative my-0.5 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 shadow-xl shadow-cyan-500/25">
            <img 
              src={getAssetUrl(profileInfo.avatarUrl)} 
              alt={profileInfo.name} 
              className="w-full h-full rounded-full object-cover border-2 border-slate-900"
            />
            <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-sm" title="Active & Open to Opportunities" />
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          {profileInfo.name}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-semibold max-w-2xl mx-auto">
          {profileInfo.title}
        </p>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed line-clamp-2 sm:line-clamp-none">
          {profileInfo.bio}
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 w-full max-w-4xl">
        {profileInfo.stats.map((stat, i) => (
          <div key={i} className="bg-slate-950/60 p-2 sm:p-2.5 rounded-xl border border-slate-800/80 flex flex-col justify-between">
            <span className="text-lg sm:text-xl lg:text-2xl font-black text-cyan-400 block tracking-tight">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-300 block mt-0.5 font-semibold leading-tight">
              {stat.label}
            </span>
            {stat.detail && (
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mt-0.5 truncate">
                {stat.detail}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Skills Matrix */}
      <div className="w-full text-left space-y-1.5 pt-0.5">
        <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 text-center font-bold">
          Core Engineering Competencies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-slate-950/50 p-2.5 sm:p-3 rounded-xl border border-slate-800/80">
              <h4 className="text-[11px] sm:text-xs font-bold text-cyan-400 mb-1">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {cat.skills.map((skill, si) => (
                  <span key={si} className="text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200 font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
        <a
          href="https://github.com/rakai77"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold transition-all hover:scale-105 flex items-center gap-2 border border-slate-700 shadow-md"
        >
          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/rakai-wangsasatia"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Connect on LinkedIn
        </a>
        <a
          href="mailto:rakai77.rr@gmail.com"
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          title="rakai77.rr@gmail.com"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Send Email
        </a>
        <button
          onClick={() => journeyStore.scrollToSlide('slide-phase-0-intro')}
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-2 border border-slate-800"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Top
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            MAIN TIMELINE OVERLAY                           */
/* -------------------------------------------------------------------------- */
export const TimelineOverlay: React.FC = () => {
  const { activePhaseIndex, activeSlideType } = useJourneyState();
  const [lightboxItem, setLightboxItem] = useState<GalleryItem3D | null>(null);

  // Setup IntersectionObserver for slide tracking
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const slideId = entry.target.id;
          const phaseIdxAttr = entry.target.getAttribute('data-phase-index');
          const slideTypeAttr = entry.target.getAttribute('data-slide-type') as SlideType | null;

          if (slideId && phaseIdxAttr !== null && slideTypeAttr) {
            const phaseIdx = parseInt(phaseIdxAttr, 10);
            journeyStore.setActiveSlide(phaseIdx, slideId, slideTypeAttr);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const slides = document.querySelectorAll('.snap-page');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col relative z-20 pointer-events-none">
      
      {/* ----------------- FIXED TOP NAVIGATION BAR ----------------- */}
      <header className="fixed top-3 sm:top-4 left-3 right-3 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-50 flex items-center justify-between pointer-events-auto bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-2xl shadow-xl gap-2">
        {/* Brand */}
        <div 
          onClick={() => journeyStore.scrollToSlide('slide-phase-0-intro')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
        >
          {profileInfo.avatarUrl ? (
            <img 
              src={getAssetUrl(profileInfo.avatarUrl)} 
              alt={profileInfo.name} 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover border border-cyan-400/50 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform" 
            />
          ) : (
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-black text-white text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              RW
            </div>
          )}
          <div className="flex flex-col text-left whitespace-nowrap">
            <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Rakai Wangsasatia
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-slate-400">
              Mobile & AI Portfolio
            </span>
          </div>
        </div>

        {/* Phase Groups Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-mono text-xs xl:text-sm shrink-0 whitespace-nowrap">
          {journeyPhases.map((phase, idx) => {
            const isCurrent = activePhaseIndex === idx && activeSlideType !== 'contact';
            return (
              <button
                key={phase.id}
                onClick={() => journeyStore.scrollToSlide(`slide-phase-${idx}-intro`)}
                className={`whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 rounded-xl transition-all font-medium ${
                  isCurrent 
                    ? 'bg-slate-800 text-white font-bold border shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
                style={isCurrent ? { borderColor: phase.themeColor.primary, color: phase.themeColor.accent } : {}}
              >
                0{idx + 1} {phase.navTitle || phase.company}
              </button>
            );
          })}
          <button
            onClick={() => journeyStore.scrollToSlide('slide-contact')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-xl transition-all ${
              activeSlideType === 'contact'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline">
              {activeSlideType === 'contact' 
                ? 'Contact' 
                : `Phase 0${activePhaseIndex + 1} • ${activeSlideType === 'intro' ? 'Overview' : 'Deep Dive'}`}
            </span>
            <span className="sm:hidden">
              Phase 0{activePhaseIndex + 1}
            </span>
          </div>
        </div>
      </header>

      {/* ----------------- PHASE GROUPS (Per Phase Container) ----------------- */}
      {journeyPhases.map((phase, index) => {
        const introId = `slide-phase-${index}-intro`;
        const detailId = `slide-phase-${index}-detail`;
        const groupId = `phase-group-${index + 1}`;

        return (
          <div 
            key={phase.id} 
            id={groupId}
            data-phase-group={index + 1}
            className="phase-group w-full relative"
          >
            {/* 1. OVERVIEW PAGE (Part 1 of Phase Group) */}
            <section
              id={introId}
              data-phase-index={index}
              data-slide-type="intro"
              className="snap-page w-full h-screen min-h-screen relative flex items-center justify-end pt-20 sm:pt-24 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-6 xl:px-8 pointer-events-auto overflow-hidden"
            >
              <PhaseIntroCard 
                phase={phase} 
                index={index} 
                total={journeyPhases.length} 
              />
            </section>

            {/* 2. DETAIL PAGE (Part 2 of Phase Group) */}
            <section
              id={detailId}
              data-phase-index={index}
              data-slide-type="detail"
              className="snap-page w-full h-screen min-h-screen relative flex items-center justify-end pt-20 sm:pt-24 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-6 xl:px-8 pointer-events-auto overflow-hidden"
            >
              <PhaseDetailCard 
                phase={phase} 
                index={index} 
                total={journeyPhases.length} 
                onOpenLightbox={(item) => setLightboxItem(item)}
              />
            </section>
          </div>
        );
      })}

      {/* 3. CLOSING / CONTACT PAGE */}
      <div id="contact-group" className="w-full relative">
        <section
          id="slide-contact"
          data-phase-index={journeyPhases.length - 1}
          data-slide-type="contact"
          className="snap-page w-full h-screen min-h-screen relative flex items-center justify-center pt-20 sm:pt-24 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 pointer-events-auto overflow-hidden"
        >
          <ContactSlide />
        </section>
      </div>

      {/* ----------------- LIGHTBOX MODAL ----------------- */}
      {lightboxItem && (
        <div 
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 pointer-events-auto animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl p-6 flex flex-col items-center gap-4 relative shadow-2xl"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden rounded-2xl border border-slate-800">
              <img 
                src={getAssetUrl(lightboxItem.imageUrl)} 
                alt={lightboxItem.title} 
                className="max-h-[70vh] object-contain"
              />
            </div>
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                {lightboxItem.badge} • {lightboxItem.tag}
              </span>
              <h4 className="text-xl font-bold text-white">
                {lightboxItem.title}
              </h4>
              <p className="text-sm text-slate-400 max-w-lg">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
