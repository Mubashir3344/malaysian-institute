import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Professional Ethics in Data Reporting: A Practitioner's Guide",
    type: "Course Guide",
    status: "Available",
    authors: "Dr. Julian Chen, GIAR Faculty",
    abstract: "Comprehensive coursebook for the Professional Ethics in Data Reporting certification program, covering principles and practical applications.",
  },
  {
    title: "Academic Integrity for the Digital Age",
    type: "Whitepaper",
    status: "Available",
    authors: "GIAR Research Team",
    abstract: "Examination of evolving challenges in academic integrity posed by AI tools, digital collaboration, and online publishing.",
  },
  {
    title: "Institutional Ethics Framework Template",
    type: "Template",
    status: "Available",
    authors: "GIAR Policy & Research Division",
    abstract: "Customizable framework for institutions seeking to develop or enhance their research ethics policies and oversight structures.",
  },
  {
    title: "Ethics Case Studies in STEM Research",
    type: "Case Study Collection",
    status: "Forthcoming Q2 2026",
    authors: "Dr. Priya Sharma, Dr. James Wong",
    abstract: "Collection of real-world case studies for ethics training, focusing on common dilemmas in science and technology research.",
  },
  {
    title: "Citation Ethics and Attribution Standards",
    type: "Reference Guide",
    status: "Available",
    authors: "GIAR Academic Excellence Committee",
    abstract: "Detailed guide on proper citation practices across APA, Harvard, Vancouver, and other major citation styles.",
  },
  {
    title: "Research Integrity Self-Assessment Tool",
    type: "Assessment",
    status: "Available",
    authors: "GIAR Programs & Development Board",
    abstract: "Self-assessment instrument for researchers to evaluate their understanding of research integrity principles before certification.",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                GIAR Resources
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Learning <em className="italic">Resources</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR provides educational materials, guides, and tools to support 
                researchers in their journey toward ethical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Resources List */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-8">
              {resources.map((resource, index) => (
                <article 
                  key={index} 
                  className="bg-background p-8 lg:p-12 border border-border hover:shadow-card transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-foreground text-background text-xs font-medium uppercase tracking-wider">
                      {resource.type}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {resource.status}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif mb-4">{resource.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Authors:</strong> {resource.authors}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{resource.abstract}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Need Custom <em className="italic">Training Materials</em>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                GIAR develops bespoke professional development and research resources for institutions 
                and research organizations. Contact us to discuss your needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all"
              >
                Request Custom Resources <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
