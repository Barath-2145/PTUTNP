import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/pictures/logo.png";
import "./Navbarmenu.css";

const Navbarmenu = () => {


  const handleDropdownChange = (department) => {
    window.localStorage.setItem('department', department);

    console.log(window.localStorage.getItem('department'))
    toggleClass();
  };
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(!isMenuSubMenu);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="navmenu-container">
        <div className="row1">
          {/* Add Logo  */}
          <div className="header__middle__logo">

            <NavLink exact activeClassName="is-active" to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <img cl className="logo-img box linear" src={logo} alt="logo"  />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/ourteam`}
                  >
                    {" "}
                    Our Team{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/placementstats`}
                  >
                    {" "}
                    Placement Statistics{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/ourrecruiters`}
                  >
                    {" "}
                    Our Recruiters{" "}
                  </NavLink>{" "}
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    Department Profile {" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => {
                          handleDropdownChange("IT")
                        }}
                        activeClassName="is-active"
                        to={`/departments`}

                      >
                        {" "}
                        <span name="dept" value="IT" >IT</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => {
                          handleDropdownChange("CSE")
                        }}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="CSE" >CSE</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("ECE")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="ECE" >ECE</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("EEE")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="EEE" >EEE</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("ME")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="ME" >ME</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("CE")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="CE" >CE</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("CHEM")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="CHEM">CHEM</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("EIE")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="EIE">EIE</span>{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        // onClick={toggleClass}
                        onClick={() => handleDropdownChange("MT")}
                        activeClassName="is-active"
                        to={`/departments`}
                      >
                        {" "}
                        <span name="dept" value="MT" >MT</span>{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/contactus`}
                  >
                    {" "}
                    Contact Us{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;
