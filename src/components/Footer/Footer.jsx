import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { getImageUrl } from "../../config";
import PTUlogo from "../../assets/pictures/logoptu.png";

const Footer = () => {
 return (
  <div>
   <footer id="main-footer" className="footer-distributed">
    <div className="footer-left"> 
     <img className="footer_logo"
      src={PTUlogo}
      alt=""
     />
    </div>

    <div className="footer-center">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4524616814515!2d79.85504551412637!3d12.012340438450485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1644327742512!5m2!1sen!2sin"
      width="100%"
      height="200"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
     ></iframe>
    </div>
    <div className="footer-right">
     <p className="footer-company-about">
      Address: <br /> East coast Road, Pillaichavady, Puducherry,{" "}
      <span>605 014</span>. <br />
     </p>
     <p className="footer-company-about">Phone No: 0413-2655281-288</p>
     <p className="footer-company-about">Fax: 2655101</p>
     <p className="footer-company-about">Email Id: info@ptuniv.edu.in</p>
     <br />
     <p className="footer-company-about">Follow us on</p>

     <div className="footer-icons">
      {/* <a href="#" className="footer-icons__twitter">
							<FaTwitter />
						</a> */}
      <a
       href="https://www.facebook.com/PTU.Pondicherry/"
       className="footer-icons__facebook"
      >
       <FaFacebook />
      </a>
      <a
       href="https://www.instagram.com/puducherry_tech_university/"
       className="footer-icons__instagram"
      >
       <FaInstagram />
      </a>
      <a
       href="https://www.youtube.com/channel/UC_KX66VEKIHunrHSsQwcNEw"
       className="footer-icons__youtube"
      >
       <FaYoutube />
      </a>
      {/* <a href="#" className="footer-icons__linkedin">
							<FaLinkedin />
						</a> */}
     </div>
    </div>
   </footer>
   <div className="last">Developed by PTU's Web Team.</div>
  </div>
 );
};

export default Footer;
