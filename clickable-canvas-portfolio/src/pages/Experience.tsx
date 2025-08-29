import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";
import Notification from "@/components/ui/notification";
import FixedDesignScene from "@/components/FixedDesignScene";

const Experience = () => {
  const [scale, setScale] = useState(1);
  const [popupData, setPopupData] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    imageFolder: string;
    imageAlt: string;
  }>({
    isOpen: false,
    title: "",
    description: "",
    imageFolder: "",
    imageAlt: ""
  });

  type Position = { top?: string; left?: string; right?: string; bottom?: string };
  type ExperienceEntry = {
    title: string;
    content: string;
    date?: string;
  };

  const [experiences, setExperiences] = useState<ExperienceEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Base design resolution (keeps relative layout consistent)
  const BASE_WIDTH = 1670;
  const BASE_HEIGHT = 1000;

  // Fetch experiences content
  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/Content/Experience.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load Experience.json: ${res.status}`);
        const data: ExperienceEntry[] = await res.json();
        if (isMounted) setExperiences(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        if (isMounted) setExperiences([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const layout = [
    {
      label: "Black Dress",
      src: "/images/wardrobe/dress_black.svg",
      alt: "Black Dress",
      position: { top: "13%", left: "0" } as Position,
      width: "28%",
      height: "50%",
    },
    {
      label: "White Dress",
      src: "/images/wardrobe/dress_white.svg",
      alt: "White Dress",
      position: { top: "16%", left: "11%" } as Position,
      width: "28%",
      height: "50%",
    },
    {
      label: "Grey Coat",
      src: "/images/wardrobe/coat_grey.svg",
      alt: "Grey Coat",
      position: { top: "10%", right: "7.5%" } as Position,
      width: "28%",
      height: "50%",
    },
    {
      label: "Blue Coat",
      src: "/images/wardrobe/coat_blue.svg",
      alt: "Blue Coat",
      position: { top: "12%", right: "-1%" } as Position,
      width: "25%",
      height: "50%",
    }
  ];

  const buildDescription = (entry: ExperienceEntry | undefined): string => {
    if (!entry) return "";
    const dateLine = entry.date ? `${entry.date}\n\n` : "";
    return `${dateLine}${entry.content}`;
  };

  const openPopup = (data: {
    title: string;
    description: string;
    imageFolder: string;
    imageAlt: string;
  }) => {
    setPopupData({
      isOpen: true,
      ...data
    });
  };

  const closePopup = () => {
    setPopupData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <FixedDesignScene backgroundColor="#F2C6B8" baseWidth={BASE_WIDTH} baseHeight={BASE_HEIGHT}>
      {/* Back button positioned absolutely */}
      <Link to="/" className="absolute top-4 left-4 z-[100]">
        <Button variant="ghost" className="bg-white/80 backdrop-blur-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Room
        </Button>
      </Link>

      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-[100]">
        <h1 className="heading-font text-center">My Experience</h1>
      </div>

      {/* Floor mat */}
      <div 
        className="absolute bottom-0 left-0 w-full" 
        style={{ 
          backgroundColor: "#A46352",
          height: "32%"
        }} 
      />
        
      {/* Main Wardrobe Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px]">
        <img 
          src="/images/wardrobe.svg" 
          alt="Wardrobe"
          className="w-full h-auto"
        />
        
        {/* Clickable Coats and Dresses positioned over the wardrobe */}
        <div className="absolute top-0 left-0 w-full h-full">
          {layout.map((item, idx) => {
            const exp = experiences[idx];
            const title = exp ? exp.title : item.label;
            const description = buildDescription(exp);
            return (
              <PopupItem
                key={item.label}
                label={item.label}
                src={item.src}
                alt={item.alt}
                position={item.position}
                width={item.width}
                height={item.height}
                description={exp ? exp.title : undefined}
                onOpenPopup={() => openPopup({
                  title,
                  description,
                  imageFolder: "wardrobe",
                  imageAlt: item.alt
                })}
                zIndex={20}
                disabled={!exp}
              />
            );
          })}
        </div>
      </div>
      
      {/* Popup Component */}
      <Popup
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        description={popupData.description}
        imageFolder={popupData.imageFolder}
        imageAlt={popupData.imageAlt}
      />
      
      {/* Notification */}
      <Notification 
        elementToClick="clothing items on the hangers" 
        contentToView="my work experience"
      />
    </FixedDesignScene>
  );
};

export default Experience;
