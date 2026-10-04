import { Canvas } from '@react-three/fiber';
import { JourneyScene } from './components/3d/JourneyScene';
import { TimelineOverlay } from './components/2d/TimelineOverlay';

function App() {
  return (
    <div className="w-full relative bg-slate-950 text-white min-h-screen overflow-x-hidden">
      
      {/* 3D Scene fixed in the background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 2]} 
        >
          <JourneyScene />
        </Canvas>
      </div>

      {/* Native HTML Scroll Overlay */}
      <div className="relative z-10 w-full pointer-events-none">
        <TimelineOverlay />
      </div>

    </div>
  );
}

export default App;
