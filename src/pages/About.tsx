import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Director & Chief Research Officer",
    bio: "With over 20 years in academic research, Dr. Chen leads SIAA's strategic vision and research initiatives across South Asia.",
  },
  {
    name: "Prof. Michael Tan",
    role: "Head of Research Integrity",
    bio: "Prof. Tan brings extensive expertise in research ethics and publication standards from leading universities in the Asia-Pacific region.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Director of Training Programs",
    bio: "Dr. Sharma designs and delivers professional development programs for researchers across multiple disciplines and institutions.",
  },
  {
    name: "Dr. James Wong",
    role: "Senior Research Analyst",
    bio: "Dr. Wong leads our analytics team, providing advanced statistical and methodological support for institutional research projects.",
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
                Empowering Global Scholarship Through <em className="italic">Analytical Excellence</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                The Singapore Institute of Academic Analytics (SIAA) was established to bridge 
                the gap between raw data and scholarly achievement. In an era of rapid information 
                expansion, we provide independent researchers and academic professionals with the 
                tools, training, and oversight necessary to produce world-class contributions to 
                the global body of knowledge.
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
                <h3 className="text-xl font-serif mb-4">Standardization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To define and promote rigorous benchmarks for academic data analytics 
                  in South Asian and Global contexts.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  02
                </div>
                <h3 className="text-xl font-serif mb-4">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To foster a culture of original thinking by providing robust plagiarism 
                  prevention and awareness frameworks.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                  03
                </div>
                <h3 className="text-xl font-serif mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To support boutique research initiatives in Life Sciences, Pedagogy, and 
                  Professional Entrance Analytics through peer review and technical support.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <p className="text-xl font-serif text-muted-foreground leading-relaxed italic">
                "At SIAA, we believe that the foundation of a credible research institute is 
                built on the pillars of Objectivity, Accountability, and Academic Honesty."
              </p>
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
                  To elevate academic standards across South Asia and globally through 
                  research support, integrity assurance, and professional development 
                  for independent researchers and institutions.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We start with understanding. By deeply engaging with researchers, institutions, 
                  and the evolving academic landscape, we provide targeted solutions that address 
                  real challenges in scholarly research and publication.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our multidisciplinary team brings together research methodologists, statisticians, 
                  ethics experts, and training specialists to deliver comprehensive support for 
                  South Asian and Global researchers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Meet our <em className="italic">Experts</em>
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
                SIAA operates under the guidance of our Board of Fellows and Academic Ethics 
                Committee, ensuring all institutional activities adhere to the highest standards 
                of academic governance and research integrity.
              </p>
              <Button variant="outline" className="border-foreground">
                Download SIAA Charter (PDF)
              </Button>
              <p className="text-sm text-muted-foreground mt-8">
                Approved by the Board of Fellows, SIAA Singapore
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