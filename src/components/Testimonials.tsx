import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "This platform has transformed our practice. We've cut verification time by 90% and our billing accuracy has never been better.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Owner, Bright Smile Dental",
    rating: 5
  },
  {
    quote: "The ROI was immediate. Within the first month, we recovered the cost in reduced administrative overhead alone.",
    author: "Marcus Johnson",
    role: "Office Manager, Coastal Dental Group",
    rating: 5
  },
  {
    quote: "Security was our biggest concern, but the SOC2 and HIPAA compliance gave us complete peace of mind.",
    author: "Dr. Emily Chen",
    role: "Chief Dental Officer, Family Dental Care",
    rating: 5
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by Leading Dental Practices
          </h2>
          <p className="text-xl text-muted-foreground">
            Join 30+ clinics already saving time and money
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-blue-100 font-serif leading-none">"</div>
              
              <div className="flex gap-0.5 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                ))}
              </div>
              
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed italic relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="border-t border-gray-200 pt-6 relative z-10">
                <p className="font-bold text-foreground mb-1">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
