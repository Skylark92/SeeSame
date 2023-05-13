import "./Survey.css";
import logo from "../../assets/images/sesame_logo.png";
import Header from "../Header/Header";
import Button from "../Button/Button";
import vote from "../../firebase/vote";
import { useSelector } from "react-redux";
import { useState } from "react";
import Result from "../Result/Result";

function Survey({ survey }) {
  const user = useSelector(state => state.auth.user);
  const [result, setResult] = useState(false);

  const choiceHandler = async (choice) => {
    const res = await vote(survey, user, choice);
    console.log(res);
    setResult(true);
  }

  if (!survey) return; // survey가 존재하지 않을 경우 빈 화면 표시

  else return (
    <div className="survey-wrapper">
      <Header text={survey.title} />
      <img className="survey-image" src={logo} alt="" />
      <p className="survey-content">{survey.content}</p>
      <Button size="large" background="var(--color-button-a)" text={"A: " + survey.choiceA} onClick={() => choiceHandler("choiceA")} />
      <Button size="large" background="var(--color-button-b)" text={"B: " + survey.choiceB} onClick={() => choiceHandler("choiceB")} />
      {result && <Result survey={survey} setResult={setResult} />}
    </div>
  )
}

export default Survey;