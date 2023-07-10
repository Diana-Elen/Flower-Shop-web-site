import { useState } from "react";
import data from "./data";
import Image from "next/image";
import style from "../styles/CarouselAboutPage.module.css"

export default function CarouselAboutPage() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index + 1);
    }
    let myimages = data.products[index];
    return <>
    <div className={style.carousel_container}>
        <h2 className={style.carousel_title}>Check out my favourite bouquets:</h2>
        <h4>{myimages.name}</h4>
        <Image src={myimages.image} height={300} width={300} />
        <h5>Price: {myimages.price}$</h5>
        <button onClick={handleClick}>next</button>
    </div>
    </>
}