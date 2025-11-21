import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, Sparkles, Navigation } from 'lucide-react';

const supportTracks = [
  { title: 'Student councils & clubs', detail: 'Strategic mentoring for flagship initiatives and inter-college collabs.' },
  { title: 'Signature events & workshops', detail: 'Co-design of cultural weeks, talent labs, and wellness pop-ups.' },
  { title: 'Leadership guidance', detail: 'Roadmaps for student-led campaigns, fellowships, and social impact drives.' },
  { title: 'Inclusive campus culture', detail: 'Support systems that keep every venue safe, vibrant, and welcoming.' },
  { title: 'Admin bridge', detail: 'A direct line between students and the University leadership team.' },
];

export const OsaSection = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-3xl border border-secondary/40 bg-gradient-to-br from-secondary/15 via-card/50 to-background/60 p-6 sm:p-10 backdrop-blur-2xl">
            <div className="flex items-center gap-3 text-secondary">
              <ShieldCheck className="h-6 w-6" />
              <p className="uppercase tracking-[0.4em] text-xs text-secondary/80">About OSA Committee</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-aurora mt-4">
              Office of Student Affairs (OSA)
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 mt-4 leading-relaxed">
              Guided by Dr. Tristha Ramamurthy’s vision, OSA is the central hub that amplifies student life at CMR
              University—keeping creativity, collaboration, and accountability in perfect orbit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Student engagement', 'Leadership labs', 'Community building'].map((pill) => (
                <Badge key={pill} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/40">
                  {pill}
                </Badge>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/40 bg-background/50 p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">Mission Snapshot</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Empower every student to discover strengths, test bold ideas, and champion inclusive celebrations that
                ripple beyond campus.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <Navigation className="h-5 w-5" />
              <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground">What OSA does</p>
            </div>
            <Accordion type="single" collapsible className="mt-4 divide-border/40">
              {supportTracks.map((track, index) => (
                <AccordionItem key={track.title} value={`track-${index}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base text-foreground">
                    {track.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {track.detail}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-xs text-muted-foreground mt-6">
              OSA partners with councils, clubs, and societies to keep every Ranvita rehearsal, registration, and reveal
              running seamlessly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

