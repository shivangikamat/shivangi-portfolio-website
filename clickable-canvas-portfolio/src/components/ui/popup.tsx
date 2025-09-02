import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageFolder: string; // Folder identifier (e.g., "wardrobe", "extracurricular_shelf", "blog")
  imageAlt: string;
}

// Predefined image mappings for different folders
const IMAGE_FOLDERS: Record<string, string[]> = {
  extracurricular_shelf: [
    "/images/extracurricular_shelf/writing.svg",
    "/images/extracurricular_shelf/trophy.svg",
    "/images/extracurricular_shelf/travel.svg",
    "/images/extracurricular_shelf/hiking.svg",
    "/images/extracurricular_shelf/debate.svg",
    "/images/extracurricular_shelf/crafts.svg",
    "/images/extracurricular_shelf/cooking.svg",
    "/images/extracurricular_shelf/company.svg",
    "/images/extracurricular_shelf/chess.svg",
    "/images/extracurricular_shelf/basketball.svg"
  ],
  blog: [
    "/images/blog-page.svg",
    "/images/blog-icon.svg"
  ],
  dummy: [
    "/images/room_bg.svg",
    "/images/clock.svg",
    "/images/rug.svg",
    "/images/chair.svg",
    "/images/coat_hanger.svg"
  ],
  // Extracurriculars galleries
  basketball: [
    "/images/extracurriculars/basketball/garden.jpeg",
    "/images/extracurriculars/basketball/IMG_1017.jpeg",
    "/images/extracurriculars/basketball/IMG_1402.jpeg",
    "/images/extracurriculars/basketball/IMG_20180810_094954.jpg"
  ],
  debate: [
    "/images/extracurriculars/debate/national_camp.png"
  ],
  chess: [
    "/images/extracurriculars/chess/IMG_9528.jpeg"
  ],
  leadership: [
    "/images/extracurriculars/leadership/1.png",
    "/images/extracurriculars/leadership/2.png",
    "/images/extracurriculars/leadership/3.png",
    "/images/extracurriculars/leadership/4.png",
    "/images/extracurriculars/leadership/5.png"
  ],
  cooking: [
    "/images/extracurriculars/cooking/1.png",
    "/images/extracurriculars/cooking/2.png",
    "/images/extracurriculars/cooking/3.png",
    "/images/extracurriculars/cooking/4.png"
  ],
  crafts: [
    "/images/extracurriculars/crafts/1.png",
    "/images/extracurriculars/crafts/2.png",
    "/images/extracurriculars/crafts/3.png"
  ],
  hiking: [
    "/images/extracurriculars/hiking/hiking_1.jpeg"
  ],
  travelling: [
    "/images/extracurriculars/travelling/1.png",
    "/images/extracurriculars/travelling/2.png",
    "/images/extracurriculars/travelling/3.png",
    "/images/extracurriculars/travelling/4.png"
  ],
  awards: [
    "/images/extracurriculars/awards/edinburgh_award.png"
  ],
  writing: [],
  jumping_jack: [
    "/images/projects/jumpingjack/1.png",
    "/images/projects/jumpingjack/2.png",
  ],
  space_competition: [
    "/images/projects/spacecompetition/Experiment.png",
    "/images/projects/spacecompetition/teamSolaris.png",
  ],
  ny_academy: [
    "/images/projects/NewYorkAcademyofSciences/1.png",
    "/images/projects/NewYorkAcademyofSciences/2.png",
  ]
};

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageFolder,
  imageAlt
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load images from the folder
  useEffect(() => {
    if (isOpen && imageFolder) {
      const folderImages = IMAGE_FOLDERS[imageFolder] || [];
      setImages(folderImages);
      setCurrentImageIndex(0); // Reset to first image when popup opens
    }
  }, [isOpen, imageFolder]);

  // Auto-play carousel
  useEffect(() => {
    if (!isOpen || !autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentImageIndex((prev) => 
          prev === images.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsTransitioning(false), 300);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isOpen, autoPlay, images.length, isTransitioning]);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .image-transition {
            animation: fadeIn 0.3s ease-out;
          }
          
          .image-slide-left {
            animation: slideInLeft 0.3s ease-out;
          }
          
          .image-slide-right {
            animation: slideInRight 0.3s ease-out;
          }
        `}
      </style>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-[var(--colour-primary)] border-[10px] border-white rounded-[40px] shadow-2xl max-w-2xl w-full mx-4 min-h-[70vh] max-h-[90vh] overflow-y-auto"> 
        {/* Close Button */} 
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Content */}
        <div className="p-8 h-full flex flex-col min-h-[65vh]">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="relative mb-6 flex-[3] flex flex-col justify-evenly">
              <div className="flex justify-center items-center">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`${imageAlt} ${currentImageIndex + 1}`}
                  className={`w-auto min-h-[20vh] max-h-[50vh] object-contain rounded-[20px] border-white border-[5px] ${
                    isTransitioning ? 'image-transition' : ''
                  }`}
                />
              </div>
              
              {/* Carousel Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  
                  {/* Auto-play toggle and Image Indicators */}
                  <div className="flex justify-center items-center mt-4 space-x-4">
                    {/* Auto-play toggle */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAutoPlay(!autoPlay)}
                      className="bg-[#946355] hover:bg-white rounded-full p-2"
                      title={autoPlay ? "Pause auto-play" : "Start auto-play"}
                    >
                      {autoPlay ? <Pause className="h-4 w-4 text-gray-300" /> : <Play className="h-4 w-4 text-black" />}
                    </Button>
                    
                    {/* Image Indicators */}
                    <div className="flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex 
                              ? 'bg-[#946355]' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {title}
          </h2>

          {/* Description Text Block */}
          <div className="bg-gray-50 rounded-[20px] p-6 flex-1 opacity-80">
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Popup;
