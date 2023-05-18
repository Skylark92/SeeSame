import "./Login.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Button from "../Button/Button";

function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    password: ""
  })

  const auth = useSelector(state => state.auth);

  const { userLogin, error } = useLogin();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const loginHandler = async (event) => {
    const { id, password } = inputs;

    const response = await userLogin(id, password);
    console.log(response);
    if (!response.user.profile) navigate("/editprofile", { replace: true });
    else navigate("/survey");
  }

  if (auth.isLogin || auth.user) return;

  else return (
    <form className="login-wrapper" onChange={inputHandler}>
      <div className="login-background"></div>
      <p className="login-notice stroke">로그인 하시거나 회원 가입하시면<br />다른 재미있는 논쟁에 대한<br />답도 보실 수 있습니다.</p>
      <input type="text" name="id" placeholder="아이디" />
      <input type="password" name="password" placeholder="비밀번호" />
      <p className="login-error-message">{error}</p>
      <Button size="small"
        background="var(--color-button-a)"
        margin="1.5rem 0"
        text="로그인"
        onClick={loginHandler} />
      <Button size="xSmall"
        background="var(--color-button-c)"
        text="회원가입"
        onClick={() => navigate("/signup")} />
    </form>
  )
}

export default Login;