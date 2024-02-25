import { useParams } from "react-router-dom"
import ItemDetailed from "./ItemDetailed"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, 'productos')

            let items = await getDocs(itemsCollection).then((snap) => snap.docs.map(doc => doc.data()))
            let selectedProduct = items.find(item => item.id === parseInt(productId))
            setProduct(selectedProduct)
            setLoading(false)
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
