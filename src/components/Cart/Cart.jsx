import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Checkout from "../Checkout/Checkout";

export const Cart = () => {
  const { productos, getCantProductos, getSumaTotal } = useContext(CartContext);

  if (getCantProductos() > 0) {
    return (
      <>
        <section className="container mt-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.cantidad}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total</td>
                <td>{getSumaTotal()}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  className="btn btn-primary"
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </section>
        <Checkout productos={productos}/>
      </>
    );
  } else {
    return (
      <div>
        <h1>El carrito está vacío</h1>
      </div>
    );
  }
};

export default Cart;
