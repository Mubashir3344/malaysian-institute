import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What programs does GIAR offer?",
    answer:
      "GIAR offers four executive education and post-graduate programs: Digital Transformation Management (6 weeks), Applied Data Ethics (8 weeks), Advanced Research Methodology (10 weeks), and Institutional Research Leadership (12 weeks). All programs are offered in blended formats with flexible scheduling.",
  },
  {
    question: "Are GIAR programs accredited?",
    answer:
      "GIAR is established in accordance with Malaysian Qualifications Agency (MQA) guidelines for private higher learning institutions. All programs are designed to align with MQA standards for quality assurance. Certificates are issued by GIAR and recognized for professional development.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Admission requires a bachelor's degree for postgraduate programs and relevant professional experience. For executive education programs, professional experience is preferred. Submit application through our online portal with transcript and professional resume. Limited technical prerequisites.",
  },
  {
    question: "Can I enroll in programs online?",
    answer:
      "Yes. All programs offer online options with varying blended components. The Digital Transformation program includes two in-person intensives; Applied Data Ethics offers optional intensives; Advanced Research Methodology includes four intensive weekends; and Institutional Research Leadership includes six intensive workshops.",
  },
  {
    question: "What is the schedule and time commitment?",
    answer:
      "Programs range from 6-12 weeks with varying time commitments. Digital Transformation: 6 weeks (8-10 hours/week). Applied Data Ethics: 8 weeks (6-8 hours/week). Advanced Methodology: 10 weeks (8-12 hours/week). Research Leadership: 12 weeks (6-8 hours/week). All programs balance work and study.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "GIAR offers limited scholarships for Malaysian academics and researchers from registered higher learning institutions. Early-bird discounts (10%) are available for early registration. Installment payment plans are available. Contact admissions for scholarship opportunities.",
  },
  {
    question: "Can organizations arrange customized programs?",
    answer:
      "Yes. GIAR offers in-house customized programs for organizations with 12+ participants. Programs can be tailored to organizational context and needs. Contact Assoc. Prof. Rajesh Gupta (rajesh.gupta@giar.my) for corporate training inquiries.",
  },
  {
    question: "Does GIAR conduct research?",
    answer:
      "Yes. GIAR operates four research centers: Digital Transformation Research Center, Applied Data Ethics & AI Governance Lab, Research Methodology & Design Institute, and Institutional Research Excellence & Policy. We welcome research collaborations, partnerships, and joint initiatives.",
  },
  {
    question: "How can institutions partner with GIAR?",
    answer:
      "GIAR welcomes partnerships for research collaboration, joint programs, institutional training, and capacity building. Visit our Research Collaboration or Partnerships pages, or contact our office directly with your collaboration proposal.",
  },
  {
    question: "What does GIAR's academic integrity policy cover?",
    answer:
      "GIAR's academic integrity policy covers student conduct, research ethics, publication standards, data management, and institutional governance. All policies align with MQA standards. Policies address plagiarism, academic honesty, responsible conduct, and investigation procedures.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Frequently Asked <em className="italic">Questions</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about GIAR programs, admissions, research, 
                and institutional operations.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-lg font-serif hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Additional Help */}
            <div className="max-w-3xl mx-auto mt-16 bg-secondary p-8 border border-border rounded text-center">
              <h3 className="text-2xl font-serif mb-4">Didn't find your answer?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our admissions team or reach out to specific faculty for program-related 
                questions. We're here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted-foreground"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
