import "./Result.css";
import { useSelector } from "react-redux";
import StatsBar from "../Stats/StatsBar/StatsBar";
import Login from "../../components/Login/Login";
import ResultBackground from "./ResultDetail/ResultBackground/ResultBackground";
import Header from "../Header/Header";
import basicLogo from "../../assets/images/sesame_logo.png";
import statsResult from "../../util/statsResult";
import ResultGender from "./ResultDetail/ResultGender/ResultGender";
import ResultMBTI from "./ResultDetail/ResultMBTI/ResultMBTI";

function Result({ survey, setResult }) {
  const user = useSelector(state => state.auth.user);
  // 결과 즉각 반영 안 되는 문제 해결해야 함

  if (!(survey && setResult)) return;
  const stats = survey.stats;

  const result = statsResult(stats);

  const closeModal = (event) => {
    setResult(false);
  }

  return (
    <div className="survey-result-container">
      <div className="survey-result-wrapper">
        <Header text={survey.title} backButton={true} onClick={closeModal} />
        <div className="survey-result-content-wrapper">
          <img src={basicLogo} />
          <p>{survey.content}</p>
        </div>
        <ResultBackground title="가능:A 불가능:B">
          <StatsBar choiceA={result.total.choiceA} choiceB={result.total.choiceB} />
        </ResultBackground>
        <ResultGender result={result} />
        <ResultMBTI result={result} />
        {user ? null : <Login />}
      </div>
    </div>

  )
}

export default Result;