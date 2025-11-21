import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

const eventClusters = [
  {
    id: 'sound-lab',
    label: 'Sound Lab',
    tagline: 'Ragas, riffs & cinematic scores',
    gradient: 'from-primary/40 via-secondary/30 to-primary/10',
    events: [
      { name: 'Classical Solo (Vocals)', tag: 'Vocals' },
      { name: 'Classical Solo (Instrumental)', tag: 'Instrumental' },
      { name: 'Western Solo (Vocals)', tag: 'Vocals' },
      { name: 'Western Solo (Instrumental)', tag: 'Instrumental' },
      { name: 'Classical Ensemble', tag: 'Ensemble' },
      { name: 'Western Ensemble', tag: 'Band' },
      { name: 'Folk Fusion', tag: 'Folk' },
    ],
  },
  {
    id: 'stagecraft',
    label: 'Stagecraft',
    tagline: 'Dance, fashion & big-stage charisma',
    gradient: 'from-secondary/40 via-accent/30 to-secondary/10',
    events: [
      { name: 'Classical Solo (Dance)', tag: 'Dance' },
      { name: 'Classical Group', tag: 'Crew' },
      { name: 'Western Solo (Dance)', tag: 'Dance' },
      { name: 'Western Group', tag: 'Crew' },
      { name: 'Ramp Walk', tag: 'Fashion' },
      { name: 'Mr & Miss Ranvita', tag: 'Showcase' },
    ],
  },
  {
    id: 'drama',
    label: 'Drama & Story',
    tagline: 'Scripts, satire & live narratives',
    gradient: 'from-accent/40 via-primary/25 to-accent/10',
    events: [
      { name: 'Skit', tag: 'Theatre' },
      { name: 'Mime', tag: 'Expression' },
      { name: 'Mono Act', tag: 'Solo' },
      { name: 'Stand-up Comedy', tag: 'Comedy' },
      { name: 'Short Film', tag: 'Film' },
      { name: 'Reel Making', tag: 'Reels' },
    ],
  },
  {
    id: 'visual',
    label: 'Visual Verses',
    tagline: 'Art desks & media canvases',
    gradient: 'from-primary/30 via-secondary/20 to-accent/10',
    events: [
      { name: 'Face Painting', tag: 'Art' },
      { name: 'Rangoli', tag: 'Heritage' },
      { name: 'Collage', tag: 'Design' },
      { name: 'Doodle', tag: 'Illustration' },
      { name: 'Photography', tag: 'Lens' },
    ],
  },
];

const chunkEvents = (items: typeof eventClusters[0]['events'], size: number) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

export const EventsSection = () => {
  const [activeCluster, setActiveCluster] = useState(eventClusters[0].id);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-3 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Events
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-aurora">
            Constellation of Events
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">
            Swipe through curated capsules to view every competition without endless scrolling.
          </p>
        </motion.div>

        <Tabs value={activeCluster} onValueChange={setActiveCluster} className="space-y-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-transparent p-0 w-full max-w-2xl mx-auto">
            {eventClusters.map((cluster) => (
              <TabsTrigger
                key={cluster.id}
                value={cluster.id}
                className="rounded-full border border-border/70 px-3 py-2 text-xs sm:text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all w-full"
              >
                {cluster.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {eventClusters.map((cluster) => {
            const slides = chunkEvents(cluster.events, 3);

            return (
              <TabsContent key={cluster.id} value={cluster.id} className="mt-0">
                <div
                  className={`rounded-3xl border border-border/60 bg-gradient-to-br ${cluster.gradient} backdrop-blur-2xl p-6 sm:p-8`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-sm text-muted-foreground">{cluster.tagline}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/70">
                      {cluster.events.length} events
                    </p>
                  </div>

                  <div className="mt-6 relative">
                    <Carousel
                      opts={{
                        align: 'start',
                        dragFree: true,
                      }}
                    >
                      <CarouselContent>
                        {slides.map((slide, index) => (
                          <CarouselItem key={index} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                            <motion.div
                              whileHover={{ scale: 1.03, y: -4 }}
                              className="h-full rounded-2xl border border-border/40 bg-card/70 p-5 backdrop-blur"
                            >
                              <div className="space-y-4">
                                {slide.map((event) => (
                                  <div key={event.name} className="rounded-2xl border border-border/40 p-3 bg-background/50">
                                    <div className="flex items-center justify-between gap-2">
                                      <p className="text-sm font-semibold">{event.name}</p>
                                      <Badge variant="outline" className="text-[11px] px-2 py-0.5">
                                        {event.tag}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex" />
                      <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                    <p className="text-[11px] text-muted-foreground mt-4 sm:hidden">
                      Swipe left/right to view the full roster.
                    </p>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
