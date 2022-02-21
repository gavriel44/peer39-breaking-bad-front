import React from "react";
import EpisodeGallery from "./EpisodeGallery";
import Navbar from "./Navbar";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="home-page w-full h-screen bg-cover bg-center bg-[url('https://images6.alphacoders.com/321/thumb-1920-321927.jpg')]">
      <Navbar />
      <section
        id="home-content"
        className="m-auto w-4/5 flex-col align-middle p-16"
      >
        <h1 className="text-6xl text-center font-bold mb-16">
          The Breaking Bad Wiki
        </h1>
        <EpisodeGallery />
      </section>
    </div>
  );
}
