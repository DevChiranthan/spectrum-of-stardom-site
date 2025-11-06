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
          <div className="relative inline-block">
            <motion.h1 
              className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter"
              style={{ 
                fontFamily: "'Cinzel', serif",
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'url(data:image/svg+xml,%3Csvg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23ff1493;stop-opacity:1"%3E%3Canimate attributeName="stop-color" values="%23ff1493;%2300ffff;%23ff1493" dur="4s" repeatCount="indefinite"/%3E%3C/stop%3E%3Cstop offset="50%25" style="stop-color:%2300ffff;stop-opacity:1"%3E%3Canimate attributeName="stop-color" values="%2300ffff;%23ffff00;%2300ffff" dur="4s" repeatCount="indefinite"/%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23ffff00;stop-opacity:1"%3E%3Canimate attributeName="stop-color" values="%23ffff00;%23ff1493;%23ffff00" dur="4s" repeatCount="indefinite"/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1920" height="1080" fill="url(%23grad)"/%3E%3C/svg%3E)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 4s ease-in-out infinite',
                filter: 'drop-shadow(0 0 30px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 60px rgba(0, 255, 255, 0.4))',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
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
            <p className="text-lg md:text-xl text-foreground/90 font-light tracking-wide">
              Step into the <span className="text-primary font-semibold">Spectrum of Stardom</span>, where brilliance knows no bounds!
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
