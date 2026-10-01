import React from 'react';
// استدعاء الأيقونات من si
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiPython,
} from 'react-icons/si';
// استدعاء أيقونة CSS3 من fa6
import { FaCss3Alt } from 'react-icons/fa6';

export default function TechStack() {
  const techs = [
    {
      name: 'React',
      icon: (
        <SiReact className="w-6 h-6 group-hover:text-[#61DAFB] transition-colors duration-300" />
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <SiNextdotjs className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <SiTypescript className="w-6 h-6 group-hover:text-[#3178C6] transition-colors duration-300" />
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <SiJavascript className="w-6 h-6 group-hover:text-[#F7DF1E] transition-colors duration-300" />
      ),
    },
    {
      name: 'Tailwind',
      icon: (
        <SiTailwindcss className="w-6 h-6 group-hover:text-[#06B6D4] transition-colors duration-300" />
      ),
    },
    {
      name: 'HTML5',
      icon: (
        <SiHtml5 className="w-6 h-6 group-hover:text-[#E34F26] transition-colors duration-300" />
      ),
    },
    {
      name: 'CSS3',
      icon: (
        <FaCss3Alt className="w-6 h-6 group-hover:text-[#1572B6] transition-colors duration-300" />
      ),
    },
    {
      name: 'Python',
      icon: (
        <SiPython className="w-6 h-6 group-hover:text-[#3776AB] transition-colors duration-300" />
      ),
    },
  ];

  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <section className="mt-70 md:mt-0 relative w-full py-10 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
          My <span className="text-cyan-400">Tech Stack</span>
        </h3>
      </div>

      <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
        <div className="flex gap-6 w-max animate-infinite-scroll py-4">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all cursor-default group"
            >
              <div className="text-white/40 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
