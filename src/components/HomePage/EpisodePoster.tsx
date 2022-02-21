import React from "react";
import { Episode } from "../../types/Episode";

type Props = {
  title: string;
  airDate: string;
};

export default function EpisodePoster({ title, airDate }: Props) {
  return (
    <div
      className="episode-poster m-2 w-40 shadow-xl h-40 cursor-pointer select-none"
      onClick={() => {
        console.log("sad");
      }}
    >
      <h4 className="text-md p-4">{title}</h4>
      <p className="text-md p-2">Aired in {airDate}</p>
    </div>
  );
}
