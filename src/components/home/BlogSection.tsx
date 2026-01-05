import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Human-Centric Design in APAC",
    date: "December 2024",
    author: "Psykhe Team",
    slug: "future-human-centric-design",
  },
  {
    title: "5 Principles for Building Trust Through UX",
    date: "November 2024",
    author: "Design Lead",
    slug: "building-trust-ux",
  },
  {
    title: "How ESG is Reshaping Digital Product Strategy",
    date: "October 2024",
    author: "Strategy Team",
    slug: "esg-digital-strategy",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">
            Latest <em className="italic">thoughts</em>
          </h2>
          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            View all posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block py-8 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link 
          to="/blog" 
          className="md:hidden inline-flex items-center gap-2 text-sm font-medium mt-8 hover:gap-4 transition-all"
        >
          View all posts <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
