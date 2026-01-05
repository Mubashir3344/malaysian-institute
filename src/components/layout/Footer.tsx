import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-serif tracking-tight font-bold">
              SIAA
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Singapore Institute of Academic Analytics — Your trusted partner in 
              academic research, integrity assurance, and professional training.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/work" className="text-background/80 hover:text-background transition-colors">
                Research
              </Link>
              <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-background/80 hover:text-background transition-colors">
                Insights
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-background/80">
              <a href="mailto:contact@siaa-sg.org" className="hover:text-background transition-colors">
                contact@siaa-sg.org
              </a>
              <a href="tel:+6531064527" className="hover:text-background transition-colors">
                +65 3106 4527
              </a>
              <p>Singapore</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
