import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sparkles, Info, Users } from 'lucide-react';

const stats = [
  { label: 'Schools & Centres', value: '12+', detail: 'spanning tech, law, design & arts' },
  { label: 'Industry Alliances', value: '80+', detail: 'live labs & co-created curricula' },
  { label: 'Flagship Fests', value: '30+', detail: 'annual cultural & innovation showcases' },
];

const highlightPills = [
  'Experiential studios & maker labs',
  'Mentor-led leadership pods',
  'City-wide cultural collaborations',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-6 sm:p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8 bg-gradient-to-br from-card/80 via-card/40 to-background/60">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 20% 20%, rgba(255,20,147,0.25), transparent 45%)',
                  mixBlendMode: 'screen',
                }}
                animate={{ opacity: [0.3, 0.6, 0.4], scale: [0.9, 1.05, 0.95] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative z-10 space-y-5">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Origins
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-cosmic">
                  About CMR University
                </h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  Established in 2016, CMR University is Bangalore’s creative-tech playground where design thinkers,
                  coders, storytellers, and researchers co-build experiential learning. Ranvita is our stage to celebrate
                  that fearless, cross-disciplinary energy.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl border border-border/60 bg-background/40 px-4 py-5 text-center"
                    >
                      <p className="text-2xl font-bold text-gradient-aurora">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</p>
                      <p className="text-[11px] text-muted-foreground mt-2">{stat.detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {highlightPills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full border border-primary/40 text-primary/90 bg-primary/10 backdrop-blur"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide"
                    >
                      Deep dive
                      <Info className="h-4 w-4" />
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="bg-card/90 backdrop-blur-2xl border border-border/70">
                    <DialogHeader>
                      <DialogTitle className="text-gradient-aurora text-2xl">CMR University Ethos</DialogTitle>
                      <DialogDescription className="space-y-3 text-base leading-relaxed text-foreground/80">
                        <p>
                          We blend rigorous academics with studio-style learning so every program feels immersive and
                          industry-ready. Faculty mentors pair with students inside innovation labs, creative pods, and
                          incubation cells to accelerate ideas into prototypes.
                        </p>
                        <p>
                          Cultural platforms like Ranvita power community building—bringing councils, alumni, and
                          partners together to co-create experiences that travel beyond campus.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-border/60 p-6 sm:p-8 flex flex-col gap-6 bg-background/40"
            >
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-secondary" />
                  Student pulse
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gradient-aurora">
                  Culture meets innovation
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 mt-3 leading-relaxed">
                  Leadership accelerators, club collectives, and inter-university showcases ensure every student
                  experiments with new mediums—from sonic labs to XR backdrops—before the big fest weekend.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { title: 'Leadership Pods', detail: 'Micro-coaching circles that prep council teams for mega events.' },
                  { title: 'Experience Labs', detail: 'Hands-on labs for stagecraft, AV, storytelling & creative tech.' },
                  { title: 'City Collaborations', detail: 'Partnerships with studios, galleries, and culture houses.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/50 p-4 bg-card/40">
                    <p className="text-sm font-semibold text-secondary">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
