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
    <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold font-sf-pro border border-blue-200 shadow-[0_8px_16px_-4px_rgba(59,130,246,0.4)]">
            Loved by dental professionals
          </div>
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
              className={`group relative p-8 bg-white border-2 border-transparent hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Gradient background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top accent bar with gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Stars with special styling */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="relative">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  </div>
                ))}
              </div>
              
              {/* Large decorative quote */}
              <div className="absolute top-4 right-4 text-7xl text-blue-500/10 font-serif leading-none group-hover:text-blue-500/20 transition-colors">"</div>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed font-medium relative z-10 flex-grow">
                {testimonial.quote}
              </p>
              
              <div className="relative z-10 flex items-center gap-4 mt-auto">
                {/* Avatar placeholder with gradient */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
