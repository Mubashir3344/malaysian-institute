import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, BookOpen, Users } from "lucide-react";

const Ethics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Academic Integrity Policy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                GIAR's Commitment to <em className="italic">Academic Excellence</em> & Integrity
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Global Institute of Applied Research (GIAR) maintains rigorous standards 
                for academic integrity, fully aligned with Malaysian Qualifications Agency 
                (MQA) standards and international best practices. This policy guides all 
                institutional activities, research initiatives, and educational programs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-foreground" />
                  <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Our Foundation
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                  Core <em className="italic">Principles</em>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  GIAR's academic integrity framework is grounded in MQA standards 
                  and internationally recognized principles of scholarly conduct. These 
                  values permeate all our teaching, research, and institutional practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that academic integrity is not merely about compliance, 
                  but about cultivating a culture of excellence where honesty, 
                  accountability, and respect form the foundation of all scholarly work.
                </p>
              </div>
              <div className="bg-secondary p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12" />
                  </div>
                  <p className="text-2xl font-serif">MQA-Aligned Framework</p>
                  <p className="text-sm text-muted-foreground mt-2">Guided by Dr. Fatimah Yusof, Academic Integrity Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Standards */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
              MQA Compliance & Key <em className="italic">Standards</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Academic Honesty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Truthful representation of work, proper attribution, and avoidance 
                  of plagiarism, fabrication, and falsification. Aligned with MQA 
                  standards for student conduct and research ethics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Accountability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All researchers and students are responsible for the integrity 
                  of their work. GIAR investigates violations and ensures fair 
                  disciplinary processes per MQA institutional governance requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Respect & Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fair treatment of research subjects, proper acknowledgment of 
                  contributions, and consideration for the broader academic community 
                  and society. Central to MQA standards for ethical conduct.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Areas */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Our <em className="italic">Policy Areas</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                GIAR's academic integrity policy covers all aspects of institutional 
                life, grounded in Malaysian Qualifications Agency (MQA) standards and 
                best practices for higher learning institutions:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Student Academic Integrity</h3>
                  <p className="text-muted-foreground">
                    Policies on plagiarism, appropriate use of AI and generative tools, 
                    proper citation, collaborative work guidelines, and conduct standards 
                    aligned with MQA requirements for student evaluation and assessment.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Research Ethics</h3>
                  <p className="text-muted-foreground">
                    Ethical conduct in research design, data collection, data management, 
                    and informed consent. GIAR's research standards align with MQA 
                    institutional review requirements and international research ethics protocols.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Publication & Authorship</h3>
                  <p className="text-muted-foreground">
                    Guidelines on authorship criteria, proper attribution, peer review 
                    ethics, avoiding predatory publishing, and managing conflicts of interest. 
                    Ensures compliance with international publication standards.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Investigation & Remediation</h3>
                  <p className="text-muted-foreground">
                    Transparent processes for handling alleged violations, ensuring fair 
                    hearings and appropriate remedial actions per MQA institutional 
                    governance standards and due process requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Policy <em className="italic">Implementation</em> & Oversight
              </h2>
              <p className="text-xl text-background/80 leading-relaxed mb-8">
                GIAR's academic integrity framework is implemented and overseen by our 
                Academic Council, headed by Dr. Fatimah Yusof, Academic Integrity Officer, 
                and guided by our Board of Trustees.
              </p>
              <p className="text-background/70 leading-relaxed mb-12">
                All GIAR policies and institutional practices are developed in accordance 
                with Malaysian Qualifications Agency (MQA) standards for private higher 
                learning institutions, ensuring alignment with national quality frameworks 
                and international best practices in academic governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-background text-background hover:bg-background hover:text-foreground"
                >
                  Academic Integrity Policy (PDF)
                </Button>
                <Button 
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="/contact">Contact Integrity Office</a>
                </Button>
              </div>
              <p className="text-sm text-background/60 mt-12">
                Policy approved by GIAR Board of Trustees. Aligned with MQA standards 
                for Malaysian higher learning institutions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ethics;
