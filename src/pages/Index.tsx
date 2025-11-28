import { Suspense, lazy } from 'react';
import { WarpTransition } from '@/components/WarpTransition';
import { CosmicCursor } from '@/components/CosmicCursor';
import { CosmicBackground } from '@/components/CosmicBackground';
import { HeroSection } from '@/components/HeroSection'; // Keep Hero eager for LCP
import { FloatingRegister } from '@/components/FloatingRegister';
import { LoadingAnimation } from '@/components/LoadingAnimation';

// PERF: Lazy load below-the-fold content
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const OsaSection = lazy(() => import('@/components/OsaSection').then(m => ({ default: m.OsaSection })));
const EventsSection = lazy(() => import('@/components/EventsSection').then(m => ({ default: m.EventsSection })));
const ArtistSection = lazy(() => import('@/components/ArtistSection').then(m => ({ default: m.ArtistSection })));
const RegisterSection = lazy(() => import('@/components/RegisterSection').then(m => ({ default: m.RegisterSection })));
const VideoSection = lazy(() => import('@/components/VideoSection').then(m => ({ default: m.VideoSection })));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#050508]">
      <WarpTransition />
      <CosmicCursor />
      <CosmicBackground />
      <FloatingRegister />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Fallback prevents layout thrashing */}
        <Suspense fallback={<div className="h-40 flex items-center justify-center"><span className="text-primary animate-pulse">Loading...</span></div>}>
          <AboutSection />
          <OsaSection />
          <EventsSection />
          <ArtistSection />
          <RegisterSection />
          <VideoSection />
        </Suspense>
      </main>
      
      <footer className="relative z-10 py-8 text-center text-muted-foreground border-t border-white/10 bg-black/40 backdrop-blur-sm">
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