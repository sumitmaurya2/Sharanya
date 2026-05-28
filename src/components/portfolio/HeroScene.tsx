import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshDistortMaterial color={color} distort={0.45} speed={1.4} roughness={0.2} metalness={0.1} />
      </mesh>
    </Float>
  );
}

// Subtle floating 3D shapes used as a hero backdrop.
export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <Blob position={[-2.6, 1.2, 0]} color="#f5c8d4" scale={1.2} />
      <Blob position={[2.4, -0.6, -1]} color="#fbe6a2" scale={1.6} />
      <Blob position={[1.2, 1.8, -2]} color="#fbd2bd" scale={0.9} />
    </Canvas>
  );
}
