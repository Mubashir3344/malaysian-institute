import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Global Institute of Applied Research
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.2] tracking-tight mb-8">
            Transform Knowledge into <em className="italic">Impact</em>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
            At GIAR, we bridge the gap between rigorous research and real-world application. 
            We investigate digital transformation, data ethics, and institutional excellence while 
            developing the next generation of research leaders across Southeast Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base font-medium">
              <Link to="/programs" className="inline-flex items-center gap-2">
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/research" className="inline-flex items-center gap-2">
                View Research <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
