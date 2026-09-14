import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { journeyPhases } from '../../data/journeyData';

export const AnimatedProp: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const scroll = useScroll();
  
  // Create an array of THREE.Color objects once to avoid instantiation in useFrame
  const phaseColors = React.useMemo(() => 
    journeyPhases.map(phase => new THREE.Color(phase.themeColor.primary)),
  []);

  useFrame((_state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    // scroll.offset goes from 0.0 to 1.0 representing the entire scroll area
    const offset = scroll.offset;
    
    // 1. Rotate the mesh continuously, but add speed based on scroll position
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;
    
    // Add extra rotation based on scroll to make it feel connected
    meshRef.current.rotation.y = offset * Math.PI * 4;

    // 2. Calculate which phase we are currently in
    const totalPhases = journeyPhases.length;
    // offset * (totalPhases - 1) gives us a value from 0 to 6
    const exactPhase = offset * (totalPhases - 1);
    
    const currentPhaseIndex = Math.floor(exactPhase);
    const nextPhaseIndex = Math.min(currentPhaseIndex + 1, totalPhases - 1);
    
    // Fractional part used for interpolation
    const progressBetweenPhases = exactPhase - currentPhaseIndex;
    
    // Lerp the color
    const currentColor = phaseColors[currentPhaseIndex];
    const nextColor = phaseColors[nextPhaseIndex];
    
    materialRef.current.color.lerpColors(currentColor, nextColor, progressBetweenPhases);
    materialRef.current.emissive.lerpColors(currentColor, nextColor, progressBetweenPhases);
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
      {/* A simple Icosahedron for the abstract shape */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        ref={materialRef}
        wireframe
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};
