import "./WelcomeView.css";
import WelcomeViewTitle from "./WelcomeViewTitle/WelcomeViewTitle";
import WelcomeViewImage from "./WelcomeViewImage/WelcomeViewImage";
import WelcomeViewGreeting from "./WelcomeViewGreeting/WelcomeViewGreeting";
import FlatButton from "../Button/FlatButton/FlatButton";

export default function WelcomeView() {
  return (
    <div className="welcome-view-wrapper">
      <WelcomeViewTitle/>
      <WelcomeViewImage/>
      <WelcomeViewGreeting/>
      <FlatButton/>
    </div>
  )
}
