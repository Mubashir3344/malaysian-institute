import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Ethics from "./pages/Ethics";
import Faculty from "./pages/Faculty";
import News from "./pages/News";
import Resources from "./pages/Resources";
import StudentPortal from "./pages/StudentPortal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import ResearchCollaboration from "./pages/ResearchCollaboration";
import Partnerships from "./pages/Partnerships";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CodeOfConduct from "./pages/CodeOfConduct";
import ProgramDigitalTransformation from "./pages/ProgramDigitalTransformation";
import ProgramAppliedDataEthics from "./pages/ProgramAppliedDataEthics";
import ProgramAdvancedResearchMethodology from "./pages/ProgramAdvancedResearchMethodology";
import ProgramInstitutionalResearchLeadership from "./pages/ProgramInstitutionalResearchLeadership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/research-collaboration" element={<ResearchCollaboration />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/program/digital-transformation" element={<ProgramDigitalTransformation />} />
          <Route path="/program/applied-data-ethics" element={<ProgramAppliedDataEthics />} />
          <Route path="/program/advanced-research-methodology" element={<ProgramAdvancedResearchMethodology />} />
          <Route path="/program/institutional-research-leadership" element={<ProgramInstitutionalResearchLeadership />} />
          {/* Legacy routes redirects */}
          <Route path="/research-areas" element={<Programs />} />
          <Route path="/academic-integrity" element={<Ethics />} />
          <Route path="/member-portal" element={<StudentPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
