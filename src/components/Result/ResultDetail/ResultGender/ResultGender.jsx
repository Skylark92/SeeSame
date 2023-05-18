import "./ResultGender.css";
import StatsBar from "../../../Stats/StatsBar/StatsBar";
import ResultBackground from "../ResultBackground/ResultBackground";

function ResultGender({ result }) {
  if (!result) return;

  return (
    <ResultBackground>
      <div className="result-gender-wrapper">
        <div className="result-man-wrapper">
          <h4 className="result-man-title"><span className="stroke">남자</span></h4>
          <StatsBar choiceA={result.man.청춘A} choiceB={result.man.청춘B} />
          <StatsBar choiceA={result.man["40대A"]} choiceB={result.man["40대B"]} />
          <StatsBar choiceA={result.man["30대A"]} choiceB={result.man["30대B"]} />
          <StatsBar choiceA={result.man["20대A"]} choiceB={result.man["20대B"]} />
          <StatsBar choiceA={result.man["10대A"]} choiceB={result.man["10대B"]} />
        </div>
        <div className="result-gender-title-wrapper">
          {["청춘", "40대", "30대", "20대", "10대"].map((title) => (<span className="stroke">{title}</span>))}
        </div>
        <div className="result-woman-wrapper">
          <h4 className="result-woman-title"><span className="stroke">여자</span></h4>
          <StatsBar choiceA={result.woman.청춘A} choiceB={result.woman.청춘B} />
          <StatsBar choiceA={result.woman["40대A"]} choiceB={result.woman["40대B"]} />
          <StatsBar choiceA={result.woman["30대A"]} choiceB={result.woman["30대B"]} />
          <StatsBar choiceA={result.woman["20대A"]} choiceB={result.woman["20대B"]} />
          <StatsBar choiceA={result.woman["10대A"]} choiceB={result.woman["10대B"]} />
        </div>
      </div>

    </ResultBackground>
  )
}

export default ResultGender