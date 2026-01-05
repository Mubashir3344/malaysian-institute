import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", role: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                  Get in <em className="italic">Touch</em>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  Have a research challenge, training need, or institutional inquiry? 
                  Reach out and our team will respond within 24 hours.
                </p>

                <div className="space-y-8">
                  {/* Institutional Inquiries */}
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Institutional Inquiries
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href="tel:+6531064527" 
                        className="text-lg hover:text-muted-foreground transition-colors"
                      >
                        +65 3106 4527
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Mon–Fri, 9:00 AM – 5:00 PM (SGT)</span>
                    </div>
                  </div>

                  {/* Email Contacts */}
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                      Email
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <a 
                            href="mailto:registrar@siaa-sg.org" 
                            className="hover:text-muted-foreground transition-colors"
                          >
                            registrar@siaa-sg.org
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Student & Account Inquiries
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <a 
                            href="mailto:director@siaa-sg.org" 
                            className="hover:text-muted-foreground transition-colors"
                          >
                            director@siaa-sg.org
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Institutional Partnerships & Turnitin Applications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Registered Office
                    </h3>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                      <div>
                        <p>Singapore Institute of Academic Analytics</p>
                        <p className="text-muted-foreground">
                          1 Fusionopolis Place, #03-01<br />
                          Galaxis, Singapore 138522
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      I am a *
                    </label>
                    <Select 
                      value={formData.role} 
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                    >
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="independent-scholar">Independent Scholar</SelectItem>
                        <SelectItem value="institution-partner">Institution Partner</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plagiarism-training">Plagiarism Training</SelectItem>
                        <SelectItem value="research-collaboration">Research Collaboration</SelectItem>
                        <SelectItem value="institutional-partnership">Institutional Partnership</SelectItem>
                        <SelectItem value="turnitin-access">Turnitin Access</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-border resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;