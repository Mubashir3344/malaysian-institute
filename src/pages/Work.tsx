import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Breaking green barriers: Empowering SMEs in Asia to embrace ESG practices",
    client: "Major Regional Bank",
    category: "Strategy & Design",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
    slug: "esg-practices",
  },
  {
    title: "Building digital solutions to transform liquidity management",
    client: "Financial Institution",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    slug: "liquidity-management",
  },
  {
    title: "Redesigning a hospitality website to drive revenue growth",
    client: "Global Hospitality Group",
    category: "UX & Development",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    slug: "hospitality-redesign",
  },
  {
    title: "Creating a seamless healthcare booking experience",
    client: "Healthcare Provider",
    category: "Research & Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
    slug: "healthcare-booking",
  },
  {
    title: "Reimagining digital banking for millennials",
    client: "Digital Bank",
    category: "Strategy & Innovation",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
    slug: "digital-banking",
  },
  {
    title: "Building a sustainable tourism platform",
    client: "Tourism Board",
    category: "Full Service",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
    slug: "sustainable-tourism",
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
                Our <em className="italic">work</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A selection of projects where we've helped businesses transform 
                through research, strategy, and design.
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
