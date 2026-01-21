import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppliedDataEthics = () => {
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
                Applied Data <em className="italic">Ethics</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Develop expertise in ethical frameworks for data science, AI, and algorithmic 
                decision-making. 8-week program for practitioners working with sensitive data 
                and AI-driven systems.
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
                <p className="text-muted-foreground">8 weeks<br />Online / Blended</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Cohort</h3>
                <p className="text-muted-foreground">15-25 participants<br />Professional level</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-foreground mb-4" />
                <h3 className="font-serif text-lg mb-2">Credential</h3>
                <p className="text-muted-foreground">Post-Graduate Certificate<br />GIAR recognized</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-8">Program <em className="italic">Modules</em></h2>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 1: Data Ethics Foundations</h3>
                  <p className="text-muted-foreground">
                    Foundational ethical frameworks for data science: utilitarianism, 
                    deontology, virtue ethics. History of data ethics. Ethical principles 
                    in data collection, use, and sharing.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 2: Algorithmic Bias & Fairness</h3>
                  <p className="text-muted-foreground">
                    Understanding algorithmic bias: sources, measurement, and impact. 
                    Fairness definitions and trade-offs. Techniques for bias detection 
                    and mitigation. Real-world case studies.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 3: Privacy, Security & Data Protection</h3>
                  <p className="text-muted-foreground">
                    Privacy principles and regulations: GDPR, PDPA, regional frameworks. 
                    De-identification and anonymization techniques. Data security in ethical context. 
                    Privacy-preserving analytics approaches.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 4: Responsible AI & Explainability</h3>
                  <p className="text-muted-foreground">
                    Responsible AI principles. Explainability and interpretability methods. 
                    Black-box model challenges. Stakeholder communication. Governance frameworks 
                    for AI deployment.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 5: Data Governance & Ethics Leadership</h3>
                  <p className="text-muted-foreground">
                    Organizational data governance frameworks. Ethics committees and review processes. 
                    Building ethical data culture. Leading ethical decision-making in organizations 
                    using data and AI.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Module 6: Capstone Project</h3>
                  <p className="text-muted-foreground">
                    Apply learning to real organizational case. Conduct ethical analysis of 
                    data/AI system. Develop recommendations and governance framework. Present 
                    to cohort and faculty.
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
                  "Apply ethical frameworks to data science and AI contexts",
                  "Identify and mitigate algorithmic bias and fairness issues",
                  "Implement privacy-preserving analytics techniques",
                  "Design explainable and interpretable AI systems",
                  "Lead organizational data ethics governance",
                  "Communicate ethical considerations to stakeholders",
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
                Offered bi-annually (March and September cohorts). Online + 2 optional 
                in-person intensives in Kuala Lumpur. Flexible self-paced modules 
                with cohort-based projects and discussions.
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
                Contact: Assoc. Prof. Muhammad Rashid (m.rashid@giar.my)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppliedDataEthics;
