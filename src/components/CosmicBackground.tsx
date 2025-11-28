import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  
  // OPTIMIZATION: useMemo prevents array recreation on every render (Memory Leak Fix)
  const { positions, colors } = useMemo(() => {
    const count = 2000; // Increased count slightly for "richer" feel
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ff69b4"); // Hot Pink
    const color2 = new THREE.Color("#00ffff"); // Cyan
    const color3 = new THREE.Color("#9d4edd"); // Deep Purple (New addition for theme)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60; // Spread wider
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      // Mix 3 colors now
      const mixedColor = i % 3 === 0 ? color1 : (i % 3 === 1 ? color2 : color3);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Smooth, slow rotation
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02; 
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.12} // Increased size from 0.08 so they are visible on mobile
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020205] pointer-events-none">
      {/* 1. BASE NEBULA GRADIENT (CSS is faster than WebGL for large blurs)
         This restores the "Purpleish" theme foundation 
      */}
      <div 
        className="absolute inset-0 opacity-60" 
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, #2e1065 0%, #000000 100%)', // Deep purple core
          filter: 'blur(100px)',
        }} 
      />
      
      {/* 2. ACCENT AURORA GRADIENTS (Top Left & Bottom Right) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />

      {/* 3. PERFORMANCE OPTIMIZED CANVAS */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 1.5]} // Cap pixel ratio
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <StarField />
        {/* Merged Stars from Hero Section here for global depth */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
      </Canvas>
      
      {/* 4. FINAL TEXTURE OVERLAY (Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_#000000_100%)] opacity-80" />
    </div>
  );
};