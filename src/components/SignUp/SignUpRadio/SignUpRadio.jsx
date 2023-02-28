import "./SignUpRadio.css";
import SignUpRadioTitle from "./SignUpRadioTitle/SignUpRadioTitle";
import SignUpRadioInput from "./SignUpRadioInput/SignUpRadioInput";

export default function SignUpRadio({title, inputArray}) {
  return (
    <fieldset className="signup-radio-wrapper">
      <SignUpRadioTitle title={title}/>
      <div className="signup-radio-input-wrapper">
        {inputArray.map((id) => ( <SignUpRadioInput id={id} name={title}/> ))}
      </div>
    </fieldset>
  )
}
