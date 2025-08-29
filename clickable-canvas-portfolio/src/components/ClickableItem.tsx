import React from "react";
import { useNavigate } from "react-router-dom";

type Position = { top?: string; left?: string; right?: string; bottom?: string; transform?: boolean };

interface ClickableItemProps {
  label: string;
  src: string;
  alt: string;
  position: Position; // percentage-based positioning within relative container
  width?: string; // e.g., "18%"
  height?: string; // e.g., "18%"
  description?: string;
  route: string; // route to navigate to when clicked
  disableDropShadow?: boolean; // disable drop shadow on the image
  zIndex?: number; // custom z-index for layering
  disabled?: boolean; // make the component non-clickable
  showPageTooltip?: boolean; // show tooltip with page name on hover
}

const ClickableItem: React.FC<ClickableItemProps> = ({ label, src, alt, position, width = "18%", height = "18%", description, route, disableDropShadow = false, zIndex, disabled = false, showPageTooltip = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
    }
  };

  // Function to get page name from route
  const getPageName = (route: string): string => {
    const routeMap: { [key: string]: string } = {
      '/': 'Home',
      '/about': 'About',
      '/projects': 'Projects',
      '/experience': 'Experience',
      '/education': 'Education',
      '/extracurriculars': 'Extracurriculars',
      '/blog': 'Blog',
      '/contact': 'Contact',
      '/testimonials': 'Testimonials',
      '/gallery': 'Gallery'
    };
    return routeMap[route] || 'Page';
  };

  return (
    <div
      className="absolute"
      style={{ 
        top: position.top, 
        left: position.left, 
        right: position.right, 
        bottom: position.bottom, 
        width, 
        height, 
        transform: position.transform ? "translate(-50%, -50%)" : "none",
        zIndex: zIndex
      }}
    >
      <button
        type="button"
        aria-label={label}
        onClick={handleClick}
        disabled={disabled}
        className={`w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-transform duration-200 ${
          disabled 
            ? 'cursor-default' 
            : 'hover:scale-[1.1]'
        }`}
        title={disabled ? undefined : description}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-auto select-none pointer-events-none ${!disableDropShadow ? 'drop-shadow-md' : ''}`}
        />
        <span className="sr-only">{label}</span>
        
        {/* Page Tooltip */}
        {showPageTooltip && !disabled && (
          <div className="absolute min-w-max w-[10vw] h-[5vh] -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-5000">
            <div className="tooltip-font flex items-center justify-center bg-white h-full text-black text-center px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
              {getPageName(route)}
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ClickableItem;
