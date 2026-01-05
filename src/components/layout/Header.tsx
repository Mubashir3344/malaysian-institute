import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const programmes = [
  { title: "Research Foundations", description: "Foundational research methodology and skills", href: "/programmes#preparatory" },
  { title: "Research Programmes", description: "Business, Technology, and Applied Sciences", href: "/programmes#diploma" },
  { title: "Advanced Research", description: "Advanced research and leadership programmes", href: "/programmes#higher-diploma" },
  { title: "Specialized Research", description: "Data Analytics, AI, Network Technologies, Languages", href: "/programmes#specialized" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main navigation - Combined header */}
      <nav className="bg-usc-navy shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                <span className="text-accent-foreground font-serif font-bold text-xl">USRI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-lg text-primary-foreground leading-tight">United Seas Research Institute</h1>
                <p className="text-xs text-primary-foreground/70">Premier Research Institution</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/" className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-primary-foreground/90 hover:text-accent bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Research
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-card">
                        {programmes.map((programme) => (
                          <li key={programme.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={programme.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                              >
                                <div className="text-sm font-medium leading-none text-foreground">{programme.title}</div>
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
                      <Link to="/student-support" className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                        Support
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Contact info */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-primary-foreground/20">
                <a href="tel:+6531064527" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  <span className="hidden xl:inline">(+65) 6531-064527</span>
                </a>
                <a href="mailto:admin@usri.edu.sg" className="hidden xl:flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <Button variant="hero" size="sm" className="ml-4" asChild>
                <Link to="/programmes">Join Research</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary-foreground/10 bg-usc-navy animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block px-4 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/programmes" className="block px-4 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Research
              </Link>
              <Link to="/student-support" className="block px-4 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Support
              </Link>
              <Link to="/contact" className="block px-4 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 border-t border-primary-foreground/10 space-y-2">
                <a href="tel:+6531064527" className="flex items-center gap-2 px-4 py-2 text-primary-foreground/80">
                  <Phone className="h-4 w-4" />
                  <span>(+65) 6531-064527</span>
                </a>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/programmes" onClick={() => setMobileMenuOpen(false)}>Join Our Research</Link>
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