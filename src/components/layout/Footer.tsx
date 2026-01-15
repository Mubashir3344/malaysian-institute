import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-heading tracking-tight font-bold">
              SREC
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed text-sm">
              Singapore Research Ethics Council — Certifying researchers through 
              structured integrity coursework and professional ethics training.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                About SREC
              </Link>
              <Link to="/programs" className="text-background/80 hover:text-background transition-colors">
                Certification Programs
              </Link>
              <Link to="/ethics" className="text-background/80 hover:text-background transition-colors">
                Ethics & Integrity
              </Link>
              <Link to="/resources" className="text-background/80 hover:text-background transition-colors">
                Resources
              </Link>
              <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                Services
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-background/80">
              <div>
                <p className="text-background/50 text-xs mb-1">Dean's Office</p>
                <a href="mailto:dean@srec-edu.org" className="hover:text-background transition-colors">
                  dean@srec-edu.org
                </a>
              </div>
              <div>
                <p className="text-background/50 text-xs mb-1">Board Secretariat</p>
                <a href="mailto:board@srec-edu.org" className="hover:text-background transition-colors">
                  board@srec-edu.org
                </a>
              </div>
              <div>
                <p className="text-background/50 text-xs mb-1">General Inquiries</p>
                <Link to="/contact" className="hover:text-background transition-colors">
                  Contact form
                </Link>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Registered Office
            </h4>
            <div className="text-sm text-background/80">
              <p>Singapore Research Ethics Council</p>
              <p className="text-background/60 mt-2">
                7 Temasek Boulevard, #12-07<br />
                Suntec Tower One, Singapore 038987
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Singapore Research Ethics Council. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Terms of Use
            </Link>
            <Link to="/student-portal" className="hover:text-background transition-colors">
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
