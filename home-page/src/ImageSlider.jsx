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
    img: "/headerimgs/2.jpg",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/3.jpg",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/4.jpg",
    alt: "/",
    link: "",
  },
  {
    img: "/headerimgs/5.jpg",
    alt: "/",
    link: "",
  },
];
export default function ImageSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <div className="col-12">
        <SwiperSlide>
          <img src={image.img} alt={image.alt} className="img-fluid" />
        </SwiperSlide>
      </div> */}
      ;
      <div className="row">
        {HeaderImageData.map((img) => {
          <div className="col-12">
            <SwiperSlide>
              <img src={img.img} alt={img.alt} className="img-fluid" />
            </SwiperSlide>
          </div>;
        })}
      </div>
    </Swiper>
  );
}
