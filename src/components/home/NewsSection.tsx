import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "USRI Launches New AI Research Initiative",
    description: "United Seas Research Institute announces a groundbreaking research initiative focused on artificial intelligence and machine learning applications in business and technology.",
    date: "December 2024",
    category: "Announcement",
    featured: true,
  },
  {
    id: 2,
    title: "New Research Fellowship Programme",
    description: "Introducing our comprehensive Research Fellowship designed for aspiring scientists and researchers in technology and applied sciences.",
    date: "November 2024",
    category: "Programme",
    featured: false,
  },
  {
    id: 3,
    title: "Research Lab Expansion Complete",
    description: "We have completed the expansion of our research facilities with state-of-the-art equipment for advanced scientific research.",
    date: "October 2024",
    category: "Facilities",
    featured: false,
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-usc-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Newspaper className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Latest Updates</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              News & Announcements
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/news">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured News */}
          <Card className="lg:col-span-2 bg-card shadow-card hover:shadow-elevated transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 gradient-gold" />
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default" className="bg-primary">Featured</Badge>
                <Badge variant="secondary">{newsItems[0].category}</Badge>
              </div>
              <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                {newsItems[0].title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {newsItems[0].date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {newsItems[0].description}
              </p>
              <Button variant="link" className="px-0 mt-4" asChild>
                <Link to={`/news/${newsItems[0].id}`}>
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Other News */}
          <div className="space-y-6">
            {newsItems.slice(1).map((news) => (
              <Card key={news.id} className="bg-card shadow-soft hover:shadow-card transition-shadow duration-300 group">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit">{news.category}</Badge>
                  <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    {news.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {news.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;