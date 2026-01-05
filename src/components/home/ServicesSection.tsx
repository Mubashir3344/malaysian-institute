import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Research & Insights",
    description: "Understand user motivations through our data-driven approach",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    title: "Strategy & Innovation",
    description: "Map out the blueprint for your next big idea",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    title: "Product Design",
    description: "Transform ambitious ideas into engaging experiences",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
  },
  {
    title: "Development & Delivery",
    description: "Bring your vision to life with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              What we <em className="italic">do</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              We help transform businesses in Asia through a 3-step approach – 
              research, innovation and design.
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
