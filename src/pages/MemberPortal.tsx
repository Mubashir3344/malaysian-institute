import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MemberPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="min-h-[80vh] flex items-center justify-center py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <Lock className="w-10 h-10 text-muted-foreground" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
                Member Portal
              </h1>
              
              <div className="bg-secondary border border-border p-8 mb-8">
                <p className="text-xl font-serif text-foreground mb-4">
                  Registration Currently Closed
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The SIAA Member Portal is currently available to existing members only. 
                  New member registration is temporarily closed while we expand our 
                  institutional capacity.
                </p>
              </div>

              <div className="space-y-6 text-left bg-background border border-border p-8">
                <h2 className="text-lg font-serif">For Existing Members</h2>
                <p className="text-sm text-muted-foreground">
                  If you are an existing SIAA member and require portal access, please 
                  contact the registrar with your membership credentials.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a 
                    href="mailto:registrar@siaa-sg.org" 
                    className="hover:text-muted-foreground transition-colors"
                  >
                    registrar@siaa-sg.org
                  </a>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interested in becoming a member when registration reopens?
                </p>
                <Button asChild variant="outline" className="border-foreground">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Express Interest <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">
                Member <em className="italic">Benefits</em>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Research Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to SIAA's proprietary research databases, analytics tools, 
                    and publication archives.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Training Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Exclusive workshops on research methodology, academic writing, 
                    and integrity best practices.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Plagiarism Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Institutional access to advanced similarity detection tools for 
                    plagiarism checking and originality verification.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow researchers, academics, and institutional 
                    partners across Asia-Pacific.
                  </p>
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

export default MemberPortal;