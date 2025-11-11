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
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%]">
                    <div className="flex items-center">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/60 to-blue-300/40" />
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-300/60" />
                    </div>
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
