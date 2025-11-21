import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const IDLE_TIMEOUT = 700;

const getInitialPosition = () =>
  typeof window !== 'undefined'
    ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    : { x: 0, y: 0 };

export const CosmicCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputMode, setInputMode] = useState<'mouse' | 'touch'>('mouse');
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const timeoutRef = useRef<number>();
  const pos = useRef(getInitialPosition());

  const x = useMotionValue(pos.current.x);
  const y = useMotionValue(pos.current.y);
  const smoothX = useSpring(x, { mass: 0.2, damping: 20, stiffness: 120 });
  const smoothY = useSpring(y, { mass: 0.2, damping: 20, stiffness: 120 });

  const scheduleIdle = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsActive(false), IDLE_TIMEOUT);
  };

  const updatePosition = (clientX: number, clientY: number) => {
    pos.current = { x: clientX, y: clientY };
    x.set(clientX);
    y.set(clientY);
    setTrail((prev) => [...prev.slice(-4), { x: clientX, y: clientY, id: Date.now() }]);
    setIsActive(true);
    scheduleIdle();
  };

  useEffect(() => {
    const detectInput = () => {
      if (typeof window === 'undefined') return;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      setInputMode(isCoarse ? 'touch' : 'mouse');
    };
    detectInput();
    window.addEventListener('resize', detectInput);
    return () => window.removeEventListener('resize', detectInput);
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (inputMode === 'touch' && e.pointerType !== 'touch') return;
      updatePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (!isActive) return;
      scheduleIdle();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [inputMode, isActive]);

  if (inputMode === 'touch') {
    return (
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed w-12 h-12 rounded-full pointer-events-none z-[9999] border-2 border-secondary/60 bg-secondary/10 backdrop-blur-sm"
            style={{
              left: smoothX.get() - 24,
              top: smoothY.get() - 24,
            }}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0.2 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              left: smoothX.get() - 12,
              top: smoothY.get() - 12,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            exit={{ opacity: 0, scale: 0.8 }}
          />

          {trail.map((point) => (
            <motion.div
              key={point.id}
              className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9998] mix-blend-screen"
              style={{
                background: 'hsl(var(--secondary))',
                left: point.x - 3,
                top: point.y - 3,
              }}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
            />
          ))}

          <motion.div
            className="fixed w-10 h-10 rounded-full border border-primary/40 pointer-events-none z-[9997]"
            style={{
              left: smoothX.get() - 20,
              top: smoothY.get() - 20,
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};
