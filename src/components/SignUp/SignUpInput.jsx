function SignUpInput({ id, name, type, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} />
    </>
  )
}

export default SignUpInput;