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
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-muted-foreground mb-4">
            Archives
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-aurora">
            Relive the Magic
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcase last year’s highlights with a vertical hype reel. Embed your final export below so every visitor ends their scroll with a cinematic punch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-sm sm:max-w-md lg:max-w-xl mx-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative group">
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-primary/40 bg-black/50 cosmic-glow">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/media/ranvita-poster.jpg"
              >
                <source src="/media/ranvita-highlight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <motion.div
              className="hidden sm:block absolute -top-8 -right-6 w-32 h-32 rounded-full bg-primary/30 blur-3xl"
              animate={{
                scale: [1, 1.15, 0.9, 1],
                opacity: [0.2, 0.45, 0.3, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="hidden sm:block absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"
              animate={{
                scale: [1.1, 0.95, 1.2, 1],
                opacity: [0.25, 0.4, 0.35, 0.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mt-8 text-xs sm:text-sm text-muted-foreground"
        >
          Tip: keep the final MP4 under 25 MB for faster playback. Replace the poster and video paths once you upload your assets.
        </motion.p>
      </div>
    </section>
  );
};

