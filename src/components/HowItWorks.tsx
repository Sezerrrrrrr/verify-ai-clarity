import { Upload, Brain, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Upload,
    title: "Connect Your System",
    description: "Seamlessly integrate with your existing practice management software in minutes."
  },
  {
    icon: Brain,
    title: "AI Processes Everything",
    description: "Our AI agent automatically verifies insurance eligibility, benefits, and coverage details."
  },
  {
    icon: CheckCircle,
    title: "Get Instant Results",
    description: "Receive accurate verification reports in seconds, ready for billing and patient communication."
  }
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Simple Setup, Powerful Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three easy steps. No complex training required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`relative text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Step number badge */}
                <div className="inline-block mb-6 px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-semibold font-sf-pro border border-blue-200 shadow-[0_4px_12px_-2px_rgba(59,130,246,0.3)]">
                  Step {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-background/80 via-primary/5 to-background/60 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/20 border border-primary/20">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-40" />
                  <Icon className="w-10 h-10 text-primary relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Modern connector arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[55%] w-[90%]">
                    <div className="h-[2px] bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-primary/30 -translate-x-1" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
