import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-usc-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">USC</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">United Seas College</h3>
                <p className="text-xs text-primary-foreground/70">Pte. Ltd.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A CPE-registered Private Education Institution dedicated to lifelong skills development for the betterment of society.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
              <span>UEN: 202008816N</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">About Us</Link>
              <Link to="/programmes" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Our Programmes</Link>
              <Link to="/student-support" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Student Support</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Contact Us</Link>
            </nav>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Programmes</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/programmes#preparatory" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Preparatory Courses</Link>
              <Link to="/programmes#diploma" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Diploma Programmes</Link>
              <Link to="/programmes#higher-diploma" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Higher Diplomas</Link>
              <Link to="/programmes#specialized" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Specialized Tracks</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  91 Bencoolen Street, #09-02,<br />
                  Sunshine Plaza, Singapore 189652
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+6560150851" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  (+65) 6015-0851
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:admin@usc.edu.sg" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  admin@usc.edu.sg
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 United Seas College Pte. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/pdpa" className="hover:text-accent transition-colors">PDPA Policy</Link>
              <Link to="/dispute-resolution" className="hover:text-accent transition-colors">Dispute Resolution</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
