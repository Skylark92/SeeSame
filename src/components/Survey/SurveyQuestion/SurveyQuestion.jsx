import Button from "../../Button/Button";
import "./SurveyQuestion.css";
import SurveyQuestionImage from "./SurveyQuestionImage/SurveyQuestionImage";
import SurveyQuestionText from "./SurveyQuestionText/SurveyQuestionText";

export default function SurveyQuestion() {
  return (
    <div className="survey-question-wrapper">
      <SurveyQuestionImage/>
      <SurveyQuestionText/>
      <Button text="가능" bgColor="green" ></Button>
      <Button text="불가능" bgColor="red" ></Button>
    </div>
  )
}
