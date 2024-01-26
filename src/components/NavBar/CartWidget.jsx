const CartWidget = () => {
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
            0
          </span>
        </i>
      </div>
    </div>
  );
};

export default CartWidget;
