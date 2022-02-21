import React from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../../help/apiFunctions";
import H3Title from "../H3Title";
import { AxiosError } from "axios";
import { ICharacter } from "../../types/ICharacter";
import { useQuery } from "react-query";

type Props = {};

export default function Character({}: Props) {
  const { characterName: characterEncodedName } = useParams<string>();

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
