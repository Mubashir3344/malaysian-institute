import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Briefcase, Cpu, Network, Brain, LineChart } from "lucide-react";
import researchDataScience from "@/assets/research-data-science.jpg";
import researchBusiness from "@/assets/research-business.jpg";
import researchAppliedScience from "@/assets/research-applied-science.jpg";

const researchAreas = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advancing artificial intelligence research with focus on practical applications in healthcare, finance, and automation.",
    duration: "Ongoing",
    href: "/programmes#specialized",
    image: researchDataScience,
  },
  {
    icon: Briefcase,
    title: "Business Innovation",
    description: "Research in strategic management, entrepreneurship, and emerging business models for the digital economy.",
    duration: "12 months",
    href: "/programmes#diploma",
    image: researchBusiness,
  },
  {
    icon: Microscope,
    title: "Applied Sciences",
    description: "Experimental research in materials science, biotechnology, and sustainable technologies.",
    duration: "18 months",
    href: "/programmes#higher-diploma",
    image: researchAppliedScience,
  },
];

const additionalAreas = [
  {
    icon: Cpu,
    title: "Data Analytics",
    description: "Big data research combining statistical analysis with modern computational methods.",
    href: "/programmes#specialized",
  },
  {
    icon: Network,
    title: "Digital Networks",
    description: "Research in network technologies, cybersecurity, and digital communications.",
    href: "/programmes#specialized",
  },
  {
    icon: LineChart,
    title: "Economic Research",
    description: "Analysis of market trends, economic policies, and financial systems.",
    href: "/programmes#diploma",
  },
];

const ProgrammesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Focus</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Research Areas
          </h2>
          <p className="text-muted-foreground">
            Explore our diverse research programmes designed to drive innovation 
            and create real-world impact across multiple disciplines.
          </p>
        </div>

        {/* Featured Research Areas with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card 
              key={area.title} 
              className="group bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden border-none"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <area.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Duration: {area.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <Button variant="link" className="px-0 text-primary" asChild>
                  <Link to={area.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalAreas.map((area) => (
            <Card 
              key={area.title} 
              className="group bg-muted/50 hover:bg-card shadow-soft hover:shadow-card transition-all duration-300 border-none"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <area.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="navy" size="lg" asChild>
            <Link to="/programmes">
              View All Research Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;