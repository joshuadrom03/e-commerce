import HomePage from "../pages/homePage";
import { Shop } from "../pages/shop";
import { Cart } from "../pages/cart";
import { ErrorPage } from "../pages/errorPage";
import { Navbar } from "../components/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../css/index.css"
import { CartProvider } from "../hooks/cartContext";

const Layout = () =>(
    <>
        <Navbar />
            <Outlet />
    </>
)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/", element: <HomePage />
            },
            {
                path: "shop", element: <Shop />
            },
            {
                path:"cart", element: <Cart />
            }
        ]
    }
])

const App = () =>{
    return (
        <CartProvider>
             <RouterProvider router={router} />
        </CartProvider>
    )

}

export default App;

