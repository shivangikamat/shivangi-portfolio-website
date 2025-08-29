import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gift, Sparkles, Star } from "lucide-react";

const RugPull = () => {
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
              <h1 className="text-4xl font-bold mb-4">Reveal Treasures</h1>
              <p className="text-xl text-muted-foreground">
                Discover hidden gems and exclusive offers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/rug.svg" 
                  alt="Rug with hidden treasures"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Exclusive Offers & Specials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Uncover special deals, seasonal promotions, and exclusive 
                    packages that are only available to those who know where to look.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Gift className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">New Client Special</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      20% off your first styling session
                    </p>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Seasonal Packages</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Limited-time bundles for special occasions
                    </p>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Star className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">VIP Membership</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Exclusive access to premium services and priority booking
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This treasure trove is being filled with amazing offers. 
                    Check back regularly for new deals and exclusive promotions 
                    that will help you look and feel your best.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button>Claim Your Offer</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline">View All Services</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RugPull;
