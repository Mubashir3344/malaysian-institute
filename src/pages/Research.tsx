import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Beaker, Users, FileText, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResearchCenter {
  id: string;
  title: string;
  description: string;
  focus: string[];
  director: string;
  projects: number;
}

const researchCenters: ResearchCenter[] = [
  {
    id: "digital-transformation-center",
    title: "Digital Transformation Research Center",
    description:
      "Investigates organizational and technological dimensions of digital transformation across sectors. Focus on change management, technology adoption, and sustainable digital innovation in Malaysian and regional organizations.",
    focus: [
      "Digital Strategy & Innovation",
      "Organizational Change",
      "Technology Adoption",
      "Digital Skills & Capability",
    ],
    director: "Assoc. Prof. Rajesh Gupta",
    projects: 8,
  },
  {
    id: "applied-data-ethics-lab",
    title: "Applied Data Ethics & AI Governance Lab",
    description:
      "Develops ethical frameworks for data science, artificial intelligence, and algorithmic decision-making. Research addresses bias mitigation, transparency, privacy, and responsible AI implementation in organizational contexts.",
    focus: [
      "Algorithmic Fairness & Bias",
      "Privacy-Preserving Analytics",
      "Responsible AI",
      "Data Governance",
    ],
    director: "Assoc. Prof. Muhammad Rashid",
    projects: 6,
  },
  {
    id: "research-methodology-institute",
    title: "Research Methodology & Design Institute",
    description:
      "Advances rigorous research design and methodological innovation. Develops frameworks for mixed-methods research, qualitative analysis, and contemporary research challenges aligned with MQA standards and international best practices.",
    focus: [
      "Mixed-Methods Design",
      "Qualitative Analysis",
      "Research Validity",
      "Emerging Methodologies",
    ],
    director: "Dr. Siti Nurul Hassan",
    projects: 5,
  },
  {
    id: "institutional-research-excellence",
    title: "Institutional Research Excellence & Policy",
    description:
      "Supports institutional research governance, capacity building, and strategic research development. Advises organizations on research strategy, ethics frameworks, funding acquisition, and alignment with national research agendas.",
    focus: [
      "Research Governance",
      "Institutional Strategy",
      "Research Funding",
      "Quality Assurance",
    ],
    director: "Dr. Siti Nurul Hassan",
    projects: 7,
  },
];

const currentProjects = [
  {
    title: "Digital Transformation in Malaysian SMEs: A Mixed-Methods Study",
    lead: "Assoc. Prof. Rajesh Gupta",
    status: "Active",
    funding: "MHLRF",
  },
  {
    title: "Algorithmic Bias in Recruitment Systems: Regional Analysis",
    lead: "Assoc. Prof. Muhammad Rashid",
    status: "Active",
    funding: "SEARN",
  },
  {
    title: "MQA-Compliant Research Governance Frameworks for Private HLIs",
    lead: "Dr. Siti Nurul Hassan",
    status: "Active",
    funding: "Institutional",
  },
  {
    title: "Applied Data Ethics in Healthcare: Case Study Analysis",
    lead: "Assoc. Prof. Muhammad Rashid",
    status: "Ongoing",
    funding: "IART Partnership",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Research at GIAR
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Applied Research <em className="italic">Centers & Initiatives</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR operates four research centers focused on applied research, 
                institutional impact, and professional development across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Research Centers */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Research <em className="italic">Centers</em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {researchCenters.map((center) => (
                <div
                  key={center.id}
                  className="bg-background p-8 border border-border hover:border-foreground/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Beaker className="w-6 h-6 text-foreground" />
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
                      {center.projects} Projects
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif mb-3">{center.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {center.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Research Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {center.focus.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-foreground/5 text-xs border border-border/50 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground">
                      Director: {center.director}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
              Current <em className="italic">Research Projects</em>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {currentProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="border border-border p-6 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-serif flex-1">{project.title}</h3>
                    <span className="ml-4 px-3 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {project.lead}
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {project.funding}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Interested in Research <em className="italic">Collaboration</em>?
              </h2>
              <p className="text-lg text-background/80 leading-relaxed mb-8">
                GIAR welcomes partnerships with universities, research institutions, 
                organizations, and funding bodies. Explore collaboration opportunities 
                or propose a research initiative aligned with our centers' focus areas.
              </p>
              <Button asChild className="bg-background text-foreground hover:bg-background/90">
                <a href="/research-collaboration">Explore Collaboration</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
