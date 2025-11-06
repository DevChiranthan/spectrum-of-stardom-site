import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const events = [
  { name: "Classical Solo", rating: 4 },
  { name: "Classical Group", rating: 4 },
  { name: "Western Solo", rating: 4 },
  { name: "Western Group", rating: 4 },
  { name: "Folk", rating: 4 },
  { name: "Classical Solo (vocals)", rating: 4 },
  { name: "Classical Solo (instrumental)", rating: 4 },
  { name: "Western Solo (vocals)", rating: 3 },
  { name: "Western Solo (instrumental)", rating: 3 },
  { name: "Classical Group", rating: 3 },
  { name: "Western Group", rating: 3 },
  { name: "Skit", rating: 3 },
  { name: "Mime", rating: 3 },
  { name: "Mono Act", rating: 4 },
  { name: "Stand-Up Comedy", rating: 3 },
  { name: "Ramp Walk", rating: 4 },
  { name: "Mr and Miss Ranvita", rating: 4 },
  { name: "Face Painting", rating: 3 },
  { name: "Rangoli", rating: 3 },
  { name: "Collage", rating: 4 },
  { name: "Doodle", rating: 3 },
  { name: "Photography", rating: 3 },
  { name: "Short Film", rating: 4 },
  { name: "Reel Making", rating: 4 },
];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient-aurora"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Constellation of Events
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/60 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-primary transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.name}
                </h3>
                <div className="flex gap-1">
                  {[...Array(event.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
