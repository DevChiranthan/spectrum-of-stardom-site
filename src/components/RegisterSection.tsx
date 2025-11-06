import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket } from 'lucide-react';

export const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register-section" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient-aurora"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Launch Your Stardom
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't miss the <span className="text-primary font-bold">ultimate cultural extravaganza</span> of the year! Whether you're here to compete or cheer, Ranvita 2026 is your gateway to an unforgettable journey through the <span className="text-secondary font-bold">Spectrum of Stardom</span>.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-6 text-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Rocket className="w-8 h-8" />
            <p className="text-2xl font-bold">Your constellation awaits!</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/50 backdrop-blur-md rounded-3xl p-12 border-2 border-primary aurora-glow"
        >
          <div className="aspect-video bg-background/30 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-16 h-16 text-primary mx-auto" />
              </motion.div>
              <p className="text-2xl font-bold text-gradient-cosmic">Registration Form</p>
              <p className="text-muted-foreground">
                (Tally form will be embedded here)
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-lg text-muted-foreground">
            For queries, contact us at <a href="mailto:ranvita@cmr.edu.in" className="text-primary hover:text-secondary transition-colors underline">ranvita@cmr.edu.in</a>
          </p>
          <p className="text-sm text-muted-foreground">
            Limited slots available. Register early to secure your spot!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
