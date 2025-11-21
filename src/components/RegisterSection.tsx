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
          className="bg-card/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-primary aurora-glow"
        >
          <div className="aspect-video bg-background/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto" />
              </motion.div>
              <p className="text-xl sm:text-2xl font-bold text-gradient-cosmic">Registration Form</p>
              <p className="text-sm sm:text-base text-muted-foreground">
                (Tally form will be embedded here)
              </p>
              <motion.a
                href="https://rapid.grayquest.com/cmru-reg-master"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-dotted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open registration portal
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
            For queries, contact us at <a href="mailto:ranvita@cmr.edu.in" className="text-primary hover:text-secondary transition-colors underline">ranvita@cmr.edu.in</a>
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Limited slots available. Register early to secure your spot!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
