import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Breaking green barriers: Empowering SMEs in Asia to embrace ESG practices",
    description: "How can a multinational bank support the ESG initiatives of regional Small Medium Enterprises (SMEs) and position itself as the preferred banking partner?",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
    slug: "esg-practices",
  },
  {
    id: 2,
    title: "Building digital solutions to transform liquidity management for businesses",
    description: "How can a major regional bank help their business clients manage their liquidity more seamlessly?",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    slug: "liquidity-management",
  },
  {
    id: 3,
    title: "Redesigning a hospitality website to drive revenue growth",
    description: "A global hospitality company sought to overhaul their website and increase conversion via data triangulation from website performance metrics.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    slug: "hospitality-redesign",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/work/${study.slug}`}
              className="group block"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-6">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {study.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                    Read more <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
