import { Link } from "react-router-dom";
const Item = ({ item }) => {

    return(
        <>
            <div className="card" style={{width:'18rem',}}>
                <img src={item.pictureUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"><em>${item.price}</em></p>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <Link to={`/product/${item.id}`} className="btn btn-secondary">Ver detalles</Link>
                </div>
            </div>
        </>
    )

};

export default Item;