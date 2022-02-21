import React from "react";
import EpisodePoster from "./EpisodePoster";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IEpisode } from "../../types/IEpisode";

type Props = {
  season: number;
  episodes: IEpisode[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function EpisodesRow({ season, episodes }: Props) {
  return (
    <div className="my-8 p-4 rounded-md w-4/5 m-auto">
      <h2 className="text-2xl font-bold uppercase my-4 mx-8">
        Season {season}
      </h2>
      <Carousel
        responsive={responsive}
        draggable={false}
        autoPlay={false}
        autoPlaySpeed={10000000}
        slidesToSlide={3}
        containerClass="p-4"
        itemClass="m-2"
      >
        {episodes.map((episode) => {
          return (
            <EpisodePoster
              key={episode.episode_id}
              title={episode.title}
              airDate={episode.air_date}
              episodeId={episode.episode_id}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
