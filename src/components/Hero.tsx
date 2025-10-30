import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2, Play, Pause } from "lucide-react";
import heroBg from "@/assets/hero-bg-ai-voice.png";
import audioFile from "@/assets/audio-insurance-verification.mp4";
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
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI-powered insurance verification in dental clinic" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 py-3 mb-8 animate-fade-in shadow-lg hover:bg-white/25 transition-all hover:scale-105">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-base font-semibold">SOC2 & HIPAA Compliant</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Save 200+ Hours Monthly on Insurance Verification With AI
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">Our AI agent calls your patients' insurances to verify eligibility and covering details, saving you time and money - for $2/successful verification</p>
          
          {/* Audio Player */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Button size="icon" onClick={toggleAudio} className="h-16 w-16 rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-all">
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <audio ref={audioRef} src={audioFile} onEnded={() => setIsPlaying(false)} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" variant="outline" className="border-2 border-white text-black bg-white hover:bg-white/90 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">Talk to the CEO</a>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>30+ Clinics Trust Us</span>
            </div>
            <div className="flex items-center gap-2">
              
              
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Ultra-Fast Setup</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>;
};
export default Hero;