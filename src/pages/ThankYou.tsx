import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import heroBg from "@/assets/hero-bg-ai-voice.png";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    (window as any).fbq('init', '1124728156513673');
    (window as any).fbq('track', 'PageView');
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
