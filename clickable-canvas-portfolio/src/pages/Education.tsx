import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";
import Notification from "@/components/ui/notification";

const Education = () => {
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

  type EducationEntry = {
    title: string;
    content: string;
    date?: string;
  };

  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/Content/Education.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load Education.json: ${res.status}`);
        const data: EducationEntry[] = await res.json();
        if (isMounted) setEducationEntries(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (isMounted) setEducationEntries([]);
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

  const buildDescription = (entry: EducationEntry | undefined): string => {
    if (!entry) return "";
    const dateLine = entry.date ? `${entry.date}\n\n` : "";
    return `${dateLine}${entry.content}`;
  };

  const bookmarkLayout = [
    {
      label: "Education 1",
      position: { top: "7%", left: "17%" },
      width: "8%",
      height: "auto",
      zIndex: 20
    },
    {
      label: "Education 2", 
      position: { top: "7%", right: "15%" },
      width: "8%",
      height: "auto",
      zIndex: 20,
      flip: true
    },
    {
      label: "Education 3",
      position: { top: "7%", left: "35%" },
      width: "8%",
      height: "auto",
      zIndex: 20,
      flip: true
    },
    {
      label: "Education 4",
      position: { top: "7%", right: "33%" },
      width: "8%",
      height: "auto",
      zIndex: 20
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2C6B8]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8 flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 heading-font">Education History</h1>
            </div>
            <div className="relative flex justify-center mb-12 z-[10] top-[2%] min-w-[65vw] min-h-[50vh] w-full h-full">
              <div className="w-full h-full relative">
                <img 
                  src="/lovable-uploads/open-book.svg" 
                  alt="Education History"
                  className="w-full h-full"
                />
                
                {/* Clickable bookmarks */}
                {bookmarkLayout.map((bookmark, idx) => {
                  const entry = educationEntries[idx];
                  const title = entry ? entry.title : bookmark.label;
                  const description = buildDescription(entry);
                  
                  return (
                    <PopupItem
                      key={bookmark.label}
                      label={bookmark.label}
                      src="/lovable-uploads/bookmark.svg"
                      alt="Bookmark"
                      position={bookmark.position}
                      width={bookmark.width}
                      height={bookmark.height}
                      description={entry ? entry.title : undefined}
                      onOpenPopup={() => openPopup({
                        title,
                        description,
                        imageFolder: "", // No images for education popups
                        imageAlt: "Education"
                      })}
                      zIndex={bookmark.zIndex}
                      disabled={!entry}
                      flip={bookmark.flip}
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
        elementToClick="bookmarks" 
        contentToView="my education history"
      />
    </div>
  );
};

export default Education;
