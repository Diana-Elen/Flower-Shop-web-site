import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";
import data from "./data";
import Cart from "./Cart";


export default function CartRoot() {
    const {products} = data;
    return <>
        <ShoppingCartContextProvider>
            <div>
                <Cart
                    products={products} 
                />
            </div>
        </ShoppingCartContextProvider>
    </>
}
