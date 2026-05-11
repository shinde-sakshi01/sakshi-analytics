import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Preload } from "@react-three/drei";
import * as THREE from "three";

const DataOrb = () => {
  const mesh = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 80; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.5;
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, []);

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={mesh} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#00f5ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.85}
            emissive="#004d66"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Orbiting ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#7b2ff7"
          emissive="#7b2ff7"
          emissiveIntensity={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00f5ff"
          size={0.04}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

const DataSphereCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 4], fov: 55 }}
    style={{ height: "100%", width: "100%" }}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
    <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#7b2ff7" />
    <pointLight position={[0, 0, 3]} intensity={2} color="#00f5ff" />
    <DataOrb />
    <Preload all />
  </Canvas>
);

export default DataSphereCanvas;
