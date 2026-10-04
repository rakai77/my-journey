import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Image } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingAppMockupProps {
  color: THREE.Color;
  progress: number;
  imageUrl?: string;
  title: string;
  role: string;
}

export const FloatingAppMockup: React.FC<FloatingAppMockupProps> = ({ 
  color, 
  progress, 
  imageUrl, 
  title, 
  role 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, [hovered]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth entry scale based on progress
    const targetScale = progress > 0.1 ? (hovered ? 1.4 : 1.3) : 0.001; 
    // Clamp lerp factor to [0, 1]: a long frame (e.g. returning to a background tab)
    // would otherwise make delta * 5 > 1 and overshoot the scale wildly.
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), Math.min(1, delta * 5));

    // Mouse Parallax Effect
    const targetX = (state.pointer.x * Math.PI) / 12;
    const targetY = (state.pointer.y * Math.PI) / 12;
    
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
  });

  return (
    <group 
      ref={groupRef} 
      position={[-3.5, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          {/* Main App Image */}
          {imageUrl ? (
            <Image 
              url={imageUrl} 
              transparent 
              opacity={1} 
              scale={[1.3, 2.7]} // Fixed aspect ratio to fit the card
            />
          ) : (
            <mesh>
              <planeGeometry args={[1.3, 2.7]} />
              <meshStandardMaterial color={color} side={THREE.DoubleSide} />
              <group position={[0, 0, 0.01]}>
                <Text position={[0, 0.2, 0]} fontSize={0.15} color="#ffffff" maxWidth={1.1} textAlign="center">
                  {title}
                </Text>
                <Text position={[0, -0.2, 0]} fontSize={0.08} color="#cbd5e1" maxWidth={1.1} textAlign="center">
                  {role}
                </Text>
              </group>
            </mesh>
          )}

          {/* Glow effect behind the image */}
          <mesh position={[0, 0, -0.05]}>
            <planeGeometry args={[1.4, 2.8]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
};
