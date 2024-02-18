// import { useState } from "react";
import { useContext } from "react";
import useCount from "../../../hooks/useCount";
import { CartContext } from "../../../context/CartContext";
const Counter = ({ producto }) => {
    const [result, makeCount] = useCount(1, producto.stock);

    const {addProducto} = useContext(CartContext)

    const onAdd = () => addProducto(producto, result)

    const handleCount = (operation) => {
        makeCount(operation)
    }

    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button onClick={() => handleCount('-')} className="btn btn-secondary" type="button" id="button-addon1">-</button>
                        </div>
                        <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={result} readOnly/>
                        <div className="input-group-append">
                            <button onClick={() => handleCount('+')} className="btn btn-secondary" type="button" id="button-addon2">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button onClick={()=> onAdd()} className="btn btn-secondary mt-1">Add to cart</button>
                    <p className="text-center my-0">Stock disponible: {producto.stock}</p>
                </div>
            </div>
        </>
    )
}

export default Counter;