import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

// React Query 클라이언트 생성
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <Home />
    </QueryClientProvider>
  );
};

export default App;