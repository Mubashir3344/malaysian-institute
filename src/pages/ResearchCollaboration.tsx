import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Network, FileText, CheckCircle } from "lucide-react";

const ResearchCollaboration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Research Collaboration
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Collaborate with <em className="italic">GIAR</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR actively seeks research partnerships with academic institutions, 
                think tanks, government agencies, and organizations across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Research Focus Areas */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16">Focus <em className="italic">Areas</em></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  title: "Digital Transformation",
                  description:
                    "Understanding organizational change in the digital age, measuring transformation success, and supporting adoption in Malaysian context.",
                  icon: Heart,
                },
                {
                  title: "Applied Data Ethics",
                  description:
                    "Developing ethical frameworks for AI/ML, addressing algorithmic bias, and supporting responsible data governance in Asia.",
                  icon: FileText,
                },
                {
                  title: "Research Methodology",
                  description:
                    "Advancing research methods, mixed-methods approaches, and providing methodological support to regional research communities.",
                  icon: Network,
                },
                {
                  title: "Institutional Excellence",
                  description:
                    "Supporting higher education quality, institutional research, and evidence-based decision-making in academic organizations.",
                  icon: CheckCircle,
                },
              ].map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 bg-foreground text-background rounded flex-shrink-0 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-3">{area.title}</h3>
                      <p className="text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Collaboration Models */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16">Collaboration <em className="italic">Models</em></h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Joint Research Projects",
                  description:
                    "Co-design and co-deliver research projects with shared funding, complementary expertise, and collaborative publication.",
                },
                {
                  title: "Methodological Support",
                  description:
                    "Partner with GIAR's research methodology specialists to strengthen research design, analysis, and reporting in your projects.",
                },
                {
                  title: "Data Analysis & Evaluation",
                  description:
                    "Engage GIAR for specialized support in quantitative analysis, qualitative coding, mixed-methods synthesis, and program evaluation.",
                },
                {
                  title: "PhD Supervision Networks",
                  description:
                    "Link doctoral students across institutions for collaborative research, joint supervision, and integrated coursework.",
                },
                {
                  title: "Research Capacity Building",
                  description:
                    "Commission workshops, training programs, or consulting support to build research capacity within your organization.",
                },
                {
                  title: "Visiting Positions",
                  description:
                    "Host GIAR researchers as visiting scholars, or place your researchers at GIAR for semester-long collaborative immersions.",
                },
              ].map((model, idx) => (
                <div
                  key={idx}
                  className="border border-border p-8 hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-xl font-serif mb-2">{model.title}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Process */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16">Getting <em className="italic">Started</em></h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 mb-16">
                {[
                  {
                    step: "1",
                    title: "Reach Out",
                    description:
                      "Contact our research collaboration team at research@giar-research.my with a brief project description and collaboration goals.",
                  },
                  {
                    step: "2",
                    title: "Initial Discussion",
                    description:
                      "Meet with relevant GIAR researchers to discuss alignment, capacity, timeline, and potential collaboration structures.",
                  },
                  {
                    step: "3",
                    title: "Define Scope",
                    description:
                      "Develop detailed collaboration agreement outlining objectives, roles, intellectual property, publication rights, and funding.",
                  },
                  {
                    step: "4",
                    title: "Execute & Collaborate",
                    description:
                      "Proceed with research activities, maintaining regular communication and following agreed governance structures.",
                  },
                  {
                    step: "5",
                    title: "Publish & Disseminate",
                    description:
                      "Share findings through joint publications, conferences, policy briefs, and stakeholder engagement activities.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-serif text-lg font-medium">
                        {item.step}
                      </div>
                      {idx < 4 && (
                        <div className="w-1 h-12 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="bg-foreground text-background p-12 rounded text-center">
                <h3 className="text-2xl font-serif mb-4">Ready to Collaborate?</h3>
                <p className="mb-8 leading-relaxed">
                  Interested in exploring research collaboration with GIAR? Our research teams 
                  are actively seeking partnerships that advance regional knowledge and practice.
                </p>
                <Button
                  asChild
                  className="bg-background text-foreground hover:bg-secondary"
                >
                  <a href="mailto:research@giar-research.my">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border p-8">
                <h3 className="text-xl font-serif mb-4">Funding & Budget</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  GIAR manages budgets flexibly, accommodating joint funding from multiple sources, 
                  bilateral arrangements, or single-funder models. We assist with proposal development 
                  and grant applications to competitive funding bodies.
                </p>
                <p className="text-muted-foreground">
                  Contact research@giar-research.my to discuss budget frameworks.
                </p>
              </div>

              <div className="border border-border p-8">
                <h3 className="text-xl font-serif mb-4">Intellectual Property</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  GIAR follows international best practices for research ethics and IP management. 
                  IP arrangements are negotiated collaboratively, ensuring mutual benefit and 
                  alignment with funder requirements and institutional policies.
                </p>
                <p className="text-muted-foreground">
                  All collaborations include clear publication and dissemination plans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchCollaboration;
