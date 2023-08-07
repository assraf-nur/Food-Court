import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../assets/Images/01.jpg";
import image2 from "../assets/Images/02.jpg";
import imageThree from "../assets/Images/03.png";
import imageFour from "../assets/Images/04.jpg";
import imageFive from "../assets/Images/05.png";
import imageSix from "../assets/Images/06.png";

export default function Banner() {
  return (
    <Carousel>
      <div>
        <img src={image} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src={imageThree} />
      </div>
      <div>
        <img src={imageFour} />
      </div>
      <div>
        <img src={imageFive} />
      </div>
      <div>
        <img src={imageSix} />
      </div>
    </Carousel>
  );
}
