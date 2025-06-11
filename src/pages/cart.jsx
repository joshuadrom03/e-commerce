import { useCart } from "../hooks/cartContext";
import "../css/cart.css"
import { useEffect, useState } from "react";

//make total round of to 2 decimal places


export function Cart(){

    const [totalPrice, setTotalPrice] = useState(0)
    const {cart, setCart} = useCart();

    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price, 0)
        setTotalPrice(total)
    }, [cart])

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart)
        console.log(cart)
    }

    return (
        <div className="cart-container">
           <div className="cart-heading">
            Cart {cart.length}
           </div>
           <div>
           {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                <div className="card-image">
                    <img src= {item.image} className="cart-img"></img>
                 </div>
                 <div className="card-description">
                    <p>{item.title}</p>
                    <p className="price"> ${item.price}</p>
                </div>
                <button className="remove-cart" onClick={() => {removeItem(item.id)}}>X</button>
                </div>  
           ))}
           </div>
           <div className="total-section">
                Total: ${totalPrice.toFixed(2)}
           </div>
        </div>
    )
}