import React, { Suspense } from 'react';
import { Environment, Stars } from '@react-three/drei';
import { FloatingTechBackground } from './FloatingTechBackground';
import { BackgroundAnimations } from './BackgroundAnimations';

export const JourneyScene: React.FC = () => {
  return (
    <>
      {/* Studio Lighting Setup for Photorealistic Device Reflections */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 5]} intensity={2.2} />
      <directionalLight position={[-6, 4, -2]} intensity={1.5} color="#cbd5e1" />
      <directionalLight position={[0, -4, 3]} intensity={0.6} color="#64748b" />
      
      {/* Background Environment */}
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingTechBackground />

      {/* Background tech logos (isolated so they never block the main mockups) */}
      <Suspense fallback={null}>
        <BackgroundAnimations />
      </Suspense>
    </>
  );
};
