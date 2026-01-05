import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Enhancing research integrity frameworks for a leading university",
    description: "How can a major research university strengthen its integrity policies and create a culture of ethical research practices?",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop",
    slug: "integrity-framework",
  },
  {
    id: 2,
    title: "Building advanced analytics capabilities for institutional research",
    description: "How can research institutions leverage data analytics to improve research outcomes and decision-making?",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    slug: "analytics-capabilities",
  },
  {
    id: 3,
    title: "Developing comprehensive training programs for early-career researchers",
    description: "A systematic approach to equipping the next generation of academics with essential research skills and ethical foundations.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
    slug: "researcher-training",
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
