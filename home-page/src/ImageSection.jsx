import React from "react";
import "./ImageSection.css";

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="row d-flex justify-content-center mt-5 mt-md-5 mt-lg-5">
        <div className="col-5 col-md-5 col-lg-4 d-flex justify-content-center">
          <img src="/imageSection/D.png" alt="/" className="w-100" />
        </div>
        <div className="col-5 col-md-5 col-lg-4">
          <img src="/imageSection/ol.png" alt="/" className="w-100" />
        </div>
      </div>
    </div>
  );
}
