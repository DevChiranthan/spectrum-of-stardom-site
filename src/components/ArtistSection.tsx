import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Music, MapPin, Star, Sparkles } from 'lucide-react';

export const ArtistSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth physics for the background strip movement
  const springConfig = { stiffness: 50, damping: 20, restDelta: 0.001 };
  
  // Background Strip Horizontal Move
  const bgX_Day1 = useSpring(useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]), springConfig);
  const bgX_Day2 = useSpring(useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]), springConfig);

  // Animation Variants for "Smart" Entry
  const imageReveal = {
    hidden: { opacity: 0, scale: 1.15, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } // Custom Bezier for "luxurious" feel
    }
  };

  const textStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="relative z-20 bg-[#050508] overflow-hidden pt-24 pb-0">
      
      {/* ========================================================
          SECTION HEADER
         ======================================================== */}
      <div className="container mx-auto px-4 mb-20 md:mb-32 text-center relative z-30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.1 }}
          className="inline-flex flex-col items-center"
        >
          <motion.div variants={textStagger} className="flex items-center gap-2 text-pink-500 mb-4">
            <Star className="w-4 h-4 fill-current animate-pulse" />
            <span className="font-mono uppercase tracking-[0.3em] text-sm">The Main Event</span>
            <Star className="w-4 h-4 fill-current animate-pulse" />
          </motion.div>
          
          <motion.h2 variants={textStagger} className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-6 relative">
            <span className="relative z-10">STELLAR LINEUP</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-purple-500/20 blur-[80px] -z-10" />
          </motion.h2>
          
          <motion.p variants={textStagger} className="text-gray-400 max-w-lg mx-auto text-lg font-light leading-relaxed">
            Witness the galaxy's finest performers descend upon our stage.
          </motion.p>
        </motion.div>
      </div>

      {/* ========================================================
          DAY 01: DJ RUBZ (Aurora)
         ======================================================== */}
      <div className="relative w-full min-h-[95vh] md:min-h-[110vh] flex items-end md:items-center overflow-hidden group pb-0 md:pb-10">
        
        {/* --- Moving Strip Background --- */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <motion.div 
            style={{ x: bgX_Day1, scale: 1.1 }} 
            className="absolute inset-0 w-[120%] h-full -left-[10%] will-change-transform"
          >
            <div className="absolute inset-0 bg-[#050508] z-[-1]" />
            <img 
              src="/rubz-bg.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto relative z-20 px-4 h-full grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center">
          
          {/* --- Artist Image (Mobile: Bottom, Desktop: Left) --- */}
          {/* Increased Height for Impact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={imageReveal}
            className="relative h-[65vh] md:h-[110vh] col-span-1 md:col-span-7 flex items-end justify-center md:justify-start order-2 md:order-1 w-full -mb-10 md:mb-0 will-change-transform"
          >
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-pink-600/30 blur-[100px] rounded-full z-0 mix-blend-screen" />
            
            <img 
              src="/dj-rubz.webp"
              alt="DJ Rubz" 
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
              }}
            />
          </motion.div>

          {/* --- Text Content (Mobile: Top, Desktop: Right) --- */}
          <div className="col-span-1 md:col-span-5 text-center md:text-right flex flex-col items-center md:items-end justify-center relative z-30 order-1 md:order-2 pb-8 md:pb-0">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            >
              <motion.div variants={textStagger} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-pink-500/30 bg-pink-950/40 backdrop-blur-xl mb-6 md:mb-8 shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                <Calendar className="w-4 h-4 text-pink-400" />
                <div className="h-4 w-px bg-pink-500/30" />
                <span className="text-pink-100 font-bold uppercase tracking-[0.2em] text-xs">Day 01 • Aurora</span>
              </motion.div>

              <div className="relative">
                {/* Ghost Text */}
                <h2 className="hidden md:block absolute -top-20 -right-20 text-[12rem] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter mix-blend-overlay">
                  RUBZ
                </h2>

                <motion.h2 variants={textStagger} className="relative text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter mb-4 italic">
                  <span className="block text-4xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-[-10px] mr-2">
                    DJ
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] drop-shadow-2xl filter brightness-125">
                    RUBZ
                  </span>
                </motion.h2>
              </div>

              <motion.p variants={textStagger} className="text-xl md:text-3xl text-gray-300 font-serif italic mt-4 mb-8 max-w-lg leading-relaxed">
                "The beat drop that shakes <br className="hidden md:block"/> <span className="text-pink-400">the galaxy</span>."
              </motion.p>

              <motion.div variants={textStagger} className="flex flex-col gap-4 text-sm md:text-base text-gray-400 font-mono tracking-widest items-center md:items-end md:border-r-2 md:border-pink-500/50 md:pr-6">
                <span className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-pink-500" /> 
                  Electronic Dance Music
                </span>
                <span className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-500" /> 
                  Main Stage •4:30 PM
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ========================================================
          TRANSITION SPACER
         ======================================================== */}
      <div className="w-full h-32 md:h-40 bg-[#050508] relative z-20 flex items-center justify-center overflow-hidden">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-[#050508] to-[#050508]" />
      </div>

      {/* ========================================================
          DAY 02: THAMARASSERRY CHURAM (Supernova)
         ======================================================== */}
      <div className="relative w-full min-h-[95vh] md:min-h-[110vh] flex items-end md:items-center overflow-hidden border-t border-white/5 py-0 md:py-10">
        
        {/* --- Moving Strip Background --- */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <motion.div 
            style={{ x: bgX_Day2, scale: 1.1 }} 
            className="absolute inset-0 w-[120%] h-full -left-[10%] will-change-transform"
          >
            <div className="absolute inset-0 bg-[#050508] z-[-1]" />
            <img 
              src="/thamarasserry-bg.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-black/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto relative z-20 px-4 h-full grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center">
          
          {/* --- Text Content (Mobile: Top, Desktop: Left) --- */}
          <div className="col-span-1 md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start justify-center relative z-30 pt-12 md:pt-0 order-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            >
              <motion.div variants={textStagger} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-xl mb-6 md:mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <div className="h-4 w-px bg-cyan-500/30" />
                <span className="text-cyan-100 font-bold uppercase tracking-[0.2em] text-xs">Day 02 • Supernova</span>
              </motion.div>

              <div className="relative">
                <h2 className="hidden md:block absolute -top-24 -left-20 text-[13rem] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter mix-blend-overlay">
                  ROCK
                </h2>

                <motion.h3 variants={textStagger} className="text-3xl md:text-5xl font-serif italic text-white/80 mb-2 md:ml-2">
                  Thamarassery
                </motion.h3>
                
                <motion.h2 variants={textStagger} className="text-6xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe] mb-4 drop-shadow-2xl filter brightness-110">
                  CHURAM
                </motion.h2>
              </div>

              <motion.p variants={textStagger} className="text-xl md:text-3xl text-gray-300 font-serif italic mb-8 max-w-lg leading-relaxed">
                "Soulful rhythms & <br className="hidden md:block"/> <span className="text-cyan-400">electric vibes</span>."
              </motion.p>

              <motion.div variants={textStagger} className="flex flex-col gap-4 text-sm md:text-base text-gray-400 font-mono tracking-widest items-center md:items-start md:border-l-2 md:border-cyan-500/50 md:pl-6">
                <span className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-cyan-500" /> 
                  Live Rock Band
                </span>
                <span className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-500" /> 
                  Main Arena • 7:00 PM
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* --- Artist Image (Mobile: Bottom, Desktop: Right) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={imageReveal}
            className="relative h-[65vh] md:h-[110vh] col-span-1 md:col-span-7 flex items-end justify-center md:justify-end order-2 w-full -mb-10 md:mb-0 will-change-transform"
          >
            <div className="absolute bottom-0 right-1/2 md:right-1/4 translate-x-1/2 md:translate-x-0 w-[150%] h-[60%] bg-cyan-600/25 blur-[100px] rounded-full z-0 mix-blend-screen" />

            <img 
              src="/thamarasserry.webp" 
              alt="Thamarasserry Churam" 
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
              }}
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
};