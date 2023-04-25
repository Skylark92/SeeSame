import "./Button.css";
import StrokeFonts from "../StrokeFonts/StrokeFonts";

function Button({ size, background, padding, margin, disabled, text, onClick }) {
  const sizes = ["xSmall", "small", "medium", "large"];

  if (!sizes.includes(size)) return null;

  return (
    <button className={"common-button " + size}
      style={{ background, padding, margin }}
      onClick={onClick}
      disabled={disabled}
      type="button">
      <StrokeFonts text={text} />
    </button>
  )
}

export default Button;