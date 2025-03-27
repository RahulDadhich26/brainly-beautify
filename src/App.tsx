
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="fixed inset-0 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brainly-400 to-brainly-600 animate-pulse"></div>
                  </div>
                  <div className="mt-4 bg-gray-200 h-2 w-24 rounded-full overflow-hidden">
                    <div className="h-full bg-brainly-500 animate-[slide-in_1.2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </>
            )}
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
