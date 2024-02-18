import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { productos, getCantProductos } = useContext(CartContext);

  if (getCantProductos() > 0) {
    return (
      <ul>
        {productos.map((item) => (
          <li key={item.producto.id}>
            Producto: {item.producto.title} {' '}
            Precio: {item.producto.price} {' '}
            Cantidad: {item.cantidad}
          </li>
        ))}
      </ul>
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
