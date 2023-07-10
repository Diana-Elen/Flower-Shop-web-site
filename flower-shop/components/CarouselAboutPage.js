import { useState } from "react";
import data from "./data";
import Image from "next/image";
import style from "../styles/CarouselAboutPage.module.css"
import arrow_add from "../images/arrow.png"
import arrow_remove from "../images/arrow.png"

export default function CarouselAboutPage() {
    const [index, setIndex] = useState(0);
    function handleClickAdd() {
        setIndex(index + 1);
    }
    function handleClickRemove() {
        setIndex(index - 1);
    }
    let myimages = data.products[index];
    return <>
    <div className={style.carousel_container}>
        <h2 className={style.carousel_title}>Check out my favourite bouquets:</h2>
        <h4>{myimages.name}</h4>
        <div className={style.image_arrow}>
            <button onClick={handleClickRemove} className={style.arrow_remove}>
                <Image src={arrow_remove} height={30} width={30} >
                </Image>
            </button>
            <Image src={myimages.image} className={style.main_image} height={200} width={200} />
            <button onClick={handleClickAdd} className={style.arrow_add}>
                <Image src={arrow_add} height={30} width={30} >
                </Image>
            </button>
        </div>
        <h5>Price: {myimages.price}$</h5>
    </div>
    </>
}