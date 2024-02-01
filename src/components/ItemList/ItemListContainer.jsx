import Producto from "../../db/database";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {

    const items = Producto.listarProductos();
    
    const {categoryId} = useParams('categoryId');
    let filteredItems = [...items];
    if(categoryId){
        filteredItems = items.filter(item => item.category=== categoryId);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div style={{textAlign:'center', padding:'2px'}}>
                            <h1 style={{fontSize:'40px'}}>{greeting}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ItemList items={filteredItems}></ItemList>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default ItemListContainer;