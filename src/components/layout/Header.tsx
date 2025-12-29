import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const programmes = [
  { title: "Preparatory Courses", description: "Foundation level studies for academic readiness", href: "/programmes#preparatory" },
  { title: "Diploma Programmes", description: "Business, Logistics, and Microelectronics", href: "/programmes#diploma" },
  { title: "Higher Diplomas", description: "Advanced business leadership courses", href: "/programmes#higher-diploma" },
  { title: "Specialized Tracks", description: "Accounting, Big Data, Network & New Media, HSK", href: "/programmes#specialized" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-usc-navy text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+6560150851" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>(+65) 6015-0851</span>
            </a>
            <a href="mailto:admin@usc.edu.sg" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>admin@usc.edu.sg</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70 text-xs">CPE Registered PEI</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
                <span className="text-primary-foreground font-serif font-bold text-xl">USC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-lg text-foreground leading-tight">United Seas College</h1>
                <p className="text-xs text-muted-foreground">Pte. Ltd.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium">Programmes</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {programmes.map((programme) => (
                          <li key={programme.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={programme.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{programme.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {programme.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/student-support" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Student Support
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Contact Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button variant="gold" size="sm" className="ml-4" asChild>
                <Link to="/programmes">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/programmes" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Programmes
              </Link>
              <Link to="/student-support" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Student Support
              </Link>
              <Link to="/contact" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
              <div className="pt-2">
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/programmes" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
