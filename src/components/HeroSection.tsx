import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Import Cinzel Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');
          .font-luxury { font-family: 'Cinzel', serif; }
        `}
      </style>

      {/* NOTE: Starfield removed from here as it is now in CosmicBackground to save WebGL contexts */}

      {/* --- BACKGROUND COMPONENT: "COSMIC STARGATE" --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        {/* Rings - Using border radius instead of 3D geometry for performance */}
        <motion.div 
          className="absolute w-[140vw] h-[140vw] sm:w-[50vw] sm:h-[50vw] border-[1px] border-white/5 rounded-full will-change-transform"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[110vw] h-[110vw] sm:w-[40vw] sm:h-[40vw] border-[2px] border-dashed border-white/10 rounded-full will-change-transform"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[80vw] h-[80vw] sm:w-[30vw] sm:h-[30vw] border-[1px] border-primary/20 rounded-full shadow-[0_0_100px_rgba(255,20,147,0.1)] will-change-transform"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center py-2 will-change-transform"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
          
          {/* --- Main Title: Ranvita Logo --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            {/* Core Nebula Glow */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
               <motion.div 
                 className="w-[100%] h-[100%] bg-gradient-to-r from-primary/30 via-purple-600/20 to-secondary/30 rounded-full blur-[60px] sm:blur-[100px] will-change-transform"
                 animate={{ 
                   scale: [1, 1.2, 1],
                   opacity: [0.4, 0.7, 0.4],
                   rotate: [0, 180, 360]
                 }}
                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
               />
            </motion.div>
            
            {/* Optimized WebP Image */}
            <motion.img 
              src="/ranvita-logo.webp" 
              alt="RANVITA 2026"
              width="800"
              height="400"
              className="w-[95vw] sm:w-[98vw] md:w-[100vw] lg:w-[100vw] xl:w-[100vw] max-w-none h-auto max-h-[55vh] md:max-h-[80vh] lg:max-h-[85vh] object-contain object-center drop-shadow-[0_0_50px_rgba(255,20,147,0.4)] will-change-transform"
              animate={{ y: [-5, 5, -5] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* --- CMR University Logo --- */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-50 pointer-events-none top-[calc(50%-22vh)] sm:top-[calc(50%-25vh)] md:top-[8%]"
          >
            <img 
              src="/cmr-logo.webp" 
              alt="CMR University" 
              width="200"
              height="80"
              className="h-32 sm:h-40 md:h-52 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
            />
          </motion.div>

          {/* --- Subtitle --- */}
          <motion.div 
            className="absolute z-40 text-center space-y-2 w-full px-4 bottom-[calc(10%+60px)] sm:bottom-[calc(10%+80px)] md:bottom-[calc(5%+90px)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-2" />
            <p className="text-xs sm:text-lg md:text-2xl text-white/90 font-luxury tracking-widest uppercase leading-relaxed drop-shadow-md">
              An Inter‑University Fest celebrating <br className="hidden sm:block"/>
              <span className="text-primary font-bold">talent</span> & <span className="text-secondary font-bold">creativity</span>
            </p>
          </motion.div>

        </div>

        {/* --- CTA Button --- */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-[10%] md:bottom-[5%] z-50"
        >
          <button 
            onClick={() => document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-3 sm:px-14 sm:py-4 bg-black/40 backdrop-blur-md overflow-hidden rounded-full border border-white/20 transition-all hover:border-primary/60 hover:shadow-[0_0_40px_rgba(255,20,147,0.5)] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-bold font-luxury uppercase tracking-[0.2em] text-xs sm:text-sm text-white group-hover:text-white transition-colors">
              Enter the Cosmos
            </span>
          </button>
        </motion.div>

      </motion.div>

      {/* --- BOTTOM GRADIENT --- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};