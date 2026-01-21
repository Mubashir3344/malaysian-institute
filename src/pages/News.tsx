import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "2025-academic-integrity-seminar",
    title: "Highlights from the 2025 Academic Integrity Seminar",
    date: "January 15, 2025",
    category: "Events",
    excerpt:
      "GIAR hosted a successful two-day seminar bringing together institutional leaders, researchers, and compliance officers from across Southeast Asia to discuss emerging challenges in academic integrity, MQA compliance, and institutional ethics governance.",
    content: `On January 14-15, 2025, the Global Institute of Applied Research (GIAR) convened the Southeast Asia Academic Integrity Forum, a landmark seminar bringing together over 150 participants from universities, research institutions, and government agencies across Malaysia, Singapore, and Thailand.

The seminar featured keynote presentations from prominent researchers and institutional leaders, including discussions on:

• **MQA Standards & Institutional Compliance**: A comprehensive overview of the latest Malaysian Qualifications Agency guidelines for quality assurance and academic governance in higher learning institutions.

• **Emerging Challenges in Academic Integrity**: Panel discussions on plagiarism detection technologies, AI tools in research, and institutional policies for responsible AI use in academic contexts.

• **Postgraduate Research Ethics**: Workshops on designing ethical research protocols, managing research misconduct, and establishing robust institutional review processes.

• **Digital Transformation in Education**: How institutions are leveraging technology to enhance academic integrity monitoring while maintaining academic freedom and student privacy.

Key takeaways included the importance of institutional leadership in fostering integrity culture, the role of transparent policies in preventing misconduct, and the need for continuous professional development among faculty and staff.

GIAR plans to publish proceedings from the seminar, including case studies and recommended practices for MQA compliance, in Q2 2025.`,
    author: "Dr. Fatimah Yusof, Academic Integrity Officer",
  },
  {
    id: "2024-research-grant-partnerships",
    title: "New Research Grant Partnerships & Funding Announcements",
    date: "December 10, 2024",
    category: "Partnerships",
    excerpt:
      "GIAR announces new research collaborations and funding partnerships with leading institutions and funding bodies, supporting cutting-edge applied research in digital transformation, data ethics, and institutional research.",
    content: `GIAR is pleased to announce several new research partnerships and grant funding initiatives that will advance applied research and capacity building across Southeast Asia.

**Strategic Research Partnerships:**

1. **Institute of Applied Technology Research Collaboration** (IART): A three-year partnership with leading research institutions to investigate ethical frameworks in emerging technologies, including AI, blockchain, and digital transformation in organizational contexts.

2. **Malaysian Higher Learning Research Fund (MHLRF)**: GIAR has been awarded grants totaling RM 2.5 million to support three research initiatives:
   - Applied Data Ethics in Malaysian Organizations
   - Digital Transformation Case Studies in SMEs
   - Institutional Research Governance Frameworks

3. **Southeast Asia Research Network (SEARN)**: GIAR joins this prestigious network of research institutions, gaining access to collaborative research opportunities, shared infrastructure, and capacity-building programs across the region.

**Professional Development Funding:**

To support emerging researchers and early-career academics, GIAR is launching a scholarship program for its Post-Graduate Certificate programs in:
- Applied Data Ethics
- Advanced Research Methodology
- Digital Transformation Management

Limited scholarships are available for candidates from Malaysian universities and research institutions.

**Next Steps:**

Researchers and institutional leaders interested in GIAR research initiatives, collaborative projects, or scholarship applications are encouraged to contact our Deputy Director at siti.hassan@giar.my.

These partnerships underscore GIAR's commitment to advancing rigorous, ethical applied research and supporting the professional development of Southeast Asia's emerging research leaders.`,
    author: "Dr. Siti Nurul Hassan, Deputy Director",
  },
  {
    id: "2024-digital-transformation-program-launch",
    title: "Introducing the Digital Transformation Management Executive Program",
    date: "October 28, 2024",
    category: "Programs",
    excerpt:
      "GIAR launches an innovative executive education program designed for organizational leaders navigating digital transformation. The program combines strategic frameworks, organizational change management, and real-world case studies.",
    content: `GIAR is proud to announce the launch of our flagship executive education program: **Digital Transformation Management**.

Designed for organizational leaders, department heads, and strategic managers, this 6-week blended program combines contemporary frameworks with real-world case studies from leading Malaysian and regional organizations.

**Program Highlights:**

• **Strategic Framework**: Participants will develop a comprehensive digital transformation strategy aligned with organizational goals and market opportunities.

• **Change Management**: Hands-on workshops on leading organizational change, stakeholder engagement, and building digital literacy across teams.

• **Technology & Implementation**: Overview of key technologies (cloud, IoT, analytics, AI) and practical approaches to technology adoption and integration.

• **Risk & Governance**: Managing cybersecurity risks, data governance, and regulatory compliance during transformation initiatives.

• **Cohort-Based Learning**: Small cohorts (20-25 participants) enable peer learning, networking, and collaborative case study development.

**Delivery Format:**
- Online interactive modules (self-paced)
- Two in-person intensives (Kuala Lumpur, Bandar Sunway)
- Capstone project with organizational application

**Enrollment:**
Cohorts begin quarterly (Q1, Q2, Q3, Q4 2025). Early-bird registration for Q1 2025 cohort closes December 31, 2024.

Organizations can also arrange customized in-house programs. For details, contact our Professional Development team at rajesh.gupta@giar.my.

This program reflects GIAR's commitment to equipping Southeast Asia's leaders with the knowledge and skills to navigate rapid technological change while maintaining organizational stability, ethical practices, and human-centered leadership.`,
    author: "Assoc. Prof. Rajesh Gupta, Head of Professional Development",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                News & Events
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                GIAR <em className="italic">News & Events</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Stay informed about GIAR's latest research initiatives, partnership announcements, 
                upcoming events, and insights from our faculty and leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-16 max-w-4xl mx-auto">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-border pb-16 last:border-b-0"
                >
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span className="px-3 py-1 bg-secondary text-xs font-medium uppercase tracking-wider border border-border rounded">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl lg:text-4xl font-serif leading-tight mb-4 hover:text-muted-foreground transition-colors">
                    <Link to={`/news/${post.id}`} className="inline-block">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-sm text-muted-foreground italic">
                      By {post.author}
                    </p>
                    <Link
                      to={`/news/${post.id}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted-foreground transition-colors group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Stay <em className="italic">Connected</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Subscribe to GIAR's newsletter for updates on research initiatives, 
                upcoming events, partnership announcements, and insights from our community.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Button type="submit" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
