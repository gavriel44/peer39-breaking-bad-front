import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function H3Title({ children }: React.PropsWithChildren<Props>) {
  return (
    <div className="flex justify-between items-center px-4">
      <h3 className="py-10 text-3xl font-bold">{children}</h3>
      <Link to="/">
        <div className=" align-middle p-4 rounded-md bg-green-300 hover:bg-green-600">
          Home
        </div>
      </Link>
    </div>
  );
}
