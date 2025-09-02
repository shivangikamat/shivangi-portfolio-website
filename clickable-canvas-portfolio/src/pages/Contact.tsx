import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, User, Linkedin, Instagram } from "lucide-react";
import FixedDesignScene from "@/components/FixedDesignScene";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        // Close popup after successful submission
        setTimeout(() => {
          setShowFormPopup(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Audio functionality
  useEffect(() => {
    // Create audio element for telephone ring
    const audio = new Audio('/sounds/telephone-ring.mp3');
    audio.volume = 0.3;
    audio.preload = 'auto'; // Preload the audio
    
    // Add event listeners for debugging
    audio.addEventListener('loadstart', () => console.log('Audio loading started'));
    audio.addEventListener('canplay', () => console.log('Audio can play'));
    audio.addEventListener('error', (e) => console.error('Audio error:', e));
    
    audioRef.current = audio;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const enableAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
        setAudioEnabled(true);
        console.log('Audio enabled successfully');
      }).catch(err => {
        console.error('Failed to enable audio:', err);
      });
    }
  };

  const disableAudio = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioEnabled(false);
    console.log('Audio disabled');
  };

  const handleTelephoneHover = () => {
    if (!audioEnabled) {
      console.log('Audio not enabled yet, skipping...');
      return;
    }
    
    console.log('Telephone hovered, attempting to play audio...');
    if (audioRef.current) {
      console.log('Audio element found, playing...');
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
          console.log('Audio played successfully');
          // Stop audio after 5 seconds
          setTimeout(() => {
            if (audioRef.current && !audioRef.current.paused) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              console.log('Audio stopped after 5 seconds');
            }
          }, 5000);
        })
        .catch(err => {
          console.error('Audio play failed:', err);
        });
    } else {
      console.log('Audio element not found');
    }
  };

  const handleTelephoneClick = () => {
    setShowFormPopup(true);
    setSubmitStatus('idle');
  };

  const closeFormPopup = () => {
    setShowFormPopup(false);
    setSubmitStatus('idle');
  };

  return (
    <FixedDesignScene backgroundColor="#F2C6B8">
      {/* Back button positioned absolutely */}
      <Link to="/" className="absolute top-4 left-4 z-[100]">
        <Button variant="ghost" className="bg-white/80 backdrop-blur-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Room
        </Button>
      </Link>

      {/* Audio Toggle Button - Top Right */}
      <div className="absolute top-4 right-4 z-[100]">
        <Button
          onClick={audioEnabled ? disableAudio : enableAudio}
          variant={audioEnabled ? "default" : "outline"}
          size="sm"
          className={`backdrop-blur-sm transition-all duration-200 ${
            audioEnabled 
              ? 'bg-green-500 hover:bg-pink-400 text-white' 
              : 'bg-white/80 hover:bg-white/90 text-gray-700'
          }`}
        >
          {audioEnabled ? (
            <>
              <span className="mr-2">🔊</span>
              Sound On
            </>
          ) : (
            <>
              <span className="mr-2">🔇</span>
              Sound Off
            </>
          )}
        </Button>
      </div>

      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-[100]">
        <h1 className="text-8xl heading-font text-center">Contact</h1>
      </div>

      {/* Main Content Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-between gap-16">
        
        {/* Left Side - Telebook with Contact Details */}
        <div className="relative w-[75%] h-[75%]">
          <img 
            src="/images/contact_page/telebook.svg" 
            alt="Telebook"
            className="w-full h-full object-contain"
          />
          
          {/* Contact Details Overlay on Telebook */}
          <div className="absolute top-[20%] right-[17%] transform w-100 text-center">
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-medium text-2xl">Email</p>
                  <p className="text-muted-foreground text-2xl">kamatpr5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <User className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-medium text-2xl">Name</p>
                  <p className="text-muted-foreground text-2xl">Shivangi Kamat</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Linkedin className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-medium text-2xl">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/shivangikamat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-2xl"
                  >
                    linkedin.com/in/shivangikamat
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Instagram className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-medium text-2xl">Instagram</p>
                  <a 
                    href="https://www.instagram.com/shivangi_kamat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-2xl"
                  >
                    @shivangi_kamat
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Right Side - Clickable Telephone */}
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%]">
          <button
            onClick={handleTelephoneClick}
            onMouseEnter={handleTelephoneHover}
            className="w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 hover:animate-shake transition-all duration-200"
            title="Click to open contact form"
          >
            <img 
              src="/images/contact_page/telephone.svg" 
              alt="Telephone"
              className="w-full h-full object-contain select-none pointer-events-none"
            />
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-0 transition-opacity duration-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-primary font-semibold">Click to Get in touch</p>
              </div>
            </div>

            {/* Page Tooltip */}
            <div className="absolute min-w-max w-[12vw] h-[5vh] -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-5000">
              <div className="tooltip-font flex items-center justify-center bg-white h-full text-black text-center px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                Get in touch
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Email Form Popup Modal */}
      {showFormPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-semibold">Send a Message</h2>
              <button
                onClick={closeFormPopup}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close form"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell me about your vision and what you'd like to achieve..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </FixedDesignScene>
  );
};

export default Contact;
