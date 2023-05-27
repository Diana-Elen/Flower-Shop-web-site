import style from "../styles/Product.module.css"
import Image from "next/image"
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";

export default function CartItem ({price, name, image, id}) {
  const {addProducts, removeProducts, cartItems} = useContext(ShoppingCartContext);
  return <>
    <div className={style.product_container}>
    <div className={style.cart_product}>
      <div className={style.name_price}>
      <div className={style.product_name}></div>
        <div className={style.product_name}>{name}</div>
        <div className={style.product_price}>{price}$</div>
      </div>
      <Image className={style.image_size} src={image} width={250} height={250} alt="image">
      </Image>
    </div>
    </div>
  </>
}