import React, { useEffect, useState } from 'react';
// import Quote from './components/quote/quote';
// import Explore from './components/explore/explore';
// import Chart from './components/chart/index';
// import Slider from './components/slider/Slider';
// import Announcement from './components/announcement/index';
// import Line from './components/boundLine/index';
// import NavBar from './components/Header/header';
// import StudentProfile from './components/studentProfile/index';
// import Text1 from './text1'
// import ImageGallery from './ImageGallery';
// import Filter from './components/studentProfile/filter';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
// import Department from './components/departments';
// import NavBar from "../src/components/Header/header";
import DepartmentComponent from './components/IT/departmentComponent';
// import { TopLinksContainer } from './components/TopLinks';
// import GenderDetect from './components/Abinesh';
// import MyDataTable from './DataTable';
import CenterHeader from './components/Header/CenterHeader';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';
import ExcelSheetUpload from './components/Login/StudentsProfile/ExcelSheetUpload';
import AdminHome from './components/Login/adminHome';
// import Navigation from './components/Header';
// import Collage from './components/PastRecruiters/Collage';
import PlacementChart from './components/PlacementStats/PlacementChart';
import TeamSection from './components/Team/index';
import ContactUs from './components/ContactUS/ContactUs';
import Navbarmenu from './components/menu/Navbarmenu';
import IndexCollage from './components/PastRecruiters';
import "./App1.css"


function App() {

  




  const slides = [
    { image: 'src/assets/pictures/3.png', caption: 'Slide 1' },
    { image: 'src/assets/pictures/poster1.png', caption: 'Slide 2' },
    { image: 'src/assets/pictures/poster2.png', caption: 'Slide 3' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 4' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 5' },
    { image: 'src/assets/pictures/poster1.png', caption: 'slide 6' }
  ];
 
  const style = {
    maxWidth: "1500px"
  }
  const headStyle = {
    position: "sticky", top: "0",
    zIndex: "1",
    backgroundColor: "rgb(155, 6, 6)"

  }
  const location = useLocation();
  // console.log(location)
  var isLoginPage = false;
  isLoginPage = location.pathname === '/login' || location.pathname === '/admin/announcement' || location.pathname === '/admin/posters' || location.pathname === '/admin/studentProfile'  || location.pathname ==='/adminhome' ? true : false;

  var isHomePage = location.pathname === '/'

  // useEffect(()=>{
  //   window.scrollTo({top:0})
  // },[])

// console.log(isLoginPage)

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
     
      {!isLoginPage && isHomePage && <CenterHeader />}
      <div className="nav-bar" style={headStyle}>
        {!isLoginPage && <Navbarmenu />}
      </div>

      <div className="container ">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/departments" element={<Department />} /> */}
        
          <Route path='/ourrecruiters' element ={<IndexCollage/>} />
          <Route path='/placementstats' element ={<PlacementChart/>} />
          <Route path='/ourteam' element={<TeamSection />} />
          
        </Routes>
      </div>
      <Routes>
        <Route path="/departments" element={<DepartmentComponent />} />
        {/* <Route path='/departments/CSE' element={<DepartmentComponent />} />
        <Route path='/departments/ECE' element={<DepartmentComponent />} />
        <Route path='/departments/EEE' element={<DepartmentComponent />} />
        <Route path='/departments/CHEM' element={<DepartmentComponent />} />
        <Route path='/departments/CE' element={<DepartmentComponent />} />
        <Route path='/departments/EIE' element={<DepartmentComponent />} />
        <Route path='/departments/ME' element={<DepartmentComponent />} />
        <Route path='/departments/MT' element={<DepartmentComponent />} /> */}
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminhome" element={<AdminHome />}/>
        <Route path="/admin/studentprofile" element={<ExcelSheetUpload />} />
      </Routes>
      <div  className={`scrolltop ${showButton ? '' : 'hidden'}`}
        onClick={handleScrollTop}>
        <div className='scroll icon'><i className="fa fa-rocket" aria-hidden="true"></i></div>
      </div>
      {!isLoginPage && <Footer />} 

    </>

  );
}

export default App;
