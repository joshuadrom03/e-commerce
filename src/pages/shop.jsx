import "../css/shop.css"
import Products from "../hooks/fetchItems"

export function Shop(){
    return (<div className="shopping-container">
        <Products />
        </div>
    )
}