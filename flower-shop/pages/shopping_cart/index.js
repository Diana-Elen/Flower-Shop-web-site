import MyCarousel from "@/components/MyCarousel"
import Nav from "@/components/Nav"
import TabNav from "@/components/TabNav"
import Footer from "@/components/Footer"
import CheckoutForm from "@/components/CheckoutForm"


export default function ShoppingCart({cartItems}) {
    return <>
    <Nav />
    <MyCarousel />
    <CheckoutForm cartItems={cartItems}/>
    <Footer />
    </>
}