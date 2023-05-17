import "./StatsBar.css";

function StatsBar({ choiceA, choiceB }) {
  if (choiceA === undefined || choiceB === undefined) return;

  if (choiceA === 0 && choiceB === 0) {
    // 아직 결과가 없는 경우
    return (
      <div className="stats-bar-wrapper">
        <div className="stats-bar-null">
          <span className="stroke">-</span>
        </div>
      </div>
    )
  }

  return (
    <div className="stats-bar-wrapper" style={{ "--choice-a-ratio": choiceA, "--choice-b-ratio": choiceB }}>
      <div className="stats-bar-choice-a stroke" data-ratio={choiceA}>
        <span className="stroke">{choiceA + "%"}</span>
      </div>
      <div className="stats-bar-choice-b stroke" data-ratio={choiceB}>
        <span className="stroke">{choiceB + "%"}</span>
      </div>
    </div>
  )
}

export default StatsBar;