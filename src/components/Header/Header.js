import "./Header.scss";

export const Header = () => {
  const title = "Nintendo Voting App";
  return (
    <div
      className="header"
      style={{ backgroundImage: 'url("/images/nintendo-cover.jpg")' }}
    >
      <h1 className="header__title">{title}</h1>
    </div>
  );
};
