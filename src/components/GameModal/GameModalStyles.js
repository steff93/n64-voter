const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  maxWidth: "80%",
  // border: "1px solid #ffdead",
  color: "#ffdead",
  background: "#28282b",
  boxShadow: "5px 5px 15px 0 #28282b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px",
  borderRadius: "36px",
};

const headerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "35px",
};

const titleStyles = {
  margin: 0,
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "24px",
};

const imageContainerStyles = {
  width: "300px",
  height: "300px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const contentStyles = {
  textAlign: "center",
  marginTop: "35px",
};

const closeIconStyles = {
  position: "absolute",
  right: "30px",
  cursor: "pointer",
};

export {
  modalStyles,
  headerStyles,
  imageContainerStyles,
  contentStyles,
  titleStyles,
  closeIconStyles,
};
