import "../css/shop.css"
import { useEffect, useState } from "react"

const FetchItems = () => {
    const [items, setItems] = useState([])
    const [load,setLoad] = useState(true)

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => {
                setItems(res);
                setLoad(false)
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoad(false))

    }, [])

    return { items,load}
}


export default FetchItems