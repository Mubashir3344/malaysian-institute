import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            Ready to get <em className="italic">certified</em>?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact SREC for certification programs, institutional training, 
            or ethics consulting inquiries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background p-8 border border-border text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-serif text-lg mb-2">Dean's Office</h3>
              <a 
                href="mailto:dean@srec-edu.org" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                dean@srec-edu.org
              </a>
              <p className="text-xs text-muted-foreground mt-2">Program & Student Inquiries</p>
            </div>
            <div className="bg-background p-8 border border-border text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-serif text-lg mb-2">Board Secretariat</h3>
              <a 
                href="mailto:board@srec-edu.org" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                board@srec-edu.org
              </a>
              <p className="text-xs text-muted-foreground mt-2">Partnerships & Institutional</p>
            </div>
            <div className="bg-background p-8 border border-border text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-serif text-lg mb-2">Registered Office</h3>
              <div className="text-sm text-muted-foreground">
                7 Temasek Boulevard, #12-07<br />
                Suntec Tower One, Singapore 038987
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 text-center">
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>7 Temasek Boulevard, #12-07, Suntec Tower One, Singapore 038987</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
