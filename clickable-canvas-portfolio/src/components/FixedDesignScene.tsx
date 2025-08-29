import React from 'react';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';

interface FixedDesignSceneProps {
  children: React.ReactNode;
  baseWidth?: number;
  baseHeight?: number;
  backgroundColor?: string;
  className?: string;
}

const FixedDesignScene: React.FC<FixedDesignSceneProps> = ({
  children,
  baseWidth = 1670,
  baseHeight = 1000,
  backgroundColor = "#F2C6B8",
  className = ""
}) => {
  const { scale, viewportHeight } = useResponsiveScale(baseWidth, baseHeight);

  return (
    <div
      className={`relative w-full min-h-[100vh] mx-auto overflow-hidden ${className}`}
      style={{
        backgroundColor: backgroundColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: `${viewportHeight}px`,
      }}
      aria-label="Fixed design scene backdrop"
    >
      {/* Fixed-design scene wrapper that scales uniformly */}
      <div
        className="relative"
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedDesignScene;
