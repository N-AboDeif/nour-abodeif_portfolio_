import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-4 w-[90%] md:w-[700px] rounded-full py-3 px-6 bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'top-0 w-full max-w-none rounded-none py-6 px-8 bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <button className="flex-shrink-0" onClick={scrollToTop}>
          <a
            href="#home"
            className="text-2xl font-bold text-cyan-400 transition-all duration-300 hover:[text-shadow:0_0_15px_rgba(0,240,255,0.8)]"
          >
            Nour AboDeif
          </a>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group text-white/70 hover:text-cyan-400 transition-all duration-300 font-medium py-1"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-cyan-400 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-2 p-4 bg-[#050505]/95 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative group text-white/70 hover:text-cyan-400 transition-all duration-300 p-2 block w-max"
            >
              {link.label}
              <span className="absolute left-2 bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
