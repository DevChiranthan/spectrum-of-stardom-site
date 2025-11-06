import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function ConcentricCircles() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
      groupRef.current.children.forEach((child, index) => {
        child.rotation.z = state.clock.getElapsedTime() * (0.3 + index * 0.1) * (index % 2 === 0 ? 1 : -1);
      });
    }
  });

  const circles = [1.2, 1.6, 2.0, 2.4, 2.8];

  return (
    <group ref={groupRef}>
      {circles.map((radius, index) => (
        <mesh key={index} rotation={[0, 0, 0]}>
          <torusGeometry args={[radius, 0.08, 16, 100]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? '#ff1493' : '#00ffff'}
            emissive={index % 2 === 0 ? '#ff1493' : '#00ffff'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      {/* Central glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ConcentricCircles />
        </Canvas>
      </div>
      
      <motion.p
        className="absolute bottom-20 text-foreground text-xl font-bold text-gradient-aurora"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        RANVITA 2026
      </motion.p>
    </motion.div>
  );
};
