import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card/50 backdrop-blur-md rounded-3xl p-12 border border-border cosmic-glow"
        >
          <motion.h2 
            variants={staggerItem}
            className="text-5xl md:text-6xl font-bold mb-8 text-center text-gradient-cosmic"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About CMR University
          </motion.h2>
          
          <motion.div variants={staggerItem} className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              <span className="text-primary font-semibold">CMR University</span>, established in 2016, is a multidisciplinary institution committed to excellence in education, research, and innovation. Located in the vibrant city of Bangalore, the university offers a wide range of undergraduate, postgraduate, and doctoral programs across diverse fields such as engineering, management, law, sciences, and humanities.
            </p>
            
            <p>
              With a focus on <span className="text-secondary font-semibold">holistic development</span>, CMR University blends academic rigor with experiential learning, fostering critical thinking and creativity among its students. The university prides itself on its state-of-the-art infrastructure, experienced faculty, and industry collaborations that prepare students for global challenges.
            </p>
            
            <p>
              Beyond academics, CMR University is a hub of <span className="text-accent font-semibold">cultural vibrancy and extracurricular excellence</span>. Events like <span className="text-primary font-semibold">Ranvita</span> showcase the university's dedication to nurturing talent, celebrating diversity, and creating platforms for students to shine on and off the stage.
            </p>
            
            <p className="text-center font-semibold text-xl text-gradient-aurora pt-4">
              Join us in shaping the future, one innovation at a time!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
