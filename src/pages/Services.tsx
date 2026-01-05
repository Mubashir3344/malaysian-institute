import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "research-support",
    title: "Research Support",
    description: "Comprehensive research methodology and analytical support",
    details: [
      "Research Design & Methodology",
      "Statistical Analysis & Data Analytics",
      "Literature Review Support",
      "Manuscript Preparation",
      "Publication Strategy",
    ],
  },
  {
    id: "integrity-assurance",
    title: "Integrity Assurance",
    description: "Ensuring the highest standards of academic integrity",
    details: [
      "Plagiarism Detection & Prevention",
      "Ethics Review Consultation",
      "Research Misconduct Prevention",
      "Compliance Auditing",
      "Integrity Policy Development",
    ],
  },
  {
    id: "professional-training",
    title: "Professional Training",
    description: "Skill development programs for researchers and academics",
    details: [
      "Research Methodology Workshops",
      "Academic Writing Skills",
      "Statistical Software Training",
      "Publication Ethics Seminars",
      "Peer Review Training",
    ],
  },
  {
    id: "institutional-consulting",
    title: "Institutional Consulting",
    description: "Strategic support for academic institutions",
    details: [
      "Research Quality Assessment",
      "Policy Development",
      "Accreditation Support",
      "Capacity Building Programs",
      "Research Culture Enhancement",
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
                We provide comprehensive academic research support and professional training 
                services tailored to researchers, academics, and institutions across Asia-Pacific.
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
              Ready to elevate your <em className="italic">research</em>?
            </h2>
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Let's discuss how SIAA can support your academic research 
              and professional development needs.
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
