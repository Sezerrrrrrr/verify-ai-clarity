import { Upload, Brain, CheckCircle } from "lucide-react";

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
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-[var(--shadow-glow)]">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="w-20 h-20 mx-auto mb-6 mt-8 rounded-2xl bg-[var(--gradient-hero)] flex items-center justify-center shadow-[var(--shadow-md)]">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent" />
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
