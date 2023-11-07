import React from "react";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";
import useDimention from "./useDimention";

const images = [

  { url: 'src/assets/pictures/2019.jpg' },
  { url: 'src/assets/pictures/2020.jpg' },
  { url: 'src/assets/pictures/2021.jpg' },
  { url: 'src/assets/pictures/2022.png' },
  { url: 'src/assets/pictures/2023.png' }
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
