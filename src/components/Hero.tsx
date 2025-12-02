import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg-dental-clinic.png";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI-powered insurance verification in dental clinic" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-8 animate-fade-in shadow-lg hover:bg-white/25 transition-all hover:scale-105 font-sf-pro" style={{
          animationDelay: '100ms'
        }}>
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
            <span className="text-xs md:text-sm font-semibold">SOC2 & HIPAA Compliant</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in font-recoleta" style={{
          animationDelay: '200ms'
        }}>Save 200+ Hours Monthly on Dental Insurance Verification With AI</h1>
          
          {/* Description */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in" style={{
          animationDelay: '300ms'
        }}>Our AI agent calls your patients' insurances to verify eligibility and coverage details, saving you time and money - for $2/successful verification</p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in px-4" style={{
          animationDelay: '500ms'
        }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="relative overflow-hidden border-2 border-white text-black bg-white hover:text-blue-500 hover:[text-shadow:0_0_20px_rgba(59,130,246,0.8)] hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] text-base md:text-lg px-4 md:px-6 py-6 max-w-xs mx-auto sm:mx-0 shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000" 
              asChild
            >
              <a href="/demo">See a video demo</a>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 text-white/80 animate-fade-in" style={{
          animationDelay: '700ms'
        }}>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-white" />
              <span className="text-xs md:text-base">300+ Clinics Trust Us</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              
              
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-white" />
              <span className="text-xs md:text-base">No contract commitment </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      
    </section>;
};
export default Hero;