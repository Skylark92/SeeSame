import "./Header.css";
import GradientFonts from "../GradientFonts/GradientFonts";

function Header({ text, backButton, onClick }) {
  return (
    <h2 className="header-title">
      {backButton && <button className="header-back-button" type="button" onClick={onClick} />}
      <GradientFonts text={text} />
    </h2>
  )
}

export default Header;