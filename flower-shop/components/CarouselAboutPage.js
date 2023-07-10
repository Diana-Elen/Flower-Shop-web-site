import { useState } from "react";
import data from "./data";
import Image from "next/image";

export default function CarouselAboutPage() {
    const [index, setIndex] = useState(0);


    function handleClick() {
        setIndex(index + 1);
    }

    let myimages = data.products[index];

    return <>
    <div>
        <h2>Check out my favourite bouquets:</h2>
        <button onClick={handleClick}>next</button>
        <h3>{myimages.name}</h3>
        <Image src={myimages.image} height={300} width={300} />
        <h3>{myimages.price}$</h3>
    </div>
    </>
}