import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstitutionalResearchLeadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Executive Education
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Institutional Research <em className="italic">Leadership</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Develop strategic competencies for research leadership. 12-week program for 
                research directors, senior faculty, and institutional leaders building research 
                culture and excellence.
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
                <p className="text-muted-foreground">12 weeks<br />Blended format</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Cohort</h3>
                <p className="text-muted-foreground">12-18 participants<br />Leadership level</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Credential</h3>
                <p className="text-muted-foreground">Executive Certificate<br />GIAR recognized</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-8">Program <em className="italic">Modules</em></h2>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 1-2: Research Strategy & Vision</h3>
                  <p className="text-muted-foreground">
                    Develop institutional research strategy aligned with mission. Assess research 
                    capacity and aspirations. Build research vision. Alignment with national research 
                    agendas and funding priorities.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 3-4: Research Governance & Ethics</h3>
                  <p className="text-muted-foreground">
                    Institutional research governance frameworks. Ethics committees and review 
                    processes. Compliance with MQA standards. Research conduct policies. Academic 
                    integrity leadership.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 5-6: Funding & Research Partnerships</h3>
                  <p className="text-muted-foreground">
                    Landscape of research funding: government, corporate, international. Grant 
                    writing and proposal development. Partnership strategies with industry and 
                    other institutions. Managing research agreements.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 7-8: Building Research Culture</h3>
                  <p className="text-muted-foreground">
                    Creating institutional culture valuing research excellence. Mentoring and 
                    supporting researchers. Research incentives and recognition. Career pathways. 
                    Faculty development in research.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 9: Quality Assurance & Impact</h3>
                  <p className="text-muted-foreground">
                    Research quality metrics and assessment. Impact measurement and communication. 
                    Benchmarking against peer institutions. Continuous improvement frameworks. 
                    MQA quality expectations.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 10-12: Leadership Integration & Capstone</h3>
                  <p className="text-muted-foreground">
                    Strategic leadership in higher education context. Change management and innovation. 
                    Stakeholder engagement. Capstone project: develop comprehensive institutional 
                    research plan integrating strategy, governance, funding, culture, and quality.
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
                  "Develop strategic institutional research vision and strategy",
                  "Establish and manage research governance frameworks",
                  "Secure research funding and build partnerships",
                  "Foster institutional research culture and excellence",
                  "Measure research impact and ensure quality",
                  "Lead research-focused organizational change",
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
                Offered annually starting in February. Blended format with 6 intensive 
                two-day workshops in Kuala Lumpur and cohort-based projects. Custom 
                in-house programs available for organizational groups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Enroll Now</a>
                </Button>
                <Button asChild variant="outline" className="border-foreground">
                  <a href="/news">View Details</a>
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

export default InstitutionalResearchLeadership;
