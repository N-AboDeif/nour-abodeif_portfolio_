import React from 'react';
import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Admin Dashboard',
      description:
        'A responsive admin dashboard for a music streaming app with a sleek and modern UI, built using pure HTML, CSS and JavaScript.',
      image: '/src/assets/Admin-Dashboard.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://admin-dashboard-delta-lac-34.vercel.app/',
      githubUrl: 'https://github.com/N-AboDeif/Musicana_Admin_Dashboard.git',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A task management app with a sleek and modern UI, built using React and Tailwind CSS.',
      image: '/src/assets/Task-Management.png',
      tags: ['React', 'Tailwind', 'JavaScript'],
      liveUrl: 'https://taskme-tau.vercel.app/',
      githubUrl:
        'https://github.com/N-AboDeif/Task-Me---Task-Management-System.git',
    },
    {
      id: 3,
      title: 'Portfolio Website V1',
      description:
        'An interactive portfolio featuring smooth animations, glassmorphism UI, custom dynamic themes, and high performance.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      tags: ['React', 'Tailwind', 'Framer'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 group">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out group-hover:blur-[2px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-[1.03] hover:-translate-y-3 hover:z-20 hover:shadow-[0_30px_50px_rgba(0,240,255,0.2)] hover:border-cyan-400/50 flex flex-col justify-between"
          >
            <div className="relative h-48 w-full overflow-hidden group/img">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>

              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#050505]/60 backdrop-blur-md border border-white/10 text-cyan-400">
                <Folder className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-cyan-400/20 hover:bg-cyan-400 text-cyan-300 hover:text-black px-4 py-2 rounded-lg border border-cyan-400/30 transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="w-5 h-5 text-white/70 group-hover/btn:text-white shrink-0 transition-colors" />

                    <div className="flex items-center overflow-hidden max-w-0 group-hover/btn:max-w-[130px] transition-all duration-500 ease-out">
                      <span className="text-sm font-medium text-white whitespace-nowrap pl-2 pr-1">
                        GitHub Repo
                      </span>
                      <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500 delay-100" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
