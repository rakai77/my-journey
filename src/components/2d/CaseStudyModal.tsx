import React from 'react';
import { JourneyPhase } from '../../types/journey';

interface CaseStudyModalProps {
  phase: JourneyPhase;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ phase, onClose }) => {
  // Prevent clicks inside the modal content from closing the modal
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div 
        className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col md:flex-row"
        onClick={handleContentClick}
        style={{ boxShadow: `0 0 50px -15px ${phase.themeColor.glow}` }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Left Side: Image Gallery (Mockups) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-slate-950/50 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white mb-2" style={{ color: phase.themeColor.accent }}>
            Gallery & Architecture
          </h3>
          
          {/* Main Mockup Placeholder */}
          <div className="aspect-video w-full rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-50" />
            <span className="text-slate-500 font-mono text-sm z-10 flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              UI Mockup 1
            </span>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            {[2, 3, 4].map(num => (
              <div key={num} className="aspect-video min-w-[120px] rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center cursor-pointer hover:border-slate-500 transition-colors">
                <span className="text-slate-600 font-mono text-xs">IMG {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Deep Dive Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 text-slate-300">
          <h2 className="text-3xl font-bold text-white mb-4">{phase.title}</h2>
          <p className="mb-8 text-lg leading-relaxed">{phase.overview}</p>

          <div className="space-y-8">
            <section>
              <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4" style={{ borderColor: phase.themeColor.primary }}>
                Architecture: {phase.architecture.style}
              </h4>
              <p className="mb-3">{phase.architecture.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                {phase.architecture.keyDecisions.map((decision, i) => (
                  <li key={i} className="text-slate-400">{decision}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4" style={{ borderColor: phase.themeColor.primary }}>
                Key Technical Challenge
              </h4>
              {phase.challenges.map((challenge, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-lg mb-3 border border-slate-700">
                  <p className="text-red-300 mb-2"><strong>Problem:</strong> {challenge.challenge}</p>
                  <p className="text-green-300 mb-2"><strong>Solution:</strong> {challenge.solution}</p>
                  <p className="text-blue-300"><strong>Outcome:</strong> {challenge.outcome}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
