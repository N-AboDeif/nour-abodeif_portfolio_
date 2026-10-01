import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    const handleIntentToScroll = (e) => {
      if (hasScrolled) return;

      if (
        (e.type === 'wheel' && e.deltaY > 0) ||
        e.type === 'touchmove' ||
        (e.type === 'keydown' && ['ArrowDown', 'PageDown', ' '].includes(e.key))
      ) {
        setHasScrolled(true);
        setTimeout(() => setIsScrollLocked(false), 1500);
      }
    };

    window.addEventListener('wheel', handleIntentToScroll);
    window.addEventListener('touchmove', handleIntentToScroll);
    window.addEventListener('keydown', handleIntentToScroll);

    return () => {
      window.removeEventListener('wheel', handleIntentToScroll);
      window.removeEventListener('touchmove', handleIntentToScroll);
      window.removeEventListener('keydown', handleIntentToScroll);
    };
  }, [hasScrolled]);

  return (
    // الخلفية zinc-950 لعمق أحادي اللون
    <div
      className={`bg-zinc-950 text-zinc-300 font-sans relative ${
        isScrollLocked
          ? 'h-screen overflow-hidden'
          : 'min-h-screen overflow-x-hidden'
      }`}
    >
      {/* إضاءات الـ Glassmorphism بدرجات الفضي والرمادي */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-zinc-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-zinc-400/5 rounded-full blur-[120px]"></div>
      </div>

      {/* الستارة بلون رمادي داكن (zinc-900) */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 border-b border-zinc-800 transition-transform duration-[1200ms] ease-in-out ${
          hasScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 px-4">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl">
            {/* ضفنا تأثير الأبيض والأسود للصورة مع رجوع الألوان في الـ Hover */}
            <img
              src="/src/assets/MyImg.png"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-zinc-400 mb-2">
              Hey, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Nour Abu Deif
            </h1>
            <p className="text-xl md:text-2xl mt-4 font-light text-zinc-500">
              Front-End Developer
            </p>
          </div>
        </div>
      </div>

      {/* الـ Navbar مع تأثير الـ Hover باللون الأبيض الناصع */}
      <nav
        className={`fixed top-0 w-full p-6 bg-zinc-950/60 backdrop-blur-md z-40 border-b border-white/5 transition-all duration-1000 delay-500 ${
          hasScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        }`}
      >
        <ul className="flex justify-end gap-6 max-w-6xl mx-auto">
          <li className="cursor-pointer text-zinc-400 hover:text-white transition-colors">
            Home
          </li>
          <li className="cursor-pointer text-zinc-400 hover:text-white transition-colors">
            Projects
          </li>
          <li className="cursor-pointer text-zinc-400 hover:text-white transition-colors">
            Contact
          </li>
        </ul>
      </nav>

      {/* محتوى الموقع */}
      <main
        className={`relative z-10 pt-32 p-8 max-w-6xl mx-auto min-h-[200vh] transition-all duration-1000 delay-700 ${
          hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-white mb-8">
          Welcome to my space
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          هنا هنبدأ نحط تصميم الـ Glassmorphism اللي اتفقنا عليه للمشاريع
          بتاعتك...
        </p>

        {/* الكارت الزجاجي بألوان متناسقة مع الفضي */}
        <div className="h-96 bg-zinc-900/40 backdrop-blur-lg rounded-2xl border border-zinc-700/50 shadow-2xl p-6 flex items-center justify-center">
          <p className="text-zinc-400">
            مساحة زجاجية مؤقتة بتعكس الإضاءة الفضية الهادية
          </p>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
