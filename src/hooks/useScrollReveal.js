import { useState, useEffect } from 'react';

export function useScrollReveal() {
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

  return { hasScrolled, isScrollLocked };
}
