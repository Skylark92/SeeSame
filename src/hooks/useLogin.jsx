import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../store/authSlice";
import login from "../firebase/login";


function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = async (id, password) => {
    setIsPending(true); // 통신 시작

    const response = await login(id, password); // 로그인 요청

    if (response.ok) {
      // 로그인 성공 시 상태 업데이트
      dispatch(LOGIN(response.user));
      setError(null); // 에러 발생하지 않음
      setIsPending(false); // 통신 종료
      if (!response.user.profile) navigate("/editprofile", { replace: true });
      else navigate("/survey");
    } else {
      if (typeof response.message === "string") setError(response.message);
      setIsPending(false); // 통신 종료
    }
  }

  return { userLogin, isPending, error };
}

export default useLogin;