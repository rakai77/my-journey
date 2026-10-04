import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Cone, Box } from '@react-three/drei';
import * as THREE from 'three';

export const BackgroundAnimations: React.FC = () => {
  const composeGroup = useRef<THREE.Group>(null);
  const coreGroup = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (composeGroup.current) {
      composeGroup.current.rotation.y += delta * 0.2;
      composeGroup.current.rotation.z += delta * 0.1;
    }
    if (coreGroup.current) {
      coreGroup.current.rotation.x += delta * 0.3;
      coreGroup.current.rotation.y -= delta * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      coreGroup.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[0, 0, -10]}>
      {/* Compose-like geometry (Left Side) */}
      <Float speed={2} floatIntensity={1.5} rotationIntensity={0.5}>
        <group ref={composeGroup} position={[-6, 2, -2]}>
          <Cone args={[1.5, 3, 4]} rotation={[0, 0, Math.PI / 4]}>
            <meshStandardMaterial color="#10b981" transparent opacity={0.6} wireframe />
          </Cone>
          <Cone args={[1.5, 3, 4]} rotation={[0, 0, -Math.PI / 4]} position={[0.5, 0.5, 0.5]}>
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} wireframe />
          </Cone>
        </group>
      </Float>

      {/* Security/Shield-like geometry (Right Side) */}
      <Float speed={1.5} floatIntensity={2} rotationIntensity={1}>
        <group position={[7, -2, -4]}>
          <Torus args={[2, 0.1, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
            <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={1} transparent opacity={0.5} />
          </Torus>
          <Cone args={[1, 2, 4]} rotation={[Math.PI, 0, 0]}>
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} transparent opacity={0.8} />
          </Cone>
        </group>
      </Float>

      {/* Multiplatform/Blocks (Top Right) */}
      <Float speed={1} floatIntensity={1} rotationIntensity={0.2}>
        <group position={[5, 4, -8]}>
          <Box args={[1.5, 1.5, 1.5]} position={[-1, 0, 0]} rotation={[0.4, 0.4, 0]}>
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} wireframe />
          </Box>
          <Box args={[1.5, 1.5, 1.5]} position={[1, 1, 0]} rotation={[-0.4, -0.4, 0]}>
            <meshStandardMaterial color="#f97316" transparent opacity={0.5} wireframe />
          </Box>
        </group>
      </Float>

      {/* AI Core (Center Bottom) */}
      <Float speed={3} floatIntensity={0.5} rotationIntensity={2}>
        <group ref={coreGroup} position={[-2, -5, -6]}>
          <Icosahedron args={[1.2, 1]}>
            <meshStandardMaterial color="#ec4899" wireframe transparent opacity={0.7} />
          </Icosahedron>
          <Torus args={[1.5, 0.05, 16, 50]} rotation={[Math.PI / 2, 0, 0]}>
             <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
          </Torus>
        </group>
      </Float>
    </group>
  );
};
