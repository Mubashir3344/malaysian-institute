const stats = [
  { number: "500+", label: "Program Graduates" },
  { number: "40+", label: "Partner Institutions" },
  { number: "4", label: "Research Centers" },
  { number: "100+", label: "Published Works" },
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-16">
            By the <em className="italic">Numbers</em>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 group-hover:text-foreground transition-colors">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
