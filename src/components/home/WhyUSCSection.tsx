import { CheckCircle, Microscope, Shield, Users, Globe, Award, Lightbulb } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const features = [
  {
    icon: Microscope,
    title: "State-of-the-Art Facilities",
    description: "Access cutting-edge laboratories and research equipment for groundbreaking discoveries.",
  },
  {
    icon: Shield,
    title: "Research Excellence",
    description: "Our research meets the highest standards of scientific rigor and ethical practice.",
  },
  {
    icon: Users,
    title: "Expert Research Team",
    description: "Collaborate with world-class researchers and scientists with diverse expertise.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Strong international collaborations with leading universities and research institutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Transform research findings into practical applications that benefit society.",
  },
  {
    icon: Award,
    title: "Funding Opportunities",
    description: "Access to research grants and funding to support your innovative projects.",
  },
];

const WhyUSCSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={teamImage} 
                alt="Research team collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-usc-navy/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl p-6 shadow-elevated">
              <div className="text-4xl font-bold text-accent-foreground">50+</div>
              <div className="text-sm text-accent-foreground/80">Expert Researchers</div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Your Partner in Research Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              United Seas Research Institute is committed to advancing knowledge and innovation 
              that drives real-world impact. Our mission is to foster groundbreaking research 
              for the betterment of society, supported by world-class facilities and expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 p-4 rounded-lg bg-background hover:shadow-soft transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUSCSection;