export default function RatioBarInner({name, ratio, choice}) {
  return (
    <div className={choice ? "ratio-bar-chosen" : "ratio-bar-rested"} style={{width: ratio}}>
      {`${name} ${ratio}`}
    </div>
  )
}
