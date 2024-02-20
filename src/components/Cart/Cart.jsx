import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { productos, getCantProductos, getSumaTotal} = useContext(CartContext);
  console.log('productosss');
  console.log(productos);

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
      </>
    );
  } else {
    return (
      <div>
          <h1>El carrito está vacío</h1>
      </div>
    )
  }
};

export default Cart;
