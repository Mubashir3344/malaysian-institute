import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, Download, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  type: string;
  date: string;
  description: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title: "Digital Transformation in Malaysian Enterprises: A Longitudinal Study of Change Trajectories",
    authors: "Gupta, R., Hassan, S.N., & Malik, A.",
    type: "Research Report",
    date: "December 2024",
    description:
      "A comprehensive mixed-methods study examining digital transformation initiatives in 50 Malaysian organizations, analyzing success factors, organizational readiness, and alignment with digital economy objectives.",
    link: "/publications/digital-transformation-2024.pdf",
  },
  {
    title: "Algorithmic Fairness in Recruitment Systems: Bias Mitigation Frameworks for Southeast Asia",
    authors: "Rashid, M., Hassan, S.N.",
    type: "Research Paper",
    date: "October 2024",
    description:
      "Peer-reviewed analysis of algorithmic bias in HR decision-making systems, with practical frameworks for mitigation adapted to regional organizational contexts.",
  },
  {
    title: "MQA Standards and Research Integrity: Institutional Implementation Frameworks",
    authors: "Yusof, F., Malik, A.",
    type: "Policy Brief",
    date: "September 2024",
    description:
      "Guidance document for Malaysian higher learning institutions on implementing academic integrity frameworks aligned with Malaysian Qualifications Agency standards.",
    link: "/publications/mqa-research-integrity-2024.pdf",
  },
  {
    title: "Governance & Ethics in Applied Research Centers: A Regional Best Practice Guide",
    authors: "Malik, A., Hassan, S.N., Yusof, F.",
    type: "Institutional Guide",
    date: "August 2024",
    description:
      "Best practice guide for establishing and managing research centers with strong governance and ethical frameworks in academic institutions.",
  },
  {
    title: "Data Ethics in Healthcare Decision-Making: Case Studies from ASEAN Institutions",
    authors: "Rashid, M., Gupta, R.",
    type: "Case Study Series",
    date: "July 2024",
    description:
      "Four detailed case studies examining ethical challenges and solutions in healthcare data analytics across ASEAN countries.",
  },
  {
    title: "Professional Development in the Digital Age: Executive Education Models for 21st Century Leaders",
    authors: "Gupta, R., Malik, A.",
    type: "White Paper",
    date: "June 2024",
    description:
      "Analysis of effective executive education delivery models, blended learning approaches, and competency frameworks for digital leadership.",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                GIAR Publications
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Research & <em className="italic">Institutional Output</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR produces research reports, policy briefs, case studies, and institutional 
                guidance across applied research, data ethics, and professional development.
              </p>
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="border border-border p-8 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="ml-4 px-3 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap">
                      {pub.type}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-serif mb-2 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">{pub.authors}</span>
                    {" • "}
                    {pub.date}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pub.description}
                  </p>

                  {pub.link && (
                    <a
                      href={pub.link}
                      className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted-foreground transition-colors group"
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      Download PDF
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto mt-20 bg-secondary p-8 border border-border rounded">
              <h3 className="text-2xl font-serif mb-4">More Resources</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GIAR regularly publishes research findings, policy briefs, and institutional 
                reports. Subscribe to our newsletter for updates on new publications, or contact 
                our research office for specific resources.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/news"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted-foreground"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Research News
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
