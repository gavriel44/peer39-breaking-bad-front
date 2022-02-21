import React from "react";
import EpisodesRow from "./EpisodesRow";

type Props = {};

export default function EpisodeGallery({}: Props) {
  return (
    <div className="drop-shadow-2xl bg-white p-1 rounded-xl m-6 mb-14 ">
      <EpisodesRow season={1} />
      <EpisodesRow season={2} />
      <EpisodesRow season={3} />
    </div>
  );
}
