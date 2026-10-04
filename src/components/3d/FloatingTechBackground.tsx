import React, { useMemo } from 'react';
import { Float, Svg } from '@react-three/drei';
import * as THREE from 'three';

const logos = [
  { src: '/images/logos/android.svg', color: '#3ddc84', scale: 0.005 },
  { src: '/images/logos/swift.svg', color: '#f05138', scale: 0.005 },
  { src: '/images/logos/kotlin.svg', color: '#7f52ff', scale: 0.005 },
  { src: '/images/logos/firebase.svg', color: '#ffca28', scale: 0.005 },
  { src: '/images/logos/google.svg', color: '#4285f4', scale: 0.005 },
  { src: '/images/logos/java.svg', color: '#f89820', scale: 0.005 },
  { src: '/images/logos/apple.svg', color: '#ffffff', scale: 0.005 }
];

export const FloatingTechBackground: React.FC = () => {
  // Generate random positions and map them to logos
  const items = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      return {
        id: i,
        logo: logo,
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 30 - 20
        ] as [number, number, number],
        // Random scale variation
        scale: logo.scale * (Math.random() * 0.5 + 0.8),
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        // Animation variations
        speed: Math.random() * 1.5 + 0.5,
        floatIntensity: Math.random() * 3 + 1,
        rotationIntensity: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.2
      };
    });
  }, []);

  return (
    <group>
      {items.map((item) => (
        <Float 
          key={item.id} 
          speed={item.speed} 
          rotationIntensity={item.rotationIntensity} 
          floatIntensity={item.floatIntensity}
        >
          <group position={item.position} rotation={item.rotation} scale={item.scale}>
             <Svg 
               src={item.logo.src} 
               fillMaterial={{
                 color: new THREE.Color(item.logo.color),
                 transparent: true,
                 opacity: item.opacity
               }}
               strokeMaterial={{
                  transparent: true,
                  opacity: 0
               }}
             />
          </group>
        </Float>
      ))}
    </group>
  );
};



