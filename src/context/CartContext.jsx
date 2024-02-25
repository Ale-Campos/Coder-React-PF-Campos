import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {


    const [productos, setProductos] = useState([])

    const getCantProductos = () => productos.length

    const getSumaTotal = () => productos.reduce((total, producto) => total += producto.price * producto.cantidad, 0)

    const addProducto = (producto, cantidad) => setProductos([...productos, {...producto, cantidad}])

    const clearCart = () => setProductos([])

    return (
        <CartContext.Provider value= {{productos, getCantProductos, getSumaTotal, addProducto, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}