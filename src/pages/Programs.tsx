import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Management",
    level: "Executive Education",
    duration: "6 weeks",
    format: "Blended",
    description: "A strategic program for organizational leaders managing digital transformation initiatives. Covers change management, technology adoption, organizational alignment, and risk mitigation in digital-first environments.",
    modules: [
      "Digital Strategy & Vision",
      "Change Management in Digital Contexts",
      "Technology Stack & Implementation",
      "Organizational Agility & Scaling",
      "Digital Risk & Compliance Management",
      "Case Studies: Successful Transformations",
    ],
  },
  {
    id: "applied-data-ethics",
    title: "Applied Data Ethics",
    level: "Post-Graduate Certificate",
    duration: "8 weeks",
    format: "Online / Blended",
    description: "An advanced program examining ethical challenges in data science, AI, and analytics. Designed for practitioners who work with sensitive data, algorithmic systems, and AI-driven decision-making in commercial and research contexts.",
    modules: [
      "Data Ethics Foundations & Frameworks",
      "Algorithmic Bias & Fairness",
      "Privacy, Security, & Data Protection",
      "Responsible AI & Explainability",
      "Ethical Data Governance",
      "Industry Case Studies & Practical Applications",
    ],
  },
  {
    id: "research-methodology",
    title: "Advanced Research Methodology & Design",
    level: "Post-Graduate Certificate",
    duration: "10 weeks",
    format: "Blended",
    description: "A comprehensive program for researchers seeking to advance their methodological expertise. Covers quantitative, qualitative, and mixed-methods approaches, with emphasis on rigorous design and contemporary research challenges.",
    modules: [
      "Research Design Principles & Logic",
      "Quantitative Methods & Statistical Analysis",
      "Qualitative Research & Analysis",
      "Mixed-Methods Integration",
      "Research Validity & Reliability",
      "Emerging Methodologies & Innovations",
    ],
  },
  {
    id: "institutional-research-leadership",
    title: "Institutional Research Leadership",
    level: "Executive Education",
    duration: "12 weeks",
    format: "Blended",
    description: "Tailored for research directors, senior faculty, and institutional leaders. Develops strategic competencies in research governance, funding acquisition, institutional research culture, and alignment with MQA standards.",
    modules: [
      "Research Strategy & Vision Setting",
      "Research Governance & Ethics",
      "Funding & Research Partnerships",
      "Building Research Culture & Excellence",
      "Institutional Research Compliance",
      "Strategic Leadership in Higher Education",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                GIAR Professional Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Executive & Post-Graduate <em className="italic">Programs</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR offers specialized executive education and post-graduate certificates 
                in emerging fields. Our programs are designed for professionals seeking advanced 
                expertise, strategic leadership capability, and credentials aligned with MQA standards.
              </p>
            </div>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-12">
              {programs.map((program) => (
                <article 
                  key={program.id} 
                  className="bg-background p-8 lg:p-12 border border-border"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-foreground text-background text-xs font-medium uppercase tracking-wider">
                          {program.level}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {program.format}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-serif mb-4">{program.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {program.description}
                      </p>
                    </div>
                    <div className="lg:border-l lg:border-border lg:pl-8">
                      <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                        Course Modules
                      </h3>
                      <ul className="space-y-2">
                        {program.modules.map((module, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <span className="text-muted-foreground">{index + 1}.</span>
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Enroll in a <em className="italic">GIAR Program</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our programs are open to professionals, academics, and organizational leaders 
                across Southeast Asia. Contact our admissions team to discuss program fit, 
                cohort schedules, and executive learning options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Inquire About Enrollment <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-foreground">
                  <Link to="/student-portal">
                    Existing Student Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
