import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Professional Ethics in Data Reporting",
    description: "Comprehensive 8-week program covering ethical principles in data collection, analysis, and reporting for researchers and analysts.",
    link: "/programs#professional-ethics",
  },
  {
    id: 2,
    title: "Academic Integrity for Postgraduates",
    description: "Essential 6-week training on maintaining academic integrity throughout the research lifecycle, from literature review to publication.",
    link: "/programs#academic-integrity-postgrad",
  },
  {
    id: 3,
    title: "Ethics Leadership for Institutions",
    description: "Advanced 12-week diploma for department heads, research directors, and ethics committee members.",
    link: "/programs#ethics-leadership",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              Certification <em className="italic">Programs</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              SREC offers structured coursework and certification for researchers 
              committed to ethical excellence.
            </p>
          </div>
          <Link 
            to="/programs" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            View all programs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              to={program.link}
              className="group block border border-border p-8 lg:p-12 hover:bg-secondary transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center text-xl font-serif flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-2 transition-transform flex-shrink-0 hidden lg:block" />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Highlight */}
        <div className="mt-16 bg-foreground text-background p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <Award className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif mb-3">SREC Certified Researcher</h3>
              <p className="text-background/80 leading-relaxed">
                Earn your certification and join a global community of researchers 
                committed to the highest standards of research integrity and professional ethics.
              </p>
            </div>
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 text-sm font-medium border border-background px-6 py-3 hover:bg-background hover:text-foreground transition-colors flex-shrink-0"
            >
              Get Certified <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
