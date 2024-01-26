// import { useState } from "react";
import useCount from "../../../hooks/useCount";
const Counter = ({ stock }) => {
    const [result, makeCount] = useCount(1, stock);

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
                    <button className="btn btn-secondary mt-1">Add to cart</button>
                    <p className="text-center my-0">Stock disponible: {stock}</p>
                </div>
            </div>
        </>
    )
}

export default Counter;