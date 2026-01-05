import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-heading tracking-tight font-bold">
              SIAA
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed text-sm">
              Singapore Institute of Academic Analytics — Boutique Academic Research & 
              Integrity Hub. Empowering scholarly excellence through data-driven analytics.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                About SIAA
              </Link>
              <Link to="/research-areas" className="text-background/80 hover:text-background transition-colors">
                Research Areas
              </Link>
              <Link to="/academic-integrity" className="text-background/80 hover:text-background transition-colors">
                Academic Integrity
              </Link>
              <Link to="/publications" className="text-background/80 hover:text-background transition-colors">
                Publications
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
                <p className="text-background/50 text-xs mb-1">Registrar</p>
                <a href="mailto:registrar@siaa-sg.org" className="hover:text-background transition-colors">
                  registrar@siaa-sg.org
                </a>
              </div>
              <div>
                <p className="text-background/50 text-xs mb-1">Director</p>
                <a href="mailto:director@siaa-sg.org" className="hover:text-background transition-colors">
                  director@siaa-sg.org
                </a>
              </div>
              <div>
                <p className="text-background/50 text-xs mb-1">Institutional Inquiries</p>
                <a href="tel:+6531064527" className="hover:text-background transition-colors">
                  +65 3106 4527
                </a>
                <p className="text-background/50 text-xs mt-1">Mon–Fri, 9 AM – 5 PM (SGT)</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Registered Office
            </h4>
            <div className="text-sm text-background/80">
              <p>Singapore Institute of Academic Analytics</p>
              <p className="text-background/60 mt-2">
                1 Fusionopolis Place, #03-01<br />
                Galaxis, Singapore 138522
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Singapore Institute of Academic Analytics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Terms of Use
            </Link>
            <Link to="/member-portal" className="hover:text-background transition-colors">
              Member Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;