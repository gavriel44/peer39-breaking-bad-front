import React from "react";
import ContentContainer from "../ContentContainer";
import EpisodesRow from "./EpisodesRow";

type Props = {};

export default function EpisodeGallery({}: Props) {
  return (
    <ContentContainer>
      <EpisodesRow season={1} />
      <EpisodesRow season={2} />
      <EpisodesRow season={3} />
    </ContentContainer>
  );
}
