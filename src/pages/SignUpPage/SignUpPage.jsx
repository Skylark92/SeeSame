import "./SignUpPage.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import SignUpInput from "../../components/SignUp/SignUpInput";
import useSignUp from "../../hooks/useSignUp";

function SignUpPage() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    question: "나의 보물 1호는?",
    answer: "",
  });

  // 유효성 검사 추가하자
  const questions = ["나의 보물 1호는?", "졸업한 초등학교 이름은?", "기억에 남는 추억의 장소는?", "하고싶은 말?", "나만 알아볼 수 있는 말은?"];

  const { signUp, isPending, error } = useSignUp();

  const inputHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = async (event) => {
    //
    const { passwordCheck, ...userData } = inputs;

    const res = await signUp(userData);
    console.log(res);
  }

  return (
    <div className="sign-up-wrapper">
      <h2>회원 가입</h2>
      <form onChange={inputHandler}>
        <SignUpInput id="sign-up-id" name="id" type="text" label="아이디" />
        <SignUpInput id="sign-up-password" name="password" type="password" label="패스워드" />
        <SignUpInput id="sign-up-password-check" name="passwordCheck" type="password" label="패스워드 확인" />
        <label htmlFor="sign-up-question">질문답변</label>
        <select id="sign-up-question" name="question">
          {questions.map((question) => <option value={question}>{question}</option>)}
        </select>
        <input id="sign-up-answer" name="answer" type="text" />
        <p className="sign-up-error-message"></p>
        <Button size="small"
          background="var(--color-button-a)"
          padding="1rem 3rem"
          margin="1.6rem 0"
          text="가입하기"
          disabled={isPending}
          onClick={submitHandler} />
      </form>
    </div>
  )
}

export default SignUpPage;