import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Briefcase, MapPin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobOpening {
  title: string;
  department: string;
  level: string;
  type: string;
  description: string;
}

const jobs: JobOpening[] = [
  {
    title: "Researcher - Digital Transformation",
    department: "Digital Transformation Research Center",
    level: "Mid-Level",
    type: "Full-Time",
    description:
      "Join our research team investigating digital transformation in Malaysian organizations. Conduct primary research, lead projects, publish findings. Ph.D. or master's in relevant field required.",
  },
  {
    title: "Postdoctoral Fellow - Applied Data Ethics",
    department: "Applied Data Ethics & AI Governance Lab",
    level: "Early Career",
    type: "Full-Time",
    description:
      "Research fellowship focusing on algorithmic fairness and responsible AI. Conduct independent and collaborative research, publish papers, contribute to lab leadership. Ph.D. required, preferably in computer science, statistics, or related field.",
  },
  {
    title: "Program Coordinator - Professional Development",
    department: "Professional Development & Executive Education",
    level: "Entry-Level",
    type: "Full-Time",
    description:
      "Manage program operations, student communications, scheduling, and administrative support for professional programs. Bachelor's degree required. Strong organizational and communication skills.",
  },
  {
    title: "Senior Curriculum Developer",
    department: "Academic Programs",
    level: "Senior",
    type: "Full-Time",
    description:
      "Design and develop curricula for executive education and postgraduate programs. Lead curriculum review and quality assurance. Advanced degree required, experience in higher education preferred.",
  },
  {
    title: "Research Ethics Specialist",
    department: "Academic Integrity & Ethics",
    level: "Mid-Level",
    type: "Full-Time",
    description:
      "Support research ethics review processes, develop ethics training materials, advise researchers on compliance. Master's degree required, preferably in ethics, research methodology, or related field.",
  },
  {
    title: "Communications & Marketing Officer",
    department: "Communications",
    level: "Entry-Level",
    type: "Full-Time",
    description:
      "Manage institutional communications, social media, website content, and marketing campaigns. Bachelor's degree required. Creative writing and digital marketing experience preferred.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Careers at GIAR
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Join Our <em className="italic">Team</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR is growing. We're seeking talented researchers, educators, and professionals 
                committed to advancing applied research and professional excellence in Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Why GIAR */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-16 text-center">
              Why Work at <em className="italic">GIAR</em>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-3">Research Leadership</h3>
                <p className="text-muted-foreground">
                  Lead innovative research in digital transformation, data ethics, and 
                  research methodology with institutional support and collaborative networks.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-3">Growth Opportunity</h3>
                <p className="text-muted-foreground">
                  GIAR is expanding. Opportunity to shape organizational direction, 
                  build research centers, develop programs, and advance institutional mission.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif mb-3">Regional Impact</h3>
                <p className="text-muted-foreground">
                  Work across Southeast Asia with partners, collaborators, and institutions. 
                  Influence research and higher education landscape regionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif mb-12">Open <em className="italic">Positions</em></h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="border border-border p-8 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif mb-2">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4">
                      <span className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap">
                        {job.level}
                      </span>
                      <span className="px-3 py-1 bg-secondary border border-border text-xs font-medium rounded whitespace-nowrap">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    Apply Now
                  </a>
                </div>
              ))}
            </div>

            {/* More Opportunities */}
            <div className="max-w-4xl mx-auto mt-16 bg-secondary p-8 border border-border rounded">
              <h3 className="text-2xl font-serif mb-4">Other Opportunities</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GIAR also welcomes inquiries from researchers, educators, and professionals 
                interested in internships, visiting positions, consulting arrangements, and 
                collaborative projects. Send your CV and proposal to careers@giar.my.
              </p>
              <Button asChild>
                <a href="/contact">Submit Inquiry</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
