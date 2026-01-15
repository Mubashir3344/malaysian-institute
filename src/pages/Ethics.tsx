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
                Ethics & Integrity Framework
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Institutional Policy on <em className="italic">Research Integrity</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Singapore Research Ethics Council (SREC) maintains rigorous standards 
                for research integrity, providing the framework for all our certification 
                programs and institutional guidance.
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
                  SREC's ethics framework is built on internationally recognized 
                  principles of responsible research conduct. Our certification programs 
                  instill these values in every researcher we train.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that ethical research is not merely about compliance, 
                  but about cultivating a mindset of integrity that permeates 
                  every aspect of scholarly work.
                </p>
              </div>
              <div className="bg-secondary p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12" />
                  </div>
                  <p className="text-2xl font-serif">Ethics Framework</p>
                  <p className="text-sm text-muted-foreground mt-2">Guided by Dr. Julian Chen, Chief Ethics Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Standards */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
              Key <em className="italic">Standards</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Honesty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Truthful reporting of data, methods, results, and publication status. 
                  No fabrication, falsification, or misrepresentation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Accountability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Researchers are responsible for the integrity of their work and 
                  must be able to justify their methods and conclusions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Respect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proper acknowledgment of contributions, fair treatment of 
                  research subjects, and consideration for colleagues and society.
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
                What We <em className="italic">Teach</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Our certification programs cover comprehensive ethics training 
                across all stages of the research lifecycle:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Research Design Ethics</h3>
                  <p className="text-muted-foreground">
                    Ethical considerations in hypothesis formulation, methodology selection, 
                    and study design for human and non-human subjects.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Data Collection & Management</h3>
                  <p className="text-muted-foreground">
                    Informed consent, privacy protection, data security, and 
                    responsible data handling practices.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Publication & Authorship</h3>
                  <p className="text-muted-foreground">
                    Proper attribution, authorship criteria, peer review ethics, 
                    and avoiding predatory publishing practices.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">AI & Emerging Technologies</h3>
                  <p className="text-muted-foreground">
                    Ethical use of AI tools in research, disclosure requirements, 
                    and navigating new technological challenges.
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
                Ethics <em className="italic">Leadership</em>
              </h2>
              <p className="text-xl text-background/80 leading-relaxed mb-8">
                SREC's ethics framework is guided by our Chief Ethics Officer, 
                Dr. Julian Chen, and overseen by the SREC Board of Governors.
              </p>
              <p className="text-background/70 leading-relaxed mb-12">
                All SREC policies and certification curricula are developed in accordance 
                with international standards including the Singapore Statement on 
                Research Integrity and relevant institutional guidelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-background text-background hover:bg-background hover:text-foreground"
                >
                  Download SREC Ethics Charter (PDF)
                </Button>
                <Button 
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="/contact">Contact Ethics Office</a>
                </Button>
              </div>
              <p className="text-sm text-background/60 mt-12">
                Approved by the Board of Governors, SREC Singapore
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
