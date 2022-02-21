import React from "react";

type Props = {
  className?: string;
};

export default function ContentContainer({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={"w-4/5 m-auto " + className}>
      <div className="drop-shadow-2xl bg-white p-1 rounded-xl m-6 mb-14">
        {children}
      </div>
    </div>
  );
}
