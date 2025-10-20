import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CTA = () => {
  return <section className="py-24 relative overflow-hidden">
      
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Join 30+ dental clinics saving 200+ hours monthly. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform" asChild>
              <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/sezer-omnisales/call" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>
          
          <p className="text-white/70 text-sm">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>;
};
export default CTA;