import "../css/shop.css"
import { useEffect, useState } from "react"

const FetchItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => {
                setItems(res);
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, [])

    return { items}
}


export default FetchItems