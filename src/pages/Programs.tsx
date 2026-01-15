import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "professional-ethics",
    title: "Professional Ethics in Data Reporting",
    level: "Certificate",
    duration: "8 weeks",
    format: "Online / Blended",
    description: "A comprehensive program covering ethical principles in data collection, analysis, and reporting. Designed for researchers and analysts working with quantitative and qualitative data in academic and professional settings.",
    modules: [
      "Foundations of Research Ethics",
      "Data Integrity and Validation",
      "Ethical Data Visualization",
      "Responsible Reporting Practices",
      "Case Studies in Data Ethics",
    ],
  },
  {
    id: "academic-integrity-postgrad",
    title: "Academic Integrity for Postgraduates",
    level: "Certificate",
    duration: "6 weeks",
    format: "Online",
    description: "Essential training for postgraduate researchers on maintaining academic integrity throughout the research lifecycle. From literature review to publication, learn to navigate ethical challenges.",
    modules: [
      "Understanding Plagiarism and Attribution",
      "Proper Citation Practices",
      "Research Methodology Ethics",
      "Publication Ethics and Authorship",
      "AI and Academic Integrity",
    ],
  },
  {
    id: "research-ethics-fundamentals",
    title: "Research Ethics Fundamentals",
    level: "Foundation Certificate",
    duration: "4 weeks",
    format: "Online",
    description: "An introductory program for early-career researchers and graduate students. Build a solid foundation in research ethics principles and institutional requirements.",
    modules: [
      "Introduction to Research Ethics",
      "Informed Consent Principles",
      "Confidentiality and Data Protection",
      "Conflict of Interest Management",
      "Institutional Review Processes",
    ],
  },
  {
    id: "ethics-leadership",
    title: "Ethics Leadership for Institutions",
    level: "Advanced Diploma",
    duration: "12 weeks",
    format: "Blended",
    description: "Designed for department heads, research directors, and ethics committee members. Learn to develop, implement, and oversee institutional ethics frameworks.",
    modules: [
      "Ethics Policy Development",
      "Building Ethics Culture",
      "Compliance and Oversight Systems",
      "Investigating Misconduct",
      "International Ethics Standards",
      "Leading Ethics Committees",
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
                SREC Certification Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Certification <em className="italic">Programs</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                SREC offers structured coursework and certification programs designed to 
                equip researchers with the knowledge and credentials to conduct ethical research.
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
                Ready to <em className="italic">Get Certified</em>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Contact our admissions team to learn more about enrollment, 
                program schedules, and institutional partnerships.
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
