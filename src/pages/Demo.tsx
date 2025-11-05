import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg-new.png";

const Demo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="AI-powered insurance verification demo" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 relative z-20 py-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-white leading-tight">
                See a demo of the AI agent getting full coverage details
              </h1>
              
              {/* Loom Video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://www.loom.com/embed/1d7097f42a7c4cf5b10c560fe6f03fad?sid=a8f5e5e8-5a8a-4f9a-9f5a-5e5e5e5e5e5e"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  title="AI Agent Demo Video"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
