import React from 'react';
import * as THREE from 'three';
import { journeyPhases } from '../../data/journeyData';
import { FloatingAppMockup } from './PhaseProps/FloatingAppMockup';
import { useJourneyState } from '../../hooks/useJourneyState';

export const PropManager: React.FC = () => {
  const { activePhaseIndex, selectedScreenshots } = useJourneyState();
  
  const phaseColors = React.useMemo(() => 
    journeyPhases.map(phase => new THREE.Color(phase.themeColor.primary)),
  []);

  return (
    <>
      {journeyPhases.map((phase, index) => {
        // Preferred screenshot: user-selected screenshot, or first store screenshot, or first gallery item
        const imageUrl = 
          selectedScreenshots[index] ||
          phase.gallery3D?.find(item => item.type === 'store-screenshot')?.imageUrl ||
          phase.gallery3D?.[0]?.imageUrl;

        const isActive = activePhaseIndex === index;

        return (
          <FloatingAppMockup 
            key={phase.id}
            color={phaseColors[index]} 
            active={isActive}
            imageUrl={imageUrl}
            title={phase.title}
            role={phase.role}
          />
        );
      })}
    </>
  );
};
