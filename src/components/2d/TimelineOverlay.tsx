import React, { useState, useRef, useLayoutEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { journeyPhases } from '../../data/journeyData';
import { JourneyPhase } from '../../types/journey';
import { Gallery3DShowcase } from './Gallery3DShowcase';
import { ArrowDown, CheckCircle2, Target, Wrench, Code2, Layers, Cpu } from 'lucide-react';

const PhaseSection: React.FC<{
  phase: JourneyPhase;
  index: number;
  total: number;
}> = ({ phase, index }) => {
  const scroll = useScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const deepDiveRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const lastProgressRef = useRef(0);

  // Dynamic frame updates based on actual bounding rects rather than fixed offset math
  useFrame(() => {
    if (!sectionRef.current || !textRef.current || !bgTextRef.current || !scroll.el) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate distance from center of viewport (-1 to 1)
    const elementCenter = rect.top + rect.height / 2;
    const distance = (elementCenter - viewportHeight / 2) / (viewportHeight / 2);
    
    // Only animate when near the viewport
    if (Math.abs(distance) > 2.5) return;
    
    const maxDist = 1.2;
    const normalizedDist = Math.min(Math.abs(distance) / maxDist, 1);
    const opacity = Math.max(0, 1 - normalizedDist);
    
    // Parallax and subtle tilt
    const scale = 1 - (normalizedDist * 0.05); 
    const translateY = distance * 50;
    const rotateX = distance * 2; 

    textRef.current.style.opacity = opacity.toString();
    textRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;

    bgTextRef.current.style.transform = `translateY(${translateY * -0.5}px) rotate(-5deg) scale(${1 + normalizedDist * 0.2})`;
    bgTextRef.current.style.opacity = (opacity * 0.05).toString();

    // Local scroll progress for the 3D gallery
    const progress = Math.max(0, Math.min(1, 1 - (rect.top / viewportHeight)));
    if (Math.abs(progress - lastProgressRef.current) > 0.05) {
      lastProgressRef.current = progress;
      setScrollProgress(progress);
    }
  });

  const isEven = index % 2 === 0;

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden flex flex-col justify-center pointer-events-auto border-b border-slate-800/30"
    >
      {/* Background Typography */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-[15vw] font-black uppercase pointer-events-none whitespace-nowrap select-none z-0 opacity-10"
        style={{ color: phase.themeColor.primary, mixBlendMode: 'screen' }}
      >
        {phase.company}
      </div>

      <div ref={textRef} className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Main Content Grid */}
        <div className={`w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span 
                className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase border border-slate-700/50 w-fit px-4 py-1.5 rounded-full bg-slate-900/50 backdrop-blur-md" 
                style={{ color: phase.themeColor.accent }}
              >
                {phase.period} • {phase.badge}
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                {phase.title}
              </h2>
            </div>
            
            <h3 className="text-xl md:text-2xl text-slate-300 font-light flex items-center gap-2 mt-2">
              <span className="font-bold text-white">{phase.company}</span>
              <span className="text-slate-600">•</span>
              <span style={{ color: phase.themeColor.accent }}>{phase.role}</span>
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {phase.shortSummary}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {phase.techStack.slice(0, 6).map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded-lg text-xs font-mono text-slate-300">
                  {tech}
                </span>
              ))}
              {phase.techStack.length > 6 && (
                <span className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/40 rounded-lg text-xs font-mono text-slate-500">
                  +{phase.techStack.length - 6} more
                </span>
              )}
            </div>

            <button 
              onClick={() => {
                setIsExpanded(!isExpanded);
                if (!isExpanded) {
                  setTimeout(() => {
                    if (deepDiveRef.current && scroll.el) {
                       const rect = deepDiveRef.current.getBoundingClientRect();
                       const scrollTop = scroll.el.scrollTop;
                       scroll.el.scrollTo({ top: scrollTop + rect.top - 120, behavior: 'smooth' });
                    }
                  }, 150);
                }
              }}
              className="mt-6 px-8 py-4 w-fit rounded-full text-slate-950 font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: phase.themeColor.primary, boxShadow: `0 10px 30px -10px ${phase.themeColor.glow}` }}
            >
              {isExpanded ? 'Close Deep Dive' : 'Explore Deep Dive'} 
              <ArrowDown className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Media/Gallery Content */}
          <div className="w-full lg:w-1/2">
            {phase.gallery3D && phase.gallery3D.length > 0 ? (
              <div className="w-full rounded-3xl bg-slate-900/40 border border-slate-700/50 p-2 sm:p-4 backdrop-blur-2xl">
                 <Gallery3DShowcase items={phase.gallery3D} themeColor={phase.themeColor} scrollOffset={scrollProgress} />
              </div>
            ) : (
               <div className="w-full aspect-video rounded-3xl bg-slate-900/40 border border-slate-700/50 flex flex-col items-center justify-center p-8 text-center gap-4 backdrop-blur-xl">
                 <Target className="w-12 h-12 text-slate-600" />
                 <p className="text-slate-500 font-mono text-sm">Visuals being compiled...</p>
               </div>
            )}
          </div>
        </div>

        {/* Expanded Deep Dive Section */}
        <div 
          ref={deepDiveRef}
          className={`w-full overflow-hidden transition-[max-height,opacity,margin] duration-700 ease-in-out ${isExpanded ? 'max-h-[4000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}`}
        >
           {/* DEEP DIVE CONTENT */}
           <div 
             className="w-full bg-slate-900/80 backdrop-blur-2xl border border-slate-700/60 rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden"
             style={{ boxShadow: `0 0 50px -20px ${phase.themeColor.glow}` }}
           >
             
             {/* Decorative gradient blob */}
             <div 
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ backgroundColor: phase.themeColor.primary }}
             />

             {/* Left side deep dive */}
             <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:border-r border-slate-700/50 lg:pr-10 relative z-10">
               <div>
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6" style={{ color: phase.themeColor.primary }}/> Key Responsibilities
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {phase.keyResponsibilities.map((r, i) => (
                      <li key={i} className="flex gap-4 items-start text-sm text-slate-300 group">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 transition-colors" style={{ color: phase.themeColor.primary }}/>
                        <span className="leading-relaxed group-hover:text-white transition-colors">{r}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               
               <div>
                 <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Wrench className="w-6 h-6" style={{ color: phase.themeColor.primary }}/> Complete Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {phase.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-950/50 border border-slate-700/50 text-slate-300 hover:border-slate-500 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
             </div>

             {/* Right side deep dive */}
             <div className="w-full lg:w-2/3 flex flex-col gap-10 relative z-10">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Code2 className="w-7 h-7" style={{ color: phase.themeColor.primary }}/> Project Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-slate-950/50 p-6 rounded-2xl border border-slate-800/80 shadow-inner">
                    {phase.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Layers className="w-7 h-7" style={{ color: phase.themeColor.primary }}/> Architecture & Design
                  </h4>
                  <div className="bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-inner">
                    <h5 className="text-lg font-bold text-white mb-3" style={{ color: phase.themeColor.accent }}>
                      {phase.architecture.style}
                    </h5>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {phase.architecture.description}
                    </p>
                    
                    <h6 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Key Architectural Decisions</h6>
                    <ul className="grid gap-3">
                      {phase.architecture.keyDecisions.map((d, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                          <span className="font-bold text-lg leading-none" style={{ color: phase.themeColor.accent }}>›</span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {phase.challenges && phase.challenges.length > 0 && (
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Cpu className="w-7 h-7" style={{ color: phase.themeColor.primary }}/> Business Challenges & Solutions
                    </h4>
                    <div className="grid gap-4">
                      {phase.challenges.map((c, i) => (
                        <div key={i} className="bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-inner">
                          <div className="mb-4">
                            <span className="text-xs font-bold text-rose-400 block uppercase tracking-widest mb-1.5">The Challenge</span>
                            <p className="text-sm text-slate-200 leading-relaxed">{c.challenge}</p>
                          </div>
                          <div className="mb-4">
                            <span className="text-xs font-bold text-emerald-400 block uppercase tracking-widest mb-1.5">Implementation</span>
                            <p className="text-sm text-slate-200 leading-relaxed">{c.solution}</p>
                          </div>
                          <div className="pt-4 border-t border-slate-800/80">
                            <span className="text-xs font-bold text-blue-400 block uppercase tracking-widest mb-1.5">Business Outcome</span>
                            <p className="text-sm text-slate-400 italic leading-relaxed">{c.outcome}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const TimelineOverlay: React.FC<{ onHeightChange: (h: number) => void }> = ({ onHeightChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      // Add extra padding to the height to ensure the bottom isn't cut off
      const height = entries[0].contentRect.height + 200;
      onHeightChange(height);
    });
    
    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, [onHeightChange]);

  return (
    <div ref={containerRef} className="w-full flex flex-col pointer-events-none relative z-50">
      {journeyPhases.map((phase, index) => (
        <PhaseSection 
          key={phase.id} 
          phase={phase} 
          index={index} 
          total={journeyPhases.length} 
        />
      ))}
    </div>
  );
};
