import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
};

export default function CharacterLink({ name }: Props) {
  const encodedName = encodeURI(name);
  return (
    <Link to={`/characters/${encodedName}`}>
      <div className="p-4 m-4 rounded-md bg-blue-300 w-fit hover:bg-blue-500">
        {name}
      </div>
    </Link>
  );
}
