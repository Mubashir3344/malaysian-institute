import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, Microscope, Building } from "lucide-react";

const teamMembers = [
  {
    name: "Research Director",
    role: "Research Leadership",
    description: "Distinguished scientist with extensive experience in research strategy and academic administration.",
  },
  {
    name: "Senior Research Fellow",
    role: "Technology & Innovation",
    description: "Industry expert with qualifications in advanced technology research and practical applications.",
  },
  {
    name: "Research Scientist",
    role: "Data & Analytics",
    description: "Specialist in data science and analytics with expertise in AI and machine learning research.",
  },
];

const About = () => {
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
              <Badge variant="secondary" className="mb-4">About USRI</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Advancing Knowledge Through Research
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                United Seas Research Institute is a premier research institution 
                committed to driving innovation and scientific advancement since 2020.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-usc-sky border-none shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To advance scientific knowledge and innovation for the betterment of society. 
                    We are dedicated to conducting groundbreaking research that addresses 
                    real-world challenges and drives meaningful impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-usc-cream border-none shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading research institution in Singapore and beyond, 
                    recognized for excellence in innovation, scientific discovery, 
                    and translating research into practical solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Institutional Details */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Institutional Information
              </h2>
              <p className="text-muted-foreground">
                United Seas Research Institute is a registered research institution 
                dedicated to advancing scientific knowledge and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Full Name</h3>
                  <p className="text-sm text-muted-foreground">United Seas Research Institute Pte. Ltd.</p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">UEN</h3>
                  <p className="text-sm text-muted-foreground">202008816N</p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Microscope className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Established</h3>
                  <p className="text-sm text-muted-foreground">March 17, 2020</p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Status</h3>
                  <p className="text-sm text-muted-foreground">Active Research Institution</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Research Team
              </h2>
              <p className="text-muted-foreground">
                Our team comprises distinguished researchers and scientists with 
                extensive expertise across multiple disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card shadow-soft hover:shadow-card transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-usc-sky mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;