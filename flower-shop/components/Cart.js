import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";
import Product from "./Product"
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm"
import style from "../styles/Cart.module.css"

export default function Cart ({products}) {
  const { cartItems, getTotalCartAmount } = useContext(ShoppingCartContext);
  const totalAmount = getTotalCartAmount();
  return <>
      <div>
        <h1 className={style.text}>Your cart items</h1>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <>
              <CartItem key={product.id}
                product={product} />
            </>
          }          
        })}
      </div>
      {totalAmount > 0 ? (
        <div className={style.final_price}>
          <p className={style.total_pay}> Total: {totalAmount}$</p>
          <CheckoutForm totalAmount={totalAmount}/>
        </div>
        ) : (
        <h1 className={style.text}>Your Shopping Cart is Empty</h1>
      )}
  </>
}