const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
            <em className="italic">SIAA</em> — Singapore Institute of Academic Analytics, 
            your trusted partner in elevating research standards and academic integrity.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed mb-12">
            As a boutique academic research hub, we combine scholarly rigor with 
            practical training to support researchers and institutions across Asia-Pacific.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              We provide comprehensive research support services, from methodology 
              design to data analytics, ensuring your research meets the highest standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our professional training programs equip academics and researchers 
              with cutting-edge skills in research integrity, publication ethics, 
              and advanced analytical methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
