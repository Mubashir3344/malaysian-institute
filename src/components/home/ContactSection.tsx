import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            Connect with <em className="italic">GIAR</em>
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Interested in our programs, research collaborations, or institutional partnerships? 
            Get in touch with our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-8 border border-border">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="font-serif text-lg mb-3">Programs & Admissions</h3>
              <a 
                href="mailto:admissions@giar-research.my" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                admissions@giar-research.my
              </a>
            </div>
            <div className="bg-background p-8 border border-border">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="font-serif text-lg mb-3">Research & Collaboration</h3>
              <a 
                href="mailto:research@giar-research.my" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                research@giar-research.my
              </a>
            </div>
            <div className="bg-background p-8 border border-border">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="font-serif text-lg mb-3">Main Office</h3>
              <div className="text-sm text-muted-foreground leading-relaxed">
                Level 8, Menara Sunway<br />
                Kuala Lumpur, Malaysia
              </div>
            </div>
          </div>

          <div className="bg-foreground text-background p-12 rounded text-center mb-12">
            <p className="mb-6 leading-relaxed">
              Have questions about our programs, research centers, or how we can support your institution?
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 text-sm font-medium hover:bg-secondary hover:text-foreground transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="text-center border-t border-border pt-8">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span>Level 8, Menara Sunway, Jalan Lagoon Timur, Bandar Sunway, 47500 Subang Jaya, Selangor, Malaysia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
