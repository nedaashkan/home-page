import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./LogoSlider.css";
import "swiper/css";
import "swiper/css/navigation";

let logoData = [
  {
    img: "/logos/psn.png",
    alt: "playstation",
    link: "",
  },
  {
    img: "/logos/pngaaa.png",
    alt: "pngaaa",
    link: "",
  },
  {
    img: "/logos/steam.png",
    alt: "steam",
    link: "",
  },
  {
    img: "/logos/spotify.png",
    alt: "spotify",
    link: "",
  },
  {
    img: "/logos/origin.png",
    alt: "origin",
    link: "",
  },
  {
    img: "/logos/googleplay.png",
    alt: "googleplay",
    link: "",
  },
  {
    img: "/logos/itunes.png",
    alt: "itunes",
    link: "",
  },
];

export default function LogoSlider() {
  return (
    <div className="LogoSlider">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation
        spaceBetween={0}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="row gx-lg-0 gx-0 gx-md-2 mt-3 mt-md-3 mt-lg-4 d-flex justify-content-evenly justify-content-md-evenly justify-content-lg-evenly">
          {logoData.map((logo) => {
            return (
              <div className="col-1 col-md-1 col-lg-1">
                <SwiperSlide>
                  <img src={logo.img} alt={logo.alt} className="w-75" />
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}
