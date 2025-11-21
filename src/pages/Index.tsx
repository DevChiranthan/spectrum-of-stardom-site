import { WarpTransition } from '@/components/WarpTransition';
import { CosmicCursor } from '@/components/CosmicCursor';
import { CosmicBackground } from '@/components/CosmicBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { EventsSection } from '@/components/EventsSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { RegisterSection } from '@/components/RegisterSection';
import { FloatingRegister } from '@/components/FloatingRegister';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <WarpTransition />
      <CosmicCursor />
      <CosmicBackground />
      <FloatingRegister />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <RegisterSection />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          © 2026 CMR University. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <span className="text-primary">✨</span> for the Spectrum of Stardom
        </p>
      </footer>
    </div>
  );
};

export default Index;
