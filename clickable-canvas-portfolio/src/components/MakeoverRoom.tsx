import React, { useState } from "react";
import ClickableItem from "@/components/ClickableItem";
import Notification from "@/components/ui/notification";
import FixedDesignScene from "@/components/FixedDesignScene";
import TopClock from "@/components/TopClock";

const MakeoverRoom: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Base design resolution (keeps relative layout consistent)
  const BASE_WIDTH = 1670;
  const BASE_HEIGHT = 1000;

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode 
    ? "#946355" 
    : "#F2C6B8";

  const matColor = isDarkMode 
    ? "#48261B" 
    : "#A46352";

  const windowImage = isDarkMode 
    ? "/images/window_dark.svg" 
    : "/images/window.svg";

  const chandelierImage = isDarkMode 
    ? "/images/chandelier_dark.svg" 
    : "/images/chandelier.svg";

  const topLightImage = isDarkMode 
    ? "/images/top_light_dark.svg" 
    : "/images/top_light.svg";

  // Let the scene scale uniformly. Keep base percentages unchanged.
  const getResponsiveSize = (baseSize: string) => baseSize;

  return (
    <FixedDesignScene
      backgroundColor={backgroundColor}
      baseWidth={BASE_WIDTH}
      baseHeight={BASE_HEIGHT}
      aria-label="Interactive makeover room backdrop"
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
        src="/images/vanity_div.svg"
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
        src="/images/coat_hanger.svg"
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
        src="/images/center_mannequin.svg"
        alt="Pink layered gown on dress form"
        position={{ top: "52%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height="max-content"
        route="/experience"
        zIndex={4}
        showPageTooltip={true}
      />

        {/* Clock - Background Toggle */}
      <TopClock 
        isDarkMode={isDarkMode}
        toggleBackground={toggleBackground}
        getResponsiveSize={getResponsiveSize}
      />

      <ClickableItem
        label="Bouquet"
        description="bouquet"
        src="/images/bouquet.svg"
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
        src="/images/side_mannequins.svg"
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
        src="/images/cabinet.svg"
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
        src="/images/sofa.svg"
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
        src="/images/chair.svg"
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
        src="/images/rug.svg"
        alt="Rug with hidden treasures"
        position={{ top: "91%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height="max-content"
        route="/contact"
        zIndex={5}
        showPageTooltip={true}
      />

       {/* Notification */}
       <Notification 
        elementToClick="different attractions" 
        contentToView="my life"
      />

      </FixedDesignScene>
  );
};

export default MakeoverRoom;
