import "./EditProfilePage.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import EditProfileField from "../../components/EditProfile/EditProfileField/EditProfileField";
import EditProfileRadioInput from "../../components/EditProfile/EditProfileRadioInput/EditProfileRadioInput";
import EditProfileImageModal from "../../components/EditProfile/EditProfileImageModal/EditProfileImageModal";
import useUpdateProfile from "../../hooks/useUpdateProfile";

function EditProfilePage() {
  /* 프로필 수정 페이지, 회원가입 시와 프로필 변경 시 이용 */

  /* 상태 정의 */
  const [inputs, setInputs] = useState({
    profileImage: "profile-image-01",
    성별: null,
    나이: null,
    EI: null,
    SN: null,
    TF: null,
    JP: null
  }) // 입력값
  const [isModalOpen, setIsModalOpen] = useState(false); // 이미지 선택 모달 렌더링 상태
  const [isValid, setIsValid] = useState(false); // 유효성 상태
  const user = useSelector(state => state.auth.user); // 유저 상태
  const { updateProfile, isPending } = useUpdateProfile();

  useEffect(() => {
    if (Object.values(inputs).includes(null)) setIsValid(false);
    else setIsValid(true);
  }, [inputs])

  /* 이벤트 핸들러 */
  const inputHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  } // 입력값 상태 관리

  const submitHandler = async (event) => {
    const { 성별, 나이, profileImage, ...MBTI } = inputs;
    const profileData = {
      profileImage: profileImage,
      gender: 성별,
      age: 나이,
      MBTI: Object.values(MBTI).join("")
    }

    updateProfile(user?.uid, profileData);
  } // 프로필 데이터 제출

  const modalHandler = (event) => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <form className="edit-profile-wrapper" onChange={inputHandler}>
      <div className="edit-profile-image-view" style={{ backgroundPosition: `var(--${inputs.profileImage})` }} onClick={modalHandler}>
        {<EditProfileImageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      </div>
      {/* <p>{닉네임 설정}</p> */}
      <EditProfileField title="성별">
        {["남자", "여자"].map((item) => <EditProfileRadioInput id={item} name="성별" />)}
      </EditProfileField>
      <EditProfileField title="나이">
        {["10대", "20대", "30대", "40대", "청춘"].map((item) => <EditProfileRadioInput id={item} name="나이" />)}
      </EditProfileField>
      <EditProfileField title="MBTI">
        <div className="edit-profile-option-wrapper">
          {["E", "I"].map((item) => <EditProfileRadioInput id={item} name="EI" />)}
        </div>
        <div className="edit-profile-option-wrapper">
          {["S", "N"].map((item) => <EditProfileRadioInput id={item} name="SN" />)}
        </div>
        <div className="edit-profile-option-wrapper">
          {["T", "F"].map((item) => <EditProfileRadioInput id={item} name="TF" />)}
        </div>
        <div className="edit-profile-option-wrapper">
          {["J", "P"].map((item) => <EditProfileRadioInput id={item} name="JP" />)}
        </div>
      </EditProfileField>
      <Button size="medium" background={"linear-gradient(#fb8ca7, #ee3859)"} text="확인" disabled={!isValid || isPending} onClick={submitHandler} />
    </form>
  )
}

export default EditProfilePage;