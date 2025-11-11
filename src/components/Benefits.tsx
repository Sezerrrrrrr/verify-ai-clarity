import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import iconTime from "@/assets/icon-time.svg";
import iconMoney from "@/assets/icon-money.svg";
import iconSecurity from "@/assets/icon-security.svg";
import iconZap from "@/assets/icon-zap.svg";
const benefits = [{
  icon: iconTime,
  title: "Save 200+ Hours Monthly",
  description: "Automate the tedious insurance verification process and free up your staff for patient care.",
  stat: "95% time reduction"
}, {
  icon: iconMoney,
  title: "Maximize Revenue",
  description: "Eliminate billing errors and ensure accurate claims submission the first time, every time.",
  stat: "40% fewer denials"
}, {
  icon: iconSecurity,
  title: "Enterprise-Grade Security",
  description: "SOC2-certified and HIPAA-compliant infrastructure protecting your patient data 24/7.",
  stat: "100% compliant"
}, {
  icon: iconZap,
  title: "Instant Verification",
  description: "Get real-time insurance eligibility and benefits information in minutes, not hours.",
  stat: "<10 minutes checks"
}];
const Benefits = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section className="py-24 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Modern Dental Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't let insurance carriers waste your time by keeping you on hold. Let AI handle it while you focus on patient relationship.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
          return <Card key={index} className={`p-8 bg-[var(--gradient-card)] border-border hover:shadow-[var(--shadow-xl)] transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
          }}>
                <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg shadow-primary/10 border border-primary/10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                  <img src={benefit.icon} alt="" className="w-8 h-8 relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-block bg-accent/10 text-accent font-semibold font-sf-pro px-3 py-1 rounded-full text-sm">
                  {benefit.stat}
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Benefits;