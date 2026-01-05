import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Enhancing research integrity frameworks for a leading university",
    client: "National University",
    category: "Integrity Assurance",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop",
    slug: "integrity-framework",
  },
  {
    title: "Building advanced analytics capabilities for institutional research",
    client: "Research Institute",
    category: "Research Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    slug: "analytics-capabilities",
  },
  {
    title: "Developing comprehensive training programs for early-career researchers",
    client: "Graduate School",
    category: "Professional Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
    slug: "researcher-training",
  },
  {
    title: "Implementing plagiarism prevention systems across multiple campuses",
    client: "University Consortium",
    category: "Integrity Systems",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=800&fit=crop",
    slug: "plagiarism-prevention",
  },
  {
    title: "Creating data governance frameworks for research institutions",
    client: "Research Foundation",
    category: "Data Governance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    slug: "data-governance",
  },
  {
    title: "Establishing ethics review board procedures and guidelines",
    client: "Medical School",
    category: "Ethics Review",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
    slug: "ethics-review",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Our <em className="italic">research</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A selection of projects where we've helped institutions enhance 
                research quality, integrity, and professional development.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{project.client}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif leading-tight group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium mt-4 group-hover:gap-4 transition-all">
                    View project <ArrowRight size={16} />
                  </span>
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

export default Work;
