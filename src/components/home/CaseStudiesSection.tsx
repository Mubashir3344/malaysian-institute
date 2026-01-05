import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const researchAreas = [
  {
    id: 1,
    title: "Biomedical Entrance Analytics (MDCAT)",
    description: "Data-driven insights for medical and dental college admission systems, with focus on examination design and performance prediction.",
    link: "/research-areas#biomedical-analytics",
  },
  {
    id: 2,
    title: "Pedagogical Trends",
    description: "Research into emerging teaching methodologies and their effectiveness across diverse educational systems in Asia-Pacific.",
    link: "/research-areas#pedagogical-trends",
  },
  {
    id: 3,
    title: "Scholarly Integrity Studies",
    description: "Frameworks and tools to help institutions maintain the highest standards of research ethics and publication integrity.",
    link: "/research-areas#scholarly-integrity",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              Research <em className="italic">Areas</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              SIAA conducts rigorous research across multiple domains to advance 
              scholarly excellence in South Asia and beyond.
            </p>
          </div>
          <Link 
            to="/research-areas" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            View all research areas <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-8">
          {researchAreas.map((area, index) => (
            <Link
              key={area.id}
              to={area.link}
              className="group block border border-border p-8 lg:p-12 hover:bg-secondary transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center text-xl font-serif flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-2 transition-transform flex-shrink-0 hidden lg:block" />
              </div>
            </Link>
          ))}
        </div>

        {/* Academic Integrity Highlight */}
        <div className="mt-16 bg-foreground text-background p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <Shield className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif mb-3">Academic Integrity & Plagiarism Prevention</h3>
              <p className="text-background/80 leading-relaxed">
                SIAA maintains a zero-tolerance policy toward academic dishonesty. We utilize 
                Turnitin Feedback Studio as our primary institutional evaluation engine.
              </p>
            </div>
            <Link 
              to="/academic-integrity" 
              className="inline-flex items-center gap-2 text-sm font-medium border border-background px-6 py-3 hover:bg-background hover:text-foreground transition-colors flex-shrink-0"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;