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
import Resources from "./pages/Resources";
import StudentPortal from "./pages/StudentPortal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy routes redirects */}
          <Route path="/research-areas" element={<Programs />} />
          <Route path="/academic-integrity" element={<Ethics />} />
          <Route path="/publications" element={<Resources />} />
          <Route path="/member-portal" element={<StudentPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
