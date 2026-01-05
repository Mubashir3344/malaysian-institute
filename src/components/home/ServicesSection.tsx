import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Research Support",
    description: "Comprehensive methodology and analytical support for your research",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
  },
  {
    title: "Integrity Assurance",
    description: "Ensuring the highest standards of academic integrity and ethics",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    title: "Professional Training",
    description: "Skill development programs for researchers and academics",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
  },
  {
    title: "Institutional Consulting",
    description: "Strategic support for academic institutions and research centers",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
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
              We support academic excellence through research, training, and 
              integrity assurance services.
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
