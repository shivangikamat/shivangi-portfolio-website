import React, { useState, useEffect } from "react";
import ClickableItem from "@/components/ClickableItem";
import Notification from "@/components/ui/notification";

const MakeoverRoom: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState(1);

  // Base design resolution (keeps relative layout consistent)
  const BASE_WIDTH = 1670;
  const BASE_HEIGHT = 1000;

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update viewport height on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      const s = Math.min(window.innerWidth / BASE_WIDTH, window.innerHeight / BASE_HEIGHT);
      setScale(s);
    };

    window.addEventListener('resize', handleResize);
    // initialize once
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundColor = isDarkMode 
    ? "#946355" 
    : "#F2C6B8";

  const matColor = isDarkMode 
    ? "#48261B" 
    : "#A46352";

  const windowImage = isDarkMode 
    ? "/lovable-uploads/window_dark.svg" 
    : "/lovable-uploads/window.svg";

  const chandelierImage = isDarkMode 
    ? "/lovable-uploads/chandelier_dark.svg" 
    : "/lovable-uploads/chandelier.svg";

  const topLightImage = isDarkMode 
    ? "/lovable-uploads/top_light_dark.svg" 
    : "/lovable-uploads/top_light.svg";

  // Let the scene scale uniformly. Keep base percentages unchanged.
  const getResponsiveSize = (baseSize: string) => baseSize;

  return (
    <div
      className="relative w-full min-h-[100vh] mx-auto overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: `${viewportHeight}px`,
      }}
      aria-label="Interactive makeover room backdrop"
    >

      {/* Fixed-design scene wrapper that scales uniformly */}
      <div
        className="relative"
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >

      <div 
        className="absolute bottom-0 left-0 w-full" 
        style={{ 
          backgroundColor: matColor,
          height: getResponsiveSize("32%")
        }} 
      />

        {/* Window */}
      <ClickableItem
        label="Window"
        description="Window"
        src={windowImage}
        alt="Window"
        position={{ top: "36%", left: "50%", transform: true }}
        width={getResponsiveSize("32%")}
        height={getResponsiveSize("32%")}
        route="/"
        disableDropShadow={true}
        zIndex={2}
        disabled={true}
      />

        {/* 2 Chandeliers */}
      <ClickableItem
        label="Chandelier"
        description="Chandelier"
        src={chandelierImage}
        alt="Chandelier"
        position={{ top: "0", left: "5%" }}
        width={getResponsiveSize("7%")}
        height={getResponsiveSize("7%")}
        route="/"
        disableDropShadow={true}
        disabled={true}
      />
      <ClickableItem
        label="Chandelier"
        description="Chandelier"
        src={chandelierImage}
        alt="Chandelier"
        position={{ top: "0", right: "5%" }}
        width={getResponsiveSize("7%")}
        height={getResponsiveSize("7%")}
        route="/"
        disableDropShadow={true}
        disabled={true}
      />

        {/* 4 top lights */}
      <ClickableItem
        label="Left Outer Light"
        description="Left Outer Light"
        src={topLightImage}
        alt="Light"
        position={{ top: "0", left: "20%" }}
        width={getResponsiveSize("4%")}
        height={getResponsiveSize("4%")}
        route="/"
        disableDropShadow={true}
        disabled={true}
      />
      <ClickableItem
         label="Left Inner Light"
         description="Left Inner Light"
         src={topLightImage}
         alt="Light"
         position={{ top: "-10%", left: "35%" }}
         width={getResponsiveSize("4%")}
         height={getResponsiveSize("4%")}
         route="/"
         disableDropShadow={true}
         zIndex={1}
         disabled={true}
       />
       <ClickableItem
         label="Right Inner Light"
         description="Right Inner Light"
         src={topLightImage}
         alt="Light"
         position={{ top: "-10%", right: "35%" }}
         width={getResponsiveSize("4%")}
         height={getResponsiveSize("4%")}
         route="/"
         disableDropShadow={true}
         zIndex={1}
         disabled={true}
       />
      <ClickableItem
        label="Right Outer Light"
        description="Right Outer Light"
        src={topLightImage}
        alt="Light"
        position={{ top: "0", right: "20%" }}
        width={getResponsiveSize("4%")}
        height={getResponsiveSize("4%")}
        route="/"
        disableDropShadow={true}
        disabled={true}
      />

        {/* Vanity & mirror (About) */}
      <ClickableItem
        label="About Me"
        description="Learn more about my story and approach."
        src="/lovable-uploads/vanity_div.svg"
        alt="Vanity with ornate mirror"
        position={{ top: "27%", left: "0" }}
        width={getResponsiveSize("23%")}
        height="max-content"
        route="/blog"
        showPageTooltip={true}
      />

        {/* Coat hanger */}
      <ClickableItem
        label="Wardrobe Essentials"
        description="Discover the foundation pieces for your perfect wardrobe"
        src="/lovable-uploads/coat_hanger.svg"
        alt="Coat hanger"
        position={{ top: "30%", left: "25%" }}
        width={getResponsiveSize("8%")}
        height={getResponsiveSize("8%")}
        route="/coat-hanger"
        disabled={true}
      />

        {/* Center dress (Gallery) */}
      <ClickableItem
        label="Gallery"
        description="Signature looks and transformations."
        src="/lovable-uploads/center_mannequin.svg"
        alt="Pink layered gown on dress form"
        position={{ top: "52%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height="max-content"
        route="/experience"
        zIndex={4}
        showPageTooltip={true}
      />

        {/* Clock - Background Toggle */}
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
            src="/lovable-uploads/clock.svg"
            alt="Clock"
            loading="lazy"
            className="w-full h-full object-contain select-none pointer-events-none drop-shadow-md"
          />
          <span className="sr-only">Toggle background theme</span>
        </button>
      </div>

      <ClickableItem
        label="Bouquet"
        description="bouquet"
        src="/lovable-uploads/bouquet.svg"
        alt="Bouquet"
        position={{ top: "18%", left: "50%", transform: true }}
        width={getResponsiveSize("6%")}
        height={getResponsiveSize("6%")}
        route="/"
        zIndex={3}
        disabled={true}
      />

        {/* Mannequins (education history) */}
      <ClickableItem
        label="Projects"
        description="Recent collaborations and highlights."
        src="/lovable-uploads/side_mannequins.svg"
        alt="Two mannequins with gowns"
        position={{ top: "28%", right: "0" }}
        width={getResponsiveSize("25%")}
        height={getResponsiveSize("40%")}
        route="/education"
        showPageTooltip={true}
      />

        {/* Accessory shelf (Services) */}
      <ClickableItem
        label="Services"
        description="Styling, makeup and consultations."
        src="/lovable-uploads/cabinet.svg"
        alt="Shelf with jewelry, handbag and heels"
        position={{ top: "27%", right: "23%" }}
        width={getResponsiveSize("9%")}
        height="max-content"
        route="/extracurriculars"
        showPageTooltip={true}
      />

        {/* Sofa + gifts (Contact / Quote) */}
      <ClickableItem
        label="Contact"
        description="Get in touch for bookings and quotes."
        src="/lovable-uploads/sofa.svg"
        alt="Sofa with table, flowers, gifts and heels"
        position={{ top: "50%", right: "0" }}
        width={getResponsiveSize("28%")}
        height={getResponsiveSize("28%")}
        route="/"
        disabled={true}
      />

        {/* Sofa corner (Testimonials) */}
      <ClickableItem
        label="Testimonials"
        description="Kind words from clients."
        src="/lovable-uploads/chair.svg"
        alt="Sofa corner with cushion"
        position={{ top: "67%", left: "0" }}
        width={getResponsiveSize("13%")}
        height="max-content"
        route="/projects"
        showPageTooltip={true}
      />

        {/* Rug (Rug Pull) */}
      <ClickableItem
        label="Reveal Treasures"
        description="Discover hidden gems and exclusive offers"
        src="/lovable-uploads/rug.svg"
        alt="Rug with hidden treasures"
        position={{ top: "91%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height="max-content"
        route="/contact"
        zIndex={5}
        showPageTooltip={true}
      />

      </div>

       {/* Notification */}
       <Notification 
        elementToClick="different attractions" 
        contentToView="my life"
      />
    </div>
  );
};

export default MakeoverRoom;
