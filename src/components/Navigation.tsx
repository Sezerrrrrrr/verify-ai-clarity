import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to hash on page load
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If we're on the homepage, just scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      navigate(`/#${sectionId}`);
    }
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="w-full px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="DentalVerify AI" className="h-10" />
          </a>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#features" 
              onClick={(e) => handleSectionClick(e, 'features')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="/#how-it-works" 
              onClick={(e) => handleSectionClick(e, 'how-it-works')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How It Works
            </a>
            <a 
              href="/#testimonials" 
              onClick={(e) => handleSectionClick(e, 'testimonials')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </a>
            <a 
              href="/#faq" 
              onClick={(e) => handleSectionClick(e, 'faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </a>
            <a href="/calculator" className="text-foreground hover:text-primary transition-colors font-medium">
              ROI Calculator
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/demo">
                See a video demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;