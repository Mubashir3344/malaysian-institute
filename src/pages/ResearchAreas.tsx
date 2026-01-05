import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import researchImage from "@/assets/hero-research.jpg";

const researchAreas = [
  {
    id: "biomedical-analytics",
    title: "Biomedical Entrance Analytics (MDCAT)",
    subtitle: "Data-Driven Insights for Medical Education",
    description: "SIAA specializes in comprehensive analytics for medical and dental college admission systems, with particular focus on the MDCAT examination framework. Our research provides evidence-based insights to improve examination design, predict performance outcomes, and ensure fair assessment practices.",
    focus: [
      "Performance pattern analysis and predictive modeling",
      "Examination item analysis and quality assurance",
      "Comparative studies across regional medical education systems",
      "Admission criteria optimization through data science",
    ],
  },
  {
    id: "pedagogical-trends",
    title: "Pedagogical Trends",
    subtitle: "Innovation in Teaching & Learning Research",
    description: "Our pedagogical research division investigates emerging trends in higher education methodologies across Asia-Pacific. We examine how traditional and digital teaching approaches can be optimized for improved learning outcomes and student engagement.",
    focus: [
      "Blended learning effectiveness studies",
      "Assessment methodology research",
      "Cross-cultural pedagogical comparisons",
      "Technology integration in academic settings",
    ],
  },
  {
    id: "scholarly-integrity",
    title: "Scholarly Integrity Studies",
    subtitle: "Advancing Academic Ethics & Originality",
    description: "As a core pillar of SIAA's mission, our scholarly integrity research focuses on understanding and preventing academic dishonesty. We develop frameworks and tools to help institutions maintain the highest standards of research ethics and publication integrity.",
    focus: [
      "Plagiarism prevention framework development",
      "AI ethics in academic research",
      "Citation analysis and verification methodologies",
      "Institutional integrity policy benchmarking",
    ],
  },
  {
    id: "research-methodology",
    title: "Research Methodology & Data Science",
    subtitle: "Building Rigorous Research Foundations",
    description: "Our methodology division provides support and research into best practices for academic research design. We combine traditional research methods with modern data science approaches to help researchers produce robust, reproducible findings.",
    focus: [
      "Statistical methodology and analysis frameworks",
      "Qualitative research design and validation",
      "Mixed-methods research optimization",
      "Open science and research transparency",
    ],
  },
];

const ResearchAreas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Our Research Focus
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                  Research <em className="italic">Areas</em>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  SIAA conducts rigorous research across four primary domains, 
                  combining academic expertise with data-driven methodologies to 
                  advance scholarly excellence in South Asia and beyond.
                </p>
              </div>
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                <img 
                  src={researchImage} 
                  alt="SIAA Research" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-20">
              {researchAreas.map((area, index) => (
                <article 
                  key={area.id} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center text-xl font-serif mb-6">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif mb-3">{area.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{area.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {area.description}
                    </p>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                        Key Focus Areas
                      </h3>
                      <ul className="space-y-3">
                        {area.focus.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`bg-secondary aspect-square ${index % 2 === 1 ? "lg:order-1" : ""}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Collaborate on <em className="italic">Research</em>
              </h2>
              <p className="text-lg text-background/80 leading-relaxed mb-8">
                SIAA welcomes research partnerships with academic institutions, 
                government bodies, and independent scholars. Together, we can 
                advance knowledge and improve educational outcomes.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-lg font-medium border-b border-background pb-1 hover:gap-4 transition-all"
              >
                Propose a Collaboration <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchAreas;