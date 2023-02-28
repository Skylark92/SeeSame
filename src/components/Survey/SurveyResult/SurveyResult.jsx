import SurveyQuestion from "../SurveyQuestion/SurveyQuestion";
import SurveyResultRatio from "./SurveyResultRatio/SurveyResultRatio"
import SurveyResultCommnet from "./SurveyResultComment/SurveyResultComment";

export default function SurveyResult() {
  return (
    <div className="survey-result-wrapper">
      <SurveyQuestion/>
      <SurveyResultRatio/>
      <SurveyResultCommnet/>
    </div>
  )
}
