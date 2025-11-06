import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-8 text-gradient-aurora"
            style={{ fontFamily: "'Cinzel', serif" }}
            animate={{ 
              textShadow: [
                '0 0 20px hsl(var(--primary))',
                '0 0 40px hsl(var(--secondary))',
                '0 0 20px hsl(var(--primary))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            RANVITA 2026
          </motion.h1>
          
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Step into the <span className="text-primary font-semibold">Spectrum of Stardom</span>, where brilliance knows no bounds! Ranvita 2026 is not just an event—it's a cosmic celebration of talent, creativity, and boundless energy.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Over two unforgettable days, <span className="text-secondary font-semibold">Aurora</span> and <span className="text-accent font-semibold">Supernova</span>, witness a galaxy of 24 electrifying events spanning dance, music, drama, fashion, and more. From the soul-stirring rhythms of classical performances to the high-octane beats of contemporary showcases, every act is a star in its own right.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This is your chance to shine among the constellations, compete with the best, and create moments that sparkle forever. Whether you're a performer or a spectator, Ranvita 2026 promises an experience that's truly out of this world.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
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
      
      {/* Floating cosmic elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent)' }}
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--secondary)), transparent)' }}
        animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};
