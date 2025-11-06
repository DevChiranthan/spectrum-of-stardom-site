import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Central star */}
        <motion.div
          className="w-16 h-16 rounded-full cosmic-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)), hsl(var(--secondary)))',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--accent))' : 'hsl(var(--secondary))',
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 2) * 50],
              y: [0, Math.sin(i * Math.PI / 2) * 50],
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
        
        <motion.p
          className="text-foreground text-xl font-bold mt-12 text-center text-gradient-aurora"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          RANVITA 2026
        </motion.p>
      </div>
    </motion.div>
  );
};
