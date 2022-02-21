import React from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../../help/apiFunctions";
import H3Title from "../H3Title";
import { AxiosError } from "axios";
import { ICharacter } from "../../types/ICharacter";
import { useQuery } from "react-query";

type Props = {};

// const character = {
//   char_id: 1,
//   name: "Walter White",
//   birthday: "09-07-1958",
//   occupation: ["High School Chemistry Teacher", "Meth King Pin"],
//   img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//   status: "Presumed dead",
//   nickname: "Heisenberg",
//   appearance: [1, 2, 3, 4, 5],
//   portrayed: "Bryan Cranston",
//   category: "Breaking Bad",
//   better_call_saul_appearance: [],
// };

export default function Character({}: Props) {
  const { characterName: characterEncodedName } = useParams<string>();
  //   console.log("sadasd", characterEncodedName);
  //   if (!characterEncodedName) return <></>;

  const {
    isLoading,
    isError,
    data: characters,
    error,
  } = useQuery<ICharacter[], AxiosError>(
    characterEncodedName || "t",
    fetchCharacter(characterEncodedName || "t")
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error: {error?.message}, code: {error?.code}
      </span>
    );
  }

  if (!characters || !characters[0]) {
    return <span>Oops.. no Data</span>;
  }
  console.log(characters);

  const character = characters[0];

  return (
    <div className="p-14">
      <H3Title>Name: {character.name}</H3Title>

      <div className="flex justify-around py-4 ">
        <div className="text-xl  justify-self-start flex-col">
          <p className="my-4">Birth: {character.birthday}</p>
          <p>Nickname: {character.nickname}</p>
          <p>Status: {character.status}</p>
          <p>Occupations: {character.occupation.join(", ")}</p>
        </div>

        <img
          id="character-image"
          src={character.img}
          className=" object-contain h-80  rounded-lg"
          alt="the character"
        />
      </div>
    </div>
  );
}
