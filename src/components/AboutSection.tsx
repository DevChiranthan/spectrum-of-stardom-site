import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sparkles, ArrowRight, BookOpen, Trophy, Users, GraduationCap, Lightbulb, Globe } from 'lucide-react';

const stats = [
  { 
    icon: BookOpen,
    value: '12+', 
    label: 'Schools', 
    sub: 'Tech, Law, Design & Arts' 
  },
  { 
    icon: Users,
    value: '80+', 
    label: 'Alliances', 
    sub: 'Industry Partners' 
  },
  { 
    icon: Trophy,
    value: '30+', 
    label: 'Fests', 
    sub: 'Annual Showcases' 
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      {/* Smooth fade-in from HeroSection */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-[#050508] to-transparent pointer-events-none -z-10" />
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Our Origins
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About CMR University
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Established in 2016, we are Bangalore’s <span className="text-white font-semibold">creative-tech playground</span> where design thinkers, coders, and storytellers co-build experiential learning.
          </p>
        </motion.div>

        {/* Stats Grid - Flexible Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute top-4 right-4 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="relative z-10 w-full">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Expanded Content */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer px-6 py-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                <span className="border-b border-white/30 group-hover:border-primary transition-all">Deep Dive into our Ethos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#0a0a0f] border-white/10 text-white sm:max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl mb-2 font-bold text-gradient-aurora">The CMRU Experience</DialogTitle>
                <DialogDescription className="text-gray-400 text-base">
                  More than just a university, we are a movement of makers and leaders.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Academic Excellence
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We blend rigorous academics with studio-style learning. Faculty mentors pair with students inside innovation labs, creative pods, and incubation cells to accelerate ideas into prototypes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                    <Lightbulb className="w-5 h-5 text-secondary" />
                    Office of Student Affairs (OSA)
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Guided by our Provost Dr. Tristha Ramamurthy’s vision, OSA is the central hub that amplifies student life. We provide strategic mentoring for student councils, design cultural weeks, and bridge the gap between student ideas and university leadership.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                    <Globe className="w-5 h-5 text-accent" />
                    Community Impact
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our leadership pods prepare council teams for mega events like Ranvita. We partner with city studios, galleries, and tech hubs to ensure our students aren't just learning in classrooms, but contributing to the city's culture.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
  );
};