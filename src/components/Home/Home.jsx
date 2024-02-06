import React, { useEffect, useRef } from 'react';
import Banner from '../MainSlider';
import "./Home.css"
import Welcome from '../Welcome';
import { useLocation, useParams } from 'react-router-dom';
// import Quote from '../quote/quote';
// import Explore from '../explore/explore';
// import Chart from '../chart/index';
// import Slider from '../slider/Slider';
// import Announcement from '../announcement/index';
// import Line from '../boundLine/index';
// import CompanySlider from '../ImageSlider/CompanySlider';
// import NewsTicker from '../NewsTicker/NewsTicker';
// import NavBar from '../Header/header';
// import NavBar from "../Header/header";
// import SlideShow from '../Newslider/NewSlider';
// import SectionComponent from '../FrontPage';
// import SimpleImageSlider from 'react-simple-image-slider';

const Home = () => {
  const location = useLocation();
  const bannerRef = useRef();
  const slides = [
    { image: 'src/assets/pictures/poster2.png', caption: 'Slide 1' },
    { image: 'src/assets/pictures/poster1.png', caption: 'Slide 2' },
    { image: 'src/assets/pictures/poster2.png', caption: 'Slide 3' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 4' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 5' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 6' }
  ];

  
  useEffect(
    () => {
      if (location.state || !location.state) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, [location.state]
  )
  return (
    <>
      {/* <div className='nav-bar'>
        <NavBar />
    </div> */}

      {/* <Announcement /> */}
      <Welcome />
      <div ref={bannerRef} className='banner_container'>
        <Banner />
      </div>



      {/* <SectionComponent/> */}
      {/* <NewsTicker/> */}
      {/* <CompanySlider/> */}
      {/* <Line /> */}
      {/* <Quote /> */}
      {/* <Line /> */}
      {/* <Explore /> */}
      {/* <Line /> */}
      {/* <Chart /> */}
      {/* <Line /> */}
      {/* <Slider images={slides} /> */}
      {/* <SlideShow/> */}
    </>
  )
}

export default Home