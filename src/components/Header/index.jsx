import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import "./index.css";
import logo from "./Images/logo.gif";

const Navigation = () => {
 const location = useLocation();
 const [dept, setDept] = useState(localStorage.getItem('department') || '');

 const handleDropdownChange = (value) => {
  setDept(value);
  localStorage.setItem('department', value);
 };

 useEffect(() => {
  document.addEventListener("DOMContentLoaded", function () {
   // If a link has a dropdown, add sub menu toggle.
   var links = document.querySelectorAll("nav ul li a:not(:only-child)");
   for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
     var dropdown = this.nextElementSibling;
     if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
     } else {
      dropdown.style.display = "block";
     }
     // Close one dropdown when selecting another
     var allDropdowns = document.querySelectorAll(".nav-dropdown");
     for (var j = 0; j < allDropdowns.length; j++) {
      if (allDropdowns[j] !== dropdown) {
       allDropdowns[j].style.display = "none";
      }
     }
     e.stopPropagation();
    });
   }

   // Clicking away from dropdown will remove the dropdown class
   document.addEventListener("click", function () {
    var dropdowns = document.querySelectorAll(".nav-dropdown");
    for (var k = 0; k < dropdowns.length; k++) {
     dropdowns[k].style.display = "none";
    }
   });

   // Toggle open and close nav styles on click
   var navToggle = document.getElementById("nav-toggle");
   navToggle.addEventListener("click", function () {
    var navUL = document.querySelector("nav ul");
    if (navUL.style.display === "block") {
     navUL.style.display = "none";
    } else {
     navUL.style.display = "block";
    
    }
    //
// var menu = document.getElementsByTagName("li");
// menu.addEventListener("click", () =>{
//  // var Hide = document.getElementsByTagName("li");
//  if (menu.style.display != "none")
//  menu.style.display ="none";
// })
     
   });

   // Hamburger to X toggle
   navToggle.addEventListener("click", function () {
    this.classList.toggle("active");
   });
  });
 }, [dept]);

 return (
  <nav>
   <div id="logo">Training And Placement Center<img src={logo} width={100} height={700} /></div>

   <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
   <ul className="nav-list">
    <li><NavLink to="/">Home</NavLink></li>

    <li><NavLink to="/ourteam">Our Team</NavLink></li>
    <li><NavLink to="/placementstats">Placement Statistics</NavLink></li>
    <li><NavLink to="/recruiters">Our Recruiters</NavLink></li>
    <li>
     <label htmlFor="drop-1" className="toggle">Department Profile +</label>
     <NavLink to="/IT">Department Profile</NavLink>
     <input type="checkbox" id="drop-1" />
     <ul className='.nav-dropdown' >
      <li ><NavLink to="/departments/IT" name="dept" value="IT" onClick={() => handleDropdownChange("IT")}>IT</NavLink></li>
      <li ><NavLink to="/departments/CSE" name="dept" value="CSE" onClick={() => handleDropdownChange("CSE")}>CSE</NavLink></li>
      <li ><NavLink to="/departments/ME" name="dept" value="ME" onClick={() => handleDropdownChange("ME")}>ME</NavLink></li>
      <li ><NavLink to="/departments/MT" name="dept" value="MT" onClick={() => handleDropdownChange("MT")}>MT</NavLink></li>
      <li><NavLink to="/departments/CE" name="dept" value="CE" onClick={() => handleDropdownChange("CE")}>CE</NavLink></li>
      <li ><NavLink to="/departments/CHEM" name="dept" value="CHE" onClick={() => handleDropdownChange("CHEM")}>CHEM</NavLink></li>
      <li ><NavLink to="/departments/ECE" name="dept" value="ECE" onClick={() => handleDropdownChange("ECE")}>ECE</NavLink></li>
      <li ><NavLink to="/departments/EEE" name="dept" value="EEE" onClick={() => handleDropdownChange("EEE")}>EEE</NavLink></li>
      <li ><NavLink to="/departments/EIE" name="dept" value="EIE" onClick={() => handleDropdownChange("EIE")}>EIE</NavLink></li>
     </ul>
    </li>
    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
   </ul>
  </nav>
 );
};

export default Navigation;
