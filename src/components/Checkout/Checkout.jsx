import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Form from "./Form"
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore"

const Checkout = ({productos}) => {

  const {clearCart} = useContext(CartContext)

  const handleSubmit = (e, name, lastname, email) => {
    e.preventDefault()
    const db = getFirestore()

    const orders = collection(db, 'orders')
    const order = {
        buyer: {
            name: name,
            lastname: lastname,
            email: email
        },
        items: productos,
        date: new Date().toString()
    }

    addDoc(orders, order)
    
    const batch = writeBatch(db)
    productos.forEach((prod) => {
        const docRef = doc(db, 'productos', prod.id)
        batch.update(docRef, {stock: prod.stock - prod.cantidad})
    })
    batch.commit()
    clearCart()
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
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Checkout
