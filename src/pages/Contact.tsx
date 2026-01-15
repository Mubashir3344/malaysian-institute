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
import { Mail, MapPin, Clock } from "lucide-react";

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
                  Have questions about our certification programs, institutional 
                  training, or ethics consulting services? Reach out and our team 
                  will respond within 24 hours.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      General Inquiries
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-lg">Use the contact form or email dean@srec-edu.org</span>
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
                            href="mailto:dean@srec-edu.org" 
                            className="hover:text-muted-foreground transition-colors"
                          >
                            dean@srec-edu.org
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Dean's Office & Program Inquiries
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <a 
                            href="mailto:board@srec-edu.org" 
                            className="hover:text-muted-foreground transition-colors"
                          >
                            board@srec-edu.org
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Board Secretariat & Institutional Partnerships
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
                        <p>Singapore Research Ethics Council</p>
                        <p className="text-muted-foreground">
                          7 Temasek Boulevard, #12-07<br />
                          Suntec Tower One, Singapore 038987
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
                        <SelectItem value="postgraduate">Postgraduate Student</SelectItem>
                        <SelectItem value="institution-rep">Institution Representative</SelectItem>
                        <SelectItem value="ethics-officer">Ethics Officer</SelectItem>
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
                        <SelectItem value="certification">Certification Programs</SelectItem>
                        <SelectItem value="institutional-training">Institutional Training</SelectItem>
                        <SelectItem value="ethics-consulting">Ethics Consulting</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
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
