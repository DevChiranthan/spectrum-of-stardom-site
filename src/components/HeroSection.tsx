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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
    >
      {/* Large faint outlined background text for style */}
      <div className="absolute inset-0 flex items-center justify-center -z-20 pointer-events-none">
        <div className="text-center">
          <div className="hero-outline font-extrabold text-[28vw] md:text-[18vw] leading-none">RANVITA</div>
          <div className="hero-outline font-extrabold text-[48vw] md:text-[30vw] leading-none mt-[-8vw]">2026</div>
        </div>
      </div>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitingRing />
          <NebulaParticles />
        </Canvas>
      </div>

      <div className="container mx-auto text-center relative z-10">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.5 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Video-Masked Text */}
          <div className="relative inline-block z-10">
            <motion.h1 
              className="title-font text-gradient-aurora text-[12vw] md:text-[15vw] font-extrabold leading-none tracking-tight"
              style={{
                filter: 'drop-shadow(0 0 18px rgba(0,0,0,0.35)) drop-shadow(0 6px 30px rgba(0,0,0,0.25))',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              RANVITA
              <br />
              2026
            </motion.h1>

            {/* Glow layers */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute inset-0 blur-3xl opacity-40"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto mt-12 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <p className="text-lg md:text-xl text-foreground/90 font-medium tracking-wide">
              Organised by <span className="text-primary font-semibold">CMR University</span> — an <span className="text-secondary font-semibold">Inter‑University Fest</span> celebrating talent, creativity and competitive spirit across campuses.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 4.3 }}
          >
            <motion.button
              onClick={() => {
                document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 text-xl font-bold rounded-full cosmic-glow bg-card border-2 border-primary hover:bg-primary/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore the Galaxy
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
