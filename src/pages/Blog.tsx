import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Navigating Research Ethics in the Age of AI",
    excerpt: "As artificial intelligence transforms research methodologies, the importance of ethical considerations has never been greater. We explore the key principles.",
    date: "December 15, 2024",
    author: "SIAA Research Team",
    category: "Research Ethics",
    slug: "research-ethics-ai",
  },
  {
    title: "Best Practices for Maintaining Academic Integrity",
    excerpt: "Academic integrity is the cornerstone of credible research. Here are the key practices we recommend for institutions and researchers.",
    date: "November 28, 2024",
    author: "Integrity Division",
    category: "Integrity",
    slug: "academic-integrity-practices",
  },
  {
    title: "The Future of Research Analytics in Higher Education",
    excerpt: "Data analytics is reshaping how we understand and improve research outcomes. We explore emerging trends and opportunities.",
    date: "October 12, 2024",
    author: "Analytics Team",
    category: "Analytics",
    slug: "research-analytics-future",
  },
  {
    title: "Building a Culture of Research Excellence",
    excerpt: "Great research doesn't happen in isolation. We explore how institutions can foster environments that nurture scholarly achievement.",
    date: "September 5, 2024",
    author: "Training Division",
    category: "Professional Development",
    slug: "research-excellence-culture",
  },
  {
    title: "Plagiarism Prevention: A Comprehensive Guide",
    excerpt: "Understanding and preventing plagiarism is essential for maintaining research credibility. Our guide covers detection, prevention, and education.",
    date: "August 20, 2024",
    author: "Integrity Division",
    category: "Integrity",
    slug: "plagiarism-prevention-guide",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Insights & <em className="italic">perspectives</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Ideas, research findings, and lessons from our work in academic 
                analytics and research integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block py-12 first:pt-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="hidden lg:block">·</span>
                      <span>{post.category}</span>
                    </div>
                    <div className="lg:col-span-9">
                      <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-muted-foreground transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
