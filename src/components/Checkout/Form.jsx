import { useEffect, useState } from "react"
import Input from "./Input"

const Form = ({handleSubmit}) => {


  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const [nameError, setNameError] = useState(false)
  const [lastnameError, setLastnameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    name === '' ? setNameError(true) : setNameError(false)
    lastname === '' ? setLastnameError(true) : setLastnameError(false)
    email === '' ? setEmailError(true) : setEmailError(false)
  }, [name, lastname, email])

  const onSubmit = (e, name, lastname, email) => {
    e.preventDefault()
    if(!nameError && !lastnameError && !emailError) {
      handleSubmit(e, name, lastname, email)
    }
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <Input label={"Nombre"} setState={setName} errorState={nameError}/>
        </div>
        <div className="mb-3">
          <Input label={"Apellido"} setState={setLastname} errorState={lastnameError}/>
        </div>
        <div className="mb-3">
          <Input label={"Email"} setState={setEmail} errorState={emailError} />
        </div>
        <div>
          <button 
            disabled={emailError || lastnameError || nameError} 
            onClick={(e) => onSubmit(e, name, lastname, email)} 
            type="button" 
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Confirmar compra
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-1"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
