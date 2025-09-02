import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import BlogPopup from "@/components/ui/blog-popup";
import FixedDesignScene from "@/components/FixedDesignScene";

const Blog = () => {
  const [popupData, setPopupData] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
    author?: string;
    date?: string;
    readTime?: string;
  }>({
    isOpen: false,
    title: "",
    content: "",
    author: "Shivangi Kamat",
    date: "2024",
    readTime: "5 min read"
  });

  const openPopup = (data: {
    title: string;
    content: string;
    author?: string;
    date?: string;
    readTime?: string;
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
    <FixedDesignScene backgroundColor="#F2C6B8">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
        <Link to="/" className="absolute top-4 left-4 z-[100]">
          <Button variant="ghost" className="bg-white/80 backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Room
          </Button>
        </Link>

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#A46352",
              height: "32%"
            }} 
          />
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="mb-4 heading-font">About Me/ My Blog</h1>
              <p className="text-xl text-muted-foreground">
                Learn more about my story and approach
              </p>
            </div>
            
            <div className="relative flex justify-center mb-12 z-[10]">
              <img 
                src="/images/blog-page.svg" 
                alt="Blog Page"
                className="w-[120%] h-auto max-w-[1000px]"
                style={{
                  border: "5px solid white",
                  borderRadius: "28px"
                }}
              />
              
              {/* Clickable Blog Icons positioned over the blog page in a 3x2 grid */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Row 1 */}
                <PopupItem
                  label="Blog Post 1"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 1"
                  position={{ top: "30%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 2"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 2"
                  position={{ top: "30%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 3"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 3"
                  position={{ top: "30%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
                
                {/* Row 2 */}
                <PopupItem
                  label="Blog Post 4"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 4"
                  position={{ top: "70%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 5"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 5"
                  position={{ top: "70%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 6"
                  src="/images/blog-icon.svg"
                  alt="Blog Icon 6"
                  position={{ top: "70%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Coming soon",
                    content: "Coming soon"
                  })}
                  zIndex={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Popup Component */}
      <BlogPopup
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        content={popupData.content}
        author={popupData.author}
        date={popupData.date}
        readTime={popupData.readTime}
      />
    </FixedDesignScene>
  );
};

export default Blog;
