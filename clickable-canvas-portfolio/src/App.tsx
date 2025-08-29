import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CurtainLoader from "@/components/ui/curtain-loader";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Extracurriculars from "./pages/Extracurriculars";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Education from "./pages/Education";
import RugPull from "./pages/RugPull";
import NotFound from "./pages/NotFound";
import '@fontsource/inter';
import '@fontsource/berkshire-swash';

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  const isContactRoute = location.pathname === "/contact";
  
  const routes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/extracurriculars" element={<Extracurriculars />} />
      {/* <Route path="/testimonials" element={<Testimonials />} /> */}
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/rug-pull" element={<RugPull />} /> */}
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return true ? routes : <CurtainLoader>{routes}</CurtainLoader>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
