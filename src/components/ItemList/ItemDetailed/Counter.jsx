// import { useState } from "react";
import { useContext, useEffect, useState } from "react"
import useCount from "../../../hooks/useCount"
import { CartContext } from "../../../context/CartContext"
const Counter = ({ producto }) => {
  const [result, makeCount] = useCount(1, producto.stock)
  const [agregado, setAgregado] = useState(false)
  const { addProducto, productos } = useContext(CartContext)

  useEffect(() => {
    if (productos.find((item) => item.id === producto.id)) {
      setAgregado(true)
    }
  }, [productos, producto.id])

  const onAdd = () => {
    if (!agregado) {
      addProducto(producto, result)
    } else {
      alert("El producto ya se encuentra en el carrito");
    }
  }

  const handleCount = (operation) => {
    makeCount(operation)
  }

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="btn-group">
            <button
              onClick={() => handleCount("-")}
              className="btn btn-secondary"
              type="button"
            >
              -
            </button>
            <input
              className="btn text-center"
              value={result}
              style={{ border: "1px solid #d6d7dd", maxWidth: "50px" }}
              readOnly
            />
            <button
              onClick={() => handleCount("+")}
              className="btn btn-secondary"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {producto.stock === 0 ? (
            <button className="btn btn-secondary mt-2" disabled>
              Sin stock
            </button>
          ) : (
            <button onClick={() => onAdd()} className="btn btn-secondary mt-2">
              {agregado ? "Ya esta agregado" : "Agregar"}
            </button>
          )}
          <p className="text-center m-0">Stock disponible: {producto.stock}</p>
        </div>
      </div>
    </>
  )
}

export default Counter
