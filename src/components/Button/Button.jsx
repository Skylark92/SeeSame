import "./Button.css";

function Button({ size, background, padding, margin, disabled, text, onClick }) {
  const sizes = ["xSmall", "small", "medium", "large"];

  if (!sizes.includes(size)) return null;

  return (
    <button className={"common-button " + size}
      style={{ background, padding, margin }}
      onClick={onClick}
      disabled={disabled}
      type="button">
      <span className="stroke">{text}</span>
    </button>
  )
}

export default Button;