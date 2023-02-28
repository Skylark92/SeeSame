import "./SignUp.css";
import SignUpTitle from "../../components/SignUp/SignUpTitle/SignUpTitle";
import SignUpUsername from "../../components/SignUp/SignUpUsername/SignUpUsername";
import SignUpRadio from "../../components/SignUp/SignUpRadio/SignUpRadio";

export default function SignUp() {
  return (
    <div className="signup-wrapper">
      <SignUpTitle/>
      <SignUpUsername/>
      <SignUpRadio title="성별" inputArray={["남자", "여자"]}/>
    </div>
  )
}
