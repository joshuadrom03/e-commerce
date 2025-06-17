
import "../css/shop.css"
import { useCart } from "../hooks/cartContext"
import FetchItems from "../hooks/fetchItems"
import Load from "./load"

//create loading page if load is set to false

export function Shop(){
    const {items, load} = FetchItems()
    const {setCart} = useCart();

     const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    }
   
    return(
        <div className="shop-container">
            {load ? (
                <Load />
            ) : (
        items.map((item) => (
            <div className="card"
            key={item.id}>
                <div className="card-image">
                <img src= {item.image} className="item-img"></img>
                 </div>
                <div className="item-description">
                    <p>Title: {item.title}</p>
                    <p>Categroy: {item.category}</p>
                    <p className="price"> ${item.price}</p>
                </div>
                <div className="card-btns">
                    <button className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                    >+ Add To Cart</button>
                </div>
            </div>
        ))
    )}
        </div>
    )
}
