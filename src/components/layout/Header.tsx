import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Certification Programs", href: "/programs" },
    { name: "Ethics & Integrity", href: "/ethics" },
    { name: "Resources", href: "/resources" },
    { name: "Services", href: "/services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading tracking-tight font-bold">SREC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/student-portal" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Student Login
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-foreground hover:bg-foreground hover:text-background">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium py-2 transition-colors hover:text-muted-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-2 space-y-4">
                <Link
                  to="/student-portal"
                  className="flex items-center gap-2 text-lg font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <GraduationCap className="w-5 h-5" />
                  Student Portal
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
