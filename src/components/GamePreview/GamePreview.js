import { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LockResetIcon from "@mui/icons-material/LockReset";
import GameModal from "../GameModal/GameModal";
import "./GamePreview.scss";

const GamePreview = (props) => {
  const [vote, setVote] = useState(0);
  const [modal, setModal] = useState(false);
  const { name, imageName, category } = props;
  const imagePath = `/images/${imageName}`;
  const b = "game-preview";

  const upVote = () => setVote(vote + 1);
  const resetVote = () => setVote(0);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className={b}>
      <div className={`${b}__header`}>
        <h5 className={`${b}__title`}>{name}</h5>
      </div>

      <div className={`${b}__image-container`} onClick={openModal}>
        <div
          className={`${b}__image`}
          style={{
            backgroundImage: `url('${imagePath}')`,
          }}
        ></div>
      </div>

      <div className={`${b}__footer`}>
        <span>{category}</span>
        <span className={`${b}__total-votes`}>{vote} Votes</span>

        <div className={`${b}__actions`}>
          <div className={`${b}__vote-game`} onClick={upVote}>
            {/* <span>Upvote</span> */}
            <div className={`${b}__vote-icon`}>
              <ThumbUpOffAltIcon />
            </div>
          </div>
          <div className={`${b}__vote-reset`} onClick={resetVote}>
            <LockResetIcon />
          </div>
        </div>
      </div>

      <GameModal
        open={modal}
        onClose={closeModal}
        name={name}
        imagePath={imagePath}
      />
    </div>
  );
};

export default GamePreview;
