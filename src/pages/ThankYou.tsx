import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import heroBg from "@/assets/hero-bg-ai-voice.png";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Meta Pixel Code
    const w = window as any;
    
    if (w.fbq) return;
    
    const fbq: any = function(...args: any[]) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args);
      } else {
        fbq.queue.push(args);
      }
    };
    
    if (!w._fbq) w._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    
    w.fbq = fbq;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
    
    // Initialize and track
    w.fbq('init', '1124728156513673');
    w.fbq('track', 'PageView');
    
    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=1124728156513673&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="w-full px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="DentalVerify AI" className="h-10" />
            </div>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">
                  Talk to the CEO
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Thank you for booking a meeting with us!
            </h1>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>
    </div>
  );
};

export default ThankYou;
