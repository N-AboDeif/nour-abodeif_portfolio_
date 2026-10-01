import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Front-End Developer',
      company: 'Tech Solutions Inc.',
      date: '2026 - Present',
      description:
        'Developing and maintaining responsive web applications using React and Tailwind CSS. Collaborating with cross-functional teams.',
    },
    {
      id: 2,
      type: 'work',
      title: 'Freelance Web Designer',
      company: 'Self-Employed',
      date: '2025 - 2026',
      description:
        'Designed and built custom websites for clients. Focused on UI/UX principles, modern layouts, and performance.',
    },
    {
      id: 3,
      type: 'education',
      title: 'Computer Science',
      company: 'Mansoura University',
      date: '2023 - 2027',
      description:
        'Studied software engineering and web technologies. Completed a capstone project on web accessibility.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      <div className="mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Journey</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/20 to-transparent"></div>
        <div className="md:hidden absolute left-[20px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/20 to-transparent"></div>

        <div className="space-y-12 md:space-y-0">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row justify-between items-center md:mb-16 group"
              >
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                  <div className="absolute w-5 h-5 rounded-full bg-cyan-400/30 animate-ping"></div>
                  <div className="relative w-5 h-5 rounded-full border-4 border-[#050505] bg-cyan-400 group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                <div
                  className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10 md:ml-auto'}`}
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)]">
                    <div className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                          {item.type === 'work' ? (
                            <Briefcase className="w-5 h-5" />
                          ) : (
                            <GraduationCap className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm font-medium">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-cyan-300 w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <p className="text-white/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
