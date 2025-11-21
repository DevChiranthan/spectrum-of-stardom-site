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
      <div className="min-h-screen flex items-center justify-center relative px-4 py-20">
        {/* Large faint outlined background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-center">
            <div className="hero-outline font-extrabold text-[35vw] md:text-[25vw] leading-none tracking-tighter">
              RANVITA
            </div>
            <div className="hero-outline font-extrabold text-[35vw] md:text-[25vw] leading-none tracking-tighter mt-[-6vw]">
              2026
            </div>
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
            {/* Main Title with unique font */}
            <div className="relative inline-block z-10">
              <motion.h1 
                className="hero-font text-gradient-aurora text-[14vw] md:text-[10vw] lg:text-[8vw] leading-none"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 60px rgba(0, 255, 255, 0.4))',
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                RANVITA
                <br />
                <span className="text-[18vw] md:text-[14vw] lg:text-[11vw]">2026</span>
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
              className="max-w-3xl mx-auto mt-16 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 4 }}
            >
              <p className="text-base md:text-lg text-foreground/90 font-light tracking-wide">
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
      </div>

      {/* Video Showcase Section */}
      <motion.div 
        className="relative py-32 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-aurora mb-4">
              Relive the Magic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the spectacular moments from Ranvita's previous edition
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative group">
              {/* Video container with cosmic frame */}
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border-4 border-primary/30 cosmic-glow">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/placeholder.svg"
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>

          {/* Additional decorative text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-sm text-muted-foreground italic"
          >
            Replace the video source with your Ranvita video file
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
