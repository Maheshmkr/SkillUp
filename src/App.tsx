import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import CourseDetail from "./pages/CourseDetail";
import EnrollmentSuccess from "./pages/EnrollmentSuccess";
import Dashboard from "./pages/Dashboard";
import LearningInterface from "./pages/LearningInterface";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/enrollment-success" element={<EnrollmentSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn" element={<LearningInterface />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
