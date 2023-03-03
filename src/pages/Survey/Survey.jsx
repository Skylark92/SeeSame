import "./Survey.css";
import SurveyImage from "../../components/Survey/SurveyImage/SurveyImage";
import SurveyText from "../../components/Survey/SurveyText/SurveyText";

export default function Survey() {
  return (
    <div className="survey-wrapper">
      <SurveyImage/>
      <SurveyText/>
    </div>
  )
}
