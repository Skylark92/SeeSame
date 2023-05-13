import "./Result.css";
import { useSelector } from "react-redux";
import StatsBar from "../Stats/StatsBar/StatsBar";
import Login from "../../components/Login/Login";

function Result({ survey, setResult }) {
  const user = useSelector(state => state.auth.user);
  // 결과 즉각 반영 안 되는 문제 해결해야 함

  if (!(survey && setResult)) return;
  const stats = survey.stats;

  let choiceARatio = 0;
  let choiceBRatio = 0;
  if (stats.total !== 0) {
    choiceARatio = (stats.choiceA.total / stats.total * 100).toFixed(2);
    choiceBRatio = (stats.choiceB.total / stats.total * 100).toFixed(2);
  }

  const closeModal = (event) => {
    setResult(false);
  }

  return (
    <div className="survey-result-wrapper">
      <h2>{survey.title}</h2>
      <h3>가능, 불가능</h3>
      <StatsBar choiceA={choiceARatio} choiceB={choiceBRatio} />
      <h3>남자</h3>
      <h3>여자</h3>
      <h3>MBTI</h3>
      <h3>BEST 댓글</h3>
      <button type="button" onClick={closeModal}>X</button>
      {user ? null : <Login />}
    </div>
  )
}

export default Result;