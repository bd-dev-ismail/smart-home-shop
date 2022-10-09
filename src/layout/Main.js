import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from  '../components/Header';
import Footer from '../components/Footer';
export const ProductsContext = createContext();
export const CartContext = createContext([]);
const Main = () => {
  const {products, initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(cart);
    return (
      <>
        <ProductsContext.Provider value={products}>
          <CartContext.Provider value={[cart, setCart]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </>
    );
};

export default Main;