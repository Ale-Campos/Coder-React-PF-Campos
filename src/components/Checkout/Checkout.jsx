import Form from "./Form"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const Checkout = ({productos}) => {

    const handleSubmit = (e, name, lastname, email) => {
        e.preventDefault()
        const order = {
            buyer: {
                name: name,
                lastname: lastname,
                email: email
            },
            items: productos,
            date: new Date().toString()
        }
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, order)
    }

    return (
        <section>
          <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Finaliza tu compra
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                    <Form handleSubmit={handleSubmit} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Checkout
