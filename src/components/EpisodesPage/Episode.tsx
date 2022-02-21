import React from "react";
import { useParams } from "react-router-dom";
import CharacterLink from "./CharacterLink";

type Props = {};

const episode = {
  episode_id: 13,
  title: "Peekaboo",
  season: "2",
  air_date: "04-12-2009",
  characters: [
    "Walter White",
    "Jesse Pinkman",
    "Skyler White",
    "Marie Schrader",
    "Walter White Jr.",
    "Gretchen Schwartz",
  ],
  episode: "6",
  series: "Breaking Bad",
};

export default function Episode({}: Props) {
  const { episodeId } = useParams();
  return (
    <div className="p-14">
      <h3 className="py-10 text-3xl font-bold">
        Episode Title: {episode.title}
      </h3>

      <p className="text-lg">Air Date: {episode.air_date}</p>
      <div className="pt-14">
        Characters in episode:
        {episode.characters.map((character) => {
          return <CharacterLink name={character} key={character} />;
        })}
      </div>
    </div>
  );
}
