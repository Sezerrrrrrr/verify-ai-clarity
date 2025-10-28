import { Clock, DollarSign, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Save 200+ Hours Monthly",
    description: "Automate the tedious insurance verification process and free up your staff for patient care.",
    stat: "95% time reduction"
  },
  {
    icon: DollarSign,
    title: "Maximize Revenue",
    description: "Eliminate billing errors and ensure accurate claims submission the first time, every time.",
    stat: "40% fewer denials"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC2-certified and HIPAA-compliant infrastructure protecting your patient data 24/7.",
    stat: "100% compliant"
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Get real-time insurance eligibility and benefits information in minutes, not hours.",
    stat: "<10 minutes checks"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Modern Dental Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time on manual insurance checks. Let AI handle it while you focus on what matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-[var(--gradient-card)] border-border hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-block bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full text-sm">
                  {benefit.stat}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
