import React from "react";
import "./ImageSection.css";

export default function ImageSection() {
  return (
    <div classNameName="ImageSection">
      <div className="row d-flex justify-content-center gx-2 gx-md-2 gx-lg-3 mt-3 mt-md-4 mt-lg-5 mb-md-3">
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
