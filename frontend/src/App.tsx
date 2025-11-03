import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Layout from "./Layout";
import Home from "./pages/Home";
// import PlacePage from "./pages/PlacePage";
import About from "./pages/About";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/places" element={<PlacePage placeList={}/>} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
};

export default App;