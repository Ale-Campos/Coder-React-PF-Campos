import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {


    const [productos, setProductos] = useState([])

    const getCantProductos = () => productos.length

    const getSumaTotal = () => productos.reduce((total, producto) => total += producto.precio * producto.cantidad, 0)

    const addProducto = (producto, cantidad) => setProductos([...productos, {producto, cantidad}])

    return (
        <CartContext.Provider value= {{productos, getCantProductos, getSumaTotal, addProducto}}>
            {children}
        </CartContext.Provider>
    )

}