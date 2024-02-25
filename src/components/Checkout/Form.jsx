import { useState } from "react"

const Form = ({handleSubmit}) => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input onKeyUp={(e) => setName(e.target.value)} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input onKeyUp={(e) => setLastname(e.target.value)} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input onKeyUp={(e) => setEmail(e.target.value)} type="email" className="form-control" />
        </div>
        <button onClick={(e) => handleSubmit(e, name, lastname, email)} type="button" className="btn btn-primary">Confirmar compra</button>
      </form>
    </>
  )
}

export default Form
