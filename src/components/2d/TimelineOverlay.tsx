import React, { useState } from 'react';
import { journeyPhases } from '../../data/journeyData';
import { JourneyPhase } from '../../types/journey';
import { CaseStudyModal } from './CaseStudyModal';

export const TimelineOverlay: React.FC = () => {
  const [activePhase, setActivePhase] = useState<JourneyPhase | null>(null);

  return (
    <div className="w-full flex flex-col pointer-events-none">
      
      {/* 
        Each phase occupies 100vh height to align with ScrollControls pages.
        pointer-events-none allows scrolling to pass through to the 3D canvas,
        but we can enable pointer-events-auto on specific buttons if needed later.
      */}
      {journeyPhases.map((phase) => (
        <section
          key={phase.id}
          className="w-full h-[100vh] flex flex-col justify-center px-8 md:px-24 relative overflow-hidden"
        >
          {/* Giant Impact Typography in the background (Lando Norris style) */}
          <div 
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-[12vw] font-black uppercase opacity-10 pointer-events-none whitespace-nowrap overflow-hidden select-none z-0"
            style={{ 
              color: phase.themeColor.primary,
              mixBlendMode: 'screen',
              transform: 'translateY(-50%) rotate(-5deg) scale(1.2)'
            }}
          >
            {phase.company}
          </div>

          <div 
            className="max-w-2xl bg-slate-950/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 z-10 pointer-events-auto"
            style={{ 
              boxShadow: `0 0 40px -10px ${phase.themeColor.glow}`,
              borderLeft: `4px solid ${phase.themeColor.primary}` 
            }}
          >
            <span 
              className="text-sm font-mono tracking-widest uppercase mb-2 block"
              style={{ color: phase.themeColor.accent }}
            >
              {phase.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              {phase.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              {phase.company} • {phase.role}
            </h2>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {phase.shortSummary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {phase.techStack.slice(0, 4).map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
              {phase.techStack.length > 4 && (
                <span className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono text-slate-500 border border-slate-700">
                  +{phase.techStack.length - 4} more
                </span>
              )}
            </div>

            <button
              onClick={() => setActivePhase(phase)}
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ 
                backgroundColor: phase.themeColor.primary,
                boxShadow: `0 4px 20px -5px ${phase.themeColor.glow}`
              }}
            >
              Explore Deep Dive
            </button>
          </div>
        </section>
      ))}

      {/* Render the modal outside the scroll flow */}
      {activePhase && (
        <CaseStudyModal 
          phase={activePhase} 
          onClose={() => setActivePhase(null)} 
        />
      )}

    </div>
  );
};
