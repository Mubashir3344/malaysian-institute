import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Users, Award, FileText } from "lucide-react";
import heroImage from "@/assets/hero-research.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Research laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-usc-navy/95 via-usc-navy/85 to-usc-navy/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">Premier Research Institution in Singapore</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Pioneering{" "}
              <span className="text-accent">Innovation</span> Through Research
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              United Seas Research Institute drives breakthrough discoveries 
              in technology, business, and applied sciences. Join our world-class 
              team shaping the future through innovative research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/programmes">
                  Explore Research Areas
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">About USRI</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Microscope className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">10+</div>
                <div className="text-xs text-primary-foreground/70">Research Areas</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-xs text-primary-foreground/70">Researchers</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">100+</div>
                <div className="text-xs text-primary-foreground/70">Publications</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">2020</div>
                <div className="text-xs text-primary-foreground/70">Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;