import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">Premier Research Institution</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Advancing Research at{" "}
            <span className="text-accent">United Seas Research Institute</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pioneering innovative research and scientific advancement for the betterment of society. 
            Join our world-class team driving breakthrough discoveries 
            across technology, business, and applied sciences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/programmes">
                Explore Research
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Learn About USRI</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 backdrop-blur-sm mx-auto mb-2">
                <Microscope className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">10+</div>
              <div className="text-sm text-primary-foreground/70">Research Areas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 backdrop-blur-sm mx-auto mb-2">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/70">Researchers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 backdrop-blur-sm mx-auto mb-2">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">2020</div>
              <div className="text-sm text-primary-foreground/70">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;