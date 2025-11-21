import { motion } from 'framer-motion';

export const VideoSection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-28 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-muted-foreground mb-3">
            Aftermovie
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-aurora">
            Previous Ranvita Showcase
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            A quick look at the last Spectrum of Stardom finale—auditorium roars, sky lasers, and the moment the grand
            winners took the crown.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotateY: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative group">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/40 bg-black/70 cosmic-glow">
              <video
                className="w-full h-full object-cover"
                playsInline
                controls
                preload="metadata"
                poster="/media/ranvita-poster.jpg"
              >
                <source src="/media/ranvita-highlight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* 3D overlay */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{ mixBlendMode: 'screen' }}
                animate={{ opacity: [0.2, 0.4, 0.25], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,20,147,0.35),transparent_60%)]" />
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,255,255,0.15),transparent_65%)] animate-spin-slow" />
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -top-12 -right-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl"
                animate={{
                  scale: [1, 1.15, 0.9, 1],
                  opacity: [0.2, 0.45, 0.3, 0.5],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="hidden sm:block absolute -bottom-14 -left-12 w-56 h-56 rounded-full bg-secondary/25 blur-3xl"
                animate={{
                  scale: [1.1, 0.95, 1.2, 1],
                  opacity: [0.25, 0.4, 0.35, 0.5],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mt-8 text-xs sm:text-sm text-muted-foreground"
        >
          Stay tuned—the 2026 aftermovie will stream right here minutes after the closing ceremony.
        </motion.p>
      </div>
    </section>
  );
};

