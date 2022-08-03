import { useState, useEffect } from "react";
import GamesData from "../../games/index.json";
import GamePreview from "../GamePreview/GamePreview";
import "./GamesGrid.scss";

// games list taken from https://github.com/thom4parisot/data.emunova.net/tree/master/games/nintendo-64

const GamesGrid = ({ props }) => {
  useEffect(() => {
    console.log(GamesData.map((game) => game.title));
  }, []);

  const renderImageGrid = () => {
    return GamesData.map((game) => {
      const { title, genres, image } = game;
      return (
        <GamePreview
          name={title}
          category={genres}
          imageName={image}
          key={game.id}
        />
      );
    });
  };

  return <div className="games-list">{renderImageGrid()}</div>;
};

export default GamesGrid;
