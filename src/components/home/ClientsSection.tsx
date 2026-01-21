const partners = [
  "University of Malaya", "Universiti Kebangsaan Malaysia", "Monash University Malaysia", 
  "Taylor's University", "UNISEL", "Malaysian Institute of Directors",
  "Digital Transformation Council Malaysia", "World Bank", "Asian Development Bank", "ASEAN Secretariat"
];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            GIAR collaborates with leading academic, corporate, and institutional partners across Southeast Asia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {partners.map((partner) => (
              <div 
                key={partner} 
                className="text-sm md:text-base font-medium text-muted-foreground/70 hover:text-foreground transition-colors text-center"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
