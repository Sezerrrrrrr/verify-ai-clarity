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
                {/* Icon container with step number */}
                <div className="relative mx-auto mb-8">
                  {/* Step number above icon */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-3 py-1 rounded-full bg-white text-blue-600 text-xs font-bold font-sf-pro border-2 border-blue-100 shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon container */}
                  <div className="relative w-24 h-24 mx-auto rounded-3xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
                    <Icon className="w-11 h-11 text-blue-600" strokeWidth={2.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
                
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[58%] w-[84%]">
                    <svg className="w-full h-6" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 0.4 }} />
                          <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 0.1 }} />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="10" x2="94" y2="10" stroke={`url(#gradient-${index})`} strokeWidth="2" />
                      <polygon points="94,6 94,14 100,10" fill="#93c5fd" opacity="0.3" />
                    </svg>
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
