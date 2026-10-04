import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { journeyPhases } from '../../data/journeyData';
import { FloatingAppMockup } from './PhaseProps/FloatingAppMockup';

export const PropManager: React.FC = () => {
  const scroll = useScroll();
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  
  const phaseColors = React.useMemo(() => 
    journeyPhases.map(phase => new THREE.Color(phase.themeColor.primary)),
  []);

  useFrame(() => {
    const offset = scroll.offset;
    const totalPhases = journeyPhases.length;
    const exactPhase = offset * (totalPhases - 1);
    
    const currentIndex = Math.floor(exactPhase);
    
    if (currentIndex !== phaseIndex) {
      setPhaseIndex(currentIndex);
    }
    
    const localProgress = 1 - Math.abs((exactPhase - currentIndex) * 2 - 1);
    setPhaseProgress(localProgress);
  });

  return (
    <>
      {journeyPhases.map((phase, index) => {
        // Find a suitable screenshot image if available, otherwise undefined
        const imageUrl = phase.gallery3D?.find(item => item.type === 'store-screenshot')?.imageUrl 
                         || phase.gallery3D?.[0]?.imageUrl;

        return (
          <FloatingAppMockup 
            key={phase.id}
            color={phaseColors[index]} 
            progress={phaseIndex === index ? phaseProgress : 0}
            imageUrl={imageUrl}
            title={phase.title}
            role={phase.role}
          />
        );
      })}
    </>
  );
};


