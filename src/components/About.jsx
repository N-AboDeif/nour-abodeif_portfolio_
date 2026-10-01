import React from 'react';
import { Code2, Palette, Layout, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      desc: 'React, Vite, Next.js, TypeScript',
    },
    {
      name: 'UI/UX Design',
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      desc: 'Figma, Prototyping, Wireframing',
    },
    {
      name: 'Responsive Layouts',
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      desc: 'Tailwind CSS, Framer Motion',
    },
    {
      name: 'Clean Code',
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      desc: 'Clean Architecture, Best Practices',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
          <p>
            Hello! I'm{' '}
            <span className="text-white font-semibold">Nour AboDeif</span>, a
            passionate Front-End Developer and Digital Designer. I specialize in
            building highly interactive, accessible, and user-friendly web
            applications.
          </p>
          <p>
            With a strong eye for design and a love for clean code, I bridge the
            gap between aesthetics and functionality. My goal is to create
            digital experiences that not only look beautiful but also perform
            flawlessly under the hood.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-colors">
              <h3 className="text-3xl font-bold text-cyan-400 mb-1">+2</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-colors">
              <h3 className="text-3xl font-bold text-cyan-400 mb-1">+15</h3>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)]"
            >
              <div className="mb-4 p-3 rounded-lg bg-cyan-400/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-white/50">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
