const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4">
            What Sets Us <em className="italic">Apart</em>
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            We combine academic rigor with practical relevance, creating research and programs 
            that drive real institutional and organizational change.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="h-1 w-12 bg-foreground mb-6 group-hover:w-16 transition-all"></div>
              <h3 className="text-2xl font-serif mb-4">Research Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rigorous, applied research on digital transformation, data ethics, 
                and institutional excellence using mixed-method approaches.
              </p>
              <a href="/research" className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn more →
              </a>
            </div>
            
            <div className="group">
              <div className="h-1 w-12 bg-foreground mb-6 group-hover:w-16 transition-all"></div>
              <h3 className="text-2xl font-serif mb-4">Leader Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Executive programs that develop research leaders and institutional 
                change agents capable of driving organizational transformation.
              </p>
              <a href="/programs" className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Explore programs →
              </a>
            </div>
            
            <div className="group">
              <div className="h-1 w-12 bg-foreground mb-6 group-hover:w-16 transition-all"></div>
              <h3 className="text-2xl font-serif mb-4">Regional Impact</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Strategic partnerships across Southeast Asia advancing research, 
                knowledge sharing, and institutional collaboration.
              </p>
              <a href="/partnerships" className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Our partners →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
