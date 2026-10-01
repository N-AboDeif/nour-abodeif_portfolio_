import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Curtain from './components/Curtain';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import ScrollProgress from './components/ScrollProgress'; 
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SplashCursor from './components/ui/SplashCursor'
import Folder from './components/Folder';

export default function App() {
  const { hasScrolled, isScrollLocked } = useScrollReveal();

  return (
    <div
      className={`bg-[#050505] text-white font-sans relative ${
        isScrollLocked ? 'h-screen overflow-hidden' : 'min-h-screen'
      }`}
    >
      {/* <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={1000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#25d1ee"
      /> */}
      <ScrollProgress />
      <Curtain hasScrolled={hasScrolled} />
      <div
        className={`transition-opacity duration-1000 delay-700 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
      </div>

      <main
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 delay-700 ${
          hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Hero hasScrolled={hasScrolled} />
        <div className="h-screen flex items-center justify-center text-white/20">
          <About />
        </div>
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
