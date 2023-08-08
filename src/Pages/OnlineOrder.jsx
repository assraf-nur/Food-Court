import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slideOne from "../assets/Images/slide1.jpg";
import slideTwo from "../assets/Images/slide2.jpg";
import slideThree from "../assets/Images/slide3.jpg";
import slideFour from "../assets/Images/slide4.jpg";
import slideFive from "../assets/Images/slide5.jpg";
import chef from "../assets/Images/chef-service.jpg";
import { Pagination } from "swiper/modules";
import ReactTypingEffect from "react-typing-effect";

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

      <div>
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

      <div className="mt-20 relative">
        <img className="w-full" src={chef} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-75"></div>
        <div className="w-11/12 md:w-8/12 mx-auto p-8 md:p-16 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
          <h2 className="text-center text-3xl md:text-5xl lg:text-6xl mb-4 font-semibold">
            <ReactTypingEffect text={["_Bistro Boss_"]} />
          </h2>
          <p className="text-center text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
}
