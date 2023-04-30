import "./WelcomeView.css";
import logo from "../../assets/images/sesame_logo.png";
import GradientFonts from "../GradientFonts/GradientFonts";
import Button from "../Button/Button";

function WelcomeView() {
  return (
    <div className="welcome-view-wrapper">
      <h1 className="welcome-view-title"><GradientFonts text="See Same" /></h1>
      <img className="welcome-view-sesame-logo" src={logo} alt="" />
      <p className="welcome-view-greetings">당신과 동일한 성향의 사람은<br />얼마나 있을까요?</p>
      <Button size="medium"
        background="var(--color-button-a)"
        padding="1rem 3rem"
        margin="1.6rem 0"
        text="시작하기" />
    </div>
  )
}

export default WelcomeView;