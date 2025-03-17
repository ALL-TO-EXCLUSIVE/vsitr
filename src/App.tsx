import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/utils/scroll-to-top";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About pages
import About from "./pages/about/index";
import VisionMission from "./pages/about/vision-mission";
import Administration from "./pages/about/administration";
import Infrastructure from "./pages/about/infrastructure";

// Academics pages
import Academics from "./pages/academics/index";
import Programs from "./pages/academics/programs";
import Departments from "./pages/academics/departments";
import Faculty from "./pages/academics/faculty";
import Research from "./pages/academics/research";

// Admissions pages
import Admissions from "./pages/admissions/index";
import AdmissionProcess from "./pages/admissions/process";
import Eligibility from "./pages/admissions/eligibility";
import Fees from "./pages/admissions/fees";
import Scholarships from "./pages/admissions/scholarships";

// Campus Life pages
import CampusLife from "./pages/campus-life/index";
import Events from "./pages/campus-life/events";
import Clubs from "./pages/campus-life/clubs";
import Facilities from "./pages/campus-life/facilities";

// Other pages
import Placements from "./pages/placements/index";
import Contact from "./pages/contact/index";
import StudentLogin from "./pages/student-login";
import ApplyNow from "./pages/admissions/apply";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/administration" element={<Administration />} />
          <Route path="/about/infrastructure" element={<Infrastructure />} />
          
          {/* Academics Routes */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/programs" element={<Programs />} />
          <Route path="/academics/departments" element={<Departments />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/research" element={<Research />} />
          
          {/* Admissions Routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/process" element={<AdmissionProcess />} />
          <Route path="/admissions/eligibility" element={<Eligibility />} />
          <Route path="/admissions/fees" element={<Fees />} />
          <Route path="/admissions/scholarships" element={<Scholarships />} />
          <Route path="/admissions/apply" element={<ApplyNow />} />
          
          {/* Campus Life Routes */}
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/campus-life/events" element={<Events />} />
          <Route path="/campus-life/clubs" element={<Clubs />} />
          <Route path="/campus-life/facilities" element={<Facilities />} />
          
          {/* Other Routes */}
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
