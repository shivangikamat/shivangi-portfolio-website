import { useState, useEffect } from 'react';

export const useResponsiveScale = (baseWidth: number = 1670, baseHeight: number = 1000) => {
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      const s = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
      setScale(s);
    };

    window.addEventListener('resize', handleResize);
    // initialize once
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [baseWidth, baseHeight]);

  return { scale, viewportHeight };
};
