import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationProps {
  elementToClick: string;
  contentToView: string;
  onDismiss?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ 
  elementToClick, 
  contentToView, 
  onDismiss 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed max-w-md w-auto min-w-[280px] top-4 right-4 z-50 animate-in slide-in-from-right duration-300 mx-4">
      <div className="bg-[#F9B5B5] backdrop-blur-sm border-[3px] border-[#FFDCCC] rounded-xl shadow-lg p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-lg md:text-lg text-white leading-relaxed">
              Try clicking the <span className="font-semibold text-black">{elementToClick}</span> to view {contentToView}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="flex-shrink-0 h-6 w-6 p-0 hover:bg-gray-100 ml-2"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
