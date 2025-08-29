import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  author?: string;
  date?: string;
  readTime?: string;
}

const BlogPopup: React.FC<BlogPopupProps> = ({
  isOpen,
  onClose,
  title,
  content,
  author = "Shivangi Kamat",
  date = "2025",
  readTime = "5 min read"
}) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Blog Popup Content - Letter from Envelope Design */}
      <div className="relative bg-[#FFE9C9] rounded-[25px] shadow-2xl max-w-3xl w-full mx-4 min-h-[80vh] max-h-[90vh] overflow-y-auto" 
           style={{
             backgroundSize: '100% 100%',
           }}> 

        {/* Content */}
        <div className="p-8 h-full flex flex-col min-h-[75vh]">
          {/* Header Section */}
          <div className="mb-2 relative">
            {/* Top Section with Title, Metadata, and Hearts */}
            <div className="flex justify-between items-start mb-2">
              {/* Left Side - Title and Metadata */}
              <div className="flex-1">
                {/* Title */}
                <h1 className="text-3xl font-bold text-[#775320] mb-2 leading-tight" 
                    style={{ 
                      textShadow: '1px 1px 2px rgba(74, 74, 74, 0.1)',
                      lineHeight: '1.7',
                      fontSize: '2rem',
                    }}>
                  {title}
                </h1>
                
                {/* Meta Information */}
                <div className="text-sm text-[#8A8A8A]">
                  By {author} • {date} • {readTime}
                </div>
              </div>
              
              {/* Right Side - Decorative Hearts */}
              <div className="flex space-x-1 ml-4">
                <img src="/lovable-uploads/blog-hearts.svg" alt="Hearts" width={80} height={80} />
              </div>
            </div>
            
            {/* Divider Line */}
            <div className="w-full h-2 bg-[#FFD79F] mb-2"></div>
          </div>

          {/* Blog Content */}
          <div className="bg-transparent flex-1">
            <div className="prose prose-lg max-w-none">
              <div className="text-base text-[#775320] leading-relaxed space-y-4" 
                   style={{ 
                     lineHeight: '1.8',
                     fontSize: '1.1rem',
                     fontWeight: '500',
                   }}>
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-2 text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="w-full h-2 bg-[#FFD79F] mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPopup;
