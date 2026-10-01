import React from 'react';
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import StrokeText from './ui/StrokeText'

export default function Hero({ hasScrolled }) {

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (hasScrolled) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasScrolled]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* التعديل الأول: إضاءة الخلفية (Background Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* البادج - بيظهر الأول */}
        <div
          className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md"
          style={{ animationDelay: '0.2s' }}
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300">
            Welcome to my creative space
          </span>
        </div>

        {/* العنوان - بيظهر التاني */}
        <div
          className="animate-fade-in-up space-y-4"
          style={{ animationDelay: '0.4s' }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Frontend Developer</span>
            <span>
              {startAnimation ? (
                <StrokeText
                  text="& Digital Designer"
                  strokeColor="#42def7"
                  fillColor="#42def7"
                  strokeWidth={1.4}
                  drawDuration={1.6}
                  fillDelay={0.2}
                  stagger={0.05}
                  ease="sine.inOut"
                  trigger="mount" 
                  fillMode="wipe"
                  fontSize={66}
                  fontWeight={800}
                  letterSpacing={2}
                  reverse={false}
                />
              ) : (
                <span
                  style={{
                    fontSize: '66px',
                    fontWeight: 800,
                    letterSpacing: '2px',
                  }}
                  className="opacity-0 pointer-events-none"
                >
                  & Digital Designer
                </span>
              )}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, high-performance web experiences with modern
            design principles and clean code.
          </p>
        </div>

        {/* الزراير - بتظهر التالت */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center pt-8"
          style={{ animationDelay: '0.6s' }}
        >
          {/* الزرار الأساسي */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-1"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* التعديل التالت: الزرار الزجاجي (Glassmorphism Button) */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* التعديل الخامس: مؤشر السكرول بيتحرك (Animated Mouse) - بيظهر الرابع */}
        <div
          className="animate-fade-in-up pt-24 flex justify-center"
          style={{ animationDelay: '0.8s' }}
        >
          {/* نقلنا animate-bounce هنا عشان الماوس كله يتحرك */}
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 animate-bounce"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors duration-300">
              {/* النقطة ثابتة جوه الإطار عشان ينطوا مع بعض */}
              <div className="w-1 h-2 bg-cyan-400 rounded-full mt-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
