import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import researchAppliedScience from "@/assets/research-applied-science.jpg";
import researchBusiness from "@/assets/research-business.jpg";
import researchDataScience from "@/assets/research-data-science.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const services = [
  {
    title: "Certification Programs",
    description: "Structured coursework leading to recognized ethics credentials for researchers",
    image: researchDataScience,
  },
  {
    title: "Institutional Training",
    description: "Customized ethics workshops and training for universities and research organizations",
    image: researchAppliedScience,
  },
  {
    title: "Ethics Consulting",
    description: "Expert guidance on research ethics policies, frameworks, and compliance",
    image: teamCollaboration,
  },
  {
    title: "Curriculum Development",
    description: "Custom ethics education materials and course design for institutions",
    image: researchBusiness,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              What we <em className="italic">offer</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              We support ethical excellence through certification, training, 
              and consulting services.
            </p>
          </div>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
          >
            Explore our services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
              className="group block"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
