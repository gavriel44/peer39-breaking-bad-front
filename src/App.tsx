import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/HomePage/Navbar";

function App() {
  return (
    <div className="app-bg w-full h-screen bg-cover bg-center bg-[url('https://images6.alphacoders.com/321/thumb-1920-321927.jpg')]">
      <Navbar />
      <Outlet />;
    </div>
  );
}

export default App;
