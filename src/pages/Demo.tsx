import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-dental-clinic.png";
const Demo = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="AI-powered insurance verification demo" className="w-full h-full object-cover" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 relative z-20 py-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">See a demo of the AI agent getting full coverage details over the phone</h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12">Automate every insurance verification call for just $2 per successful verification, saving your clinic over $5,000 each month in wasted staff time.</p>
              
              {/* Loom Video */}
              <div className="relative w-full mb-8" style={{
              paddingBottom: '56.25%'
            }}>
                <iframe src="https://www.loom.com/embed/1bc2960a63f44ee4b39d832ec7a25eb7" frameBorder="0" allowFullScreen className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl" title="AI Agent Demo Video" />
              </div>
              
              {/* CTA Button */}
              <Button size="lg" variant="outline" className="relative overflow-hidden border-2 border-white text-black bg-white hover:text-blue-500 hover:[text-shadow:0_0_20px_rgba(59,130,246,0.8)] hover:bg-white hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] text-base md:text-lg px-4 md:px-6 py-6 max-w-xs mx-auto sm:mx-0 shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000" asChild>
                <a href="https://calendly.com/sezer123/call" target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Demo;