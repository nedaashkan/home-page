import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./ImageSlider.css";
import "swiper/css";
import "swiper/css/pagination";
let HeaderImageData = [
  {
    img: "/headerimgs/1.png",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/1.png",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/1.png",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/1.png",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/1.png",
    alt: "/",
    link: "",
  },
];

export default function ImageSlider() {
  return (
    <div className="ImageSlider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false,
        // }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="row">
          <div className="col-12">
            {HeaderImageData.map((item) => {
              return (
                <SwiperSlide>
                  <img src={item.img} alt={item.alt} className="img-fluid" />
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </Swiper>
    </div>
  );
}
