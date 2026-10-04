import React, { useState, useRef, useEffect } from 'react';
import { GalleryItem3D, ThemeColor } from '../../types/journey';
import { Sparkles, X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface Gallery3DShowcaseProps {
  items: GalleryItem3D[];
  themeColor: ThemeColor;
  scrollOffset?: number; // Scroll progress from 0 to 1
}

export const Gallery3DShowcase: React.FC<Gallery3DShowcaseProps> = ({
  items,
  themeColor,
  scrollOffset = 0
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<GalleryItem3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const uniqueTypes = React.useMemo(() => {
    return Array.from(new Set(items.map(i => i.type)));
  }, [items]);

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  // Calculate scroll-driven shift if inside scroll container
  useEffect(() => {
    if (filteredItems.length === 0) return;
    // Map scroll progress to active card index
    const targetIdx = Math.min(
      filteredItems.length - 1,
      Math.floor(scrollOffset * filteredItems.length * 1.5) % filteredItems.length
    );
    // Only update if targetIdx is valid
    if (targetIdx >= 0 && targetIdx < filteredItems.length) {
      setActiveIndex(targetIdx);
    }
  }, [scrollOffset, filteredItems.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full flex flex-col items-center my-6 select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Category Pills & Indicator */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl px-4 mb-4 gap-3 z-20">
        <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => { setFilter('all'); setActiveIndex(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Views ({items.length})
          </button>
          
          {uniqueTypes.map((type) => {
            const count = items.filter(i => i.type === type).length;
            const isSelected = filter === type;
            return (
              <button
                key={type}
                onClick={() => { setFilter(type); setActiveIndex(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> {type} ({count})
              </button>
            );
          })}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">
            0{activeIndex + 1} / 0{filteredItems.length}
          </span>
          <button
            onClick={prevCard}
            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-105 active:scale-95"
            aria-label="Previous image"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextCard}
            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-105 active:scale-95"
            aria-label="Next image"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Interactive Horizontal Depth Stage */}
      <div 
        className="relative w-full max-w-4xl h-[420px] md:h-[460px] flex items-center justify-center overflow-visible"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {filteredItems.map((item, idx) => {
          const diff = idx - activeIndex;
          const isActive = diff === 0;

          // Calculate 3D transforms for horizontal scrolly stack
          let translateX = diff * 220;
          let translateZ = -Math.abs(diff) * 120;
          let rotateY = diff * -18 + (isActive ? mousePos.x * 12 : 0);
          let rotateX = isActive ? -mousePos.y * 10 : 0;
          let scale = 1 - Math.abs(diff) * 0.14;
          let opacity = Math.abs(diff) > 2 ? 0 : 1 - Math.abs(diff) * 0.35;
          let zIndex = 20 - Math.abs(diff);

          if (Math.abs(diff) > 2) {
            // Keep off-screen cards tucked away
            opacity = 0;
            translateX = diff > 0 ? 500 : -500;
          }

          return (
            <div
              key={item.id}
              onClick={() => {
                if (isActive) {
                  setSelectedItem(item);
                } else {
                  setActiveIndex(idx);
                }
              }}
              className={`absolute top-0 w-[220px] sm:w-[250px] md:w-[280px] h-[390px] md:h-[430px] rounded-2xl cursor-pointer transition-all duration-500 ease-out group ${
                isActive ? 'ring-2 ring-cyan-400 shadow-2xl' : 'hover:brightness-110'
              }`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
                boxShadow: isActive
                  ? `0 25px 50px -12px ${themeColor.glow}, 0 0 30px 2px rgba(6, 182, 212, 0.4)`
                  : '0 20px 30px -10px rgba(0,0,0,0.7)',
              }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 backdrop-blur-md flex flex-col justify-between p-3.5">
                {/* Background Image / Render */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                </div>

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold backdrop-blur-md ${
                    item.type === '3d-render' 
                      ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40' 
                      : 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] text-white">
                    {idx + 1}
                  </span>
                </div>

                {/* Bottom Info Card */}
                <div className="relative z-10 bg-slate-950/80 backdrop-blur-lg p-3 rounded-xl border border-white/10 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-cyan-300 font-mono line-clamp-1 mb-1">
                    {item.subtitle || item.tag}
                  </p>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span className="font-mono text-slate-400">{item.tag}</span>
                    <span className="text-cyan-400 group-hover:underline flex items-center gap-1 font-semibold">
                      Inspect 3D <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mt-4 z-20">
        {filteredItems.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setActiveIndex(dotIdx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              dotIdx === activeIndex
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50'
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>

      {/* Detailed Modal Zoom Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950/95 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: `0 0 50px 0 ${themeColor.glow}` }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center border border-white/20 text-lg transition-transform hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Preview Container */}
            <div className="md:w-1/2 bg-slate-900/90 relative flex items-center justify-center p-4 overflow-hidden">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-[60vh] md:max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl ring-1 ring-white/20"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                  {selectedItem.type} / {selectedItem.badge}
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  {selectedItem.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {selectedItem.title}
                </h3>
                <h4 className="text-sm text-slate-300 font-mono mb-4">
                  {selectedItem.subtitle}
                </h4>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-6">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Technologies & Specifications:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tag.split('/').map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                {selectedItem.storeUrl && (
                  <a
                    href={selectedItem.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-center text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>View on Google Play</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
