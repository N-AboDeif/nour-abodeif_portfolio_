import React from 'react';

export default function Curtain({ hasScrolled }) {
  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-[#083344] transition-transform duration-[1200ms] ease-in-out ${
        hasScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center px-4">
        {/* الجزء الخاص بالصورة والإضاءة */}
        <div className="relative mb-6">
          {/* الإضاءة (Glow Effect) */}
          <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-[25px] scale-110"></div>

          {/* الصورة نفسها */}
          <img
            src="/src/assets/MyImg.png" // متنساش تحط صورتك في فولدر public وتكتب اسمها هنا
            alt="Nour AboDeif"
            className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border border-[#083344]/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* النصوص بنفس التنسيق والمسافات اللي في الصورة بالظبط */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.4em] text-cyan-400 mb-3 ">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Nour AboDeif
          </h1>
          <p className="text-xs md:text-sm font-light tracking-[0.3em] text-white/60 uppercase">
            Web Developer & Designer
          </p>
        </div>
      </div>
    </div>
  );
}
