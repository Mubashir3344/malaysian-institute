import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, CheckCircle } from "lucide-react";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Institutional Values
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Code of <em className="italic">Conduct</em>
            </h1>
            <p className="text-muted-foreground mt-6">Ethical Standards for Research and Professional Excellence</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto prose-like space-y-8">
              <div>
                <h2 className="text-2xl font-serif mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GIAR is committed to fostering an environment of integrity, respect, and excellence. 
                  This Code of Conduct establishes expectations for professional behavior and ethical 
                  standards for all members of the GIAR community—faculty, staff, students, and partners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Integrity in Research</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Research integrity is the foundation of our work. All researchers and scholars are expected to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Conduct research with honesty and accuracy",
                    "Acknowledge all sources and properly attribute intellectual contributions",
                    "Avoid plagiarism, fabrication, and falsification of data",
                    "Disclose conflicts of interest transparently",
                    "Follow established protocols for research ethics approval",
                    "Protect research participants' rights and confidentiality",
                    "Report findings truthfully, even when results are unexpected or unfavorable",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Respectful Collaboration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We foster inclusive, respectful workplaces and learning environments. All community members are expected to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Treat colleagues, students, and partners with respect and dignity",
                    "Avoid discrimination based on protected characteristics",
                    "Create psychologically safe environments for open dialogue",
                    "Address conflicts through constructive communication",
                    "Support diversity of perspectives and backgrounds",
                    "Respect boundaries and consent in all interactions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Professional Excellence</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Professional excellence requires dedication and accountability. All members are expected to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Pursue continuous learning and professional development",
                    "Maintain competence in their field of work",
                    "Deliver high-quality work and services",
                    "Meet commitments and deadlines reliably",
                    "Seek feedback and demonstrate willingness to improve",
                    "Support the professional development of peers and junior colleagues",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Responsible Leadership</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Those in leadership positions have particular responsibility to model ethical behavior:
                </p>
                <ul className="space-y-3">
                  {[
                    "Model integrity and ethical decision-making",
                    "Create psychologically safe environments where concerns can be raised",
                    "Hold themselves and others accountable to institutional standards",
                    "Make decisions in the best interests of the institution and community",
                    "Ensure transparent communication about decisions and rationale",
                    "Support fair and equitable treatment of all team members",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Protecting Vulnerable Populations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GIAR is particularly committed to protecting research participants and vulnerable populations:
                </p>
                <ul className="space-y-3">
                  {[
                    "Ensure informed consent in all research involving human subjects",
                    "Minimize risks and maximize benefits in research design",
                    "Maintain strict confidentiality and anonymity where appropriate",
                    "Provide fair compensation for research participation",
                    "Have clear mechanisms for addressing harm or distress",
                    "Ensure equitable distribution of research benefits",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Reporting & Accountability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GIAR is committed to addressing misconduct through fair processes:
                </p>
                <ul className="space-y-3">
                  {[
                    "Violations of this Code may be reported to ethics@giar-research.my",
                    "All reports will be treated seriously and investigated promptly",
                    "Retaliation against individuals who report concerns is prohibited",
                    "Investigations will be conducted fairly and confidentially",
                    "Appropriate remedial action will be taken when violations are confirmed",
                    "Regular training on research ethics and professional conduct is provided",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border-2 border-foreground p-6 rounded mt-8">
                <h3 className="text-xl font-serif mb-3">Questions or Concerns?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Code of Conduct or need to report a concern, 
                  please contact our Ethics Committee:
                </p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p><strong>Email:</strong> ethics@giar-research.my</p>
                  <p><strong>Phone:</strong> +60 3-xxxx-xxxx</p>
                  <p><strong>Address:</strong> GIAR, Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CodeOfConduct;
