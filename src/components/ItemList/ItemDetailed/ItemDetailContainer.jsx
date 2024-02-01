import { useParams } from "react-router-dom";
import ItemDetailed from "./ItemDetailed"
import Producto from "../../../db/database";

const ItemDetailContainer = () => {

    //TODO: Con useParam obtengo el id del producto y lo busco en la "base de datos"
    const items = Producto.listarProductos();
    console.log(items);
    
    const {productId} = useParams('productId');

    let product = items.find(item => item.id === parseInt(productId));

    return (
        <>
            <ItemDetailed item={product}></ItemDetailed>
        </>
    )

}

export default ItemDetailContainer;