import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-heading tracking-tight font-bold">
              GIAR
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed text-sm">
              Global Institute of Applied Research — Advancing knowledge through rigorous, ethical research and professional development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-background/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                About GIAR
              </Link>
              <Link to="/faculty" className="text-background/80 hover:text-background transition-colors">
                Faculty & Staff
              </Link>
              <Link to="/programs" className="text-background/80 hover:text-background transition-colors">
                Programs
              </Link>
              <Link to="/ethics" className="text-background/80 hover:text-background transition-colors">
                Academic Integrity
              </Link>
              <Link to="/news" className="text-background/80 hover:text-background transition-colors">
                News & Events
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
                <p className="text-background/50 text-xs mb-1">Director's Office</p>
                <a href="mailto:director@giar.my" className="hover:text-background transition-colors">
                  director@giar.my
                </a>
              </div>
              <div>
                <p className="text-background/50 text-xs mb-1">Admissions</p>
                <a href="mailto:admissions@giar.my" className="hover:text-background transition-colors">
                  admissions@giar.my
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
              <p>Global Institute of Applied Research (GIAR)</p>
              <p className="text-background/60 mt-2">
                Level 8, Menara Sunway<br />
                Jalan Lagoon Timur<br />
                Bandar Sunway, 47500<br />
                Subang Jaya, Selangor, Malaysia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Global Institute of Applied Research (GIAR). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Terms of Use
            </Link>
            <Link to="/code-of-conduct" className="hover:text-background transition-colors">
              Code of Conduct
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
