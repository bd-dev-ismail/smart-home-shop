import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProducts = async()=>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    
    //get cart
    const savedCart = getStoredCart();
    let initialCart = [];
    for(const id in savedCart){
        const foundProduct = products.find((product)=> product.id === id);
        if(foundProduct){
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initialCart.push(foundProduct);
        }
    }
    return { products, initialCart };
}