import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    title: "Connect Your System",
    description: "Seamlessly integrate with your existing practice management software in minutes."
  },
  {
    title: "AI Processes Everything",
    description: "Our AI agent automatically verifies insurance eligibility, benefits, and coverage details."
  },
  {
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
        
        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            return (
              <div 
                key={index}
                className={`relative text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Large step number */}
                <div className="relative mx-auto mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center border border-blue-200/50 shadow-lg shadow-blue-500/10">
                  <span className="text-4xl font-bold text-blue-600">{index + 1}</span>
                  
                  {/* Arrow connector - positioned next to number */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-[calc(100vw/3-120px)] max-w-[280px] px-8">
                      <div className="flex items-center">
                        <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300" />
                        <svg className="w-4 h-4 text-blue-400 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3l7 7-7 7V3z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
