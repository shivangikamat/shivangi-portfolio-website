import React, { useEffect, useState } from "react";
import { img, preloadImages } from "@/lib/images";
import ClickableItem from "@/components/ClickableItem";
import Notification from "@/components/ui/notification";
import FixedDesignScene from "@/components/FixedDesignScene";
import TopClock from "@/components/TopClock";
import OptimizedImage from "@/components/OptimizedImage";

const MakeoverRoom: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Base design resolution (keeps relative layout consistent)
  const BASE_WIDTH = 1670;
  const BASE_HEIGHT = 1000;

  // Once the room is up, fetch the main artwork of the inner pages so they open instantly
  useEffect(() => {
    preloadImages([
      "wardrobe.webp",
      "open-book.webp",
      "desktop.webp",
      "shelf.webp",
      "contact_page/telephone.webp",
      "window_dark.webp",
    ]);
  }, []);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode 
    ? "#946355" 
    : "#F2C6B8";

  const matColor = isDarkMode 
    ? "#48261B" 
    : "#A46352";

  const skirtingColor = isDarkMode
    ? "#B98A7B"
    : "#FBECE4";

  const wallGlow = isDarkMode
    ? "rgba(255,225,200,0.10)"
    : "rgba(255,255,255,0.30)";

  const windowImage = isDarkMode 
    ? img("window_dark.webp") 
    : img("window.svg");

  const chandelierImage = isDarkMode 
    ? img("chandelier_dark.svg") 
    : img("chandelier.svg");

  const topLightImage = isDarkMode 
    ? img("top_light_dark.svg") 
    : img("top_light.svg");

  // Let the scene scale uniformly. Keep base percentages unchanged.
  const getResponsiveSize = (baseSize: string) => baseSize;

  return (
    <FixedDesignScene
      backgroundColor={backgroundColor}
      baseWidth={BASE_WIDTH}
      baseHeight={BASE_HEIGHT}
      aria-label="Interactive makeover room backdrop"
    >

      {/* Wallpaper: soft stripes with a glow around the window. Extends past the canvas so wide screens have no seam */}
      <div
        className="absolute top-0 pointer-events-none"
        style={{
          left: "-100%",
          width: "300%",
          height: "68%",
          backgroundImage: [
            `radial-gradient(ellipse 16% 75% at 50% 38%, ${wallGlow}, transparent 72%)`,
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 36px, rgba(255,255,255,0) 36px 72px)",
          ].join(", "),
        }}
      />

      {/* Floor, shaded where it meets the wall and towards the front */}
      <div 
        className="absolute bottom-0 pointer-events-none" 
        style={{ 
          left: "-100%",
          width: "300%",
          backgroundColor: matColor,
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.14), rgba(0,0,0,0) 16%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.14))",
          height: getResponsiveSize("32%")
        }} 
      />

      {/* Skirting board */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-100%",
          width: "300%",
          bottom: "32%",
          height: "1.3%",
          backgroundColor: skirtingColor,
          boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
        }}
      />

      {/* Ground shadows for the pieces that had none */}
      {[
        { left: "29%", top: "71.6%", width: "8%", height: "1.6%" },   // coat hanger
        { left: "72.5%", top: "69.2%", width: "10%", height: "1.6%" }, // cabinet
        { left: "50%", top: "80.8%", width: "24%", height: "3.4%", zIndex: 3 }, // dress
      ].map((shadow) => (
        <div
          key={shadow.left}
          className="absolute rounded-[50%] pointer-events-none"
          style={{ ...shadow, transform: "translate(-50%, -50%)", backgroundColor: "rgba(70,30,22,0.38)" }}
        />
      ))}

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
        src={img("vanity_div.webp")}
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
        src={img("coat_hanger.webp")}
        alt="Coat hanger"
        position={{ top: "30%", left: "25%" }}
        width={getResponsiveSize("8%")}
        height={getResponsiveSize("8%")}
        route="/coat-hanger"
        disabled={true}
      />

        {/* Center dress (Gallery). The box height matches the artwork so the whole dress is clickable */}
      <ClickableItem
        label="Gallery"
        description="Signature looks and transformations."
        src={img("center_mannequin.webp")}
        alt="Pink layered gown on dress form"
        position={{ top: "52.6%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height={getResponsiveSize("60.2%")}
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
        src={img("bouquet.webp")}
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
        src={img("side_mannequins.webp")}
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
        src={img("cabinet.webp")}
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
        src={img("sofa.webp")}
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
        src={img("chair.svg")}
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
        src={img("rug.svg")}
        alt="Rug with hidden treasures"
        position={{ top: "91.6%", topMobile: "88.6%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height={getResponsiveSize("16.4%")}
        route="/contact"
        zIndex={5}
        showPageTooltip={true}
      />

       {/* Notification */}
       <Notification 
        elementToClick="different items" 
        contentToView="my life"
      />

      </FixedDesignScene>
  );
};

export default MakeoverRoom;
