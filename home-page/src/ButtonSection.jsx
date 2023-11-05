import React from "react";
import "./ButtonSection.css";

export default function ButtonSection() {
  return (
    <div className="ButtonSection">
      <div className="row d-flex justify-content-center btn-box gx-0 gx-lg-0 gx-md-0 mt-5 mt-md-5 mt-lg-5">
        <div className="col-2 col-md-2 col-lg-2">
          <button className="physical-btn w-100">Physical</button>
        </div>
        <div className="col-2 col-md-2 col-lg-2">
          <button className="digital-btn w-100">Digital</button>
        </div>
      </div>
    </div>
  );
}
