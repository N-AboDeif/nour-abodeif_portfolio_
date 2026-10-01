import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // بنحسب إنت نزلت قد إيه بالنسبة لطول الصفحة كلها
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrollable > 0 ? (scrolled / scrollable) * 100 : 0);
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    // z-[100] عشان يفضل فوق كل حاجة في الموقع حتى الـ Navbar
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
