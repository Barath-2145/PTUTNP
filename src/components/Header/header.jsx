import "./header.css";
import React from "react";
// import { NavLink } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/pictures/banner-logo.png";



const NavBar = () => {
	const [click, setClick] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const [dept,setDept] = useState("");
	const  handleDropdownChange = (department) => {
		setDept(department);
		window.localStorage.setItem("department" , department);
		navigate(location.pathname)
	};
	const handleClick = () => setClick(!click);

	
	return (
		<div>
			
			<div className="main"  />
			<nav className="navbar" onClick={e => e.stopPropagation()}>
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						<span>
							<img src={Logo} width="380" height="70" />
						</span>
						
						{/* <i className="fa fa-code"></i> */}
					</NavLink>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								
								to="/"
								
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								
								to="/team"
								
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Team
							</NavLink>
						</li>
						<li className="nav-item ">
							<div className="menu-container ">
								
								<div className="menu-icon ">
									{/* <div class="line"></div>
									<div class="line2"></div>
									<div class="line"></div> */}
									<span>Departments</span>

									<div className="menu-list">
										<div id="menu-nav">

											<NavLink to="/departments/IT"><nav name="dept" value="IT" onClick={() => handleDropdownChange("IT")}>IT</nav></NavLink>
											<NavLink to="/departments/CSE">		<nav name="dept" value="CSE" onClick={() => handleDropdownChange("CSE")}>CSE</nav></NavLink>
											<NavLink to="/departments/ME"	><nav name="dept" value="ME" onClick={() => handleDropdownChange("ME")}>ME</nav></NavLink>
									<NavLink to="/departments/MT"><nav name="dept" value="MT" onClick={() => handleDropdownChange("MT")}>MT</nav></NavLink>
								<NavLink to="/departments/CE"	><nav name="dept" value="CE" onClick={() => handleDropdownChange("CE")}>CE</nav></NavLink>
							<NavLink to="/departments/CHEM"><nav name="dept" value="CHE" onClick={() => handleDropdownChange("CHEM")}>CHEM</nav></NavLink>
						<NavLink to="/departments/ECE"><nav name="dept" value="ECE" onClick={() => handleDropdownChange("ECE")}>ECE</nav></NavLink>
					<NavLink to="/departments/EEE"><nav name="dept" value="EEE" onClick={() => handleDropdownChange("EEE")}>EEE</nav></NavLink>
				<NavLink to="/departments/EIE"><nav name="dept" value="EIE" onClick={() => handleDropdownChange("EIE")}>EIE</nav></NavLink>
	
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/why@ptu"
								activeclassname="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								 why @ PTU
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/contact"
								activeclassname="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"}></i>
					</div>
				</div>
			</nav>
		</ div>
	);
}
export default NavBar;
// function App() {

// 	return (
// 		<>

// 			<BrowserRouter>
// 				<NavBar />

// 				<div className="pages">
// 					<Switch>
// 						<Route exact path="/" component={Home} />
// 						<Route path="/about" component={About} />
// 						<Route path="/blog" component={Blog} />
// 						<Route path="/contact" component={Contact} />
// 					</Switch>
// 				</div>
// 			</BrowserRouter>
// 		</>
// 	);
// }
