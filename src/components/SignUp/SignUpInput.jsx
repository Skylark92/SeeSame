import "./SignUpInput.css";

function SignUpInput({ id, name, type, label }) {
  return (
    <>
      <label className="sign-up-input-label" htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} />
    </>
  )
}

export default SignUpInput