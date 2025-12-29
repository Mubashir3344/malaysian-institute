import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, GraduationCap, Building } from "lucide-react";

const teamMembers = [
  {
    name: "Academic Director",
    role: "Programme Leadership",
    description: "CPE-registered educator with extensive experience in curriculum development and academic administration.",
  },
  {
    name: "Senior Lecturer",
    role: "Business Studies",
    description: "Industry professional with qualifications exceeding course levels and practical business experience.",
  },
  {
    name: "Language Instructor",
    role: "HSK Programme",
    description: "Certified Chinese language educator with expertise in HSK preparation and cultural studies.",
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
              <Badge variant="secondary" className="mb-4">About USC</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Empowering Through Education
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                United Seas College is a CPE-registered Private Education Institution 
                committed to providing quality, accessible education since 2020.
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
                    Lifelong skills development for the betterment of society. We are dedicated 
                    to providing client-focused, affordable education that equips individuals 
                    with practical skills for personal and professional growth.
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
                    To be a leading provider of accessible, quality education in Singapore, 
                    empowering learners from all backgrounds to achieve their educational 
                    and career aspirations through innovative learning approaches.
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
                United Seas College is registered with the Committee for Private Education 
                under the Private Education Act 2009.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Full Name</h3>
                  <p className="text-sm text-muted-foreground">United Seas College Pte. Ltd.</p>
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
                  <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Established</h3>
                  <p className="text-sm text-muted-foreground">March 17, 2020</p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-soft text-center">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Status</h3>
                  <p className="text-sm text-muted-foreground">Active / CPE Registered</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Academic Team
              </h2>
              <p className="text-muted-foreground">
                All our teachers are CPE-registered with qualifications at least one level 
                higher than the courses they teach.
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
