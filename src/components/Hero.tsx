import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90 z-10" />
        <img src={heroBg} alt="AI-powered insurance verification" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 py-3 mb-8 animate-fade-in shadow-lg hover:bg-white/25 transition-all hover:scale-105">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-base font-semibold">SOC2 & HIPAA Compliant</span>
          </div>
        </div>
        
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] backdrop-blur-xl bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.15)_50%,_transparent_100%)] p-12 mb-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">Save 200+ Hours Monthly on Insurance Verification With AI</h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in">Our AI agent calls your patients' insurances to verify eligibility and covering details, saving you time and money

          </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" variant="outline" className="border-2 border-white text-black bg-white hover:bg-white/90 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">Get started</a>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>30+ Clinics Trust Us</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>99.9% Accuracy Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Setup in Minutes</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>;
};
export default Hero;