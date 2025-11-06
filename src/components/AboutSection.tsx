import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-card/50 backdrop-blur-md rounded-3xl p-12 border border-border cosmic-glow"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 text-center text-gradient-cosmic"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About CMR University
          </motion.h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-semibold">CMR University</span>, established in 2016, is a multidisciplinary institution committed to excellence in education, research, and innovation. Located in the vibrant city of Bangalore, the university offers a wide range of undergraduate, postgraduate, and doctoral programs across diverse fields such as engineering, management, law, sciences, and humanities.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a focus on <span className="text-secondary font-semibold">holistic development</span>, CMR University blends academic rigor with experiential learning, fostering critical thinking and creativity among its students. The university prides itself on its state-of-the-art infrastructure, experienced faculty, and industry collaborations that prepare students for global challenges.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Beyond academics, CMR University is a hub of <span className="text-accent font-semibold">cultural vibrancy and extracurricular excellence</span>. Events like <span className="text-primary font-semibold">Ranvita</span> showcase the university's dedication to nurturing talent, celebrating diversity, and creating platforms for students to shine on and off the stage.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center font-semibold text-xl text-gradient-aurora pt-4"
            >
              Join us in shaping the future, one innovation at a time!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
