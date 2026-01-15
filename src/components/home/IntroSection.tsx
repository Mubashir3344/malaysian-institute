const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
            <em className="italic">SREC</em> — A teaching and certification body dedicated to 
            upholding research ethics and professional integrity standards.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed mb-12">
            We provide structured coursework and certification for researchers 
            committed to ethical excellence in their scholarly work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Certification</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognized credentials in research ethics that demonstrate your 
                commitment to integrity and professional standards.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive coursework designed by ethics experts to build 
                practical skills in responsible research conduct.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-serif mb-3">Oversight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Institutional support for maintaining ethical standards through 
                policy guidance and compliance frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
