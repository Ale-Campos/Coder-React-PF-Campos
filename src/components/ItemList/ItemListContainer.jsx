import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading"

const ItemListContainer = ({ greeting }) => {
    
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams('categoryId')

    useEffect(()=> {
        const db = getFirestore()
        const itemsCollection = collection(db, 'productos')
        const consulta = categoryId? query(itemsCollection, where('category', '==', categoryId)) : itemsCollection

        getDocs(consulta).then((snap) => {
            let items = snap.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setProductos(items)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
        
    }, [categoryId])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div style={{textAlign:'center', padding:'2px'}}>
                            <h1 style={{fontSize:'40px'}}>{greeting} <span style={{textTransform:"capitalize"}}>{categoryId}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        { loading? <Loading/> : <ItemList items={productos}></ItemList>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer