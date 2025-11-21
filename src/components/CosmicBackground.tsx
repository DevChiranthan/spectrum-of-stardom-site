import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Optimized particle count for sustained mobile performance
  const particlesCount = 600; 
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  useFrame((state) => {
    if (ref.current) {
      // Reduced rotation speed slightly for smoother feel
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.015; 
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff69b4"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050508] pointer-events-none"> {/* Added base color to prevent white flashes */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.5]}> {/* Cap DPR for mobile */}
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-nebula)' }} />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
    </div>
  );
};