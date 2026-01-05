const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
            <em className="italic">SIAA</em> — An independent research hub focused on 
            academic metrics and integrity training for South Asian and Global researchers.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed mb-12">
            We bridge the gap between raw data and scholarly achievement through 
            rigorous analytics and professional development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Objectivity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data-driven insights free from bias, ensuring credible and reproducible 
                research outcomes.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Accountability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transparent processes and institutional oversight for all research 
                activities and publications.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Academic Honesty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zero-tolerance policy on plagiarism with advanced similarity detection 
                powered by Turnitin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;