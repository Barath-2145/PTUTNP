import React from 'react';
import './index.css';
import Announcement from '../announcement/index';

const Welcome = () => {
 return (
  <>
   <div className="welcome-container">
    <div className="welcome">
     <div className='line1 ptu'> <h1>Welcome to <span> PTU's</span></h1> </div>
     <p className='line2'><span>Training  And Placement Centre </span></p>
    </div>
    <div className="section2 container">
     <div className="vision-mission">
      <div className="vision">
       <div className="sub-vission">
        <h2>Vision</h2>
       </div>

       <div className="grow"></div>
       <p>To foster prosperity through technology by means of education, innovation and collaborative research and emerge as a world-class technical institution.</p>
      </div>
      <div className="mission">
       <div className="sub-mission">
        <h2>Mission</h2>
       </div>

       <div className="grow"></div>
       <p>To impart high quality training to students so as to provide human resource appropriate to the local and national needs.</p>
      </div>
     </div>
     <div className="notice-announcement">
      <h3>Announcement and Notice</h3>
      <Announcement />
     </div>
      
     
    </div>
   </div>


  </>
 )
}

export default Welcome