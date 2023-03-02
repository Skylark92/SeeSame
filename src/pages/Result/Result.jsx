import RatioBar from "../../components/RatioBar/RatioBar";
import ResultSection from "../../components/Result/ResultSection/ResultSection";
import "./Result.css";

export default function Result() {
  return (
    <div>
      <ResultSection title="깻잎 논쟁">
        <p>본문내용 본문내용 본문내용 본문내용 본문내용 본문내용 본문내용 본문내용 본문내용 본문내용 본문내용</p>
      </ResultSection>
      <hr />
      <ResultSection title="너와 같은 사람은?">
        <RatioBar/>
      </ResultSection>
    </div>
  )
}
