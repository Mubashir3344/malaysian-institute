import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Professional Ethics in Data Reporting: A Practitioner's Guide",
    status: "Available",
    type: "Course Guide",
    slug: "data-ethics-guide",
  },
  {
    title: "Academic Integrity for the Digital Age",
    status: "Available",
    type: "Whitepaper",
    slug: "digital-integrity",
  },
  {
    title: "Ethics Case Studies in STEM Research",
    status: "Forthcoming Q2 2026",
    type: "Case Study Collection",
    slug: "stem-case-studies",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">
            Learning <em className="italic">Resources</em>
          </h2>
          <Link 
            to="/resources" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            View all resources <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              to="/resources"
              className="group block py-8 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif group-hover:text-muted-foreground transition-colors">
                    {resource.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span className="px-2 py-1 bg-secondary text-xs font-medium uppercase tracking-wider">
                    {resource.type}
                  </span>
                  <span>{resource.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link 
          to="/resources" 
          className="md:hidden inline-flex items-center gap-2 text-sm font-medium mt-8 hover:gap-4 transition-all"
        >
          View all resources <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
