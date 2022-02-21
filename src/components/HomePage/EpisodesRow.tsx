import React from "react";
import EpisodePoster from "./EpisodePoster";
import PosterRow from "./PostersRow";
import PostersRow from "./PostersRow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IEpisode } from "../../types/IEpisode";

type Props = {
  season: number;
  episodes: IEpisode[];
};

// const episodes = [
//   {
//     episode_id: 1,
//     title: "Pilot",
//     season: "1",
//     air_date: "01-20-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Krazy-8",
//       "Bogdan Wolynetz",
//     ],
//     episode: "1",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 2,
//     title: "Cat's in the Bag...",
//     season: "1",
//     air_date: "01-27-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Walter White Jr.",
//       "Krazy-8",
//     ],
//     episode: "2",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 3,
//     title: "...And the Bag's in the River",
//     season: "1",
//     air_date: "02-10-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Krazy-8",
//       "Gretchen Schwartz",
//     ],
//     episode: "3",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 4,
//     title: "Cancer Man",
//     season: "1",
//     air_date: "02-17-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Ken Wins",
//     ],
//     episode: "4",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 5,
//     title: "Gray Matter",
//     season: "1",
//     air_date: "02-24-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Elliott Schwarts",
//       "Gretchen Swartz",
//       "Badger",
//     ],
//     episode: "5",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 6,
//     title: "Crazy Handful of Nothin",
//     season: "1",
//     air_date: "03-02-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Tuco Salamanca",
//     ],
//     episode: "6",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 7,
//     title: "A No-Rough-Stuff-Type Deal",
//     season: " 1",
//     air_date: "03-09-2008",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Tuco Salamanca",
//     ],
//     episode: "7",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 8,
//     title: "Seven-Thirty-Seven",
//     season: "2",
//     air_date: "03-08-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Tuco Salamanca",
//     ],
//     episode: "1",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 9,
//     title: "Grilled",
//     season: "2",
//     air_date: "03-15-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Tuco Salamanca",
//       "Hector Salamanca",
//     ],
//     episode: "2",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 10,
//     title: "Bit by a Dead Bee",
//     season: "2",
//     air_date: "03-22-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Hector Salamanca",
//     ],
//     episode: "3",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 11,
//     title: "Down",
//     season: "2",
//     air_date: "03-29-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Walter White Jr.",
//     ],
//     episode: "4",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 12,
//     title: "Breakage",
//     season: "2",
//     air_date: "04-05-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Jane Margolis",
//       "Badger",
//     ],
//     episode: "5",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 13,
//     title: "Peekaboo",
//     season: "2",
//     air_date: "04-12-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Gretchen Schwartz",
//     ],
//     episode: "6",
//     series: "Breaking Bad",
//   },
//   {
//     episode_id: 14,
//     title: "Negro y Azul",
//     season: "2",
//     air_date: "04-19-2009",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Tortuga",
//       "Jane Margolis",
//       "Ted Beneke",
//     ],
//     episode: "7",
//     series: "Breaking Bad",
//   },
// ];

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
