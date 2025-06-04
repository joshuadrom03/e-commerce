import { Link } from "react-router-dom";
import "../css/navbar.css";

export function Navbar() {
    return(
        <span className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="shop">Shop</Link>
            </li>
            <li>
                <Link to="cart">Cart</Link>
            </li>
        </span>
        
    )
  
}