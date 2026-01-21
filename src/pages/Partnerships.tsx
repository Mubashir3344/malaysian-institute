import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Globe, Zap } from "lucide-react";

interface Partner {
  name: string;
  type: string;
  focus: string;
}

interface PartnershipType {
  title: string;
  description: string;
  benefits: string[];
  icon: typeof Users;
}

const partners: Partner[] = [
  {
    name: "University of Malaya",
    type: "Academic Partner",
    focus: "Joint research on higher education quality assurance and student learning outcomes",
  },
  {
    name: "Digital Transformation Council Malaysia",
    type: "Institutional Partner",
    focus: "Executive education programs and digital transformation research in public sector",
  },
  {
    name: "Association of Southeast Asian Researchers (ASEAR)",
    type: "Network Partner",
    focus: "Regional research community building and capacity development",
  },
  {
    name: "Malaysian Institute of Directors",
    type: "Corporate Partner",
    focus: "Board governance research and executive education programs",
  },
  {
    name: "Southeast Asian Data Ethics Consortium",
    type: "Specialist Network",
    focus: "Collaborative research on AI ethics and algorithmic fairness across region",
  },
  {
    name: "World Bank Education Program (Malaysia Office)",
    type: "Institutional Partner",
    focus: "Research on higher education reform and skills development",
  },
];

const partnershipTypes: PartnershipType[] = [
  {
    title: "Academic & Research Partnerships",
    description:
      "Collaborate with universities and research institutions on joint research projects, PhD supervision networks, and shared publication initiatives.",
    benefits: [
      "Co-authored research publications in peer-reviewed journals",
      "Joint grant applications and shared funding",
      "Doctoral supervision networks across institutions",
      "Research capacity building workshops",
      "Shared access to research facilities and databases",
    ],
    icon: Users,
  },
  {
    title: "Corporate & B2B Partnerships",
    description:
      "Work with corporations and organizations on customized executive education, research projects, and organizational development initiatives.",
    benefits: [
      "Customized executive programs and training",
      "Embedded research on organizational challenges",
      "Employee development programs",
      "Leadership development and coaching",
      "Access to organizational research data",
    ],
    icon: Briefcase,
  },
  {
    title: "Institutional & Government Partnerships",
    description:
      "Engage with government agencies and institutions on policy research, capacity building, and institutional development projects.",
    benefits: [
      "Policy research and evidence synthesis",
      "Institutional development consulting",
      "Government training programs",
      "Research to support policy making",
      "Regional institutional networks",
    ],
    icon: Globe,
  },
  {
    title: "Specialist Network Partnerships",
    description:
      "Join focused networks addressing specific research or professional development areas, connecting with peers and thought leaders.",
    benefits: [
      "Participation in specialist working groups",
      "Access to network expertise and resources",
      "Joint publications and white papers",
      "Conference and seminar organization",
      "Shared professional development opportunities",
    ],
    icon: Zap,
  },
];

const Partnerships = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Partnership Opportunities
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Grow <em className="italic">Together</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR partners with universities, corporations, and institutions to advance 
                research, education, and professional development across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-12">Why Partner with <em className="italic">GIAR</em>?</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Research Excellence",
                  description:
                    "Access to rigorous research methodologies, experienced researchers, and robust analytical capacity. GIAR maintains international standards while serving Southeast Asian contexts.",
                },
                {
                  title: "Regional Expertise",
                  description:
                    "Deep understanding of Malaysian and Southeast Asian institutions, culture, and market realities. Our researchers have established relationships across the region.",
                },
                {
                  title: "Flexibility & Responsiveness",
                  description:
                    "Small, agile organization able to customize approaches, move quickly, and respond to emerging needs while maintaining academic rigor.",
                },
                {
                  title: "Commitment to Impact",
                  description:
                    "Focus on applied research with real-world relevance. We measure success by knowledge that informs policy and practice, not just academic output.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16">Partnership <em className="italic">Models</em></h2>
            <div className="max-w-5xl mx-auto space-y-12">
              {partnershipTypes.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <div key={idx} className="border border-border p-8 lg:p-12">
                    <div className="flex gap-6 items-start mb-6">
                      <div className="w-14 h-14 bg-secondary rounded flex-shrink-0 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif">{model.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {model.description}
                    </p>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                        Key Benefits
                      </p>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex gap-3">
                            <span className="text-foreground font-serif">•</span>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-12">Our <em className="italic">Partners</em></h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-background border border-border p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-serif">{partner.name}</h3>
                    <span className="px-2 py-1 text-xs bg-foreground text-background rounded whitespace-nowrap ml-2 font-medium">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{partner.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16">How We <em className="italic">Partner</em></h2>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="space-y-6">
                {[
                  {
                    step: "Explore",
                    description:
                      "Share your goals, challenges, and vision. We discuss alignment with GIAR's strategic interests and capacity.",
                  },
                  {
                    step: "Design",
                    description:
                      "Co-create partnership structure, defining roles, responsibilities, timeline, budget, and expected outcomes.",
                  },
                  {
                    step: "Formalize",
                    description:
                      "Develop formal partnership agreement outlining intellectual property, publication rights, governance, and sustainability.",
                  },
                  {
                    step: "Execute",
                    description:
                      "Implement partnership activities while maintaining regular communication, monitoring progress, and adapting as needed.",
                  },
                  {
                    step: "Sustain",
                    description:
                      "Build long-term relationship through regular review, continuous learning, and exploring opportunities for expansion.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8">
                    <div className="w-24 flex-shrink-0">
                      <h3 className="text-xl font-serif text-foreground">{item.step}</h3>
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="max-w-4xl mx-auto bg-foreground text-background p-12 rounded text-center">
              <h3 className="text-2xl font-serif mb-4">Interested in a Partnership?</h3>
              <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're an academic institution, corporation, government agency, or 
                specialist network, we'd like to explore how we can grow together.
              </p>
              <Button
                asChild
                className="bg-background text-foreground hover:bg-secondary"
              >
                <a href="mailto:partnerships@giar.my">Contact Partnerships Team</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnerships;
