import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import featuredLogo from "@/assets/featured-logo.png";
import bbbLogo from "@/assets/bbb-logo.png";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="features">
          <Benefits />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        
        {/* Featured Logos */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <img src={featuredLogo} alt="Featured on USA Today" className="h-16 md:h-24 opacity-80 hover:opacity-100 transition-opacity" />
              <img src={bbbLogo} alt="BBB Accredited Business" className="h-16 md:h-24 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>;
};
export default Index;