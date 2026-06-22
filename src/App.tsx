import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { CookieBanner } from "@/components/oria/CookieBanner";
import Index from "./pages/Index.tsx";
import Atuacao from "./pages/Atuacao.tsx";
import Casos from "./pages/Casos.tsx";
import Socios from "./pages/Socios.tsx";
import Privacidade from "./pages/Privacidade.tsx";
import Noticias from "./pages/Noticias.tsx";
import NoticiaDetalhe from "./pages/NoticiaDetalhe.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/atuacao" element={<Atuacao />} />
              <Route path="/casos" element={<Casos />} />
              <Route path="/socios" element={<Socios />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/noticias/:slug" element={<NoticiaDetalhe />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
