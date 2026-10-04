import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Image } from '@react-three/drei';
import * as THREE from 'three';

interface LogoMeshProps {
  url: string;
  scale: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

/**
 * Renders a flat tech logo using drei's <Image>.
 *
 * IMPORTANT: FloatingTechBackground loads the same SVG files through drei's <Svg>
 * (SVGLoader). R3F's useLoader cache resolved those URLs to the parsed SVG data
 * instead of a texture, leaving `texture.image` undefined, which crashed the
 * render loop (invalid 'uvundefined' shader / "reading 'width'" errors) and hid
 * every 3D object. A distinct query string gives the texture its own cache key.
 */
const LogoMesh: React.FC<LogoMeshProps> = ({ url, scale, position, rotation }) => (
  <Image
    url={`${url}?as=texture`}
    transparent
    opacity={0.9}
    scale={scale}
    position={position}
    rotation={rotation}
    side={THREE.DoubleSide}
  />
);

export const BackgroundAnimations: React.FC = () => {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (group1.current) {
      group1.current.rotation.y += delta * 0.1;
      group1.current.position.y += Math.sin(state.clock.elapsedTime) * 0.005;
    }
    if (group2.current) {
      group2.current.rotation.y -= delta * 0.15;
    }
    if (group3.current) {
      group3.current.rotation.z += delta * 0.05;
      group3.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, -10]}>
      {/* Android & Kotlin (Top Left) */}
      <Float speed={2} floatIntensity={1.5} rotationIntensity={0.5}>
        <group ref={group1} position={[-6, 4, -4]}>
          <group position={[-1, 0, 0]}>
             <LogoMesh url="/images/logos/android.svg" scale={1.5} position={[-1, 1, 0]} />
          </group>
          <group position={[1.5, -1, 2]} rotation={[0, 0.4, 0]}>
             <LogoMesh url="/images/logos/kotlin.svg" scale={1.2} position={[-0.5, 0.5, 0]} />
          </group>
        </group>
      </Float>

      {/* Firebase & Google (Center Left) */}
      <Float speed={1.5} floatIntensity={2} rotationIntensity={1}>
        <group ref={group2} position={[-7, -1, -6]}>
          <group position={[0, 0, 0]} rotation={[0, 0.2, 0.1]}>
             <LogoMesh url="/images/logos/firebase.svg" scale={1.5} position={[-0.5, 0.5, 0]} />
          </group>
          <group position={[2, -2, -2]} rotation={[-0.2, -0.4, 0]}>
             <LogoMesh url="/images/logos/google.svg" scale={1.2} position={[-0.5, 0.5, 0]} />
          </group>
        </group>
      </Float>

      {/* Swift & Apple (Bottom Left) */}
      <Float speed={3} floatIntensity={1} rotationIntensity={0.5}>
        <group ref={group3} position={[-5, -6, -4]}>
           <group position={[-1, 0, 0]} rotation={[0, -0.3, -0.1]}>
             <LogoMesh url="/images/logos/swift.svg" scale={1.5} position={[-0.5, 0.5, 0]} />
           </group>
           <group position={[2, 1, -2]} rotation={[0.2, 0.2, 0]}>
             <LogoMesh url="/images/logos/apple.svg" scale={1.2} position={[-0.5, 0.5, 0]} />
           </group>
        </group>
      </Float>
    </group>
  );
};
