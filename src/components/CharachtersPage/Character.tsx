import React from "react";
import { useParams } from "react-router-dom";
import H3Title from "../H3Title";

type Props = {};

const character = {
  char_id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  occupation: ["High School Chemistry Teacher", "Meth King Pin"],
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  status: "Presumed dead",
  nickname: "Heisenberg",
  appearance: [1, 2, 3, 4, 5],
  portrayed: "Bryan Cranston",
  category: "Breaking Bad",
  better_call_saul_appearance: [],
};

export default function Character({}: Props) {
  const characterEncodedName = useParams();

  return (
    <div className="p-14">
      <H3Title>Name: {character.name}</H3Title>

      <div className="flex justify-around py-4">
        <div className="text-xl pt-10 justify-self-start flex-col">
          <p className="my-4">Birth: {character.birthday}</p>
          <p>Nickname: {character.nickname}</p>
          <p>Status: {character.status}</p>
          <p>Occupations: {character.occupation.join(", ")}</p>
        </div>

        <img
          src={character.img}
          className=" object-contain h-80  rounded-lg"
          alt="the character"
        />
      </div>
    </div>
  );
}
