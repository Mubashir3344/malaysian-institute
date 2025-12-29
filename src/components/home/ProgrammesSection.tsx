import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Briefcase, TrendingUp, Languages, Cpu, Network } from "lucide-react";

const programmes = [
  {
    icon: BookOpen,
    title: "Preparatory Courses",
    description: "Foundation level studies designed to prepare students for diploma programmes with essential academic skills.",
    duration: "3-6 months",
    href: "/programmes#preparatory",
  },
  {
    icon: Briefcase,
    title: "Diploma in Business",
    description: "Comprehensive business education covering management, marketing, finance, and entrepreneurship fundamentals.",
    duration: "12 months",
    href: "/programmes#diploma",
  },
  {
    icon: TrendingUp,
    title: "Higher Diploma in Business Leadership",
    description: "Advanced programme focusing on strategic leadership, organizational management, and business development.",
    duration: "18 months",
    href: "/programmes#higher-diploma",
  },
  {
    icon: Languages,
    title: "HSK Language Programme",
    description: "Chinese language proficiency courses aligned with HSK standards for personal and professional growth.",
    duration: "6-12 months",
    href: "/programmes#specialized",
  },
  {
    icon: Cpu,
    title: "Accounting & Big Data",
    description: "Specialized track combining traditional accounting principles with modern data analytics skills.",
    duration: "12 months",
    href: "/programmes#specialized",
  },
  {
    icon: Network,
    title: "Network & New Media",
    description: "Digital communications and networking skills for the modern media landscape.",
    duration: "12 months",
    href: "/programmes#specialized",
  },
];

const ProgrammesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Academic Programmes
          </h2>
          <p className="text-muted-foreground">
            Explore our range of CPE-registered courses designed to equip you with 
            practical skills and knowledge for your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme, index) => (
            <Card 
              key={programme.title} 
              className="group bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-usc-sky flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <programme.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {programme.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Duration: {programme.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {programme.description}
                </p>
                <Button variant="link" className="px-0 text-primary" asChild>
                  <Link to={programme.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="navy" size="lg" asChild>
            <Link to="/programmes">
              View All Programmes
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
