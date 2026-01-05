const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight mb-8">
            A good <em className="italic">strategic</em> design partner is <em className="italic">good business</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Discover how good design, grounded in human-centric insights, can 
            delight your customers and grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;