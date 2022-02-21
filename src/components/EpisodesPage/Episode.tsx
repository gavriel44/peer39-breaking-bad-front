import React from "react";
import { useParams } from "react-router-dom";
import H3Title from "../H3Title";
import CharacterLink from "./CharacterLink";
import { useQuery } from "react-query";
import { fetchAllEpisodes } from "../../help/apiFunctions";
import { IEpisode } from "../../types/IEpisode";
import { AxiosError } from "axios";

type Props = {};

export default function Episode({}: Props) {
  const { episodeId } = useParams();

  const {
    isLoading,
    isError,
    data: allEpisodes,
    error,
  } = useQuery<IEpisode[], AxiosError>("allEpisodes", fetchAllEpisodes);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!allEpisodes) {
    return <span>Oops.. no data</span>;
  }

  const episode = allEpisodes.find(
    (episode) => String(episode.episode_id) === episodeId
  );

  if (!episode) {
    return <span>Oops.. no data</span>;
  }

  return (
    <div className="p-14">
      <H3Title>Episode Title: {episode.title}</H3Title>

      <p className="text-xl">Air Date: {episode.air_date}</p>
      <div className="pt-14">
        Characters in episode:
        {episode.characters.map((character) => {
          return <CharacterLink name={character} key={character} />;
        })}
      </div>
    </div>
  );
}
