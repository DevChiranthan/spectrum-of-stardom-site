import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FloatingRegister = () => {
  const scrollToRegister = () => {
    document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToRegister}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg cosmic-glow border-2 border-secondary shadow-2xl group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      
      <span className="hidden sm:inline">Register Now</span>
      
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
      
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary"
        animate={{ 
          scale: [1, 1.5],
          opacity: [0.5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.button>
  );
};
