import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import florist from "../images/florist.webp"
import flower_shop from "../images/flower_shop.webp"
import flower_shop_entrance from "../images/flower_shop_entrance.webp"
import style from "@/styles/MyCarousel.module.css"


function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item className={style.my_carousel}>
        <img
          className="d-block w-100"
          src={florist.src}
          alt="Beautiful fresh flowers for you"
        />
        <Carousel.Caption>
          <h3>Welcome to Diana's Flower Shop</h3>
          <p>Beautiful fresh flowers for you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.my_carousel}>
        <img
          className="d-block w-100"
          src={flower_shop.src}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Wide range of flowers that can be delivered in the Warwickshire region, UK</h3>
          <p>A beautiful selection of fresh flowers, every day</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.my_carousel}>
        <img
          className="d-block w-100"
          src={flower_shop_entrance.src}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Happy clients</h3>
          <p>
            You can find us every day at our flower shop or you can order online our beautiful flower arrangements
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;