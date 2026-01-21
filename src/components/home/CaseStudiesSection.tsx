import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Digital Transformation Leadership",
    description: "6-week executive program on digital strategy, organizational change, and digital risk management for institutional leaders.",
    link: "/program/digital-transformation",
  },
  {
    id: 2,
    title: "Applied Data Ethics & AI Governance",
    description: "8-week postgraduate program exploring algorithmic fairness, responsible AI, and ethical governance across organizations.",
    link: "/program/applied-data-ethics",
  },
  {
    id: 3,
    title: "Advanced Research Methodology",
    description: "10-week intensive program in mixed-methods research design, quantitative and qualitative analysis, and implementation.",
    link: "/program/advanced-research-methodology",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Featured <em className="italic">Programs</em>
          </h2>
          <p className="text-lg text-muted-foreground">
            Develop leadership capability and research excellence through our flagship executive and postgraduate programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {programs.map((program) => (
            <Link
              key={program.id}
              to={program.link}
              className="group block border border-border p-8 hover:border-foreground hover:bg-secondary/50 transition-all"
            >
              <h3 className="text-lg font-serif mb-3 group-hover:text-foreground transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Highlight */}
        <div className="max-w-4xl mx-auto bg-foreground text-background p-12 rounded">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <Zap className="w-12 h-12" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif mb-3">GIAR Credential Excellence</h3>
              <p className="text-background/90 leading-relaxed mb-6">
                Our programs are recognized across Southeast Asia for developing research leaders and institutional change agents. 
                Graduates advance their careers and their institutions.
              </p>
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-2 text-sm font-medium text-background hover:text-background/90 transition-colors border-b border-background/50 hover:border-background pb-1"
              >
                View all programs <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
