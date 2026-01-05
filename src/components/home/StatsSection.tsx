const stats = [
  { number: "500+", label: "Researchers Trained" },
  { number: "120+", label: "Institutions Served" },
  { number: "25", label: "Expert Consultants" },
  { number: "15+", label: "Years of Excellence" },
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-16">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
