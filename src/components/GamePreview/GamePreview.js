import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./GamePreview.scss";

const GamePreview = (props) => {
  const [vote, setVote] = useState(0);
  const { name, imageName, category } = props;
  const imagePath = `/images/${imageName}`;
  const b = "game-preview";

  const upVote = () => {
    setVote(vote + 1);
  };

  return (
    <div className={b}>
      <div className={`${b}__header`}></div>

      <div
        className={`${b}__image-container`}
        style={{
          backgroundImage: `url('${imagePath}')`,
        }}
      ></div>

      <div className={`${b}__footer`}>
        <h5>{name}</h5>
        <span>{category}</span>
        <span>Number of Votes: {vote}</span>
        <div className={`${b}__vote-game`} onClick={upVote}>
          <span>Upvote</span> <ThumbUpIcon />
        </div>
      </div>
    </div>
  );
};

export default GamePreview;
