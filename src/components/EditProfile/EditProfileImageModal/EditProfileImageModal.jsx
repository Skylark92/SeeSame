import "./EditProfileImageModal.css";

function EditProfileImageModal({ isModalOpen }) {

  const images = ["profile-image-01", "profile-image-02", "profile-image-03",
    "profile-image-04", "profile-image-05", "profile-image-06",
    "profile-image-07", "profile-image-08", "profile-image-09"];

  return (
    <div className="edit-profile-image-modal-wrapper" style={{ visibility: isModalOpen ? "visible" : "hidden" }}>
      <div className="edit-profile-image-selector">
        {images.map((image) => (
          <label className="edit-profile-image-selector-label" htmlFor={image} style={{ backgroundPosition: `var(--${image})` }}>
            <input type="radio" id={image} name="profileImage" value={image} hidden />
          </label>
        ))}
      </div>
    </div>
  )
}

export default EditProfileImageModal;