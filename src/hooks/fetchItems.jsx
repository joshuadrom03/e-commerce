import "../css/shop.css"
import { useEffect, useState } from "react"

const Products = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => {
                setItems(res);
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, [])

    return (
        <>
        {console.log(items)}
        {items.map((item) => (
            <div className="card"
            key={item.id}>
                <div className="card-image">
                <img src= {item.image} className="item-img"></img>
                 </div>
                <div className="item-description">
                    <p>Title: {item.title}</p>
                    <p>Categroy: {item.category}</p>
                    <p>Price: {item.price}</p>
                    <button className="add-to-cart-btn">Add To Cart</button>
                </div>
            </div>
        ))}
        
        </>
    )
}


export default Products