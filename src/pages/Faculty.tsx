import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Briefcase } from "lucide-react";

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  email: string;
  bio: string;
  expertise: string[];
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Prof. Dr. Azlan Malik",
    title: "Founder & Director",
    department: "Executive Leadership",
    email: "azlan.malik@giar.my",
    bio: "Prof. Dr. Malik holds a Ph.D. in Strategic Management and brings over 30 years of experience in academic research leadership, institutional governance, and research policy development across Southeast Asia.",
    expertise: ["Research Strategy", "Institutional Governance", "Academic Leadership", "Policy Development"],
  },
  {
    name: "Dr. Siti Nurul Hassan",
    title: "Deputy Director, Research & Innovation",
    department: "Research Operations",
    email: "siti.hassan@giar.my",
    bio: "Dr. Hassan specializes in research methodology and institutional research frameworks. With over 20 years in higher education research, she oversees GIAR's research initiatives and ensures alignment with MQA standards.",
    expertise: ["Research Methodology", "Institutional Research", "Quality Assurance", "MQA Compliance"],
  },
  {
    name: "Assoc. Prof. Rajesh Gupta",
    title: "Head of Professional Development",
    department: "Executive Education",
    email: "rajesh.gupta@giar.my",
    bio: "Assoc. Prof. Gupta has a Master's in Business Administration and 15+ years in corporate training and executive education. He leads GIAR's professional development programs and industry partnerships.",
    expertise: ["Executive Education", "Organizational Development", "Digital Transformation", "Leadership Development"],
  },
  {
    name: "Dr. Fatimah Yusof",
    title: "Academic Integrity Officer",
    department: "Academic Affairs",
    email: "fatimah.yusof@giar.my",
    bio: "Dr. Yusof holds a Ph.D. in Education and specializes in academic ethics and institutional policies. She develops and implements GIAR's comprehensive academic integrity frameworks aligned with MQA standards.",
    expertise: ["Academic Integrity", "Research Ethics", "Policy Development", "Student Conduct"],
  },
  {
    name: "Assoc. Prof. Muhammad Rashid",
    title: "Lead Researcher, Applied Data Science",
    department: "Research Centers",
    email: "m.rashid@giar.my",
    bio: "Assoc. Prof. Rashid holds a Ph.D. in Computer Science with specialization in data ethics and AI governance. He leads GIAR's research initiatives in emerging technologies and responsible AI.",
    expertise: ["Data Science", "AI Ethics", "Research Design", "Applied Analytics"],
  },
  {
    name: "Dr. Nurul Amira Kamarud Din",
    title: "Senior Curriculum Developer",
    department: "Academic Programs",
    email: "nurul.amira@giar.my",
    bio: "Dr. Kamarud Din designs and oversees GIAR's postgraduate and executive programs. With expertise in curriculum development and adult learning, she ensures all programs meet MQA standards and industry relevance.",
    expertise: ["Curriculum Design", "Adult Learning", "Program Development", "Assessment"],
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Our Leadership & Faculty
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Faculty & <em className="italic">Staff Directory</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                GIAR is led by experienced researchers, educators, and institutional leaders 
                committed to advancing applied research and professional excellence across Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {facultyMembers.map((member) => (
                <div
                  key={member.name}
                  className="border border-border p-8 hover:border-foreground/50 transition-colors"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg flex items-center justify-center mb-6 border border-border">
                    <div className="text-center">
                      <Briefcase className="w-8 h-8 text-foreground/40 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground font-medium">{member.name.split(" ")[0]}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-foreground mb-1">{member.title}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                    {member.department}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-xs font-medium rounded border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </div>
              ))}
            </div>

            {/* Advisory Note */}
            <div className="max-w-3xl mx-auto bg-secondary p-8 border border-border rounded">
              <h3 className="text-xl font-serif mb-4">Academic Advisory Board</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GIAR's Academic Advisory Board includes renowned researchers and institutional 
                leaders from universities across Malaysia and Southeast Asia. They guide our strategic 
                research direction, curriculum development, and institutional quality assurance to 
                ensure alignment with MQA standards and international best practices.
              </p>
              <p className="text-sm text-muted-foreground">
                For inquiries about advisory board membership or collaborations, please 
                <a href="/contact" className="font-medium ml-1 hover:underline">contact our office</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
