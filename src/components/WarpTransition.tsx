import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const WarpTransition = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Warp speed lines */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '0px',
          }}
          initial={{ width: '0px', opacity: 0 }}
          animate={{
            width: '100vw',
            opacity: [0, 1, 0],
            x: [0, -window.innerWidth],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.02,
            ease: 'easeIn',
          }}
        />
      ))}
      
      {/* Radial burst */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </motion.div>
  );
};
