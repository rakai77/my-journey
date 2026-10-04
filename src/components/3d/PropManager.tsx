import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { journeyPhases } from '../../data/journeyData';
import { FloatingAppMockup } from './PhaseProps/FloatingAppMockup';

export const PropManager: React.FC = () => {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  
  const phaseColors = React.useMemo(() => 
    journeyPhases.map(phase => new THREE.Color(phase.themeColor.primary)),
  []);

  useFrame(() => {
    // Instead of using scroll.offset which breaks when HTML height expands dynamically,
    // we query the actual DOM to find which section is currently centered on screen.
    const sections = document.querySelectorAll('.phase-section');
    if (sections.length > 0) {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Calculate the center of the section relative to viewport
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        
        if (dist < minDistance) {
          minDistance = dist;
          const idxAttr = section.getAttribute('data-index');
          if (idxAttr !== null) {
            closestIndex = parseInt(idxAttr, 10);
          }
        }
      });
      
      if (closestIndex !== phaseIndex) {
        setPhaseIndex(closestIndex);
      }
      
      // Calculate local progress for smooth transitions (1 = perfectly centered, 0 = off screen)
      // Normalize based on half viewport height so it fades out as it leaves center
      const maxDistanceForFade = window.innerHeight / 1.5;
      const localProgress = Math.max(0, 1 - (minDistance / maxDistanceForFade));
      setPhaseProgress(localProgress);
    }
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


