import "./Slide.css"

function Slide({ children }) {

  return (
    <div className="slide-wrapper">
      {children}
    </div>
  )
}

export default Slide