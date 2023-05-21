import "./WelcomeView.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/sesame_logo.png";
import GradientFonts from "../../components/GradientFonts/GradientFonts";
import Button from "../../components/Button/Button";

function WelcomeView() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const movePageHandler = (event) => {
    if (auth.isLogin) {
      if (!auth.user) navigate("/editprofile");
      else navigate("/survey");
    }
    else if (!auth.isLogin) {
      navigate("/tutorial");
    }
  }

  return (
    <div className="welcome-view-wrapper">
      <h1 className="welcome-view-title"><GradientFonts text="See Same" /></h1>
      <img className="welcome-view-sesame-logo" src={logo} alt="" />
      <p className="welcome-view-greetings">당신과 동일한 성향의 사람은<br />얼마나 있을까요?</p>
      <Button size="medium"
        background="var(--color-button-a)"
        text="시작하기"
        onClick={movePageHandler} />
    </div>
  )
}

export default WelcomeView;