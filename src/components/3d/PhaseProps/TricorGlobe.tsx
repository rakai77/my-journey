import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TricorGlobeProps {
  color: THREE.Color;
  progress: number;
}

export const TricorGlobe: React.FC<TricorGlobeProps> = ({ color, progress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Interactive states
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Set cursor to pointer when hovered
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, [hovered]);

  useFrame((state, delta) => {
    if (!groupRef.current || !globeRef.current || !pointsRef.current) return;

    // Smooth entry scale based on progress (0 to 1)
    const targetScale = progress > 0.1 ? (hovered ? 1.6 : 1.5) : 0.001; 
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);

    // Spin burst effect when clicked
    const baseRotationSpeed = clicked ? 5 : 0.1;
    const basePointsSpeed = clicked ? -2 : -0.05;
    
    // Smoothly return to normal speed if not clicked
    globeRef.current.rotation.y += delta * baseRotationSpeed;
    globeRef.current.rotation.x += delta * (clicked ? 2 : 0.05);
    pointsRef.current.rotation.y += delta * basePointsSpeed;

    // Reset click state quickly to create a "burst" effect
    if (clicked) {
      setTimeout(() => setClicked(false), 300);
    }

    // Mouse Parallax Effect
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
  });

  // Create random points for the globe (cities/satellites)
  const particlesCount = 200;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.1; 
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  return (
    <group 
      ref={groupRef} 
      position={[2, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      onClick={(e) => { e.stopPropagation(); setClicked(true); }}
    >
      {/* Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2.0 : 0.8}
          wireframe
          transparent
          opacity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      {/* Orbiting Data Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={hovered ? 0.04 : 0.02} 
          color={color} 
          transparent 
          opacity={hovered ? 1 : 0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
};
