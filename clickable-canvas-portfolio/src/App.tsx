import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CurtainLoader from "@/components/ui/curtain-loader";
import Index from "./pages/Index";
import { Analytics } from '@vercel/analytics/react';
import '@fontsource-variable/inter';
import '@fontsource/berkshire-swash';

// Inner pages are split out so the landing room doesn't pay for them up front.
const Blog = lazy(() => import("./pages/Blog"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Extracurriculars = lazy(() => import("./pages/Extracurriculars"));
const Contact = lazy(() => import("./pages/Contact"));
const Education = lazy(() => import("./pages/Education"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();
  const isContactRoute = location.pathname === "/contact";

  const routes = (
    <Suspense fallback={null}>
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
    </Suspense>
  );

  return isContactRoute ? routes : <CurtainLoader>{routes}</CurtainLoader>;
};

const App = () => (
  <TooltipProvider>
    <Analytics />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
