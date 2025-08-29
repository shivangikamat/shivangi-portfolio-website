import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      rating: 5,
      content: "I was so nervous about my wedding day look, but working with this amazing stylist completely transformed my confidence. The attention to detail was incredible, and I felt absolutely beautiful. My husband's reaction when he first saw me was priceless!",
      image: "/lovable-uploads/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Professional",
      rating: 5,
      content: "As someone who was always unsure about my style, the personal styling session was a game-changer. I now have a wardrobe that makes me feel confident and professional. The ongoing coaching has helped me maintain this new sense of style.",
      image: "/lovable-uploads/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Event Planner",
      rating: 5,
      content: "I've worked with many stylists for corporate events, but this one stands out for their professionalism and creativity. They transformed our entire team's look for a major presentation, and the feedback was overwhelmingly positive.",
      image: "/lovable-uploads/placeholder.svg"
    },
    {
      name: "David Thompson",
      role: "Actor",
      rating: 5,
      content: "For my headshot session, I needed to look my absolute best. The makeup and styling were flawless, and the photographer was amazed at how camera-ready I was. The session was comfortable and professional throughout.",
      image: "/lovable-uploads/placeholder.svg"
    },
    {
      name: "Lisa Park",
      role: "Fashion Blogger",
      rating: 5,
      content: "I've collaborated with many beauty professionals, but this stylist's attention to detail and understanding of current trends is unmatched. They helped me create content that resonated with my audience and boosted my engagement significantly.",
      image: "/lovable-uploads/placeholder.svg"
    },
    {
      name: "Jennifer Williams",
      role: "Real Estate Agent",
      rating: 5,
      content: "In my line of work, first impressions are everything. The styling consultation helped me develop a professional yet approachable look that has definitely contributed to my success. I feel more confident in every client meeting.",
      image: "/lovable-uploads/placeholder.svg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
              <p className="text-xl text-muted-foreground">
                Kind words from clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-primary/30" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-card border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Join Our Happy Clients</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't just take our word for it - experience the transformation yourself. 
                Every client's journey is unique, and I'm committed to making yours 
                just as successful and satisfying as these testimonials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button>View Services</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Book Consultation</Button>
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground">
                Ready to create your own success story?
              </p>
              <Link to="/contact">
                <Button className="mt-4">Get Started Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
