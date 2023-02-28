export default function SignUpRadioInput({id, name}) {
  return (
    <>
      <input type="radio" id={id} name={name} value={id}/>
      <label className="signup-radio-input-label" htmlFor={id}>{id}</label>
    </>
    
  )
}
