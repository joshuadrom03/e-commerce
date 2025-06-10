import { useCart } from "../hooks/cartContext";
import "../css/cart.css"

//if item title too long it looks weird fix it

export function Cart(){

    const {cart} = useCart();
    console.log(cart)
    return (
        <div className="cart-container">
            
           <div className="cart-heading">Cart {cart.length}</div>
           {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                <div className="card-image">
                    <img src= {item.image} className="cart-img"></img>
                 </div>
                 <div className="card-description">
                    <p>{item.title}</p>
                    <p className="price"> ${item.price}</p>
                </div>

                <button className="remove-cart">X</button>
                </div>  
           ))}
          
        </div>
    )
}