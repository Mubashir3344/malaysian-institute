import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, GraduationCap, Award, Briefcase, Languages, Cpu, Network } from "lucide-react";

const programmes = {
  preparatory: [
    {
      title: "Foundation in Business Studies",
      description: "Prepare for diploma-level studies with essential academic skills, English proficiency, and foundational business concepts.",
      duration: "3 months",
      icon: BookOpen,
    },
    {
      title: "Academic English Programme",
      description: "Develop English language skills required for higher education and professional communication.",
      duration: "6 months",
      icon: Languages,
    },
  ],
  diploma: [
    {
      title: "Diploma in Business Administration",
      description: "Comprehensive programme covering management principles, marketing fundamentals, financial accounting, and business communication.",
      duration: "12 months",
      icon: Briefcase,
    },
    {
      title: "Diploma in Logistics Management",
      description: "Specialized training in supply chain management, warehouse operations, and international trade logistics.",
      duration: "12 months",
      icon: Network,
    },
    {
      title: "Diploma in Microelectronics",
      description: "Technical programme focusing on electronic systems, circuit design, and semiconductor fundamentals.",
      duration: "12 months",
      icon: Cpu,
    },
  ],
  higherDiploma: [
    {
      title: "Higher Diploma in Business Leadership",
      description: "Advanced programme developing strategic thinking, organizational leadership, and executive management skills.",
      duration: "18 months",
      icon: Award,
    },
  ],
  specialized: [
    {
      title: "Accounting & Big Data Analytics",
      description: "Combine traditional accounting principles with modern data analytics, covering financial reporting and business intelligence.",
      duration: "12 months",
      icon: Cpu,
    },
    {
      title: "Network & New Media",
      description: "Digital communications, social media management, content creation, and network administration skills.",
      duration: "12 months",
      icon: Network,
    },
    {
      title: "HSK Chinese Language Programme",
      description: "Structured Chinese language courses aligned with HSK standards from beginner to advanced levels.",
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
              <Badge variant="secondary" className="mb-4">Academic Programmes</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Our Programmes
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Explore our range of CPE-registered courses designed to equip you with 
                practical skills and knowledge for your professional journey.
              </p>
            </div>
          </div>
        </section>

        {/* Preparatory Courses */}
        <section id="preparatory" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Foundation Level</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Preparatory Courses</h2>
              <p className="text-muted-foreground mt-2">Build your academic foundation for diploma programmes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmes.preparatory.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Diploma Programmes */}
        <section id="diploma" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Diploma Level</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Diploma Programmes</h2>
              <p className="text-muted-foreground mt-2">Comprehensive programmes in Business, Logistics, and Microelectronics.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.diploma.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Higher Diplomas */}
        <section id="higher-diploma" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Advanced Level</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Higher Diplomas</h2>
              <p className="text-muted-foreground mt-2">Advanced business leadership and management education.</p>
            </div>
            <div className="max-w-lg">
              {programmes.higherDiploma.map((programme, index) => (
                <ProgrammeCard key={programme.title} programme={programme} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Tracks */}
        <section id="specialized" className="py-20 bg-usc-cream">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Badge variant="outline" className="mb-2">Specialized</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground">Specialized Tracks</h2>
              <p className="text-muted-foreground mt-2">Focused programmes in Accounting, Big Data, New Media, and Languages.</p>
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
