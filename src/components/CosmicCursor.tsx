import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const IDLE_TIMEOUT = 700;

export const CosmicCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const trailRef = useRef<{ x: number; y: number; id: number }[]>([]);
  const [, setForceUpdate] = useState(0); // Trigger re-render for trail
  
  const timeoutRef = useRef<number>();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // SMOOTHNESS: Adjusted spring physics for "butter" feel
  const smoothOptions = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, smoothOptions);
  const smoothY = useSpring(y, smoothOptions);

  useEffect(() => {
    // Robust touch detection
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsTouchDevice(isTouch);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handlePointerMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      
      // OPTIMIZATION: Limit trail length strictly
      trailRef.current = [
        ...trailRef.current.slice(-3), // Keep only last 3 points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ];
      
      setIsActive(true);
      setForceUpdate(prev => prev + 1);

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setIsActive(false), IDLE_TIMEOUT);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [isTouchDevice, x, y]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              left: smoothX,
              top: smoothY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
          {trailRef.current.map((point) => (
            <motion.div
              key={point.id}
              className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9998] mix-blend-screen"
              style={{
                background: 'hsl(var(--secondary))',
                left: point.x,
                top: point.y,
              }}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};