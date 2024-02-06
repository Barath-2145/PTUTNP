import React from "react";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";
import useDimention from "./useDimention";
import Image2023 from "./SliderImages/2023.png";
import Image2022 from "./SliderImages/2022.png";
import Image2021 from "./SliderImages/2021.jpg";
import Image2020 from "./SliderImages/2020.jpg";
import Image2019 from "./SliderImages/2019.jpg";
const images = [

  { url: Image2023 },
  { url: Image2022 },
  { url: Image2021 },
  { url: Image2020 },
  { url: Image2019 },  
];

function Banner() {
  const {
    dimension: { width, height },
  } = useDimention();

  let sliderHeight = height;

  if (width < 430) {
    sliderHeight *= 0.4;
  } else if (width < 600) {
    sliderHeight *= 0.5;
  } else if (width < 900) {
    sliderHeight *= 0.6;
  } else {
    sliderHeight *= 0.8;
  }

  return (

    <div className="image_gallery">
      <SimpleImageSlider
        className="my-slider"
        width={'100%'}
        height={640}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        navStyle={2}
      />
    </div>

  );
}

export default Banner;
