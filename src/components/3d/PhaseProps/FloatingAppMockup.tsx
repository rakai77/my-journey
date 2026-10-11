import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Image } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingAppMockupProps {
  color: THREE.Color;
  active: boolean;
  imageUrl?: string;
  title: string;
  role: string;
}

export const FloatingAppMockup: React.FC<FloatingAppMockupProps> = ({ 
  color, 
  active, 
  imageUrl, 
  title, 
  role 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, [hovered]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Adapt position based on viewport width: on wide screen, place comfortably on left side with prominent scale
    const isMobile = viewport.width < 7;
    const targetX = isMobile ? 0 : -2.25;
    const targetY = isMobile ? 1.2 : 0;
    const baseScale = isMobile ? 0.95 : 1.22;

    const targetScale = active ? (hovered ? baseScale * 1.04 : baseScale) : 0.001;
    const targetZ = active ? 0 : -2;

    const lerpSpeed = Math.min(1, delta * 6);
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), lerpSpeed);
    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), lerpSpeed);

    // Subtle mouse parallax tilt when active
    if (active) {
      const targetRotX = (state.pointer.y * Math.PI) / 14;
      const targetRotY = (state.pointer.x * Math.PI) / 14;
      groupRef.current.rotation.x += 0.06 * (targetRotX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.06 * (targetRotY - groupRef.current.rotation.y);
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[-1.85, 0, 0]}
      scale={0.001}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
    >
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh>
          {/* Phone Frame / Body */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[1.42, 2.86]} />
            <meshStandardMaterial 
              color="#090d16" 
              metalness={0.8} 
              roughness={0.2} 
            />
          </mesh>

          {/* Dynamic Island / Speaker Pill */}
          <mesh position={[0, 1.32, 0.02]}>
            <planeGeometry args={[0.32, 0.06]} />
            <meshBasicMaterial color="#020617" />
          </mesh>

          {/* Screen Content: Image or Fallback */}
          {imageUrl ? (
            <Image 
              url={imageUrl} 
              transparent 
              opacity={1} 
              scale={[1.34, 2.76]}
              position={[0, 0, 0.01]}
            />
          ) : (
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[1.34, 2.76]} />
              <meshStandardMaterial color={color} side={THREE.DoubleSide} />
              <group position={[0, 0, 0.02]}>
                <Text position={[0, 0.25, 0]} fontSize={0.14} color="#ffffff" maxWidth={1.1} textAlign="center">
                  {title}
                </Text>
                <Text position={[0, -0.15, 0]} fontSize={0.08} color="#cbd5e1" maxWidth={1.1} textAlign="center">
                  {role}
                </Text>
              </group>
            </mesh>
          )}

          {/* Soft Colored Halo / Backlight */}
          <mesh position={[0, 0, -0.06]}>
            <planeGeometry args={[1.6, 3.05]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
};
