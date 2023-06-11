import style from "../styles/TabNav.module.css";
import { useState } from "react";
import Description from "./Description";
import Testimonials from "./Testimonials";


export default function TabNav() {
    const [active, setActive] = useState(true);

    return <div className={style.components}> 
        <div className={style.tab_nav}>
            <button className={style.tab_nav_button} onClick={() => setActive(!active)}>
                Our promise {(active)}
            </button>
            <button className={style.tab_nav_button} onClick={() => setActive(!active)}>
                Testimonials {(active)}
            </button>
        </div>
        <div className={style.text}>
            {active && <div>
                <Description />
            </div>}
            {!active && <div>
                <Testimonials />
            </div>}
        </div>    
</div>
}
