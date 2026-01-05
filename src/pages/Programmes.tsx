import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Microscope, Award, Briefcase, Languages, Cpu, Network } from "lucide-react";

const programmes = {
  preparatory: [
    {
      title: "Research Methodology Foundations",
      description: "Prepare for advanced research with essential academic skills, research methods, and foundational scientific concepts.",
      duration: "3 months",
      icon: BookOpen,
    },
    {
      title: "Scientific Writing Programme",
      description: "Develop academic writing skills required for research publications and professional scientific communication.",
      duration: "6 months",
      icon: Languages,
    },
  ],
  diploma: [
    {
      title: "Research in Business Innovation",
      description: "Comprehensive programme covering business research principles, market analysis, and innovation methodologies.",
      duration: "12 months",
      icon: Briefcase,
    },
    {
      title: "Research in Technology Systems",
      description: "Specialized research training in technology systems, digital transformation, and emerging tech applications.",
      duration: "12 months",
      icon: Network,
    },
    {
      title: "Research in Applied Sciences",
      description: "Technical research programme focusing on applied sciences, experimental design, and practical applications.",
      duration: "12 months",
      icon: Cpu,
    },
  ],
  higherDiploma: [
    {
      title: "Advanced Research Leadership",
      description: "Advanced programme developing research leadership, strategic thinking, and research team management skills.",
      duration: "18 months",
      icon: Award,
    },
  ],
  specialized: [
    {
      title: "Data Science & AI Research",
      description: "Combine traditional research principles with modern AI and data analytics, covering machine learning and business intelligence.",
      duration: "12 months",
      icon: Cpu,
    },
    {
      title: "Digital Innovation Research",
      description: "Digital communications, emerging technologies, content creation, and network research methodologies.",
      duration: "12 months",
      icon: Network,
    },
    {
      title: "Cross-Cultural Research Programme",
      description: "Structured research programmes focused on cross-cultural studies and international research collaboration.",
      duration: "6-12 months",
      icon: Languages,
    },
  ],
};

const ProgrammeCard = ({ programme, index }: { programme: typeof programmes.preparatory[0]; index: number }) => (
  <Card className="bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
    <CardHeader>
      <div className="w-14 h-14 rounded-xl bg-usc-sky flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <programme.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
        {programme.title}
      </CardTitle>
      <CardDescription className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        Duration: {programme.duration}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {programme.description}
      </p>
      <Button variant="gold" className="w-full" asChild>
        <Link to="/contact">
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const Programmes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Research Programmes</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Our Research Areas
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Explore our range of research programmes designed to equip you with 
                cutting-edge skills and knowledge for your research journey.
              </p>
            </div>
          </div>
        </section>

        {/* Research Foundations */}
        <section id="preparatory" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Foundation Level</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Research Foundations</h2>
              <p className="text-muted-foreground mt-2">Build your research foundation for advanced programmes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmes.preparatory.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Research Programmes */}
        <section id="diploma" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Core Research</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Research Programmes</h2>
              <p className="text-muted-foreground mt-2">Comprehensive programmes in Business, Technology, and Applied Sciences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.diploma.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Research */}
        <section id="higher-diploma" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Advanced Level</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Advanced Research</h2>
              <p className="text-muted-foreground mt-2">Advanced research leadership and management programmes.</p>
            </div>
            <div className="max-w-lg">
              {programmes.higherDiploma.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Research */}
        <section id="specialized" className="py-20 bg-usc-cream">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Specialized</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Specialized Research</h2>
              <p className="text-muted-foreground mt-2">Focused programmes in Data Science, AI, Digital Innovation, and Cross-Cultural Studies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.specialized.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programmes;