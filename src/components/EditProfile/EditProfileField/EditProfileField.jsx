import "./EditProfileField.css";

function EditProfileField({ title, children }) {
  return (
    <fieldset className="edit-profile-field-container">
      <legend className="edit-profile-field-title">{title}</legend>
      {children}
    </fieldset>
  )
}

export default EditProfileField;