import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
// import EpisodesPage from "./components/EpisodesPage/EpisodePage";

import { EpisodesPage, Episode } from "./components/EpisodesPage";
import { CharactersPage, Character } from "./components/CharachtersPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="episodes" element={<EpisodesPage />}>
          <Route path=":episodeId" element={<Episode />} />
        </Route>
        <Route path="characters" element={<CharactersPage />}>
          <Route path=":characterName" element={<Character />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
