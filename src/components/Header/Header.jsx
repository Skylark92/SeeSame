import "./Header.css";
import GradientFonts from "../GradientFonts/GradientFonts";

function Header({ text }) {
  return (
    <h2 className="header-title">
      <GradientFonts text={text} />
    </h2>
  )
}

export default Header;