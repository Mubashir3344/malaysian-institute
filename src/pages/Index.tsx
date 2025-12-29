import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import WhyUSCSection from "@/components/home/WhyUSCSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NewsSection />
        <ProgrammesSection />
        <WhyUSCSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
