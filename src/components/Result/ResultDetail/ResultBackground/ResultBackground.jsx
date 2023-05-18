import "./ResultBackground.css";

function ResultBackground({ children, title }) {
  return (
    <div className="result-detail-background" >
      {title && <h3 className="result-detail-title"><span className="stroke">{title}</span></h3>}
      {children}
    </div >
  )
}

export default ResultBackground