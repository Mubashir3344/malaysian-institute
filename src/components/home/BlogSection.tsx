import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Latest News: GIAR Launches Applied Data Ethics Program",
    date: "January 20, 2026",
    excerpt: "Introducing our new postgraduate program focused on algorithmic fairness and responsible AI implementation across Southeast Asia.",
    category: "News",
    slug: "news",
  },
  {
    title: "Research Insight: Digital Transformation in Malaysian Organizations",
    date: "January 10, 2026",
    excerpt: "Key findings from our research centers examining digital transformation adoption, barriers, and success factors in the region.",
    category: "Research",
    slug: "news",
  },
  {
    title: "Institutional Research Excellence: Best Practices Guide",
    date: "December 15, 2025",
    excerpt: "Comprehensive guide on building and maintaining research excellence in higher education institutions.",
    category: "Resources",
    slug: "resources",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Latest <em className="italic">Updates</em>
          </h2>
          <p className="text-lg text-muted-foreground">
            News, research insights, and resources from GIAR.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-border max-w-4xl mx-auto">
          {resources.map((resource) => (
            <Link
              key={resource.slug + resource.title}
              to={`/${resource.slug}`}
              className="group block py-8 first:pt-0 last:pb-0 hover:bg-secondary/50 px-4 -mx-4 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-secondary border border-border text-xs font-medium uppercase tracking-wider rounded">
                    {resource.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{resource.date}</span>
                </div>
                <h3 className="text-lg md:text-xl font-serif group-hover:text-foreground transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {resource.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            <BookOpen size={18} />
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
