import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function OrbitingRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      ringRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 2;
      ringRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 1.5;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.5, 0.2, 16, 100]} />
      <meshStandardMaterial
        color="#ff1493"
        emissive="#ff1493"
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function NebulaParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Main Hero */}
      <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 py-12 sm:py-20">
        {/* Large faint outlined background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-center">
            <div className="hero-outline font-extrabold text-[40vw] sm:text-[35vw] md:text-[25vw] leading-none tracking-tighter">
              RANVITA
            </div>
            <div className="hero-outline font-extrabold text-[40vw] sm:text-[35vw] md:text-[25vw] leading-none tracking-tighter mt-[-8vw] sm:mt-[-6vw]">
              2026
            </div>
          </div>
        </div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10 sm:opacity-30 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitingRing />
            <NebulaParticles />
          </Canvas>
        </div>

        <div className="container mx-auto text-center relative z-10 px-2 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Main Title with unique font */}
            <div className="relative inline-block z-10">
              {/* Cosmic backdrop that hugs the title */}
              <motion.div
                className="absolute -inset-x-24 -inset-y-12 sm:-inset-x-32 sm:-inset-y-16 rounded-[40%] blur-3xl opacity-70 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(255,20,147,0.6), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,255,255,0.45), transparent 55%)',
                  mixBlendMode: 'screen',
                }}
                animate={{
                  scale: [0.9, 1.05, 0.95, 1.02],
                  rotate: [0, 8, -6, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Masked aurora sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255,20,147,0.35), rgba(0,255,255,0.25), rgba(255,255,255,0.2))',
                  maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95), transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95), transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.4],
                  x: [-10, 10, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.h1 
                className="hero-font text-gradient-aurora text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-tight sm:leading-none"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 40px rgba(0, 255, 255, 0.4))',
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                RANVITA
                <br />
                <span className="text-[20vw] sm:text-[16vw] md:text-[12.5vw] lg:text-[10vw]">2026</span>
              </motion.h1>

              {/* Animated glow layers */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  className="absolute inset-0 blur-3xl opacity-50"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>

            <motion.div 
              className="max-w-2xl sm:max-w-3xl mx-auto mt-6 sm:mt-12 md:mt-16 space-y-4 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-base sm:text-lg text-foreground/90 font-light tracking-wide">
                Organised by <span className="text-primary font-semibold">CMR University</span> — an <span className="text-secondary font-semibold">Inter‑University Fest</span> celebrating talent, creativity and competitive spirit across campuses.
              </p>
            </motion.div>
            
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => {
                  document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-xl font-bold rounded-full cosmic-glow bg-card border-2 border-primary hover:bg-primary/20 transition-all shadow-[0_25px_60px_rgba(255,20,147,0.25)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore the Galaxy
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
