import "./StatsBar.css";
import StrokeFonts from "../../StrokeFonts/StrokeFonts";

function StatsBar({ choiceA, choiceB }) {
  if (choiceA === undefined || choiceB === undefined) return;

  if (choiceA === 0 && choiceB === 0) {
    choiceA = 50;
    choiceB = 50;

    return (
      <div className="stats-bar-wrapper" style={{ "--choice-a-ratio": choiceA, "--choice-b-ratio": choiceB }}>
        <div className="stats-bar-null">
          0
        </div>
        <div className="stats-bar-null">
          0
        </div>
      </div>
    )
  }

  return (
    <div className="stats-bar-wrapper" style={{ "--choice-a-ratio": choiceA, "--choice-b-ratio": choiceB }}>
      <div className="stats-bar-choice-a" data-ratio={choiceA}>
        <StrokeFonts text={choiceA + "%"} />
      </div>
      <div className="stats-bar-choice-b" data-ratio={choiceB}>
        <StrokeFonts text={choiceB + "%"} />
      </div>
    </div>
  )
}

export default StatsBar;