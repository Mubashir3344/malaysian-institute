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
    description: "Our internal process for addressing student concerns fairly and promptly.",
    content: `United Seas College is committed to resolving disputes and grievances fairly and promptly. Our process includes:

1. **Internal Resolution**: Students should first raise concerns with their course instructor or the academic department.

2. **Formal Complaint**: If unresolved, submit a written complaint to the Academic Director within 14 days.

3. **Review Process**: The Academic Director will review and respond within 21 working days.

4. **CPE Mediation-Arbitration Scheme**: If still unresolved, students may seek mediation through the CPE Mediation-Arbitration Scheme as a last resort.

All complaints are handled confidentially and without prejudice to the student's academic standing.`,
  },
  {
    icon: Shield,
    title: "Personal Data Protection (PDPA)",
    description: "How we collect, use, and protect your personal information.",
    content: `In accordance with the Personal Data Protection Act 2020 (PDPA), United Seas College is committed to protecting your personal data.

**Data Collection**: We collect personal data necessary for enrollment, academic administration, and regulatory compliance.

**Purpose of Use**: Your data is used for:
- Student registration and administration
- Academic progress tracking
- Communication about programmes and services
- Regulatory reporting to CPE and relevant authorities

**Data Protection**: We implement appropriate security measures to protect your data against unauthorized access, modification, or disclosure.

**Your Rights**: You may request access to or correction of your personal data by contacting our Data Protection Officer at admin@usc.edu.sg.`,
  },
  {
    icon: CreditCard,
    title: "Fee Protection Scheme",
    description: "Measures to protect students' course fees.",
    content: `United Seas College participates in the Fee Protection Scheme (FPS) as required by CPE regulations.

**Coverage**: Course fees are protected through approved insurance or escrow arrangements.

**How It Works**: In the event of school closure or inability to continue operations, students are entitled to refunds of unused course fees.

**Documentation**: Students will receive documentation of FPS coverage upon enrollment.

For more details on our fee protection arrangements, please contact our administration office.`,
  },
  {
    icon: FileText,
    title: "Refund Policy",
    description: "Terms and conditions for course fee refunds.",
    content: `Our refund policy ensures fair treatment for all students:

**Before Course Commencement**:
- Full refund if withdrawal is 7 or more days before course start
- 50% refund if withdrawal is less than 7 days before course start

**After Course Commencement**:
- Refunds calculated based on the percentage of course not yet consumed
- Administrative fees may apply

**Documentation Required**:
- Written withdrawal request
- Original payment receipts
- Student identification

Refunds are processed within 14 working days of approval.`,
  },
];

const faqs = [
  {
    question: "How do I apply for a programme?",
    answer: "You can apply by contacting our admissions office at admin@usc.edu.sg or calling (+65) 6015-0851. Our team will guide you through the application process and required documents.",
  },
  {
    question: "What are the entry requirements?",
    answer: "Entry requirements vary by programme. Generally, diploma programmes require GCE 'O' Level passes or equivalent. Specific requirements are listed on each programme page.",
  },
  {
    question: "Are classes conducted online or in-person?",
    answer: "USC offers a fixed-schedule virtual classroom environment, allowing students to participate in interactive classes from anywhere. Some practical components may require in-person attendance.",
  },
  {
    question: "How are assessments conducted?",
    answer: "Assessments include a combination of assignments, projects, presentations, and examinations. Specific assessment methods vary by programme and are detailed in course outlines.",
  },
  {
    question: "Can I get my certificate recognized internationally?",
    answer: "Our programmes are designed to meet industry standards. For international recognition, please consult with the relevant authorities in your target country.",
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
              <Badge variant="secondary" className="mb-4">Student Support</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Policies & Support
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Access important policies, procedures, and resources to support your 
                educational journey at United Seas College.
              </p>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Student Policies
              </h2>
              <p className="text-muted-foreground">
                Important policies and procedures every student should be aware of.
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
                Find answers to common questions about studying at USC.
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
                    For urgent matters, contact our student support team at{" "}
                    <a href="tel:+6560150851" className="text-primary hover:underline">(+65) 6015-0851</a>
                    {" "}or email{" "}
                    <a href="mailto:admin@usc.edu.sg" className="text-primary hover:underline">admin@usc.edu.sg</a>
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
