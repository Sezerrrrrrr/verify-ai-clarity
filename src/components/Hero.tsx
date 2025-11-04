import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2, Play, Pause } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
import audioFile from "@/assets/audio-insurance-verification.mp4";
import featuredLogo from "@/assets/featured-logo.png";
import bbbLogo from "@/assets/bbb-logo.png";
import { useState, useRef } from "react";
const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI-powered insurance verification in dental clinic" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-8 animate-fade-in shadow-lg hover:bg-white/25 transition-all hover:scale-105" style={{
          animationDelay: '100ms'
        }}>
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
            <span className="text-xs md:text-sm font-semibold">SOC2 & HIPAA Compliant</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            Save 200+ Hours Monthly on Insurance Verification With AI
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in" style={{
          animationDelay: '300ms'
        }}>Our AI agent calls your patients' insurances to verify eligibility and coverage details, saving you time and money - for $2/successful verification</p>
          
          {/* Audio Player */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{
          animationDelay: '400ms'
        }}>
            <Button size="icon" onClick={toggleAudio} className="h-12 w-12 rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-all">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <audio ref={audioRef} src={audioFile} onEnded={() => setIsPlaying(false)} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in px-4" style={{
          animationDelay: '500ms'
        }}>
            <Button size="lg" variant="outline" className="border-2 border-white text-black bg-white hover:bg-white/90 text-base md:text-lg px-4 md:px-6 py-6 max-w-xs mx-auto sm:mx-0" asChild>
              <a href="https://calendly.com/sezer123/call" target="_blank" rel="noopener noreferrer">See how it works</a>
            </Button>
          </div>

          {/* Featured on */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mb-4 md:mb-12 animate-fade-in" style={{
          animationDelay: '600ms'
        }}>
            <img src={featuredLogo} alt="Featured on USA Today" className="h-12 md:h-20" />
            <img src={bbbLogo} alt="BBB Accredited Business" className="h-12 md:h-20" />
          </div>
          
          {/* Social proof */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 text-white/80 animate-fade-in" style={{
          animationDelay: '700ms'
        }}>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-base">30+ Clinics Trust Us</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              
              
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-base">No contract commitment </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      
    </section>;
};
export default Hero;