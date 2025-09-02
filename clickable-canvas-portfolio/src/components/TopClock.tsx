import React from "react";

interface TopClockProps {
  isDarkMode: boolean;
  toggleBackground: () => void;
  getResponsiveSize: (size: string) => string;
}

const TopClock: React.FC<TopClockProps> = ({ isDarkMode, toggleBackground, getResponsiveSize }) => {
  return (
    <div
      className="absolute"
      style={{ 
        top: "8%", 
        left: "50%", 
        width: getResponsiveSize("10%"), 
        height: getResponsiveSize("10%"), 
        transform: "translate(-50%, -50%)" 
      }}
    >
      <button
        type="button"
        aria-label="Toggle background theme"
        onClick={toggleBackground}
        className="w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center"
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <img
          src="/images/clock.svg"
          alt="Clock"
          loading="lazy"
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-md"
        />
        <span className="sr-only">Toggle background theme</span>
        
        {/* Page Tooltip */}
        <div className="absolute min-w-max w-[10vw] h-[5vh] -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-5000">
          <div className="tooltip-font flex items-center justify-center bg-white h-full text-black text-center px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
            {isDarkMode ? "Good morning" : "Go to bed"}
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default TopClock;
