import "./Survey.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/sesame_logo.png";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Result from "../Result/Result";
import vote from "../../firebase/vote";

function Survey({ survey }) {
  const user = useSelector(state => state.auth.user);
  const [data, setData] = useState(survey);
  const [result, setResult] = useState(false);

  const choiceHandler = async (event) => {
    const res = await vote(survey, user, event.target.name);
    if (res.ok) {
      setData(res.survey);
    }
    setResult(true);
  }

  if (!data) return; // survey가 존재하지 않을 경우 빈 화면 표시

  else return (
    <div className="survey-wrapper">
      <Header text={data.title} />
      <img className="survey-image" src={logo} alt="" />
      <p className="survey-content">{data.content}</p>
      <Button size="large" background="var(--color-button-a)" text={"A: " + data.choiceA} name="choiceA" onClick={choiceHandler} />
      <Button size="large" background="var(--color-button-b)" text={"B: " + data.choiceB} name="choiceB" onClick={choiceHandler} />
      {result && <Result survey={data} setResult={setResult} />}
    </div>
  )
}

export default Survey;