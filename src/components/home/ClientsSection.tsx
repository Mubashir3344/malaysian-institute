const partners = [
  "NUS", "NTU", "SMU", "SUTD", "NIE", 
  "A*STAR", "MOE", "NRF", "Duke-NUS", "Yale-NUS"
];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-12">
          Institutions We've Partnered With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="text-xl md:text-2xl font-serif text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
