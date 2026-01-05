import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, FileText, Award, Globe, Lightbulb } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$5M+",
    label: "Research Funding",
    description: "Secured in grants",
  },
  {
    icon: Users,
    value: "50+",
    label: "Research Team",
    description: "Expert scientists",
  },
  {
    icon: FileText,
    value: "100+",
    label: "Publications",
    description: "Peer-reviewed papers",
  },
  {
    icon: Award,
    value: "15+",
    label: "Awards",
    description: "Industry recognition",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Partners",
    description: "Global collaborations",
  },
  {
    icon: Lightbulb,
    value: "30+",
    label: "Patents",
    description: "Filed innovations",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Research Impact
          </h2>
          <p className="text-primary-foreground/80">
            Our commitment to excellence is reflected in our achievements and ongoing contributions to science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <Card 
              key={stat.label} 
              className="bg-primary-foreground/10 backdrop-blur-sm border-none hover:bg-primary-foreground/20 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-primary-foreground/90">{stat.label}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;