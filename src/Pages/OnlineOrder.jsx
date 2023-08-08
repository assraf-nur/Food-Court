import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slideOne from "../assets/Images/slide1.jpg";
import slideTwo from "../assets/Images/slide2.jpg";
import slideThree from "../assets/Images/slide3.jpg";
import slideFour from "../assets/Images/slide4.jpg";
import slideFive from "../assets/Images/slide5.jpg";

// import required modules
import { Pagination } from "swiper/modules";

export default function OnlineOrder() {
  return (
    <div>
      <div>
        <p className="text-center text-yellow-600">
          <i>--From 11.00am to 10.00pm--</i>
        </p>
        <div className="text-center order-banner mx-auto mb-12">
          <h2 className="text-3xl">_ORDER ONLINE_</h2>
        </div>
      </div>

      <div className="mb-12">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slideOne} alt="s" />
            <h3 className="text-4xl text-center -mt-12 font-semibold text-white">
              SALAD
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideTwo} alt="s" />
            <h3 className="text-4xl text-center -mt-12 font-semibold text-white">
              PIZZA
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideThree} alt="s" />
            <h3 className="text-4xl text-center -mt-12 font-semibold text-white">
              SOUP
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideFour} alt="s" />
            <h3 className="text-4xl text-center -mt-12 font-semibold text-white">
              CAKE
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideFive} alt="s" />
            <h3 className="text-4xl text-center -mt-12 font-semibold text-white">
              SALAD
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        
      </div>
    </div>
  );
}
