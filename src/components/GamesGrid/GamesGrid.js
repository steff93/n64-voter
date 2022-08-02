import { useState, useEffect } from "react";
import GamesData from "../../games/index.json";
import GamePreview from "../GamePreview/GamePreview";
import "./GamesGrid.scss";

const GamesGrid = ({ props }) => {
  useEffect(() => {
    console.log(GamesData.map((game) => game.title));
  }, []);

  const renderImageGrid = () => {
    return GamesData.map((game) => {
      const { title, genres, image } = game;
      return <GamePreview name={title} category={genres} imageName={image} />;
    });
  };

  return <div className="games-list">{renderImageGrid()}</div>;
};

export default GamesGrid;
