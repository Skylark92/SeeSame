import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PFUPDATE } from "../store/authSlice";
import setProfile from "../firebase/setProfile";

function useUpdateProfile() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProfile = async (uid, data) => {
    setIsPending(true); // 통신 시작
    const response = await setProfile(uid, data);

    if (response.ok) {
      // 프로필 변경 성공 시 상태 업데이트
      dispatch(PFUPDATE(response.profile));
      setError(null); // 에러 발생하지 않음
      setIsPending(false); // 통신 종료
      navigate("/survey");
    } else {
      if (typeof response.message === "string") setError(response.message);
      alert("Error! : " + response.message);
      navigate(-1);
      setIsPending(false); // 통신 종료
    }
  }

  return { updateProfile, isPending, error };
}

export default useUpdateProfile