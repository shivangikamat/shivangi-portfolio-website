import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface CurtainLoaderProps {
  children: React.ReactNode;
  duration?: number; // Animation duration in milliseconds
}

const CurtainLoader: React.FC<CurtainLoaderProps> = ({ 
  children, 
  duration = 3500 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start animation immediately when location changes
    setIsAnimating(true);
    setIsLoading(true);
    setAnimationKey(prev => prev + 1); // Force re-render with new animation
    
    // After animation completes, hide the curtains
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsAnimating(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname, duration]);

  // Initial load animation
  useEffect(() => {
    setIsAnimating(true);
    setIsLoading(true);
    setAnimationKey(prev => prev + 1);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsAnimating(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);

  const animationStyle = `
    @keyframes curtainOpen {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    
    @keyframes curtainOpenRight {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <div className="relative w-full h-full">
      {/* Animation styles */}
      <style>{animationStyle}</style>
      
      {/* Main Content */}
      <div 
        // className={` ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {children}
      </div>

      {/* Curtain Container */}
      <div className={`fixed inset-0 z-50 pointer-events-none ${isAnimating && isLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Left Curtain */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 ${
            isLoading ? 'animate-[curtainOpen_3s_ease-in-out_forwards]' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'url(/lovable-uploads/curtains/left.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'left center',
            animationDuration: `${duration}ms`,
            animationFillMode: 'forwards',
          }}
          key={`left-${animationKey}`}
        >
        </div>

        {/* Right Curtain */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 ${
            isLoading ? 'animate-[curtainOpenRight_3s_ease-in-out_forwards]' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'url(/lovable-uploads/curtains/right.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'right center',
            animationDuration: `${duration}ms`,
            animationFillMode: 'forwards'
          }}
          key={`right-${animationKey}`}
        >
        </div>

        
      </div>
    </div>
  );
};

export default CurtainLoader;
