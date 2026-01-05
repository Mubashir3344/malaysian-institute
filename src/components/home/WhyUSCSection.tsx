import { CheckCircle, Microscope, Shield, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Cutting-Edge Research Facilities",
    description: "Access state-of-the-art laboratories and research equipment for groundbreaking discoveries.",
  },
  {
    icon: Shield,
    title: "Research Excellence",
    description: "Our research meets the highest standards of scientific rigor and ethical practice.",
  },
  {
    icon: Users,
    title: "Expert Research Team",
    description: "Collaborate with world-class researchers and scientists with diverse expertise and backgrounds.",
  },
  {
    icon: Clock,
    title: "Flexible Research Programs",
    description: "Our programmes are designed with working professionals in mind, offering flexible schedules.",
  },
  {
    icon: Award,
    title: "Industry Partnerships",
    description: "Strong connections with industry partners ensure practical, impactful research outcomes.",
  },
  {
    icon: CheckCircle,
    title: "Funding Opportunities",
    description: "Access to research grants and funding to support your innovative projects.",
  },
];

const WhyUSCSection = () => {
  return (
    <section className="py-20 bg-usc-sky">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Your Partner in Research Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              United Seas Research Institute is committed to advancing knowledge and innovation 
              that drives real-world impact. Our mission is to foster groundbreaking research 
              for the betterment of society.
            </p>

            <div className="space-y-4">
              {features.slice(0, 3).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">More Reasons to Join USRI</h3>
            <div className="space-y-4">
              {features.slice(3).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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