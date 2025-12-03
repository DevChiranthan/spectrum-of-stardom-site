import { motion } from 'framer-motion';
import { 
  Target, 
  MapPin, 
  Quote,
  ArrowUpRight,
  BookOpen,
  Users,
  Globe,
  Zap
} from 'lucide-react';

const disciplines = [
  "Architecture", "Design", "Engineering", "Law", "Management", 
  "Economics", "Commerce", "Social Sciences", "Humanities", "Science Studies"
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 } 
  }
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden bg-[#050508]">
      
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* 2. Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Reduced bottom margin on desktop to fix top blank space
          className="mb-16 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">CMR University</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl font-light">
             Fostering creative communities where new ideas are nurtured, discoveries are made, and creations are shared.
          </p>
        </motion.div>

        {/* 3. Main Layout Grid - Added items-stretch for equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: The Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Added justify-center to center content vertically in the stretched column
            className="lg:col-span-5 flex flex-col gap-8 order-1 justify-center"
          >
            <div className="prose prose-lg prose-invert text-gray-400">
              <p className="text-lg text-gray-300 leading-relaxed">
                CMR University (CMRU), Bangalore, is a private university in the state of Karnataka, established to equip students with the skills required to pursue successful careers in their chosen fields of study.
              </p>
              
              <div className="h-px w-full bg-white/10 my-6" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Rooted in Karnataka</h4>
                  <p className="text-sm text-gray-500">
                    A hub for innovation and heritage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Vision (Highlight) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // Added h-full to ensure it fills the stretched height
            className="lg:col-span-7 order-2 h-full"
          >
            {/* Added h-full and justify-center to center the quote inside the box */}
            <div className="relative h-full flex flex-col justify-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden group">
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 rotate-12" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-accent mb-6">
                  <Target className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-xs font-bold">Our Vision</span>
                </div>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug">
                  &quot;To nurture creative thinkers who will drive positive global change.&quot;
                </blockquote>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-4 h-4 text-blue-200" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Globe className="w-4 h-4 text-purple-200" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-pink-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Zap className="w-4 h-4 text-pink-200" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">+ diverse community</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>

        {/* 4. DISCIPLINES SECTION */}
        <motion.div 
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={gridContainerVariants}
        >
          <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Academic Disciplines
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Advancement of education across diverse schools of study.
              </p>
            </div>
            <ArrowUpRight className="hidden md:block w-8 h-8 text-gray-600" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {disciplines.map((item, idx) => (
              <motion.div
                key={idx}
                variants={gridItemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative flex items-center justify-center p-4 h-20 rounded-2xl bg-[#0F0F16] border border-white/10 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                  {item}
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};