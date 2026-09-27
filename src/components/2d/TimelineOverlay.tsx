import React, { useState, useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { journeyPhases } from '../../data/journeyData';
import { JourneyPhase } from '../../types/journey';
import { CaseStudyModal } from './CaseStudyModal';
import { Gallery3DShowcase } from './Gallery3DShowcase';

const PhaseSection: React.FC<{
  phase: JourneyPhase;
  index: number;
  total: number;
  onExplore: (phase: JourneyPhase) => void;
}> = ({ phase, index, total, onExplore }) => {
  const scroll = useScroll();
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageGroupRef = useRef<HTMLDivElement>(null);
  const lastProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useFrame(() => {
    if (!textRef.current || !bgTextRef.current) return;
    
    // offset goes from 0 to 1
    const offset = scroll.offset;
    // this section's ideal center offset
    const sectionOffset = index / (total - 1);
    
    // distance from center (-1 to 1)
    const distance = offset - sectionOffset;
    
    // Map distance to opacity and scale
    const maxDist = 1 / (total - 1);
    const normalizedDist = Math.abs(distance) / maxDist;
    const opacity = Math.max(0, 1 - normalizedDist);
    
    // 3D effect: scale and translate based on distance
    const scale = 1 - (normalizedDist * 0.15); // 1 to 0.85
    const translateY = distance * 180; // parallax effect
    const rotateX = distance * 12; // 3D tilt

    // Apply to main card
    textRef.current.style.opacity = opacity.toString();
    textRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
    textRef.current.style.transformStyle = 'preserve-3d';

    // Apply to giant background text (reverse parallax and scale up)
    bgTextRef.current.style.transform = `translateY(${translateY * -0.5}px) rotate(-5deg) scale(${1.2 + normalizedDist})`;
    bgTextRef.current.style.opacity = (opacity * 0.1).toString();

    // Calculate section scroll progress and update React state conditionally
    const progress = Math.max(0, Math.min(1, (offset - (sectionOffset - maxDist * 0.6)) / (maxDist * 1.2)));
    if (Math.abs(progress - lastProgressRef.current) > 0.05) {
      lastProgressRef.current = progress;
      setScrollProgress(progress);
    }

    // Apply to legacy image thumb group if any
    if (imageGroupRef.current) {
      imageGroupRef.current.style.transform = `translateZ(50px) translateY(${translateY * 1.2}px)`;
    }
  });

  const hasGallery = Boolean(phase.gallery3D && phase.gallery3D.length > 0);

  return (
    <section
      className="w-full min-h-[100vh] py-12 flex flex-col justify-center px-4 sm:px-8 md:px-16 relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Giant Impact Typography in the background */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-[12vw] font-black uppercase pointer-events-none whitespace-nowrap select-none z-0 transition-transform duration-75"
        style={{ 
          color: phase.themeColor.primary,
          mixBlendMode: 'screen',
        }}
      >
        {phase.company}
      </div>

      <div 
        ref={textRef}
        className={`w-full ${hasGallery ? 'max-w-5xl' : 'max-w-2xl'} mx-auto bg-slate-950/80 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-slate-700/60 z-10 pointer-events-auto transition-transform duration-75`}
        style={{ 
          boxShadow: `0 0 50px -10px ${phase.themeColor.glow}`,
          borderLeft: `5px solid ${phase.themeColor.primary}` 
        }}
      >
        {/* Header Badges & Title */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span 
            className="text-xs sm:text-sm font-mono tracking-widest uppercase block"
            style={{ color: phase.themeColor.accent }}
          >
            {phase.badge}
          </span>
          <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
            {phase.period} • {phase.duration}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight text-white">
          {phase.title}
        </h1>
        <h2 className="text-lg sm:text-xl text-slate-300 mb-4 font-light flex items-center gap-2">
          <span>{phase.company}</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">{phase.role}</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-5 leading-relaxed max-w-3xl">
          {phase.shortSummary}
        </p>

        {/* 3D Interactive Scrolly Gallery Showcase */}
        {hasGallery && phase.gallery3D && (
          <div className="my-2 border-y border-slate-800/80 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                  Interactive 3D Visual Gallery
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Scroll or swipe horizontally to navigate
              </span>
            </div>
            
            <Gallery3DShowcase
              items={phase.gallery3D}
              themeColor={phase.themeColor}
              scrollOffset={scrollProgress}
            />
          </div>
        )}

        {/* Legacy thumbnail gallery fallback */}
        {!hasGallery && phase.references && phase.references.length > 0 && (
          <div ref={imageGroupRef} className="flex flex-wrap gap-4 mb-6 transition-transform duration-75">
            {phase.references.map((ref, idx) => (
              <div key={idx} className="w-32 h-32 bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700 shadow-xl"
                   style={{ boxShadow: `0 10px 30px -10px ${phase.themeColor.glow}` }}>
                {ref.imageUrl ? (
                  <img src={ref.imageUrl} alt={ref.label} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs text-center p-2 font-mono">
                    [{ref.label} Image]
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Tech Stack Pills & CTA Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {phase.techStack.slice(0, 5).map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-slate-800/90 rounded-full text-xs font-mono text-slate-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
            {phase.techStack.length > 5 && (
              <span className="px-3 py-1 bg-slate-800/90 rounded-full text-xs font-mono text-slate-500 border border-slate-700">
                +{phase.techStack.length - 5} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {phase.references && phase.references.length > 0 && (
              <div className="hidden sm:flex items-center gap-2">
                {phase.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <span>{ref.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            )}
            <button
              onClick={() => onExplore(phase)}
              className="px-6 py-2.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
              style={{ 
                backgroundColor: phase.themeColor.primary,
                boxShadow: `0 4px 20px -5px ${phase.themeColor.glow}`
              }}
            >
              Explore Deep Dive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TimelineOverlay: React.FC = () => {
  const [activePhase, setActivePhase] = useState<JourneyPhase | null>(null);

  return (
    <div className="w-full flex flex-col pointer-events-none">
      {journeyPhases.map((phase, index) => (
        <PhaseSection 
          key={phase.id} 
          phase={phase} 
          index={index} 
          total={journeyPhases.length} 
          onExplore={setActivePhase} 
        />
      ))}

      {/* Render the modal outside the scroll flow */}
      {activePhase && (
        <div className="pointer-events-auto">
          <CaseStudyModal 
            phase={activePhase} 
            onClose={() => setActivePhase(null)} 
          />
        </div>
      )}
    </div>
  );
};
