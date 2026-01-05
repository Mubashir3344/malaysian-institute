const clients = [
  "DBS", "UOB", "GSK", "Mandai", "Frasers", "Singtel", 
  "AIA", "OCBC", "Standard Chartered", "Prudential"
];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-12">
          Clients we've worked with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div 
              key={client} 
              className="text-xl md:text-2xl font-serif text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
