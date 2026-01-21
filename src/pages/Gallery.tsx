import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ImageIcon, Users, Lightbulb } from "lucide-react";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Research & Collaboration",
      icon: Lightbulb,
      description: "Our researchers at work: conducting interviews, analyzing data, and collaborating with partners across Southeast Asia.",
      images: [
        "Research Team - Digital Transformation Lab",
        "Field Research - Data Collection in Progress",
        "Collaborative Workshop - Partner Organizations",
        "Data Analysis Session - Quantitative Research",
        "Focus Group Discussion - Qualitative Research",
        "Research Dissemination - Academic Conference",
      ],
    },
    {
      title: "Professional Development",
      icon: Users,
      description: "Executive programs, workshops, and training sessions in action. Professionals developing skills and knowledge.",
      images: [
        "Executive Cohort - Digital Transformation Program",
        "Workshop Facilitation - Research Methodology",
        "Interactive Session - Applied Data Ethics",
        "Program Participants - Networking Event",
        "Classroom Learning - Professional Development",
        "Graduation Ceremony - Program Completion",
      ],
    },
    {
      title: "Institutional Life",
      icon: ImageIcon,
      description: "Day-to-day operations, team moments, and the collaborative culture that defines GIAR.",
      images: [
        "GIAR Office - Collaborative Workspace",
        "Team Meeting - Research Discussion",
        "Seminar Series - Knowledge Sharing",
        "Lunch Discussion - Colleagues Networking",
        "Library & Resources - Research Support",
        "Team Building Activity",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                Gallery
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                GIAR at <em className="italic">Work</em>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A visual look at our research, professional development programs, 
                and the collaborative culture that defines GIAR.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        {galleryCategories.map((category, catIdx) => {
          const Icon = category.icon;
          return (
            <section key={catIdx} className={catIdx % 2 === 0 ? "" : "bg-secondary"}>
              <div className="py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                  {/* Section Header */}
                  <div className="mb-12 max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-foreground text-background rounded flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-serif">{category.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.images.map((imageName, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="aspect-video bg-secondary border-2 border-border rounded flex items-center justify-center overflow-hidden group hover:border-foreground transition-colors"
                      >
                        <div className="text-center px-4 py-8">
                          <div className="w-16 h-16 bg-border rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                            <ImageIcon className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-medium text-foreground group-hover:text-lg transition-all">
                            {imageName}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Photo Collection Note */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-6">
                Professional <em className="italic">Photography</em>
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                GIAR maintains a professional portfolio of institutional photography documenting 
                our research work, programs, and collaborative activities. These images are available 
                for use in publications, websites, and promotional materials with proper attribution.
              </p>
              <p className="text-sm opacity-75">
                For high-resolution images or specific photography requests, 
                please contact communications@giar.my
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Note */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
              <p>
                All images © Global Institute of Applied Research (GIAR). 
                Usage permitted with attribution. For licensing inquiries, contact communications@giar.my
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
