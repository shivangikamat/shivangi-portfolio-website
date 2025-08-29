import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";
import Notification from "@/components/ui/notification";

const Extracurriculars = () => {
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

  type Position = { top?: string; left?: string; right?: string; bottom?: string; transform?: boolean };
  type Entry = {
    title: string;
    content: string;
  };

  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/Content/Extracurriculars.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load Extracurriculars.json: ${res.status}`);
        const data: Entry[] = await res.json();
        if (isMounted) setEntries(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (isMounted) setEntries([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const layoutConfig: Record<string, { label: string; src: string; alt: string; position: Position; width: string; height: string; zIndex?: number; imageFolder: string }>
    = {
    "Writing & Creative Work": {
      label: "Writing & Creative Work",
      src: "/lovable-uploads/extracurricular_shelf/writing.svg",
      alt: "Writing",
      position: { top: "27%", right: "6%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "writing"
    },
    "Chess": {
      label: "Chess",
      src: "/lovable-uploads/extracurricular_shelf/chess.svg",
      alt: "Chess",
      position: { top: "10%", left: "63%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "chess"
    },
    "Basketball": {
      label: "Basketball",
      src: "/lovable-uploads/extracurricular_shelf/basketball.svg",
      alt: "Basketball",
      position: { top: "14%", left: "25.5%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "basketball"
    },
    "Cooking": {
      label: "Cooking",
      src: "/lovable-uploads/extracurricular_shelf/cooking.svg",
      alt: "Cooking",
      position: { bottom: "18%", right: "11%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "cooking"
    },
    "Debate": {
      label: "Debate",
      src: "/lovable-uploads/extracurricular_shelf/debate.svg",
      alt: "Debate",
      position: { top: "29%", left: "17.5%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "debate"
    },
    "Crafts & Creativity": {
      label: "Crafts & Creativity",
      src: "/lovable-uploads/extracurricular_shelf/crafts.svg",
      alt: "Crafts",
      position: { top: "45%", right: "6.5%", transform: true },
      width: "13%",
      height: "13%",
      zIndex: 20,
      imageFolder: "crafts"
    },
    "Travelling": {
      label: "Travel",
      src: "/lovable-uploads/extracurricular_shelf/travel.svg",
      alt: "Travel",
      position: { top: "25%", left: "46.5%", transform: true },
      width: "11%",
      height: "11%",
      zIndex: 20,
      imageFolder: "travelling"
    },
    "Hiking": {
      label: "Hiking",
      src: "/lovable-uploads/extracurricular_shelf/hiking.svg",
      alt: "Hiking",
      position: { top: "47%", left: "57.5%", transform: true },
      width: "12%",
      height: "12%",
      zIndex: 20,
      imageFolder: "hiking"
    },
    "Leadership & Social Impact": {
      label: "Leadership & Social Impact",
      src: "/lovable-uploads/extracurricular_shelf/company.svg",
      alt: "Leadership & Social Impact",
      position: { bottom: "32%", left: "19.5%", transform: true },
      width: "13%",
      height: "13%",
      zIndex: 20,
      imageFolder: "leadership"
    },
    "Achievements & Awards": {
      label: "Achievements & Awards",
      src: "/lovable-uploads/extracurricular_shelf/trophy.svg",
      alt: "Achievements & Awards",
      position: { top: "67%", left: "38%", transform: true },
      width: "11%",
      height: "11%",
      zIndex: 20,
      imageFolder: "awards"
    }
  };

  const buildDescription = (entry: Entry): string => {
    if (entry.content && entry.content.length > 0) {
      return entry.content;
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-[#5B4444]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>

          <div className="text-center">
              <h1 className="mb-4 heading-font text-white">My Extracurriculars</h1>
          </div>

          <div className="relative flex justify-center mb-12 z-[10] top-[10%] w-full h-full">
            <div className="w-full h-[90%]">
              <img 
                src="/lovable-uploads/shelf.svg" 
                alt="Extracurriculars Page"
                className="w-full h-[90%]"
              />
              
              {/* Clickable Extracurricular Items positioned over the shelf */}
              <div className="absolute top-0 left-0 w-full h-full">
                {entries.map((entry) => {
                  const cfg = layoutConfig[entry.title];
                  if (!cfg) return null;
                  return (
                    <PopupItem
                      key={entry.title}
                      label={cfg.label}
                      src={cfg.src}
                      alt={cfg.alt}
                      position={cfg.position}
                      width={cfg.width}
                      height={cfg.height}
                      description={entry.content}
                      onOpenPopup={() => openPopup({
                        title: entry.title,
                        description: buildDescription(entry),
                        imageFolder: cfg.imageFolder,
                        imageAlt: cfg.alt
                      })}
                      zIndex={cfg.zIndex}
                    />
                  );
                })}
              </div>
            </div>
          </div>

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
        elementToClick="shelf items" 
        contentToView="extracurricular activities and achievements"
      />
    </div>
  );
};

export default Extracurriculars;
