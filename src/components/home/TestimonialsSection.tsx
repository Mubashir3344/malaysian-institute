import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "USRI provided me with the resources and mentorship to pursue cutting-edge research in AI. The collaborative environment is truly exceptional.",
    name: "Dr. Sarah Chen",
    role: "AI Research Fellow",
    image: null,
  },
  {
    quote: "The institute's commitment to translating research into real-world applications sets it apart. I've grown tremendously as a researcher here.",
    name: "Prof. Michael Tan",
    role: "Senior Research Scientist",
    image: null,
  },
  {
    quote: "From state-of-the-art facilities to global partnerships, USRI offers everything a researcher needs to make meaningful contributions to science.",
    name: "Dr. Emily Wong",
    role: "Research Director",
    image: null,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-usc-sky">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            What Our Researchers Say
          </h2>
          <p className="text-muted-foreground">
            Hear from the brilliant minds who are part of our research community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent mb-6" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-usc-navy flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;