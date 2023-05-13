import "./EditProfileRadioInput.css";

function EditProfileRadioInput({ id, name }) {
  return (
    <div className="edit-profile-input-wrapper">
      <input type="radio" id={id} name={name} value={id} hidden />
      <label className="edit-profile-radio-input-label" htmlFor={id}>{id}</label>
    </div>
  )
}

export default EditProfileRadioInput;