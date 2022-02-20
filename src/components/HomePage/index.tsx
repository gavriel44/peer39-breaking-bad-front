import React from "react";
import Navbar from "./Navbar";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="home-page w-full h-screen bg-cover bg-center bg-[url('https://images6.alphacoders.com/321/thumb-1920-321927.jpg')]">
      <Navbar />
      <section
        id="home-content"
        className="m-auto border-2 w-4/5 flex-col align-middle"
      >
        <h1 className="text-6xl text-center font-bold mt-7">
          The Breaking Bad Wiki
        </h1>
      </section>
    </div>
  );
}
