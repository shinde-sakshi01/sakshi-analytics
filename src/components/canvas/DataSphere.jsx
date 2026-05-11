import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import CanvasLoader from "../Loader";

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
    meshRef.current.rotation.z = Math.sin(t / 1.5) / 4;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow scale={2.4}>
      <Sphere args={[1, 100, 200]}>
        <MeshDistortMaterial
          color="#915eff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </mesh>
  );
};

const DataSphereCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#915eff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#00cea8" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#ffffff" />
        <AnimatedSphere />
      </Suspense>
    </Canvas>
  );
};

export default DataSphereCanvas;
