import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    // Changed min-h-screen to min-h-[100svh] to fix mobile address bar jump
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Starfield Background (Lightweight) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Capped dpr for mobile performance */}
        <Canvas dpr={[1, 1.5]}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Giant Background Year Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none">
        <span className="text-[25vw] font-bold text-white/5 tracking-tighter blur-sm transform scale-y-150 translate-y-10">
          2026
        </span>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 px-4 text-center will-change-transform"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* The Main Title - Matches the Image Style with font-ranvita */}
          <h1 className="font-ranvita text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-[#ff69b4] via-[#ff1493] to-[#800080] drop-shadow-[0_0_15px_rgba(255,20,147,0.6)] select-none">
            RANVITA
          </h1>
          
          {/* Decorative glow behind the text */}
          <motion.div 
            className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-60"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mt-10 sm:mt-16 space-y-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-light tracking-wide leading-relaxed">
            Organised by <span className="text-primary font-semibold">CMR University</span>
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          <p className="text-base sm:text-lg text-muted-foreground font-light tracking-wider uppercase">
            An Inter‑University Fest celebrating talent, creativity and competitive spirit across campuses.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <button 
            onClick={() => document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full border border-white/20 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,20,147,0.4)]"
          >
            <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-bold uppercase tracking-widest text-sm text-white group-hover:text-white transition-colors">
              Enter the Cosmos
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};