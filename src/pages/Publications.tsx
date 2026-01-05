import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const publications = [
  {
    title: "Benchmarking Academic Integrity Frameworks in South Asian Medical Education",
    type: "Research Paper",
    status: "Forthcoming Q1 2026",
    authors: "Dr. Sarah Chen, Prof. Michael Tan",
    abstract: "A comprehensive analysis of plagiarism prevention protocols across medical entrance examination systems in South Asia.",
  },
  {
    title: "The MDCAT Analytics Report 2025: Trends and Insights",
    type: "Whitepaper",
    status: "Forthcoming Q2 2026",
    authors: "SIAA Research Team",
    abstract: "Data-driven analysis of Medical and Dental College Admission Test patterns, including performance metrics and predictive modeling.",
  },
  {
    title: "Ethical AI Integration in Academic Research: A Framework for Universities",
    type: "Policy Paper",
    status: "Forthcoming Q2 2026",
    authors: "Dr. Priya Sharma, Dr. James Wong",
    abstract: "Guidelines for the responsible incorporation of artificial intelligence tools in scholarly research and publication.",
  },
  {
    title: "Pedagogical Trends in Higher Education: A Cross-Cultural Analysis",
    type: "Research Paper",
    status: "Forthcoming Q3 2026",
    authors: "Prof. Michael Tan, Dr. Sarah Chen",
    abstract: "Comparative study of teaching methodologies and their effectiveness across diverse educational systems in Asia-Pacific.",
  },
  {
    title: "Citation Integrity in the Digital Age: Challenges and Solutions",
    type: "Whitepaper",
    status: "Under Review",
    authors: "Dr. James Wong",
    abstract: "Examination of modern citation challenges posed by digital publishing and strategies for maintaining scholarly attribution standards.",
  },
  {
    title: "Research Collaboration Networks: Building Sustainable Academic Partnerships",
    type: "Case Study",
    status: "Forthcoming Q4 2026",
    authors: "SIAA Institutional Partnerships Division",
    abstract: "Best practices and case studies from successful international research collaborations facilitated by SIAA.",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                SIAA Publications
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Upcoming <em className="italic">Research</em> & Publications
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                SIAA is committed to contributing to the global body of academic knowledge. 
                Explore our forthcoming research papers, whitepapers, and policy documents.
              </p>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <article 
                  key={index} 
                  className="bg-background p-8 lg:p-12 border border-border hover:shadow-card transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-foreground text-background text-xs font-medium uppercase tracking-wider">
                      {pub.type}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {pub.status}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif mb-4">{pub.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
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
                Interested in <em className="italic">Collaboration</em>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                SIAA welcomes research collaboration proposals from academic institutions, 
                independent scholars, and research organizations worldwide.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all"
              >
                Submit a Research Proposal <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;