import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./ImageSlider.css";

import "swiper/css";
import "swiper/css/pagination";
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
      <div className="row">
        <div className="col-12">
          <SwiperSlide>
            <img src="/headerimgs/1.png" alt="/" className="img-fluid col" />
          </SwiperSlide>
        </div>
        <div className="col-12">
          <SwiperSlide>
            <img src="/headerimgs/1.png" alt="/" className="img-fluid col" />
          </SwiperSlide>
        </div>
        <div className="col-12">
          <SwiperSlide>
            <img src="/headerimgs/1.png" alt="/" className="img-fluid col" />
          </SwiperSlide>
        </div>
        <div className="col-12">
          <SwiperSlide>
            <img src="/headerimgs/1.png" alt="/" className="img-fluid col" />
          </SwiperSlide>
        </div>
        <div className="col-12">
          <SwiperSlide>
            <img src="/headerimgs/1.png" alt="/" className="img-fluid col" />
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
  );
}
