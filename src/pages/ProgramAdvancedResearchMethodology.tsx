import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdvancedResearchMethodology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Post-Graduate Certificate
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Advanced Research <em className="italic">Methodology & Design</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Advance your research expertise through rigorous methodology training. 
                10-week blended program covering quantitative, qualitative, and mixed-methods approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div>
                <Clock className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Duration</h3>
                <p className="text-muted-foreground">10 weeks<br />Blended format</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Cohort</h3>
                <p className="text-muted-foreground">15-20 participants<br />Researcher level</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Credential</h3>
                <p className="text-muted-foreground">Post-Graduate Certificate<br />GIAR recognized</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-8">Program <em className="italic">Curriculum</em></h2>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 1-2: Research Design Principles</h3>
                  <p className="text-muted-foreground">
                    Foundations of rigorous research design. Logic of inquiry, research questions, 
                    hypothesis formulation. Validity threats and control strategies. Ethical 
                    considerations in research design.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 3-4: Quantitative Methods & Statistics</h3>
                  <p className="text-muted-foreground">
                    Research design for quantitative studies. Sampling strategies. Measurement 
                    and operationalization. Statistical analysis: descriptive, inferential, 
                    and advanced techniques.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 5-6: Qualitative Research & Analysis</h3>
                  <p className="text-muted-foreground">
                    Qualitative inquiry paradigms and designs. Data collection: interviews, 
                    focus groups, observation. Qualitative analysis: coding, thematic analysis, 
                    phenomenology.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 7-8: Mixed-Methods Integration</h3>
                  <p className="text-muted-foreground">
                    Mixed-methods research designs and logics. Quantitative-qualitative integration 
                    strategies. Sequential, concurrent, and transformative designs. Data mixing 
                    and interpretation.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 9: Emerging Methodologies & Innovation</h3>
                  <p className="text-muted-foreground">
                    Contemporary research approaches: action research, design research, 
                    computational methods. Innovative data sources. Methodological challenges 
                    in digital age research.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 10: Capstone Proposal</h3>
                  <p className="text-muted-foreground">
                    Develop comprehensive research proposal. Design methodology aligned with 
                    research questions. Data collection and analysis plan. Address validity and 
                    ethical considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-12">Learning <em className="italic">Outcomes</em></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Design rigorous research studies aligned with research questions",
                  "Conduct quantitative analysis and interpret statistical findings",
                  "Execute qualitative research and perform thematic analysis",
                  "Integrate mixed-methods approaches effectively",
                  "Ensure research validity, reliability, and ethical standards",
                  "Communicate methodological choices to scholarly audiences",
                ].map((outcome, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-6">
                Enrollment & <em className="italic">Schedule</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Offered twice yearly (February and August cohorts). Blended format combines 
                self-paced online modules with 4 intensive weekend workshops in Kuala Lumpur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Enroll Now</a>
                </Button>
                <Button asChild variant="outline" className="border-foreground">
                  <a href="/news">View Schedule</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Contact: Dr. Siti Nurul Hassan (siti.hassan@giar-research.my)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdvancedResearchMethodology;
