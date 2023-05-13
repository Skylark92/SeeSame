import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../store/authSlice";
import checkId from "../firebase/checkId";
import createUser from "../firebase/createUser";

function useSignUp() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async (data) => {
    setIsPending(true); // 통신 시작

    const checkRes = await checkId(data.id); // 아이디 확인

    if (checkRes) {
      setError("이미 존재하는 아이디입니다.");
      setIsPending(false);
      return;
    }

    const signUpRes = await createUser(data);

    if (signUpRes.ok) {
      // 회원가입 성공 시 상태 업데이트
      dispatch(LOGIN(signUpRes.user));
      setError(null); // 에러 발생하지 않음
      navigate("/editprofile", { replace: true });
    } else {
      // 실패 시
      if (typeof signUpRes.message === "string") setError(signUpRes.message);
    }

    setIsPending(false); // 통신 종료
    return;
  }

  return { signUp, isPending, error };
}

export default useSignUp;