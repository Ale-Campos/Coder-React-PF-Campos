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
        <div className="">
          <button data-bs-dismiss="modal" onClick={(e) => handleSubmit(e, name, lastname, email)} type="button" className="btn btn-primary">Confirmar compra</button>
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
