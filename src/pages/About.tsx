import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Prof. Dr. Azlan Malik",
    role: "Director & Founder",
    bio: "With over 30 years in applied research and institutional leadership, Prof. Dr. Malik established GIAR to address Southeast Asia's need for rigorous research methodologies and ethical governance.",
  },
  {
    name: "Dr. Siti Nurul Hassan",
    role: "Deputy Director, Research & Innovation",
    bio: "Dr. Hassan oversees GIAR's research initiatives and postgraduate programs, ensuring alignment with MQA standards and international best practices.",
  },
  {
    name: "Assoc. Prof. Rajesh Gupta",
    role: "Head of Professional Development",
    bio: "Assoc. Prof. Gupta leads GIAR's executive education programs, partnering with industry leaders to design niche professional development courses.",
  },
  {
    name: "Dr. Fatimah Yusof",
    role: "Academic Integrity Officer",
    bio: "Dr. Yusof develops and implements GIAR's comprehensive academic integrity policies, ensuring compliance with MQA frameworks and institutional standards.",
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
                Advancing <em className="italic">Applied Research</em> Through Ethical Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                The Global Institute of Applied Research (GIAR) was established to advance 
                rigorous, ethically-grounded research and professional development across 
                Southeast Asia. We equip researchers, educators, and professionals with the 
                knowledge and credentials to conduct transformative research aligned with 
                Malaysian Qualifications Agency (MQA) standards and international excellence.
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
                <h3 className="text-xl font-serif mb-4">Research Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To conduct and promote high-impact applied research aligned with 
                  MQA frameworks and international standards of rigor and integrity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  02
                </div>
                <h3 className="text-xl font-serif mb-4">Professional Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver executive and postgraduate programs that build expertise 
                  in emerging fields like digital transformation and applied data ethics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  03
                </div>
                <h3 className="text-xl font-serif mb-4">Ethical Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To support institutions in establishing and maintaining academic 
                  integrity frameworks compliant with MQA standards and best practices.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <p className="text-xl font-serif text-muted-foreground leading-relaxed italic">
                "At GIAR, we believe applied research creates meaningful impact when grounded 
                in rigorous methodology and unwavering ethical standards."
              </p>
              <p className="text-sm text-muted-foreground mt-4">— Prof. Dr. Azlan Malik, Founder & Director</p>
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
                  To foster excellence in applied research and professional development 
                  across Southeast Asia, grounded in ethical principles and aligned 
                  with Malaysian Qualifications Agency (MQA) standards.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  GIAR's programs combine rigorous methodology with real-world application. 
                  Through research partnerships, executive seminars, and integrated projects, 
                  we ensure participants develop both academic depth and practical capability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All our offerings are developed by experienced researchers and reviewed 
                  against MQA standards by our Academic Standards Committee to ensure relevance 
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
                  <div className="aspect-square bg-gradient-to-br from-foreground/20 to-foreground/5 border border-border mb-6 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-serif text-foreground/40 mb-2">
                        {member.name.charAt(0)}{member.name.split(' ').pop()?.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MQA Alignment */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-8">
                MQA Compliance & <em className="italic">Governance</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                GIAR operates under the guidance of our Board of Trustees and Academic 
                Council, ensuring all research initiatives, programs, and institutional 
                activities are aligned with Malaysian Qualifications Agency (MQA) standards 
                and international benchmarks for research excellence.
              </p>
              <Button variant="outline" className="border-foreground">
                MQA Compliance Framework (PDF)
              </Button>
              <p className="text-sm text-muted-foreground mt-8">
                Established in accordance with MQA guidelines for private higher learning institutions
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
