import React, { Component } from "react";
import Slider from "react-slick";
import "./LogoSlider.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// link of react-slick
// https://react-slick.neostack.com/docs/example/multiple-items
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
      <div class="row gx-lg-0 mt-lg-4 d-lg-flex justify-content-lg-evenly">
        {logoData.map((logo) => (
          <div class="col-lg-1">
            <a href={logo.link}>
              <img src={logo.img} alt={logo.alt} className="w-100" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
