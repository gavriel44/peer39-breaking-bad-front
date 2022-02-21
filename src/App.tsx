import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-bg w-full h-screen bg-cover bg-center bg-[url('https://images6.alphacoders.com/321/thumb-1920-321927.jpg')]">
        <Navbar />
        <Outlet />;
      </div>
    </QueryClientProvider>
  );
}

export default App;
