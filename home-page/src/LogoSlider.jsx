import React from "react";
import "./LogoSlider.css";
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
            <img src={logo.img} alt={logo.alt} className="w-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
