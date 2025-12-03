import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, Sparkles, Navigation } from 'lucide-react';

const supportTracks = [
  { 
    title: 'Counselling Services', 
    detail: 'Providing a supportive environment for mental health, personal growth, and student wellbeing.' 
  },
  { 
    title: 'Student Leadership Development', 
    detail: 'Guiding student councils, clubs, and ambassador programs to enhance the overall student experience.' 
  },
  { 
    title: 'Cultural & Sports Initiatives', 
    detail: 'Coordinating major university events and activities to create a vibrant campus atmosphere.' 
  },
  { 
    title: 'Grievance Redressal', 
    detail: 'Ensuring that every student feels heard and supported through transparent resolution channels.' 
  },
  { 
    title: 'Community Building', 
    detail: 'Fostering engagement between students, faculty, and leadership to strengthen campus unity.' 
  },
];

export const OsaSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 md:gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          
          {/* LEFT COLUMN: Overview */}
          <div className="relative rounded-[2rem] border border-secondary/30 bg-gradient-to-br from-secondary/10 via-card/50 to-background/60 p-5 sm:p-8 md:p-10 backdrop-blur-xl">
            {/* Mobile-friendly Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-secondary mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-secondary/80 font-bold">About OSA Committee</p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-aurora leading-tight">
              Office of Student Affairs (OSA)
            </h2>
            
            <p className="text-sm sm:text-base text-foreground/80 mt-4 leading-relaxed">
              The Office of Student Affairs (OSA) at CMR University is dedicated to fostering student growth, wellbeing, and engagement across all campuses. We work closely with students, faculty, and leadership to create a supportive and vibrant campus environment.
            </p>

            {/* Badges: Wrapped for mobile */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {['Student Wellbeing', 'Holistic Development', 'Active Engagement'].map((pill) => (
                <Badge key={pill} variant="secondary" className="bg-secondary/15 text-secondary border-secondary/30 px-3 py-1 text-xs sm:text-sm whitespace-nowrap">
                  {pill}
                </Badge>
              ))}
            </div>

            {/* Mission Snapshot: Compact on mobile */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">Mission Snapshot</span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed italic">
                &quot;OSA ensures that every student feels heard, supported, and empowered to participate actively in campus life.&quot;
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Action Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md p-5 sm:p-8"
          >
            <div className="flex items-center gap-3 text-accent mb-2">
              <Navigation className="h-5 w-5" />
              <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-muted-foreground font-bold">What OSA does</p>
            </div>
            
            {/* Accordion: Enhanced touch targets for mobile */}
            <Accordion type="single" collapsible className="mt-2 divide-y divide-white/5">
              {supportTracks.map((track, index) => (
                <AccordionItem key={track.title} value={`track-${index}`} className="border-b-0">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground py-4 hover:text-primary transition-colors">
                    {track.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {track.detail}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-white/5">
              Acting as the bridge for student ideas and participation.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};