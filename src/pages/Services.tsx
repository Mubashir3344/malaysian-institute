import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "certification-programs",
    title: "Certification Programs",
    description: "Structured coursework leading to recognized ethics credentials",
    details: [
      "Professional Ethics in Data Reporting",
      "Academic Integrity for Postgraduates",
      "Research Ethics Fundamentals",
      "Ethics Leadership for Institutions",
      "Custom Certification Tracks",
    ],
  },
  {
    id: "institutional-training",
    title: "Institutional Training",
    description: "Customized ethics training for universities and research organizations",
    details: [
      "Department-wide Ethics Workshops",
      "Ethics Committee Training",
      "Compliance Officer Programs",
      "Graduate Student Orientations",
      "Faculty Development Sessions",
    ],
  },
  {
    id: "ethics-consulting",
    title: "Ethics Consulting",
    description: "Expert guidance on research ethics policies and challenges",
    details: [
      "Policy Development & Review",
      "Ethics Framework Design",
      "Compliance Auditing",
      "Misconduct Investigation Support",
      "International Standards Alignment",
    ],
  },
  {
    id: "curriculum-development",
    title: "Curriculum Development",
    description: "Custom ethics education materials for your institution",
    details: [
      "Course Design & Development",
      "Assessment Frameworks",
      "Case Study Collections",
      "E-Learning Modules",
      "Training Resource Packages",
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
                Our <em className="italic">Services</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR provides comprehensive professional development, institutional research services, 
                and consulting expertise for researchers, academics, and institutions 
                committed to advancing research excellence and institutional development.
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
              Ready to enhance your <em className="italic">ethics program</em>?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Let's discuss how GIAR can support your institution's 
              professional development and research advancement needs.
            </p>
            <Button asChild variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
