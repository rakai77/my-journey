import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { JourneyScene } from './components/3d/JourneyScene';
import { TimelineOverlay } from './components/2d/TimelineOverlay';
import { journeyPhases } from './data/journeyData';

function App() {
  return (
    <div className="w-full h-screen bg-slate-950 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]} // Support high-DPI displays safely
      >
        {/* 
          ScrollControls creates a scrollable container.
          pages = number of 100vh screens it will create.
          damping = how smooth the scroll physics feel.
        */}
        <ScrollControls pages={journeyPhases.length} damping={0.25}>
          
          {/* 3D Scene that reacts to useScroll() */}
          <JourneyScene />
          
          {/* HTML Overlay that scrolls natively */}
          <Scroll html style={{ width: '100%' }}>
            <TimelineOverlay />
          </Scroll>
          
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
