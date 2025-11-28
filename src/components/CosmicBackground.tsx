import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  
  // OPTIMIZATION: useMemo prevents array recreation on every render (Memory Leak Fix)
  const { positions, colors } = useMemo(() => {
    const count = 1500; // Balanced particle count for mobile/desktop
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ff69b4"); // Hot Pink
    const color2 = new THREE.Color("#00ffff"); // Cyan

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = i % 2 === 0 ? color1 : color2;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Smooth, slow rotation
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03; 
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050508] pointer-events-none">
      {/* POWER SAVING: gl={{ antialias: false }} boosts fps significantly */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 1.5]} // Cap pixel ratio for mobile performance
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <StarField />
        {/* Merged Stars from Hero Section here for global depth */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      
      {/* CSS Overlay for texture (cheaper than WebGL processing) */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-nebula)' }} />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
    </div>
  );
};