import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Mic, Palette, Drama } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

// --- Event Data ---
const eventClusters = [
  {
    id: 'dance', 
    label: 'Dance',
    icon: Sparkles,
    tagline: 'Rhythm & Movement',
    gradient: 'from-purple-600/20 to-blue-600/20',
    events: [
      { name: 'Western Group Dance', tag: 'Group' },
      { name: 'Indian Group Dance', tag: 'Group' },
      { name: 'Street Dance Battle', tag: 'Battle' },
      { name: 'Western Solo Dance', tag: 'Solo' },
      { name: 'Indian Solo Dance', tag: 'Solo' },
      { name: 'Duo Dance', tag: 'Duet' },
    ],
  },
  {
    id: 'music',
    label: 'Music',
    icon: Music,
    tagline: 'Vocals & Instruments',
    gradient: 'from-pink-600/20 to-purple-600/20',
    events: [
      { name: 'Battle of Bands', tag: 'Group' },
      { name: 'Acapella', tag: 'Group' },
      { name: 'Beat-Boxing', tag: 'Solo' },
      { name: 'Solo Singing', tag: 'Solo' },
      { name: 'Disc Riot', tag: 'DJ' },
    ],
  },
  {
    id: 'theatre',
    label: 'Theatre',
    icon: Drama,
    tagline: 'Drama & Performance',
    gradient: 'from-amber-500/20 to-red-600/20',
    events: [
      { name: 'Fashion Show', tag: 'Main' },
      { name: 'Nukkad Chronical', tag: 'Skit' },
      { name: 'Street Play', tag: 'Play' },
      { name: 'Mad Ads', tag: 'Fun' },
      { name: 'Air Crash', tag: 'Improv' },
      { name: 'Slam Poetry', tag: 'Literary' },
    ],
  },
  {
    id: 'misc',
    label: 'Off-Stage',
    icon: Palette,
    tagline: 'Creativity & Tech',
    gradient: 'from-emerald-500/20 to-cyan-600/20',
    events: [
      { name: 'Council Wars', tag: 'Flagship' },
      { name: 'Face Painting', tag: 'Art' },
      { name: 'Photography', tag: 'Visuals' },
      { name: 'Gaming (BGMI)', tag: 'Esports' },
      { name: 'Creative Writing', tag: 'Lit' },
      { name: 'Reverse Coding', tag: 'Tech' },
      { name: 'Greenovate', tag: 'Eco' },
    ],
  },
];

type EventItem = {
  name: string;
  tag: string;
};

const chunkEvents = (items: EventItem[], size: number) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

export const EventsSection = () => {
  const [activeCluster, setActiveCluster] = useState("dance");

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden bg-black/20">
      
      {/* Replaced 3D Canvas with High-Performance CSS Cyber Ring */}
      <div className="absolute top-0 right-[-10%] w-[50vh] h-[50vh] opacity-30 pointer-events-none">
        <motion.div 
          className="w-full h-full rounded-full border-2 border-cyan-500/30 border-dashed"
          animate={{ rotate: 360, rotateX: 60, rotateY: 30 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 w-full h-full rounded-full border border-pink-500/20"
          animate={{ rotate: -360, rotateX: 60, rotateY: 30, scale: [0.8, 1, 0.8] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2 block">Spectrum of Stardom</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">24 Mega Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">From the roar of the Battle of Bands to the elegance of the Fashion Show.</p>
        </motion.div>

        <Tabs 
          defaultValue="dance" 
          value={activeCluster} 
          onValueChange={setActiveCluster} 
          className="w-full flex flex-col items-center"
        >
          <div className="w-full overflow-x-auto pb-4 no-scrollbar mask-linear-fade px-4">
            <TabsList className="inline-flex h-auto p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl min-w-max mx-auto">
              {eventClusters.map((cluster) => (
                <TabsTrigger
                  key={cluster.id}
                  value={cluster.id}
                  className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-gray-400 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
                >
                  <cluster.icon className="w-4 h-4" />
                  {cluster.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="w-full mt-8 relative min-h-[450px]"> 
            {eventClusters.map((cluster) => (
              <TabsContent 
                key={cluster.id} 
                value={cluster.id} 
                className="w-full mt-0 focus-visible:outline-none absolute top-0 left-0 right-0 data-[state=inactive]:hidden data-[state=active]:block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${cluster.gradient} p-6 sm:p-10 relative overflow-hidden shadow-2xl backdrop-blur-md transform-gpu`}
                >
                  <div className="absolute inset-0 opacity-[0.03] bg-white pointer-events-none mix-blend-overlay" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{cluster.label}</h3>
                        <p className="text-white/60">{cluster.tagline}</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-4xl font-bold text-white/20">{cluster.events.length}</span>
                        <span className="block text-xs text-white/40 uppercase tracking-widest">Events</span>
                      </div>
                    </div>

                    <Carousel opts={{ align: 'start', dragFree: true }} className="w-full">
                      <CarouselContent className="-ml-4 pb-4">
                        {chunkEvents(cluster.events, 3).map((slide, index) => (
                          <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                            <div className="h-full bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col gap-3 hover:border-primary/40 transition-colors">
                              {slide.map((event, idx) => (
                                <motion.div 
                                  key={event.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                                >
                                  <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0" />
                                    <span className="text-sm sm:text-base font-medium text-white/90 truncate pr-2" title={event.name}>
                                      {event.name}
                                    </span>
                                  </div>
                                  <Badge 
                                    variant="outline" 
                                    className="shrink-0 bg-black/40 border-white/10 text-[10px] uppercase tracking-wider text-white/60 px-2 py-1 h-7 flex items-center justify-center whitespace-nowrap"
                                  >
                                    {event.tag}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-end gap-2 mt-4">
                        <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-primary" />
                        <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-primary" />
                      </div>
                    </Carousel>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};