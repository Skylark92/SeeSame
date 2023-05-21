import "./ResultMBTI.css";
import ResultBackground from "../ResultBackground/ResultBackground";
import StatsBar from "../../../Stats/StatsBar/StatsBar";

function ResultMBTI({ result }) {
  if (!result) return;

  return (
    <ResultBackground title="MBTI">
      <div className="result-MBTI-wrapper">
        {result.MBTI.map((obj) => {
          return (
            <div className="result-MBTI-several">
              <span className="stroke">{obj.MBTI}</span>
              <StatsBar choiceA={obj.choiceA} choiceB={obj.choiceB} />
            </div>
          )
        })}
      </div>
    </ResultBackground>
  )
}

export default ResultMBTI