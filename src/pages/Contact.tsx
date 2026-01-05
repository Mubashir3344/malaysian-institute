import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", institution: "", message: "" });
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
                  Let's advance <em className="italic">research</em> together
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  Have a research challenge or training need? We'd love to hear from you. 
                  Reach out and our team will respond within 24 hours.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Email
                    </h3>
                    <a 
                      href="mailto:contact@siaa.edu.sg" 
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      contact@siaa.edu.sg
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-lg">Singapore</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
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
                      Email
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
                    <label htmlFor="institution" className="block text-sm font-medium mb-2">
                      Institution (optional)
                    </label>
                    <Input
                      id="institution"
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
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
