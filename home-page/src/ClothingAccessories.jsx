import React from "react";
import "./ClothingAccessories.css";

export default function ClothingAccessories() {
  return (
    <div className="ClothingAccessories">
      <div className="row gx-1 gx-md-2 gx-lg-2 mt-5 mt-md-5 d-flex justify-content-center clothing-accessories-box">
        <div className="col-2 col-md-2 col-lg-2">
          <img
            src="/ClothingAccessories/Ellipse 20.png"
            alt="/"
            className="w-100"
          />
        </div>
        <div className="col-2 col-md-2 col-lg-2">
          <img
            src="./ClothingAccessories/Ellipse 21.png"
            alt="/"
            className="w-100"
          />
        </div>
        <div className="col-2 col-md-2 col-lg-2">
          <img
            src="./ClothingAccessories/Ellipse 22.png"
            alt="/"
            className="w-100"
          />
        </div>
        <div className="col-2 col-md-2 col-lg-2">
          <img
            src="./ClothingAccessories/Ellipse 21 (1).png"
            alt="/"
            className="w-100"
          />
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
          <h1>
            Clothing <br />& <br />
            Accessories
          </h1>
        </div>
      </div>
    </div>
  );
}
