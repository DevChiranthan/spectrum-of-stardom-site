import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { Ticket, ArrowRight, Download, FileText, Binary, ExternalLink } from 'lucide-react';

// --- VISUAL COMPONENT: SCANNER LINE ---
const ScannerEffect = () => (
  <motion.div
    className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-0 pointer-events-none"
    animate={{ top: ['-20%', '120%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
  />
);

// --- REUSABLE CARD (Fixed: Removed unused 'mode' prop) ---
const PremiumCard = ({ 
  href, 
  title, 
  desc, 
  badge, 
  icon: Icon, 
  actionText, 
  accentColor 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isCyan = accentColor === 'cyan';
  const glowColor = isCyan ? 'rgba(6,182,212,0.15)' : 'rgba(236,72,153,0.15)';
  const badgeBg = isCyan ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-pink-500/10 border-pink-500/20 text-pink-400';
  const buttonBg = isCyan ? 'hover:bg-cyan-500 hover:text-white' : 'hover:bg-pink-600 hover:text-white';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#0F0F16] border border-white/10 overflow-hidden p-6 md:p-8"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Sci-Fi Scanner Line */}
      <ScannerEffect />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-2xl border ${badgeBg}`}>
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${isCyan ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-300' : 'border-pink-500/30 bg-pink-500/5 text-pink-300'}`}>
            {badge}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          {desc}
        </p>
      </div>

      <div className={`relative z-10 flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 ${buttonBg}`}>
        <span>{actionText}</span>
        {isCyan ? <Download className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
      </div>
    </motion.a>
  );
};

export const RegisterSection = () => {
  // State for Mobile Toggle
  const [activeTab, setActiveTab] = useState('register');

  return (
    <section id="register-section" className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#050508]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050508] to-[#050508] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs uppercase tracking-widest mb-6">
            <Binary className="w-3 h-3 text-primary" />
            System Access
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Secure Your Entry
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base md:text-lg">
            Initialize registration sequence or download mission protocols.
          </p>
        </div>

        {/* =========================================================
            MOBILE VIEW: The "Smart" Toggle System
           ========================================================= */}
        <div className="md:hidden">
          {/* Custom Toggle Switch */}
          <div className="flex bg-white/5 p-1 rounded-full mb-8 relative border border-white/10 max-w-xs mx-auto">
            {/* Sliding Background */}
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white/10 rounded-full border border-white/10 shadow-lg"
              animate={{ x: activeTab === 'register' ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'register' ? 'text-white' : 'text-gray-500'}`}
            >
              Registration
            </button>
            <button 
              onClick={() => setActiveTab('brochure')}
              className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'brochure' ? 'text-white' : 'text-gray-500'}`}
            >
              Brochure
            </button>
          </div>

          {/* Animated Card Container */}
          <div className="h-[420px] relative perspective-1000">
            <AnimatePresence mode="wait">
              {activeTab === 'register' ? (
                <motion.div
                  key="register-mobile"
                  initial={{ opacity: 0, rotateY: -20, x: -20 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 20, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <PremiumCard 
                    accentColor="pink"
                    href="https://rapid.grayquest.com/cmru-reg-master"
                    icon={Ticket}
                    badge="Open Now"
                    title="Register Now"
                    desc="Secure your spot at the Supernova. Fast-track entry via the GrayQuest portal."
                    actionText="Launch Portal"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="brochure-mobile"
                  initial={{ opacity: 0, rotateY: 20, x: 20 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: -20, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <PremiumCard 
                    accentColor="cyan"
                    href="https://drive.google.com/file/d/1r5dEhsiSt3wMBPVLBbLb-4d-7kVGBEEL/view?usp=drivesdk"
                    icon={FileText}
                    badge="PDF Guide"
                    title="Event Brochure"
                    desc="Download the complete festival lineup, rulebook, venue maps, and schedule details."
                    actionText="Download Intel"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================
            DESKTOP VIEW: The Balanced Grid
           ========================================================= */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8 items-stretch h-full">
          <PremiumCard 
            accentColor="cyan"
            href="https://drive.google.com/file/d/1r5dEhsiSt3wMBPVLBbLb-4d-7kVGBEEL/view?usp=drivesdk"
            icon={FileText}
            badge="PDF Guide"
            title="Event Brochure"
            desc="Download the complete festival lineup, rulebook, venue maps, and schedule details. Everything you need to know in one file."
            actionText="Download Intel"
          />
          <PremiumCard 
            accentColor="pink"
            href="https://rapid.grayquest.com/cmru-reg-master"
            icon={Ticket}
            badge="Open Now"
            title="Register Now"
            desc="Secure your spot at the Supernova. Fast-track entry via the GrayQuest portal. Don't miss out on the experience."
            actionText="Launch Portal"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center border-t border-white/5 pt-8">
           <p className="text-[10px] md:text-xs text-gray-500 font-mono flex items-center justify-center gap-6">
             <span className="flex items-center gap-2">
               <ExternalLink className="w-3 h-3" /> External Portal
             </span>
             <span>•</span>
             <span>Powered by GrayQuest</span>
           </p>
        </div>

      </div>
    </section>
  );
};