import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText } from "lucide-react";

const PrivacyPolicy = () => {
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
              Privacy <em className="italic">Policy</em>
            </h1>
            <p className="text-muted-foreground mt-6">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto prose-like space-y-8">
              <div>
                <h2 className="text-2xl font-serif mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Global Institute of Applied Research (GIAR) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may 
                  collect on the site includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other 
                    contact information you voluntarily provide through forms or registration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span><strong>Educational Background:</strong> Information about your academic qualifications, professional 
                    experience, and research interests for program enrollment.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span><strong>Usage Data:</strong> Log files, browser type, IP address, pages visited, time and date, and 
                    similar information collected automatically when you access our website.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span><strong>Cookies:</strong> Information collected through cookies and similar tracking technologies 
                    to enhance your browsing experience.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Process your inquiries and respond to your requests</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Administer program enrollment and provide educational services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Send periodic emails about updates, programs, research, and events</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Improve our website and user experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Ensure the security and integrity of our services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information 
                  unless we provide you with advance notice, except in the following circumstances: (1) to trusted service 
                  providers who assist us in operating our website and conducting our business; (2) to comply with legal 
                  obligations; (3) to protect the rights, privacy, safety, or property of GIAR; or (4) with your consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures designed to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable 
                  means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Right to access your personal information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Right to correct inaccurate information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Right to request deletion of your information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-serif text-foreground">•</span>
                    <span>Right to opt-out of promotional communications</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@giar-research.my.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us at privacy@giar-research.my or write to us at our office 
                  in Kuala Lumpur, Malaysia.
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

export default PrivacyPolicy;
