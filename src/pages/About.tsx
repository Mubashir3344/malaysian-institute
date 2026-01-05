import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Director & Chief Research Officer",
    bio: "With over 20 years in academic research, Dr. Chen leads SIAA's strategic vision and research initiatives.",
  },
  {
    name: "Prof. Michael Tan",
    role: "Head of Research Integrity",
    bio: "Prof. Tan brings extensive expertise in research ethics and publication standards from leading universities.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Director of Training Programs",
    bio: "Dr. Sharma designs and delivers professional development programs for researchers across disciplines.",
  },
  {
    name: "Dr. James Wong",
    role: "Senior Research Analyst",
    bio: "Dr. Wong leads our analytics team, providing advanced statistical and methodological support.",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Advancing <em className="italic">academic excellence</em> through integrity
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                SIAA is Singapore's premier academic research and integrity hub. We combine 
                rigorous analytics with professional training to support researchers and institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                  To elevate academic standards across Asia-Pacific through research support, 
                  integrity assurance, and professional development.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We start with understanding. By deeply engaging with researchers, institutions, 
                  and the evolving academic landscape, we provide targeted solutions that matter.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our multidisciplinary team brings together research methodologists, statisticians, 
                  ethics experts, and training specialists to deliver comprehensive support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Meet our <em className="italic">experts</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member) => (
                <div key={member.name}>
                  <div className="aspect-square bg-secondary mb-6" />
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
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
