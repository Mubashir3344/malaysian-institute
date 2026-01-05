import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, BookOpen, Users } from "lucide-react";

const AcademicIntegrity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Academic Integrity & Plagiarism Prevention
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Institutional Policy on <em className="italic">Scholarly Originality</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Singapore Institute of Academic Analytics (SIAA) maintains a zero-tolerance 
                policy toward academic dishonesty, including plagiarism, data fabrication, and 
                unauthorized collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Similarity Detection Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-foreground" />
                  <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Our Technology Framework
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                  Advanced <em className="italic">Similarity Detection</em> Systems
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To uphold the highest standards of academic integrity, SIAA utilizes 
                  industry-leading similarity detection platforms as our institutional 
                  evaluation engines. This ensures the authenticity of every submission.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our internal threshold for similarity indices is strictly monitored to 
                  ensure the authenticity of every citation and the originality of every conclusion.
                </p>
              </div>
              <div className="bg-secondary p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12" />
                  </div>
                  <p className="text-2xl font-serif">Integrity Framework</p>
                  <p className="text-sm text-muted-foreground mt-2">Multi-Platform Detection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Standards */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
              Submission <em className="italic">Standards</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Mandatory Similarity Check</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All research papers, whitepapers, and student assessments affiliated with 
                  SIAA must undergo a mandatory similarity check before publication or submission.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Citation Verification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our advanced analytics identify patterns of text-recycling and verify 
                  proper attribution across APA, Harvard, and Vancouver citation styles.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-4">Human Oversight</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Academic Ethics Committee (AEC) reviews all similarity reports 
                  for high-stakes research to ensure scholarly integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Role of <em className="italic">Academic Analytics</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We utilize advanced analytics to identify patterns of text-recycling and to 
                educate our members on the nuances of proper attribution. SIAA provides regular 
                workshops on:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Advanced Citation Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive training in APA, Harvard, and Vancouver citation styles 
                    for academic publications.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">The Ethical Use of AI in Research</h3>
                  <p className="text-muted-foreground">
                    Guidelines and best practices for incorporating AI tools while 
                    maintaining academic integrity.
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-6 py-2">
                  <h3 className="text-xl font-serif mb-2">Paraphrasing and Synthesis Techniques</h3>
                  <p className="text-muted-foreground">
                    Methods for effective paraphrasing and synthesizing sources to 
                    produce original scholarly work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Oversight */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Institutional <em className="italic">Oversight</em>
              </h2>
              <p className="text-xl text-background/80 leading-relaxed mb-12">
                Our Academic Ethics Committee (AEC) reviews all similarity reports 
                for high-stakes research to ensure that the "human element" of scholarship 
                remains intact while benefiting from the precision of world-class technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-background text-background hover:bg-background hover:text-foreground"
                >
                  Download Full Policy (PDF)
                </Button>
                <Button 
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="/contact">Contact Academic Ethics Committee</a>
                </Button>
              </div>
              <p className="text-sm text-background/60 mt-12">
                Approved by the Board of Fellows, SIAA Singapore
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicIntegrity;