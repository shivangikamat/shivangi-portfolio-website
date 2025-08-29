import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import BlogPopup from "@/components/ui/blog-popup";

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
    author: "Ritvik Gupta",
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
    <div className="min-h-screen bg-[#F2C6B8]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
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
                src="/lovable-uploads/blog-page.svg" 
                alt="Blog Page"
                className="w-full h-auto"
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
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 1"
                  position={{ top: "30%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Design Trends 2024",
                    content: "Exploring the latest design trends and how they're shaping the future of digital experiences. From minimalist aesthetics to bold color palettes, discover what's driving innovation in design.\n\nIn this comprehensive analysis, we'll dive deep into the emerging patterns that are defining the visual landscape of 2024. From the resurgence of retro aesthetics to the integration of AI-generated elements, designers are pushing boundaries in exciting new ways.\n\nThe minimalist movement continues to evolve, with designers finding innovative ways to communicate complex ideas through simple, elegant interfaces. Meanwhile, bold color palettes are making a strong comeback, reflecting society's desire for optimism and energy in digital spaces.\n\nAs we look toward the future, it's clear that successful design will be defined by its ability to balance aesthetics with functionality, creating experiences that are both beautiful and intuitive."
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 2"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 2"
                  position={{ top: "30%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Development Best Practices",
                    content: "A comprehensive guide to modern development practices, covering everything from code organization to performance optimization. Learn the techniques that make projects scalable and maintainable.\n\nIn today's fast-paced development environment, maintaining high code quality is more important than ever. This guide covers essential practices that every developer should master, from writing clean, readable code to implementing efficient testing strategies.\n\nWe'll explore advanced techniques for code organization, including modular architecture patterns and effective use of design principles. Performance optimization strategies will be discussed in detail, with practical examples of how to identify and resolve bottlenecks.\n\nThe guide also covers modern development workflows, including version control best practices, continuous integration, and deployment strategies that ensure reliable, maintainable codebases."
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 3"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 3"
                  position={{ top: "30%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Creative Process Deep Dive",
                    content: "Behind the scenes of my creative process - from initial concept to final execution. Discover how I approach problem-solving and bring ideas to life through design and development.\n\nEvery creative project begins with a spark of inspiration, but transforming that initial idea into a polished final product requires a systematic approach. In this deep dive, I'll share my personal methodology for navigating the creative process.\n\nFrom brainstorming sessions and mood boards to prototyping and iteration, each step plays a crucial role in bringing ideas to fruition. I'll discuss how I balance artistic vision with practical constraints, and how feedback loops help refine concepts into their best possible form.\n\nThe creative process isn't always linear, and learning to embrace uncertainty while maintaining focus is key to successful project delivery."
                  })}
                  zIndex={20}
                />
                
                {/* Row 2 */}
                <PopupItem
                  label="Blog Post 4"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 4"
                  position={{ top: "70%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "User Experience Fundamentals",
                    content: "Understanding the core principles of user experience design and how they impact user engagement. Learn how to create intuitive, accessible, and delightful digital experiences.\n\nIn today's fast-paced digital landscape, user experience (UX) is more important than ever. A well-designed interface not only enhances usability but also drives user engagement and satisfaction. In this comprehensive guide, we'll explore the fundamental principles of UX design, from understanding user needs to implementing effective design patterns.\n\nWe'll cover essential topics such as user research, information architecture, and interaction design. Practical examples will be provided to illustrate how these principles translate into real-world applications, helping you create interfaces that are both functional and delightful.\n\nBy mastering these fundamentals, you'll be able to build digital experiences that not only meet user needs but also exceed expectations, leading to increased engagement and loyalty."
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 5"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 5"
                  position={{ top: "70%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Project Showcase",
                    content: "A detailed look at some of my favorite projects, including the challenges faced, solutions implemented, and lessons learned. See how theory translates into practice.\n\nEvery project is a unique journey, filled with challenges and opportunities for growth. In this showcase, I'll share some of my favorite projects, highlighting the lessons learned and the lessons applied. From the initial concept to the final implementation, each project is a testament to the power of design and development.\n\nWe'll explore the challenges faced, the solutions implemented, and the lessons learned. From the initial concept to the final implementation, each project is a testament to the power of design and development.\n\nBy sharing these projects, I hope to inspire others to think creatively and build meaningful digital experiences."
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 6"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 6"
                  position={{ top: "70%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Future of Web Development",
                    content: "Exploring emerging technologies and trends that are shaping the future of web development. From AI integration to new frameworks, discover what's next in the digital landscape.\n\nAs we look toward the future, it's clear that successful design will be defined by its ability to balance aesthetics with functionality, creating experiences that are both beautiful and intuitive.\n\nThe minimalist movement continues to evolve, with designers finding innovative ways to communicate complex ideas through simple, elegant interfaces. Meanwhile, bold color palettes are making a strong comeback, reflecting society's desire for optimism and energy in digital spaces.\n\nAs we look toward the future, it's clear that successful design will be defined by its ability to balance aesthetics with functionality, creating experiences that are both beautiful and intuitive."
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
    </div>
  );
};

export default Blog;
