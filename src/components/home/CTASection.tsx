import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-usc-navy rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Ready to Start Your Research Journey?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Take the first step towards advancing your research career with our world-class 
                programmes. Our team is here to guide you through the application process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/programmes">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">
                    <MessageCircle className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-primary-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+6531064527" 
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors p-3 rounded-lg hover:bg-primary-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">Call us at</div>
                    <div className="font-medium text-primary-foreground">(+65) 6531-064527</div>
                  </div>
                </a>
                <a 
                  href="mailto:admin@usri.edu.sg" 
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors p-3 rounded-lg hover:bg-primary-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">Email us at</div>
                    <div className="font-medium text-primary-foreground">admin@usri.edu.sg</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;