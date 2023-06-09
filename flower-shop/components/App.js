import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";
import ProductGroup from "./ProductGroup";
import data from "./data";
import Cart from "./Cart";
import Nav from "./Nav"
import MyCarousel from "./MyCarousel";
import TabNav from "./TabNav";
import Footer from "./Footer";

export default function App() {
    const {products} = data;
    return <>
        <ShoppingCartContextProvider>
            <div>
                <Nav />
                <MyCarousel />
                <TabNav />
                <ProductGroup 
                    products={products} 
                />
                <Footer />
            </div>
        </ShoppingCartContextProvider>
    </>
}
