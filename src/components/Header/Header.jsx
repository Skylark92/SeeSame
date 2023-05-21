import "./Header.css";
import { useNavigate } from "react-router-dom";
import GradientFonts from "../GradientFonts/GradientFonts";

function Header({ text, backButton, onClick }) {
  const navigate = useNavigate();

  const defaultHandler = () => {
    navigate(-1);
  }

  return (
    <h2 className="header-title">
      {backButton && <button className="header-back-button" type="button" onClick={onClick || defaultHandler} />}
      <GradientFonts text={text} />
    </h2>
  )
}

export default Header;