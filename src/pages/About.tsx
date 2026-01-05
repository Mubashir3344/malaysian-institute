import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Creative Director",
    bio: "With over 15 years in design, Alex leads our creative vision and strategic direction.",
  },
  {
    name: "Maya Singh",
    role: "Head of Strategy",
    bio: "Maya brings deep expertise in business transformation and innovation consulting.",
  },
  {
    name: "David Lim",
    role: "Design Director",
    bio: "David leads our product design team, crafting intuitive and beautiful experiences.",
  },
  {
    name: "Rachel Tan",
    role: "Research Lead",
    bio: "Rachel heads our research practice, uncovering insights that drive design decisions.",
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
                We believe in the power of <em className="italic">design</em> to transform business
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Psykhe is Singapore's leading strategic design consultancy. We combine 
                research, strategy, and design to create experiences that matter.
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
                  To create meaningful experiences that bridge the gap between 
                  business objectives and human needs.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We start with people. By deeply understanding users, stakeholders, 
                  and market dynamics, we uncover opportunities that others miss.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our multi-disciplinary team brings together researchers, strategists, 
                  designers, and technologists to deliver holistic solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Meet the <em className="italic">team</em>
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