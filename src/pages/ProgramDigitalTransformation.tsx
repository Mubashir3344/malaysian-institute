import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const DigitalTransformation = () => {
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
                Digital Transformation <em className="italic">Management</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Master digital transformation strategy, organizational change, technology 
                adoption, and leadership in the digital age. 6-week blended program designed 
                for organizational leaders.
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
                <p className="text-muted-foreground">6 weeks<br />Blended format</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Cohort</h3>
                <p className="text-muted-foreground">20-25 participants<br />Small group learning</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Credential</h3>
                <p className="text-muted-foreground">Executive Certificate<br />GIAR recognized</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-8">Program <em className="italic">Structure</em></h2>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Week 1-2: Digital Strategy & Vision</h3>
                  <p className="text-muted-foreground">
                    Develop your organization's digital transformation strategy. Assess current 
                    capabilities, market opportunities, and competitive positioning. Create a 
                    strategic roadmap aligned with business objectives.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Week 2-3: Change Management & Stakeholder Engagement</h3>
                  <p className="text-muted-foreground">
                    Master organizational change leadership. Learn frameworks for stakeholder 
                    engagement, resistance management, and building digital literacy across 
                    teams. Real-world case studies from Malaysian organizations.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Week 3-4: Technology & Implementation</h3>
                  <p className="text-muted-foreground">
                    Understand key enabling technologies: cloud infrastructure, IoT, analytics, 
                    and AI. Explore implementation strategies, technology selection, and 
                    integration challenges. Workshop with technology partners.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Week 4-5: Risk, Governance & Security</h3>
                  <p className="text-muted-foreground">
                    Manage cybersecurity risks, data governance, and regulatory compliance 
                    during transformation. Develop risk mitigation strategies. Align with 
                    organizational governance frameworks.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Week 5-6: Capstone & Integration</h3>
                  <p className="text-muted-foreground">
                    Develop a comprehensive capstone project applying learning to your 
                    organization. Present findings to cohort and instructors. Integration 
                    of strategy, change, technology, and governance.
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
                  "Develop and communicate digital transformation strategy",
                  "Lead organizational change and manage stakeholder resistance",
                  "Evaluate and implement enabling technologies effectively",
                  "Manage cybersecurity, data, and governance risks",
                  "Build digital capability across teams and organization",
                  "Measure and optimize digital transformation impact",
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
                Quarterly cohorts begin in Q1, Q2, Q3, and Q4 each year. 
                Early-bird registration offers 10% discount. Custom in-house 
                programs available for organizations with 12+ participants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Enroll Now</a>
                </Button>
                <Button asChild variant="outline" className="border-foreground">
                  <a href="/news">View Upcoming Cohorts</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Contact: Assoc. Prof. Rajesh Gupta (rajesh.gupta@giar-research.my)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTransformation;
