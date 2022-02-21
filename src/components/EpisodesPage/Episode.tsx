import React from "react";
import { Link, useParams } from "react-router-dom";
import H3Title from "../H3Title";
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
      <H3Title>Episode Title: {episode.title}</H3Title>

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
