import { useParams } from "react-router-dom"
import ItemDetailed from "./ItemDetailed"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            const db = getFirestore();
            const prodRef = doc(db, 'productos', productId)
            getDoc(prodRef).then((snap) => {
                if(snap.exists()) {
                    setProduct({id: snap.id, ...snap.data()})
                    setLoading(false)
                }
            }).catch((err) => {
                console.log(err)
            })
        }

        fetchProduct()
    }, [productId])

    if(loading) {
        return (<Loading/>)
    } else {
        return (
                <ItemDetailed loading={loading} item={product}></ItemDetailed>
        )
    }
}

export default ItemDetailContainer;
