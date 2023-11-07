 import React from 'react';
 import './slider.css';
 import { useState , useRef , useEffect } from 'react';

// const Slider = ({images}) => {
  
//   return (
//     <>
//     <div className='heading'>
//       <h1>Placement News</h1>
//       <p></p>
//     </div>
// <div className='slider-body'>
// <div className="container-slide">
//   <input type="radio" name="slider" id="item-1" defaultChecked="song-1" />
//   <input type="radio" name="slider" id="item-2" />
//   <input type="radio" name="slider" id="item-3" />
//   <div className="cards">
//   {images.map((item,index) => (
//     <label className="card" htmlFor={`item-${index + 1}`} id={`song-${index + 1}`}>
//         <img
//         src={item} key={index}
//         />
//     </label>
//     ))}
//   </div>
// </div>
//     </div>
//     </>
//   );
// };

// export default Slider;


const Slider = (props) => {
 // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.images.map((backgroundImage, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundImage.image}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {props.images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slider;