import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
  modalStyles,
  headerStyles,
  imageContainerStyles,
  contentStyles,
  titleStyles,
  closeIconStyles,
} from "./GameModalStyles";

import { getGameDescription } from "./helpers";

const GameModal = (props) => {
  const { open, onClose, name, imagePath } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyles} className="game-modal">
        <div className="game-modal__header" style={headerStyles}>
          <h3 style={titleStyles}> {name}</h3>
          <CloseIcon style={closeIconStyles} onClick={onClose} />
        </div>
        <div
          className="game-modal__image"
          style={{
            backgroundImage: `url('${imagePath}')`,
            ...imageContainerStyles,
          }}
        ></div>

        <div className="game-modal__content" style={contentStyles}>
          {getGameDescription(name)}
        </div>
      </div>
    </Modal>
  );
};

export default GameModal;
