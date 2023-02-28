import "./Button.css";

export default function Button({text, click, bgColor}) {
  return (
    <button className="button" style={{ backgroundColor: bgColor }} onClick={click}>{text}</button>
  )
}
