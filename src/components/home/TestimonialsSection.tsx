import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "GIAR's research methodology training has elevated the quality of our institutional research programs. Their practical approach makes rigorous methods accessible to our teams.",
    author: "Prof. Ahmad Hassan",
    role: "Director of Institutional Research, University of Malaya",
  },
  {
    quote: "The digital transformation research conducted by GIAR provided actionable insights that directly informed our organizational strategy. Excellent work.",
    author: "Dr. Siti Noor",
    role: "Chief Innovation Officer, Regional Bank",
  },
  {
    quote: "GIAR's commitment to research ethics and data ethics has become a benchmark for our institution. Their guidance has strengthened our governance structures significantly.",
    author: "Prof. Rajesh Kumar",
    role: "Deputy Vice Chancellor, Technology Institute",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-12">
            "{testimonials[current].quote}"
          </blockquote>
          <div className="mb-12">
            <p className="font-medium">{testimonials[current].author}</p>
            <p className="text-background/60">{testimonials[current].role}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 border border-background/30 hover:border-background transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-background" : "bg-background/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-background/30 hover:border-background transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
