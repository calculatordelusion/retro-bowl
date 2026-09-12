import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import DMCA from "./pages/DMCA";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GameInstructions from "./pages/GameInstructions";
import TeamManagement from "./pages/TeamManagement";
import TipsAndTricks from "./pages/TipsAndTricks";
import FAQ from "./pages/FAQ";
import Achievements from "./pages/Achievements";
import RetroBowlCollege from "./pages/RetroBowlCollege";
import RetroBowl25 from "./pages/RetroBowl25";
import UnblockedAtSchool from "./pages/UnblockedAtSchool";
import CheatsAndSecrets from "./pages/CheatsAndSecrets";
import PlaybookGuide from "./pages/PlaybookGuide";
import ControlsGuide from "./pages/ControlsGuide";
import RetroBowlGithub from "./pages/RetroBowlGithub";
import RetroGoal from "./pages/RetroGoal";
import RetroPingPong from "./pages/RetroPingPong";
import BestTeams from "./pages/BestTeams";
import BingAuth from "./pages/BingAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/BingSiteAuth.xml" element={<BingAuth />} />
            <Route path="/bingsiteauth.xml" element={<BingAuth />} />
            <Route path="/retro-bowl-college" element={<RetroBowlCollege />} />
            <Route path="/retro-bowl-25" element={<RetroBowl25 />} />
            <Route path="/unblocked-at-school" element={<UnblockedAtSchool />} />
            <Route path="/retro-bowl-github" element={<RetroBowlGithub />} />
            <Route path="/retro-goal" element={<RetroGoal />} />
            <Route path="/retro-ping-pong" element={<RetroPingPong />} />
            <Route path="/best-teams" element={<BestTeams />} />
            <Route path="/cheats-and-secrets" element={<CheatsAndSecrets />} />
            <Route path="/playbook" element={<PlaybookGuide />} />
            <Route path="/controls" element={<ControlsGuide />} />
            <Route path="/game-instructions" element={<GameInstructions />} />
            <Route path="/team-management" element={<TeamManagement />} />
            <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
