const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            Boutique Academic Research & Integrity Hub
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight mb-8">
            Empowering <em className="italic">academic excellence</em> through rigorous <em className="italic">analytics</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Singapore Institute of Academic Analytics (SIAA) provides professional training, 
            research support, and integrity assurance for academic institutions and researchers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
