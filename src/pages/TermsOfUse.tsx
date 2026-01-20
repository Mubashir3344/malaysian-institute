import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText } from "lucide-react";

const TermsOfUse = () => {
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
                Legal Documents
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Terms of <em className="italic">Use</em>
            </h1>
            <p className="text-muted-foreground mt-6">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto prose-like space-y-8">
              <div>
                <h2 className="text-2xl font-serif mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using this website and services provided by Global Institute of 
                  Applied Research (GIAR), you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on the GIAR website for personal, non-commercial transitory viewing only. This is the grant of 
                  a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Modifying or copying the materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Using the materials for any commercial purpose or for any public display</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Attempting to decompile or reverse engineer any software contained on the site</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Transferring the materials to another person or "mirroring" the materials on any server</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Removing any copyright or proprietary notation from the materials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on the GIAR website are provided on an "as is" basis. GIAR makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including, without 
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                  or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Limitations of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall GIAR or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the materials on the GIAR website, even if GIAR or an authorized representative 
                  has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Accuracy of Materials</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on the GIAR website could include technical, typographical, or 
                  photographic errors. GIAR does not warrant that any of the materials on the website are 
                  accurate, complete, or current. GIAR may make changes to the materials contained on its 
                  website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Links to Third-Party Websites</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GIAR has not reviewed all of the sites linked to its website and is not responsible for 
                  the contents of any such linked site. The inclusion of any link does not imply endorsement 
                  by GIAR of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GIAR may revise these terms of service for its website at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of 
                  these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users agree to conduct themselves in a professional and respectful manner. Prohibited conduct includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Harassment or threatening behavior toward staff, faculty, or other users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Attempts to gain unauthorized access to systems or accounts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Uploading or transmitting viruses or malicious code</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Spam or unsolicited communications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Infringement of intellectual property rights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of Malaysia, and you irrevocably submit to the exclusive jurisdiction of 
                  the courts in Kuala Lumpur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Use, please contact us at 
                  legal@giar-research.my or visit our website at giar-research.my.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
