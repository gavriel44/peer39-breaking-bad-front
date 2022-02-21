import React from "react";
import EpisodeGallery from "./EpisodeGallery";
import Navbar from "./Navbar";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <section id="home-content" className="m-auto flex-col align-middle p-16">
        <h1 className="text-6xl text-center font-bold m-16">
          The Breaking Bad Wiki
        </h1>
        <EpisodeGallery />
      </section>
    </div>
  );
}
