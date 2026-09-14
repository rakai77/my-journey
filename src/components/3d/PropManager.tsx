import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { journeyPhases } from '../../data/journeyData';
import { TricorGlobe } from './PhaseProps/TricorGlobe';

export const PropManager: React.FC = () => {
  const scroll = useScroll();
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  
  // Create an array of THREE.Color objects once
  const phaseColors = React.useMemo(() => 
    journeyPhases.map(phase => new THREE.Color(phase.themeColor.primary)),
  []);

  // Generic Abstract Prop Ref for phases that don't have a specific prop yet
  const abstractMeshRef = useRef<THREE.Mesh>(null);
  const abstractMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((_state, delta) => {
    const offset = scroll.offset;
    const totalPhases = journeyPhases.length;
    const exactPhase = offset * (totalPhases - 1);
    
    const currentIndex = Math.floor(exactPhase);
    const nextIndex = Math.min(currentIndex + 1, totalPhases - 1);
    const progress = exactPhase - currentIndex;
    
    // Update state so child components know when to appear/disappear
    if (currentIndex !== phaseIndex) {
      setPhaseIndex(currentIndex);
    }
    
    // Calculate a "local progress" for the current prop to animate in/out
    // It's 1 in the middle of the phase, and approaches 0 as we transition out
    const localProgress = 1 - Math.abs((exactPhase - currentIndex) * 2 - 1);
    setPhaseProgress(localProgress);

    // Update the generic abstract prop if it's currently being rendered
    if (abstractMeshRef.current && abstractMaterialRef.current) {
      abstractMeshRef.current.rotation.y += delta * 0.2;
      abstractMeshRef.current.rotation.x += delta * 0.1;
      abstractMeshRef.current.rotation.y = offset * Math.PI * 4;

      const currentColor = phaseColors[currentIndex];
      const nextColor = phaseColors[nextIndex];
      
      abstractMaterialRef.current.color.lerpColors(currentColor, nextColor, progress);
      abstractMaterialRef.current.emissive.lerpColors(currentColor, nextColor, progress);
      
      // Scale out the abstract prop if we are in Phase 1 (Tricor Globe)
      const targetScale = currentIndex === 1 ? 0.001 : 1.5;
      abstractMeshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
    }
  });

  return (
    <>
      {/* 
        Phase 1: Tricor Globe 
        We keep it mounted but scale it to 0 when not active using phaseProgress
      */}
      <TricorGlobe 
        color={phaseColors[1]} 
        progress={phaseIndex === 1 ? phaseProgress : 0} 
      />

      {/* Abstract Fallback for all other phases */}
      <mesh ref={abstractMeshRef} position={[2, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          ref={abstractMaterialRef}
          wireframe
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
};
