import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {getCantProductos} = useContext(CartContext)

  return (
    <div className="card-widget" style={{ marginRight:"40px" }}>
      <div className="card-widget__icon">
        <i className="fa-solid fa-cart-shopping fa-xl">
          <span className="badge bg-secondary" 
          style={{ 
            position: "relative",
            top: "-17px",
            left: "-10px",
            width: "24px",
            fontSize: "12px",
            borderRadius: "50%",
            }}>
            {getCantProductos()}
          </span>
        </i>
      </div>
    </div>
  );
};

export default CartWidget;
