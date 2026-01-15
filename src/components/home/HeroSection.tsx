import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            Teaching & Certification Body for Research Ethics
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight mb-8">
            We certify researchers through <em className="italic">structured integrity</em> coursework
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            The Singapore Research Ethics Council (SREC) provides comprehensive ethics 
            certification programs for researchers, academics, and institutions committed 
            to upholding the highest standards of scholarly integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/programs" className="inline-flex items-center gap-2">
                Explore Certification Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-foreground">
              <Link to="/ethics">
                Our Ethics Framework
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
