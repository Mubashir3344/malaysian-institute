import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Scale, FileText, HelpCircle, CreditCard, AlertCircle } from "lucide-react";

const policies = [
  {
    icon: Scale,
    title: "Dispute & Grievance Resolution",
    description: "Our internal process for addressing researcher concerns fairly and promptly.",
    content: `United Seas Research Institute is committed to resolving disputes and grievances fairly and promptly. Our process includes:

1. **Internal Resolution**: Researchers should first raise concerns with their research supervisor or the relevant department.

2. **Formal Complaint**: If unresolved, submit a written complaint to the Research Director within 14 days.

3. **Review Process**: The Research Director will review and respond within 21 working days.

4. **External Mediation**: If still unresolved, researchers may seek mediation through appropriate external channels.

All complaints are handled confidentially and without prejudice to the researcher's standing.`,
  },
  {
    icon: Shield,
    title: "Personal Data Protection (PDPA)",
    description: "How we collect, use, and protect your personal information.",
    content: `In accordance with the Personal Data Protection Act 2020 (PDPA), United Seas Research Institute is committed to protecting your personal data.

**Data Collection**: We collect personal data necessary for research administration, collaboration, and regulatory compliance.

**Purpose of Use**: Your data is used for:
- Researcher registration and administration
- Research project tracking
- Communication about programmes and opportunities
- Regulatory reporting to relevant authorities

**Data Protection**: We implement appropriate security measures to protect your data against unauthorized access, modification, or disclosure.

**Your Rights**: You may request access to or correction of your personal data by contacting our Data Protection Officer at admin@usri.edu.sg.`,
  },
  {
    icon: CreditCard,
    title: "Research Funding Guidelines",
    description: "Guidelines for research funding and grant management.",
    content: `United Seas Research Institute maintains transparent guidelines for research funding management.

**Funding Sources**: Research may be funded through institutional grants, external partnerships, or government schemes.

**Accountability**: All funded research must adhere to strict financial accountability and reporting standards.

**Intellectual Property**: IP rights are handled according to our institutional policies and funding agreements.

For more details on research funding guidelines, please contact our administration office.`,
  },
  {
    icon: FileText,
    title: "Research Ethics Policy",
    description: "Guidelines for ethical research conduct.",
    content: `Our research ethics policy ensures the highest standards of integrity:

**Ethics Review**:
- All research involving human subjects requires ethics committee approval
- Animal research must comply with relevant regulations
- Data collection must follow informed consent protocols

**Research Integrity**:
- Zero tolerance for plagiarism or data fabrication
- Proper attribution and citation required
- Conflict of interest disclosure mandatory

**Compliance**:
- All researchers must complete ethics training
- Regular audits and reviews conducted
- Violations result in disciplinary action`,
  },
];

const faqs = [
  {
    question: "How do I apply for a research programme?",
    answer: "You can apply by contacting our research team at admin@usri.edu.sg or calling (+65) 6531-064527. Our team will guide you through the application process and required documents.",
  },
  {
    question: "What are the entry requirements?",
    answer: "Entry requirements vary by programme. Generally, research programmes require relevant academic qualifications and research experience. Specific requirements are listed on each programme page.",
  },
  {
    question: "Are research activities conducted on-site or remotely?",
    answer: "USRI offers flexible research arrangements, allowing researchers to work both on-site in our facilities and remotely. Some experimental work may require on-site presence.",
  },
  {
    question: "How are research outputs evaluated?",
    answer: "Research outputs are evaluated through peer review, publication metrics, impact assessments, and progress presentations. Specific evaluation methods vary by programme and are detailed in research guidelines.",
  },
  {
    question: "Can I collaborate with international researchers?",
    answer: "Yes, we actively encourage international research collaboration. Our programmes include opportunities for cross-institutional projects and partnerships.",
  },
];

const StudentSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Researcher Support</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Policies & Support
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Access important policies, procedures, and resources to support your 
                research journey at United Seas Research Institute.
              </p>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Research Policies
              </h2>
              <p className="text-muted-foreground">
                Important policies and procedures every researcher should be aware of.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policies.map((policy) => (
                <Card key={policy.title} className="bg-card shadow-soft hover:shadow-card transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-usc-sky flex items-center justify-center">
                        <policy.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-serif">{policy.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{policy.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {policy.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="whitespace-pre-line text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about researching at USRI.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg shadow-soft border-none px-6">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-12 bg-usc-cream">
          <div className="container mx-auto px-4">
            <Card className="bg-card shadow-card border-l-4 border-l-accent">
              <CardContent className="flex items-center gap-4 p-6">
                <AlertCircle className="h-10 w-10 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground text-sm">
                    For urgent matters, contact our research support team at{" "}
                    <a href="tel:+6531064527" className="text-primary hover:underline">(+65) 6531-064527</a>
                    {" "}or email{" "}
                    <a href="mailto:admin@usri.edu.sg" className="text-primary hover:underline">admin@usri.edu.sg</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentSupport;