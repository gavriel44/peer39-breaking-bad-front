import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  airDate: string;
  episodeId: number;
};

export default function EpisodePoster({ title, airDate, episodeId }: Props) {
  const navigate = useNavigate();

  const handlePosterClick = () => {
    navigate(`/episodes/${episodeId}`);
  };

  return (
    <div
      className="episode-poster m-2 w-40 shadow-xl h-40 cursor-pointer select-none"
      onClick={handlePosterClick}
    >
      <h4 className="text-md p-4">{title}</h4>
      <p className="text-md p-2">Aired in {airDate}</p>
    </div>
  );
}
