import MyCarousel from "@/components/MyCarousel"
import Nav from "../components/Nav"
import TabNav from "@/components/TabNav"
import Footer from "@/components/Footer"
import Cart from "@/components/Cart"
import ProductGroup from "@/components/ProductGroup"

export default function Home() {
  return <>
    <Nav />
    <MyCarousel />
    <TabNav />
    <ProductGroup />
    <Cart />
    <Footer />
  </>
}
