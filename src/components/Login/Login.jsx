import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../store/authSlice";
import login from "../../firebase/login";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    password: ""
  })

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const loginHandler = async (event) => {
    const { id, password } = inputs;

    const response = await login(id, password);
    dispatch(LOGIN(response.user));
    console.log(response);
    if (!response.user.profile) navigate("/editprofile", { replace: true });
    else navigate("/survey");
  }

  if (auth.isLogin || auth.user) return;

  else return (
    <form className="login-wrapper" onChange={inputHandler}>
      <input type="text" name="id" placeholder="아이디" />
      <input type="password" name="password" placeholder="비밀번호" />
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