import { createContext, useEffect, useState } from "react";
import data from "@/components/data";


export const ShoppingCartContext = createContext(null);

const getDefaultCartStatus = () => {
    let cart = {};
    for (let i = 0; i < data.products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShoppingCartContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCartStatus());
    
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] !== 0) {
          let itemInfo = data.products.find((product) => product.id == Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
          console.log({itemInfo})
        }
      }
      return totalAmount;
    };

    const addProducts = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    const removeProducts = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    const checkout = () => {
    setCartItems(getDefaultCartStatus());
    };

    useEffect(() => {
      setCartItems(localStorage.getItem("cartItems")
      ?
       JSON.parse(localStorage.getItem("cartItems"))
       : []
      );
    }, []);
    
    const contextValue = {cartItems, addProducts, removeProducts, getTotalCartAmount, checkout};

    return <ShoppingCartContext.Provider value={contextValue}>
        {props.children}
    </ShoppingCartContext.Provider>
}