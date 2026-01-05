import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "research-insights",
    title: "Research & Insights",
    description: "Understand user motivations through our data-driven approach",
    details: [
      "User Research & Interviews",
      "Market Analysis",
      "Competitive Benchmarking",
      "Customer Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    id: "strategy-innovation",
    title: "Strategy & Innovation",
    description: "Map out the blueprint for your next big idea",
    details: [
      "Digital Strategy",
      "Service Design",
      "Innovation Workshops",
      "Business Model Design",
      "Roadmap Planning",
    ],
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Transform ambitious ideas into engaging experiences",
    details: [
      "UX/UI Design",
      "Design Systems",
      "Prototyping",
      "Interaction Design",
      "Visual Design",
    ],
  },
  {
    id: "development-delivery",
    title: "Development & Delivery",
    description: "Bring your vision to life with cutting-edge technology",
    details: [
      "Frontend Development",
      "Mobile Development",
      "CMS Integration",
      "Quality Assurance",
      "Launch Support",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Our <em className="italic">services</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We help transform businesses in Asia through a comprehensive approach – 
                research, innovation, and design.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12 border-t border-border"
                >
                  <div>
                    <span className="text-sm text-muted-foreground mb-4 block">
                      0{index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-lg pb-4 border-b border-border last:border-0"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to start your <em className="italic">project</em>?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your business through 
              human-centric design.
            </p>
            <Button asChild variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
