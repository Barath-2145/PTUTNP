import React, { useEffect } from 'react'
// import "./ContactUS.css"
import "./index.css"
import { useLocation } from 'react-router-dom';


const ContactUs = () => {
  const location = useLocation()
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
  useEffect(
    () => {
      document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
      });

    }, []
  )

  return (
    <>
      <div className="container contact-cn">



        <h1 className='section-header-1'>CONTACT <span> US</span></h1>
        <div id="contact-us">



          <div className="contact-wrapper">



            <form id="contact-form" className="form-horizontal" role="form">

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                </div>
              </div>

              <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

              <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                  <img src="src/components/Team/Images/paper-plane-regular.svg" height={20} /><span className="send-text">SEND</span>
                </div>

              </button>

            </form>



            <div className="direct-contact-container">

              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Puducherry Technological University, East Coast Road, Pillaichavady, Puducherry - 605014</span></i></li>
                <br />
                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">Dr.R.Elansezhian
                  Training and Placement Officer
                  Mobile: 9952884403 &nbsp;
                  Email: tnp@ptuniv.edu.in
                  Ph: +0413-2655159
                  Board Number: +0413-2655281 to 288 <br></br>
                  (extn 365) &nbsp;
                  Fax: +0413-2655101</a></span></i></li>

                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">tnp@ptuniv.edu.in</a></span></i></li>

              </ul>


              <ul className="social-media-list">
                <li><a href="#" target="_blank" className="contact-icon">
                  <img src="src/components/Team/Images/envelope-solid.svg" height={40} /></a>
                </li>

                <li><a href="#" target="_blank" className="contact-icon">
                  <img src="src/components/Team/Images/linkedin.svg" height={40} /></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <img src="src/components/Team/Images/instagram.svg" height={40} /></a>
                </li>
              </ul>


              {/* <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ContactUs