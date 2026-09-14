import React from 'react';
import { journeyPhases } from '../../data/journeyData';

export const TimelineOverlay: React.FC = () => {
  return (
    <div className="w-full relative pointer-events-none text-white font-sans">
      
      {/* 
        Each phase occupies 100vh height to align with ScrollControls pages.
        pointer-events-none allows scrolling to pass through to the 3D canvas,
        but we can enable pointer-events-auto on specific buttons if needed later.
      */}
      {journeyPhases.map((phase) => (
        <section
          key={phase.id}
          className="w-full h-[100vh] flex flex-col justify-center px-8 md:px-24"
        >
          <div 
            className="max-w-2xl bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50"
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
            
            <div className="flex flex-wrap gap-2">
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
          </div>
        </section>
      ))}

    </div>
  );
};
