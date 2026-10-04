import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { JourneyScene } from './components/3d/JourneyScene';
import { TimelineOverlay } from './components/2d/TimelineOverlay';
import { journeyPhases } from './data/journeyData';

function App() {
  const [pages, setPages] = useState(journeyPhases.length);

  return (
    <div className="w-full h-screen bg-slate-950 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]} // Support high-DPI displays safely
      >
        {/* 
          ScrollControls creates a scrollable container.
          pages is now dynamic to support expandable deep dives.
        */}
        <ScrollControls pages={pages} damping={0.25}>
          
          {/* 3D Scene that reacts to useScroll() */}
          <JourneyScene />
          
          {/* HTML Overlay that scrolls natively */}
          <Scroll html style={{ width: '100%', zIndex: 50 }}>
            <TimelineOverlay onHeightChange={(h) => setPages(Math.max(journeyPhases.length, h / window.innerHeight))} />
          </Scroll>
          
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
