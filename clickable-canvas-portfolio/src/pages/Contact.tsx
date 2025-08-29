import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Contact</h1>
              <p className="text-xl text-muted-foreground">
                Hit me up to have a chat!!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-large">Email</p>
                      <p className="text-muted-foreground">kamatpr5@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-large">Gossip girl?</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-large">Currently wandering in</p>
                      <p className="text-muted-foreground">National University Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell me about your vision and what you'd like to achieve..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
