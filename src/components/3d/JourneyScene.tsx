import React from 'react';
import { AnimatedProp } from './AnimatedProp';
import { Environment, Float, Stars } from '@react-three/drei';

export const JourneyScene: React.FC = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Background Environment */}
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* The main animated prop that reacts to scroll */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <AnimatedProp />
      </Float>
    </>
  );
};
