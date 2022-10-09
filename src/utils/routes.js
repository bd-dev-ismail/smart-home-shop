import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Main from "../layout/Main";
import {getCartAndProducts} from '../loaders/getCartAndProducts'
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: getCartAndProducts,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/cart", element: <Cart></Cart> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
export default router ;