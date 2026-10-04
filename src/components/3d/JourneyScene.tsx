import React, { Suspense } from 'react';
import { PropManager } from './PropManager';
import { Environment, Float, Stars } from '@react-three/drei';
import { FloatingTechBackground } from './FloatingTechBackground';
import { BackgroundAnimations } from './BackgroundAnimations';

export const JourneyScene: React.FC = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Background Environment */}
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingTechBackground />
      <BackgroundAnimations />

      {/* The main animated prop manager that reacts to scroll */}
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <PropManager />
        </Float>
      </Suspense>
    </>
  );
};
