import style from "../styles/Description.module.css"

export default function Testimonials() {
    return <>
        <p className={style.description_text}>
            Our clients are so happy about our bouquets and the promptitude they are delivered! 
            Check out the latest reviews
        </p>
        <div className={style.testimonials}>
            <div className={style.client_feedback}>
                <p className={style.client_review}>Floweres arrived on time! Such a beautiful bouquet, 
                fresh flowers and a red bow!
                </p>
                <p className={style.client_name}>Helen, Kenilworth</p>
            </div>
            <div className={style.client_feedback}>
                <p className={style.client_review}>
                    We ordered a bridal bouquet, 6 bridesmaids' bouquets, 10 boutonnieres, 
                    and 2 memorial roses for my daughter's wedding. 
                    The flowers were absolutely beautiful, substituting for the sun on a very rainy day.
                    Diana was wonderful to work with. 
                </p>
                <p className={style.client_name}>Dana, Southam</p>
            </div>
            <div className={style.client_feedback}>
                <p className={style.client_review}>
                Thank you so much for the flowers, they were beautiful and the service was exceptional. 
                I can't thank you enough for the beautiful arrangement and care in delivery. 
                I will always use Diana's flower shop for my business.
                </p>
                <p className={style.client_name}>Donna, Leamington Spa</p>
            </div>
        </div>
    </>
}