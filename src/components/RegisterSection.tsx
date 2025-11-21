import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, ArrowUpRight } from 'lucide-react';

export const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register-section" ref={ref} className="py-16 sm:py-20 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient-aurora"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Launch Your Stardom
          </motion.h2>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't miss the <span className="text-primary font-bold">ultimate cultural extravaganza</span> of the year! Whether you're here to compete or cheer, Ranvita 2026 is your gateway to an unforgettable journey through the <span className="text-secondary font-bold">Spectrum of Stardom</span>.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <p className="text-lg sm:text-xl md:text-2xl font-bold">Your constellation awaits!</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 border-2 border-primary aurora-glow max-w-xl mx-auto"
        >
          <div className="aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl relative overflow-hidden border border-primary/40 bg-gradient-to-br from-primary/10 via-background/20 to-secondary/10">
            <motion.div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,20,147,0.3), transparent 50%)' }}
              animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.4, 0.7, 0.5, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="hidden sm:block absolute -top-12 -right-12 h-48 w-48 bg-secondary/30 blur-3xl rounded-full"
              animate={{ x: [0, -10, 10, 0], y: [0, 10, -10, 0], opacity: [0.2, 0.5, 0.3, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="hidden sm:block absolute -bottom-16 -left-8 h-40 w-40 bg-primary/30 blur-3xl rounded-full"
              animate={{ scale: [1, 1.2, 0.9, 1], opacity: [0.35, 0.6, 0.4, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 text-center px-4 sm:px-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-full bg-background/40 border border-primary/40 shadow-inner"
              >
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </motion.div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Secure your slot</p>
                <p className="text-2xl sm:text-3xl font-bold text-gradient-aurora">Ready for liftoff?</p>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  One tap takes you to the official Ranvita 2026 registration desk powered by GrayQuest.
                </p>
              </div>
              <motion.a
                href="https://rapid.grayquest.com/cmru-reg-master"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary/80 hover:bg-primary text-background px-6 py-3 text-sm font-semibold shadow-[0_15px_45px_rgba(255,20,147,0.4)] w-full sm:w-auto"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Launch registration
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center space-y-3 sm:space-y-4 px-4"
        >
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Follow us on{' '}
            <a
              href="https://www.instagram.com/ranvita.cmru?igsh=NzV2dWd4ZGg2NDV5"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-secondary transition-colors underline"
            >
              @ranvita.cmru
            </a>{' '}
            for live updates and drop-ins.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Limited slots available. Register early to secure your spot!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
