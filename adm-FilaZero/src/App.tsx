import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import GestaoFila from "./pages/GestaoFila";
import Horarios from "./pages/Horarios";
import Notificacoes from "./pages/Notificacoes";
import Relatorios from "./pages/Relatorios";
import Funcionarios from "./pages/Funcionarios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fila" element={<GestaoFila />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
