import React from "react";
import { Outlet } from "react-router-dom";
import ContentContainer from "../ContentContainer";

type Props = {};

export default function EpisodesPage({}: Props) {
  return (
    <ContentContainer className="py-32">
      <Outlet />
    </ContentContainer>
  );
}
