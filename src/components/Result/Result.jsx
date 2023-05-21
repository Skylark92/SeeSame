import "./Result.css";
import { useSelector } from "react-redux";
import basicLogo from "../../assets/images/sesame_logo.png";
import Login from "../Login/Login";
import Header from "../Header/Header";
import StatsBar from "../Stats/StatsBar/StatsBar";
import ResultBackground from "./ResultDetail/ResultBackground/ResultBackground";
import ResultGender from "./ResultDetail/ResultGender/ResultGender";
import ResultMBTI from "./ResultDetail/ResultMBTI/ResultMBTI";
import statsResult from "../../util/statsResult";

function Result({ survey, setResult }) {
  const user = useSelector(state => state.auth.user);

  const stats = survey.stats;

  const result = statsResult(stats);

  const closeModal = (event) => {
    setResult(false);
  }

  if (!(survey && setResult && result)) return; // 데이터가 들어오지 않으면 빈 화면

  return (
    <div className="survey-result-container">
      <div className="survey-result-wrapper">
        <button className="survey-result-close-button" onClick={closeModal} type="button">
          <span className="stroke">ｘ</span>
        </button>
        <Header text={survey.title} />
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