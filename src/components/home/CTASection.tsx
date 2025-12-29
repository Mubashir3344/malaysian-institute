import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Take the first step towards advancing your career with our industry-relevant 
            programmes. Our admissions team is here to guide you through the enrollment process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/programmes">
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="h-5 w-5" />
                Contact Admissions
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Have questions? Call us at <a href="tel:+6560150851" className="text-accent hover:underline">(+65) 6015-0851</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
