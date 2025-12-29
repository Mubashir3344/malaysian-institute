import { CheckCircle, Monitor, Shield, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Virtual Classroom Environment",
    description: "Experience quality education through our fixed-schedule virtual classrooms, allowing you to learn from anywhere.",
  },
  {
    icon: Shield,
    title: "CPE Registered",
    description: "As a registered Private Education Institution, we meet all regulatory standards set by the Committee for Private Education.",
  },
  {
    icon: Users,
    title: "Qualified Faculty",
    description: "All our teachers are CPE-registered with relevant qualifications at least one level higher than the courses they teach.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Our programmes are designed with working professionals in mind, offering flexible class schedules.",
  },
  {
    icon: Award,
    title: "Industry-Relevant Curriculum",
    description: "Courses developed in consultation with industry partners to ensure practical, applicable skills.",
  },
  {
    icon: CheckCircle,
    title: "Affordable Education",
    description: "Quality education at competitive prices, making professional development accessible to all.",
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
              Your Partner in Professional Development
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              United Seas College is committed to providing client-focused education that 
              prepares students for success in the modern workplace. Our mission is lifelong 
              skills development for the betterment of society.
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
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">More Reasons to Join USC</h3>
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
