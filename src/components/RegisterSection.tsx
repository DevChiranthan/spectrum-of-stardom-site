import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, ArrowUpRight } from 'lucide-react';

export const RegisterSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="register-section" ref={ref} className="py-24 sm:py-32 px-4 relative z-20 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          style={{ y }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Launch Your Stardom
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              The galaxy awaits. Secure your spot at the <span className="text-primary font-bold">Ultimate Cultural Extravaganza</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="relative max-w-xl mx-auto"
          >
            {/* Liquid Motion Background Effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-30 blur-2xl -z-10"
              animate={{
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="bg-black/60 backdrop-blur-xl rounded-[2rem] border border-white/20 p-1">
              <div className="rounded-[1.8rem] bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-12 text-center border border-white/5">
                
                <motion.div 
                  className="inline-flex p-5 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 mb-8 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Rocket className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(255,20,147,0.5)]" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-t-primary/60 border-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3">Ready for Liftoff?</h3>
                <p className="text-gray-400 mb-10">
                  One tap takes you straight to the GrayQuest portal.
                </p>

                <motion.a
                  href="https://rapid.grayquest.com/cmru-reg-master"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-4 text-lg font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Launch Registration <ArrowUpRight className="w-5 h-5" />
                  </span>
                  {/* Button Hover Fill Effect */}
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  </span>
                </motion.a>

                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500 font-mono">
                  <span>● PORTAL OPEN 24/7</span>
                  <span>● INSTANT CONFIRMATION</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};