import React, { useState, useEffect } from 'react';
import { journeyPhases } from '../../data/journeyData';
import { useJourneyState, journeyStore } from '../../hooks/useJourneyState';
import { useDragTilt } from '../../hooks/useDragTilt';
import { getPhaseScreenshotItem, getEchoScreenshotItems } from '../../utils/screenshotUtils';
import { getAssetUrl } from '../../utils/formatters';
import { Smartphone, Layers, Move } from 'lucide-react';

export const LayeredScreenshotShowcase: React.FC = () => {
  const { activePhaseIndex, activeSlideType, selectedScreenshots } = useJourneyState();
  const [hintVisible, setHintVisible] = useState(true);

  const phase = journeyPhases[activePhaseIndex] || journeyPhases[0];
  const selectedUrl = selectedScreenshots[activePhaseIndex];
  const heroItem = getPhaseScreenshotItem(phase, selectedUrl);
  const echoItems = getEchoScreenshotItems(phase, heroItem, 2);

  const totalScreenshots = phase.gallery3D?.length || 1;
  const currentScreenshotIndex = phase.gallery3D?.findIndex(
    (item) => item.imageUrl === heroItem?.imageUrl
  );
  const screenshotDisplayNumber = (currentScreenshotIndex !== undefined && currentScreenshotIndex >= 0)
    ? currentScreenshotIndex + 1
    : 1;

  // Tap action: cycle to the next screenshot in this phase
  const handleTap = () => {
    setHintVisible(false);
    if (!phase.gallery3D || phase.gallery3D.length <= 1) return;
    const nextIdx = ((currentScreenshotIndex ?? 0) + 1) % phase.gallery3D.length;
    journeyStore.setPhaseScreenshot(activePhaseIndex, phase.gallery3D[nextIdx].imageUrl);
  };

  const { containerRef, bind } = useDragTilt({
    maxTiltX: 28,
    maxTiltY: 36,
    onTap: handleTap,
    disabled: activeSlideType === 'contact',
  });

  // Fade hint out after first interaction or 6s
  useEffect(() => {
    const timer = setTimeout(() => setHintVisible(false), 7000);
    return () => clearTimeout(timer);
  }, [activePhaseIndex]);

  const isVisible = activeSlideType !== 'contact';

  return (
    <aside
      aria-label="Interactive 3D Screenshot Showcase"
      className={`fixed left-0 top-0 h-screen w-full lg:w-[44%] xl:w-[43%] 2xl:w-[43%] pointer-events-none z-30 hidden lg:flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-20 pb-14 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 3D Perspective Stage */}
      <div 
        className="tilt-stage relative flex items-center justify-center shrink-0"
        style={{
          height: 'min(64vh, 580px)',
          width: 'calc(min(64vh, 580px) * (9 / 16))',
          maxWidth: 'min(100%, 340px)',
          aspectRatio: '9 / 16',
        }}
      >
        
        {/* Tilt Card Container with Physics-Driven CSS Transforms */}
        <div
          ref={containerRef}
          {...bind}
          className="tilt-card relative w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing select-none"
          title="Click to switch screens • Drag to tilt in 3D"
        >
          {/* ---------------------------------------------------------------- */}
          {/* L1: AMBIENT RADIAL GLOW (Backdrop Aura, translateZ -110px)       */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="tilt-layer rounded-[2.5rem] blur-3xl opacity-60 transition-colors duration-700"
            style={{
              transform: 'translateZ(-110px) scale(1.22)',
              background: `radial-gradient(circle at 50% 50%, ${phase.themeColor.primary} 0%, ${phase.themeColor.accent}22 50%, transparent 75%)`,
            }}
          />

          {/* ---------------------------------------------------------------- */}
          {/* L2: ECHO / BACKGROUND FAN CARDS (Parallax Stack, translateZ -50px)*/}
          {/* ---------------------------------------------------------------- */}
          {echoItems[1] && (
            <div
              className="tilt-layer rounded-[1.6rem] sm:rounded-[1.75rem] overflow-hidden border border-slate-700/40 bg-slate-900/60 shadow-2xl opacity-40 transition-all duration-500"
              style={{
                transform: 'translateZ(-60px) translateX(-26px) translateY(8px) rotateZ(-4deg) scale(0.92)',
              }}
            >
              <img
                src={getAssetUrl(echoItems[1].imageUrl)}
                alt={echoItems[1].title}
                draggable={false}
                className="w-full h-full object-contain filter brightness-75 select-none"
              />
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
            </div>
          )}

          {echoItems[0] && (
            <div
              className="tilt-layer rounded-[1.6rem] sm:rounded-[1.75rem] overflow-hidden border border-slate-700/60 bg-slate-900/70 shadow-2xl opacity-60 transition-all duration-500"
              style={{
                transform: 'translateZ(-30px) translateX(22px) translateY(-6px) rotateZ(3.2deg) scale(0.96)',
              }}
            >
              <img
                src={getAssetUrl(echoItems[0].imageUrl)}
                alt={echoItems[0].title}
                draggable={false}
                className="w-full h-full object-contain filter brightness-90 select-none"
              />
              <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]" />
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* L3: HERO SCREENSHOT (Original, Untouched, translateZ 0)           */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="relative w-full h-full rounded-[1.6rem] sm:rounded-[1.75rem] overflow-hidden bg-slate-950 border border-slate-700/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
            style={{ transform: 'translateZ(0px)' }}
          >
            {heroItem?.imageUrl ? (
              <img
                key={heroItem.imageUrl}
                src={getAssetUrl(heroItem.imageUrl)}
                alt={heroItem.title}
                draggable={false}
                className="w-full h-full object-contain animate-fade-in select-none"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                <Smartphone className="w-12 h-12 text-slate-500 mb-3" />
                <span className="text-sm font-bold text-white">{phase.title}</span>
                <span className="text-xs text-slate-400 mt-1">{phase.role}</span>
              </div>
            )}

            {/* Subtle Inner Glass Edge Vignette */}
            <div className="absolute inset-0 pointer-events-none rounded-[1.6rem] sm:rounded-[1.75rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* L4: INTERACTIVE SPECULAR GLARE SHEEN (translateZ 2px)            */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="tilt-layer tilt-glare rounded-[1.6rem] sm:rounded-[1.75rem]"
            style={{ transform: 'translateZ(2px)' }}
          />

          {/* ---------------------------------------------------------------- */}
          {/* L5: INTERACTIVE POINTER HINT / AFFORDANCE                        */}
          {/* ---------------------------------------------------------------- */}
          {hintVisible && (
            <div
              className="tilt-layer flex items-center justify-center"
              style={{ transform: 'translateZ(70px)' }}
            >
              <div className="px-4 py-2 rounded-full bg-slate-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-bold shadow-2xl flex items-center gap-2 animate-bounce">
                <Move className="w-3.5 h-3.5" />
                <span>Drag to tilt • Click to switch</span>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* CONTACT SHADOW BENEATH THE CARD                                  */}
          {/* ---------------------------------------------------------------- */}
          <div
            className="tilt-layer rounded-full opacity-60 blur-2xl pointer-events-none"
            style={{
              transform: 'translateY(45px) translateZ(-90px) scale(0.85, 0.25)',
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)',
            }}
          />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TOP STATUS BAR (Floating above card to avoid obstructing screen)   */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="absolute flex items-center justify-between px-1 pointer-events-auto z-40"
          style={{ top: '-42px', left: 0, right: 0 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 shadow-lg text-xs font-mono font-bold text-white">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: phase.themeColor.accent }}
            />
            <span className="truncate max-w-[170px]">
              {heroItem?.badge || phase.badge}
            </span>
          </div>

          {totalScreenshots > 1 && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 shadow-lg text-xs font-mono text-slate-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{screenshotDisplayNumber}/{totalScreenshots}</span>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM CAPTION (Floating below card to avoid covering bottom tabs)  */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="absolute px-0 pointer-events-auto z-40"
          style={{ bottom: '-58px', left: 0, right: 0 }}
        >
          <div className="bg-slate-950/90 backdrop-blur-xl px-4 py-2 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white tracking-tight truncate">
                {heroItem?.title || phase.title}
              </h4>
              <p className="text-[11px] text-slate-400 truncate">
                {heroItem?.subtitle || heroItem?.tag || phase.role}
              </p>
            </div>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 font-semibold shrink-0"
              style={{ color: phase.themeColor.accent }}
            >
              {phase.company}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
