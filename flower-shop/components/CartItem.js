import style from "../styles/Product.module.css"
import Image from "next/image"
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";

export default function CartItem ({product}) {
  const {addProducts, removeProducts, cartItems} = useContext(ShoppingCartContext);
  return <>
    <div className={style.cartitems_container}>
      <div className={style.cart_product}>
        <div className={style.name_price}>
        <div className={style.product_name}></div>
          <div className={style.product_name}>{product.name}</div>
          <div className={style.product_price}>{product.price}$</div>
        </div>
        <Image className={style.image_size} src={product.image} width={250} height={250} alt="image">
        </Image>
      </div>
    </div>
  </>
}