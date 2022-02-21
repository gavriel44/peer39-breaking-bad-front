import React from "react";
import ContentContainer from "../ContentContainer";
import EpisodesRow from "./EpisodesRow";
import { useQuery } from "react-query";
import { fetchAllEpisodes } from "../../help/apiFunctions";
import { IEpisode } from "../../types/IEpisode";
import { AxiosError } from "axios";

type Props = {};

export default function EpisodeGallery({}: Props) {
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
    return (
      <span>
        Error: {error?.message}, {error?.code}
      </span>
    );
  }

  if (!allEpisodes) {
    return <span>Oops.. missing info</span>;
  }

  const seasonsToDisplay = [1, 2, 3, 4, 5];

  return (
    <ContentContainer>
      {seasonsToDisplay.map((season) => {
        return (
          <EpisodesRow
            season={season}
            episodes={allEpisodes.filter(
              (episode) => Number(episode.season) === season
            )}
          />
        );
      })}

      {/* <EpisodesRow season={1} episodes={allEpisodes.filter((episode) => {
          return episode.season ==
      })} />
      <EpisodesRow season={2} />
      <EpisodesRow season={3} /> */}
    </ContentContainer>
  );
}
