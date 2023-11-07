import React, { useState, useRef, useEffect } from 'react';
import './NewSlider.css';

const SlideShow = () => {
 const slideShowContainerRef = useRef(null);
 const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
  const slideShowContainer = slideShowContainerRef.current;
  const slideCount = slideShowContainer.children.length;
  const slideWidth = slideShowContainer.offsetWidth;
  let interval;

  const startSlideShow = () => {
   interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
   }, 3000);
  };

  const stopSlideShow = () => {
   clearInterval(interval);
  };

  startSlideShow();

  return () => {
   stopSlideShow();
  };
 }, []);

 const goToSlide = (slideIndex) => {
  setCurrentSlide(slideIndex);
 };

 const slideNext = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
 };

 const slidePrev = () => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
 };

 const slideCount = 4; // Number of slides

 return (
  <div className="slideShow">
   <ul className="slideShow__container" ref={slideShowContainerRef}>
    <li
     className={`slideShow__slide ${currentSlide === 0 ? 'active' : ''}`}
    >
     <figure
      className="slideShow__image"
      style={{
       backgroundImage:
        'url(https://c2.staticflickr.com/8/7668/17188829572_53e8c45aec_h.jpg)',
      }}
     ></figure>
     <div className="slideShow__titleWrap">
      <h2 className="slideShow__slideTitle">Barichara</h2>
      <div className="slideShow__slideSubTitle">La Abuelita</div>
     </div>
    </li>
    {/* Repeat the above slide structure for other slides */}
   </ul>
   <div className="slideShow__next" onClick={slideNext}>
    <i className="fa fa-angle-right"></i>
   </div>
   <div className="slideShow__prev" onClick={slidePrev}>
    <i className="fa fa-angle-left"></i>
   </div>
   <div className="slideShow__dots">
    {Array.from({ length: slideCount }).map((_, index) => (
     <span
      key={index}
      className={`slideShow__dot ${currentSlide === index ? 'active' : ''
       }`}
      onClick={() => goToSlide(index)}
     ></span>
    ))}
   </div>
  </div>
 );
};

export default SlideShow;
