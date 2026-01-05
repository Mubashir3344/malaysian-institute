import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "The Future of Human-Centric Design in APAC",
    excerpt: "As digital transformation accelerates across Asia-Pacific, the importance of putting humans at the center of design has never been greater.",
    date: "December 15, 2024",
    author: "Psykhe Team",
    category: "Design Thinking",
    slug: "future-human-centric-design",
  },
  {
    title: "5 Principles for Building Trust Through UX",
    excerpt: "Trust is the foundation of every successful digital product. Here are the key principles we apply to build trustworthy experiences.",
    date: "November 28, 2024",
    author: "Design Lead",
    category: "UX Design",
    slug: "building-trust-ux",
  },
  {
    title: "How ESG is Reshaping Digital Product Strategy",
    excerpt: "Environmental, Social, and Governance considerations are no longer optional. They're becoming central to how we design digital products.",
    date: "October 12, 2024",
    author: "Strategy Team",
    category: "Strategy",
    slug: "esg-digital-strategy",
  },
  {
    title: "The Role of Research in Design Innovation",
    excerpt: "Great design doesn't happen in a vacuum. We explore how rigorous research drives innovation and better outcomes.",
    date: "September 5, 2024",
    author: "Research Lead",
    category: "Research",
    slug: "research-design-innovation",
  },
  {
    title: "Designing for Financial Inclusion in Southeast Asia",
    excerpt: "How thoughtful design can help bridge the gap and bring financial services to underserved populations.",
    date: "August 20, 2024",
    author: "Design Team",
    category: "Case Study",
    slug: "financial-inclusion-sea",
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
                Thoughts & <em className="italic">insights</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Ideas, perspectives, and lessons from our work in strategic design 
                and innovation.
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
