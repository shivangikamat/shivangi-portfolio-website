import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";
import Notification from "@/components/ui/notification";

const Projects = () => {
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

  type ProjectEntry = {
    title: string;
    content: string;
    date?: string;
  };

  const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/Content/Projects.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load Projects.json: ${res.status}`);
        const data: ProjectEntry[] = await res.json();
        if (isMounted) setProjectEntries(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (isMounted) setProjectEntries([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

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

  const buildDescription = (entry: ProjectEntry | undefined): string => {
    if (!entry) return "";
    const dateLine = entry.date ? `${entry.date}\n\n` : "";
    return `${dateLine}${entry.content}`;
  };

  const projectIcons = [
    {
      label: "Project 1",
      src: "/lovable-uploads/project-icons/vscode.svg",
      alt: "jumping_jack",
      position: { top: "11%", left: "19%" },
      width: "7%",
      height: "auto",
      zIndex: 20,
      imageFolder: "jumping_jack",
    },
    {
      label: "Project 2",
      src: "/lovable-uploads/project-icons/chrome.svg",
      alt: "ny_academy",
      position: { top: "22%", left: "19%" },
      width: "7%",
      height: "auto",
      zIndex: 20,
      imageFolder: "ny_academy",
    },
    {
      label: "Project 3",
      src: "/lovable-uploads/project-icons/gmail.svg",
      alt: "sudoku_solver",
      position: { top: "33%", left: "19%" },
      width: "7%",
      height: "auto",
      zIndex: 20,
      imageFolder: "sudoku_solver",
    },
    {
      label: "Project 4",
      src: "/lovable-uploads/project-icons/youtube.svg",
      alt: "space_competition",
      position: { top: "44%", left: "19%" },
      width: "7%",
      height: "auto",
      zIndex: 20,
      imageFolder: "space_competition",
    }
  ];

  return (
    <div className="min-h-screen bg-[#A87E5E]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>

          <div className="text-center">
              <h1 className="mb-4 heading-font">My Projects</h1>
          </div>

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#75482B",
              height: "32%"
            }} 
          />

          <div className="relative flex justify-center mb-12 z-[10] top-[20%]">
            <div className="relative w-[85%]">
              <img 
                src="/lovable-uploads/desktop.svg" 
                alt="Projects Page"
                className="w-full h-auto"
              />
              
              {/* Clickable project icons positioned over the desktop */}
              <div className="absolute top-0 left-0 w-full h-full">
                {projectIcons.map((icon, idx) => {
                  const entry = projectEntries[idx];
                  const title = entry ? entry.title : icon.label;
                  const description = buildDescription(entry);
                  
                  return (
                    <PopupItem
                      key={icon.label}
                      label={icon.label}
                      src={icon.src}
                      alt={icon.alt}
                      position={icon.position}
                      width={icon.width}
                      height={icon.height}
                      description={entry ? entry.title : undefined}
                      onOpenPopup={() => openPopup({
                        title,
                        description,
                        imageFolder: icon.imageFolder,
                        imageAlt: icon.alt
                      })}
                      zIndex={icon.zIndex}
                      disabled={!entry}
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
        elementToClick="desktop icons" 
        contentToView="detailed project information"
      />
    </div>
  );
};

export default Projects;
