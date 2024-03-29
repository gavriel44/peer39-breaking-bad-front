import React from "react";

type Props = {};

export default function PosterRow({
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="poster-row flex flex-wrap overflow-x-auto mt-4 p-4">
      {children}
    </div>
  );
}
