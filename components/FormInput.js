export default function FormInput({id, label, type="text", ...props}) {
  return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input  id={id} type={type} name={id} {...props} ></input>
      </div>
  )
}