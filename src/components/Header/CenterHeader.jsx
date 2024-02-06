import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./CenterHeader.css";
// import PTUlogo from "../../assets/pictures/logoptu.png";
// import PTUbackground from "./Images/TNPbackground.jpg";
import TNPbackground from "./images/TNPbackground.jpg";
import tnpOfficer from "./images/tnpOfficer.png";
import PTUlogo from "../../assets/pictures/logoPTU4.png";
import VcImage from "./Images/vcdrsmohan.jpg";

const CenterHeader = () => {
  return (
    <div className="deptHead">
      <div className="header_dept flex justify-around">
        <div className="title_dept flex items-center">
          <NavLink to="/" style={{ padding: 0, margin: 0, textDecoration: "none" }}>
            <img src={PTUlogo} alt="...." className="img-top" />
          </NavLink>
          <h3 className='name_and_head' align="center"><div >PUDUCHERRY TECHNOLOGICAL UNIVERSITY</div><div>TRAINING AND PLACEMENT CENTER</div> </h3>
        </div>
        <div className="searchbar_dept">
          <input type="text" placeholder="Search here" />
          <BiSearchAlt className="search_icon" />
        </div>
      </div>

      <div className="imgsec">
        <div className="hod-card-cont">
          <div className="hod-card__container hod_card">
            <div className="hod-card__parts">
              <img src={tnpOfficer} alt="" />
            </div>
            <div className="hod-card__parts--fill">
              <h4
                className="text-2xl"
                style={{ "fontSize": "23px", "fontWeight": "700" }}
              >
                Dr Elensezhiyan R
              </h4>
              <h6 className="hod-card-title">TNP Officer</h6>
              <button className="Hod-message">TNP Officer message</button>
            </div>
          </div>
        </div>
        <div className="hod-card-cont">
          <div className="hod-card__container vc_card  ">
            <div className="hod-card__parts">
              <img src={VcImage} alt="" />
            </div>
            <div className="hod-card__parts--fill">
              <h4
                className="text-2xl"
                style={{ "fontSize": "23px", "fontWeight": "700" }}
              >
                Dr. S Mohan
              </h4>
              <h6 className="hod-card-title">Vice-Chancellor</h6>
              <button className="Hod-message">Vice-Chancellor message</button>
            </div>
          </div>
        </div>
        <img src={TNPbackground} alt="....." />
      </div>
    </div>
  );
}

export default CenterHeader;
