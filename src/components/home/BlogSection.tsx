import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const publications = [
  {
    title: "Benchmarking Academic Integrity Frameworks in South Asian Medical Education",
    status: "Forthcoming Q1 2026",
    type: "Research Paper",
    slug: "integrity-frameworks-medical-education",
  },
  {
    title: "Singapore A-Level Performance Analytics 2025: Trends and Insights",
    status: "Forthcoming Q2 2026",
    type: "Whitepaper",
    slug: "alevel-analytics-2025",
  },
  {
    title: "Ethical AI Integration in Academic Research: A Framework for Universities",
    status: "Forthcoming Q2 2026",
    type: "Policy Paper",
    slug: "ethical-ai-framework",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">
            Upcoming <em className="italic">Publications</em>
          </h2>
          <Link 
            to="/publications" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            View all publications <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {publications.map((pub) => (
            <Link
              key={pub.slug}
              to="/publications"
              className="group block py-8 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif group-hover:text-muted-foreground transition-colors">
                    {pub.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span className="px-2 py-1 bg-secondary text-xs font-medium uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <span>{pub.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link 
          to="/publications" 
          className="md:hidden inline-flex items-center gap-2 text-sm font-medium mt-8 hover:gap-4 transition-all"
        >
          View all publications <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;