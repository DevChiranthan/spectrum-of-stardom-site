import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const tableVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const day1Schedule = [
  { time: "8:00 AM", event: "Registration", venue: "Main Entrance" },
  { time: "9:00 AM", event: "Inauguration Ceremony", venue: "Main Auditorium" },
  { time: "10:00 AM", event: "Classical Solo Dance", venue: "Stage 1" },
  { time: "11:30 AM", event: "Classical Solo (Vocals)", venue: "Stage 2" },
  { time: "1:00 PM", event: "Lunch Break", venue: "Cafeteria" },
  { time: "2:00 PM", event: "Western Solo Dance", venue: "Stage 1" },
  { time: "3:30 PM", event: "Stand-Up Comedy", venue: "Stage 3" },
  { time: "5:00 PM", event: "Folk Dance", venue: "Stage 1" },
  { time: "6:30 PM", event: "Day 1 Closing Performance", venue: "Main Auditorium" },
];

const day2Schedule = [
  { time: "8:00 AM", event: "Registration", venue: "Main Entrance" },
  { time: "9:00 AM", event: "Western Group Dance", venue: "Stage 1" },
  { time: "10:30 AM", event: "Classical Group (Vocals)", venue: "Stage 2" },
  { time: "12:00 PM", event: "Skit & Mime", venue: "Stage 3" },
  { time: "1:00 PM", event: "Lunch Break", venue: "Cafeteria" },
  { time: "2:00 PM", event: "Ramp Walk", venue: "Main Auditorium" },
  { time: "3:30 PM", event: "Mr and Miss Ranvita", venue: "Main Auditorium" },
  { time: "5:00 PM", event: "Short Film Screening", venue: "Media Center" },
  { time: "6:30 PM", event: "Grand Finale & Prize Distribution", venue: "Main Auditorium" },
];

export const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const schedule = activeDay === 'day1' ? day1Schedule : day2Schedule;
  const dayTitle = activeDay === 'day1' ? 'Aurora' : 'Supernova';
  const dayColor = activeDay === 'day1' ? 'primary' : 'accent';

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-gradient-cosmic"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Event Schedule
        </motion.h2>
        
        {/* Day Toggle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveDay('day1')}
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
              activeDay === 'day1' 
                ? 'bg-primary text-primary-foreground cosmic-glow' 
                : 'bg-card text-muted-foreground border border-border'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Day 1: Aurora
          </motion.button>
          <motion.button
            onClick={() => setActiveDay('day2')}
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
              activeDay === 'day2' 
                ? 'bg-accent text-accent-foreground star-glow' 
                : 'bg-card text-muted-foreground border border-border'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Day 2: Supernova
          </motion.button>
        </motion.div>

        {/* Schedule Display */}
        <motion.div
          variants={tableVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          key={activeDay}
          className="bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-border"
        >
          <h3 className={`text-3xl font-bold mb-8 text-center text-${dayColor}`}>
            {dayTitle}
          </h3>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all"
              >
                <Clock className={`w-5 h-5 text-${dayColor}`} />
                <span className="text-lg font-semibold min-w-[100px]">{item.time}</span>
                <div className="flex-1">
                  <p className="text-lg font-medium">{item.event}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.venue}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
