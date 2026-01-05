const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
            <em className="italic">PSYKHE</em> — Inspired by the word <em className="italic">'psyche'</em>, 
            or the human mind, we are the experts in creating outstanding customer experiences.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed mb-12">
            As Singapore's leading strategic design consultancy, we're bold in pioneering 
            new ideas – blending start-up creativity with consultancy precision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Reimagine the next era of user experiences. Our multi-disciplinary team 
              creates innovative products for the future.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our niche ranges from finance and healthcare, to tech and tourism. 
              We tailor solutions to the APAC market, ensuring your brand is equipped 
              with a strategic edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
