import "./RatioBar.css";
import RatioBarInner from "./RatioBarInner/RatioBarInner";

export default function RatioBar() {
  return (
    <div className="ratio-bar-wrapper">
      <RatioBarInner name="가능" ratio="50%" choice={true}/>
      <RatioBarInner name="불가능" ratio="50%" choice={false}/>
    </div>
  )
}
