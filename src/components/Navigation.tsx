import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="w-full px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="DentalVerify AI" className="h-10" />
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">
                Talk to a human
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;