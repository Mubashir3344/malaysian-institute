import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import professionalPrograms from "@/assets/professional-programs.svg";
import researchCollaboration from "@/assets/research-collaboration.svg";
import academicIntegrity from "@/assets/academic-integrity.svg";
import partnerships from "@/assets/partnerships.svg";

const services = [
  {
    title: "Professional Programs",
    description: "Executive and postgraduate programs in digital transformation, data ethics, research methodology, and institutional leadership",
    image: professionalPrograms,
    link: "/programs",
  },
  {
    title: "Research & Collaboration",
    description: "Advanced research projects, collaborative partnerships, and research capacity building across our four specialized centers",
    image: researchCollaboration,
    link: "/research",
  },
  {
    title: "Academic Integrity",
    description: "Research ethics, academic integrity policies, and institutional compliance support grounded in Malaysian standards",
    image: academicIntegrity,
    link: "/ethics",
  },
  {
    title: "Institutional Partnerships",
    description: "Strategic partnerships with universities, corporations, and organizations for sustained research and professional development",
    image: partnerships,
    link: "/partnerships",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Core <em className="italic">Offerings</em>
          </h2>
          <p className="text-lg text-muted-foreground">
            From research excellence to professional development, we provide comprehensive 
            services advancing institutions and individuals across Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group block overflow-hidden border border-border hover:border-foreground transition-all"
            >
              <div className="overflow-hidden h-48 md:h-56 bg-secondary">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-foreground transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
