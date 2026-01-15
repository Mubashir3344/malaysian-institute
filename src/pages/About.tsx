import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Julian Chen",
    role: "Chief Ethics Officer / Dean",
    bio: "With over 25 years in research ethics and academic leadership, Dr. Chen leads SREC's strategic vision and curriculum development for all certification programs.",
  },
  {
    name: "Prof. Michael Tan",
    role: "Director of Certification Programs",
    bio: "Prof. Tan oversees the design and delivery of all SREC certification coursework, ensuring programs meet international standards.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Institutional Training",
    bio: "Dr. Sharma leads SREC's institutional partnerships, developing customized ethics training programs for universities and research organizations.",
  },
  {
    name: "Dr. James Wong",
    role: "Senior Ethics Curriculum Developer",
    bio: "Dr. Wong develops course materials and assessment frameworks for SREC's certification programs, specializing in data ethics.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Our Mission & Vision
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Certifying Researchers Through <em className="italic">Structured Integrity</em> Coursework
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                The Singapore Research Ethics Council (SREC) was established to address 
                the growing need for standardized research ethics training and certification. 
                We equip researchers with the knowledge, skills, and credentials to conduct 
                ethical research that contributes meaningfully to global scholarship.
              </p>
            </div>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-16 text-center">
              Our Core <em className="italic">Objectives</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  01
                </div>
                <h3 className="text-xl font-serif mb-4">Certification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide recognized credentials that demonstrate a researcher's 
                  commitment to ethical standards and professional integrity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  02
                </div>
                <h3 className="text-xl font-serif mb-4">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver comprehensive coursework that builds practical 
                  skills in responsible research conduct and ethical decision-making.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  03
                </div>
                <h3 className="text-xl font-serif mb-4">Institutional Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To assist universities and research organizations in developing 
                  and maintaining robust ethics frameworks and compliance systems.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <p className="text-xl font-serif text-muted-foreground leading-relaxed italic">
                "At SREC, we believe that ethical research is not just about following rules—
                it's about cultivating a mindset of integrity that elevates the entire research enterprise."
              </p>
              <p className="text-sm text-muted-foreground mt-4">— Dr. Julian Chen, Chief Ethics Officer</p>
            </div>
          </div>
        </section>

        {/* Mission & Approach */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                  To certify researchers through structured integrity coursework, 
                  fostering a global community of scholars committed to the highest 
                  ethical standards.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SREC's certification programs combine theoretical foundations with 
                  practical application. Through case studies, assessments, and 
                  interactive learning, we ensure that certified researchers can 
                  navigate real-world ethical challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our curriculum is developed by experienced ethics educators and 
                  reviewed by our Academic Standards Committee to ensure relevance 
                  and rigor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Our <em className="italic">Leadership</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member) => (
                <div key={member.name}>
                  <div className="aspect-square bg-foreground/5 border border-border mb-6" />
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Approval */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-8">
                Governance & <em className="italic">Oversight</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                SREC operates under the guidance of our Board of Governors and 
                Academic Standards Committee, ensuring all certification programs 
                and institutional activities meet the highest standards of 
                educational quality and ethical governance.
              </p>
              <Button variant="outline" className="border-foreground">
                Download SREC Charter (PDF)
              </Button>
              <p className="text-sm text-muted-foreground mt-8">
                Approved by the Board of Governors, SREC Singapore
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
