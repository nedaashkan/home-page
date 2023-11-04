import React from "react";
import LogoSlider from "./LogoSlider.jsx";
import ImageSlider from "./ImageSlider.jsx";
import ButtonSection from "./ButtonSection.jsx";
import ImageSection from "./ImageSection.jsx";
import ClothingAccessories from "./ClothingAccessories.jsx";
import ActionFigures from "./ActionFigures.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <ImageSlider />
        <LogoSlider />
        <ButtonSection />
        <ImageSection />
        {/* <ClothingAccessories /> */}
        {/* <ActionFigures /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
