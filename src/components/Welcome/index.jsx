import React, { useState, useEffect } from 'react';
import './index.css';
import TickerComponent from '../NewAnnouncement';
import NewAnnouncement from '../NewAnnouncement';
import NewsTicker from '../NewAnnouncement';
// import Announcement from '../announcement/index';

const newsData = [
 {
  title: 'New', content: "Neeyamo Campus Drive..\nAs discussed, our campus placement will take place on 07-Feb - 24(Wednesday).\n\n\nInterview Process:\n1. Pre-Placement talk - By the CEO (30 mins)\n2. Aptitude test - Maths, Logical, English (45 mins)\n3. Situational Test - Email writing (45 mins)\n4. Personal interview\n\nInterview Details:\nDate: 07 - Feb - 24\nDay: Wednesday\nReporting time: 9.30AM\nVenue: Puducherry Technological University East Coast Road Pillaichavadi Puducherry, 605014", link: 'https://www.neeyamo.com/'
 },
 {
  title: 'New', content: "Greetings from UST! \nWe are inviting applications for campus recruitment drive and details are as follows:\n\nDegree – BE/ BTech / ME / MTech / MCA\n\nBranch – CS, IT, IS, AI / ML, Data Science\n\nYear of passing – 2024\n\nType of offer – Full time(Regular employee)\n\nJob location – Trivandrum / Cochin / Bangalore / Hyderabad / Chennai\n\nCompensation – 4.25 LPA\n\n\n\The following is the link to fill up your details on or before 24th Jan 2024 5.00pm ", link: 'https://forms.gle/AXVLRHbu8GCNMqCB8'
 },
 {
  title: 'News', content: "	Capegemini- We are excited to inform you that our hiring program is coming to your campus. Our dedication to growth and potential is unwavering and we do this as we have always done at Capgemini: with passion and energy, and all together.\n\nOur eligibility criteria across profiles is as below:\n\n• BE / BTECH / ME / MTECH - All specializations / branches; MCA & MSc(CS / IT specialization)\n\n• No active backlog at the time of assessment and joining\n\n• Successful completion of full–time degree within the stipulated time frame", link: ''
 },

 // Add more news items as needed
];

const Welcome = () => {
 const [playing, setPlaying] = useState(true);
 const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

 useEffect(() => {
  let interval;

  if (playing) {
   interval = setInterval(() => {
    setCurrentNewsIndex((prevIndex) =>
     prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
   }, 3000); // Change the duration as needed
  }

  return () => clearInterval(interval);
 }, [playing]);

 const handleTogglePlay = () => {
  setPlaying((prevPlaying) => !prevPlaying);
 };

 const handleNewsClick = (link) => {
  window.open(link, '_blank');
 };

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
      <div style={{ position: 'relative' }}>
       <h3>Announcement and Notice</h3>
       <button
        style={{
         position: 'absolute',
         top: '23px',
         right: '10px',
         padding: '4px 12px',
         cursor: 'pointer',
         backgroundColor: '#3498db',
         color: 'white',
         border: 'none',
         borderRadius: '4px',
        }}
        onClick={handleTogglePlay}
       >
        {playing ? 'Pause' : 'Play'}
       </button>
      </div>
      <div
       style={{
        width: '650px',
        height: '400px',
        overflowY: 'auto',  // Scrollable container
        border: '1px solid #ccc',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
       }}
      >
       <div
        style={{
         display: 'flex',
         flexDirection: 'column',
         transition: 'transform 0.5s ease',
         transform: `translateY(-${currentNewsIndex * 220}px)`,
        }}
       >
        {newsData.map((news, index) => (
         <div
          key={index}
          onClick={() => handleNewsClick(news.link)}
          style={{

           minHeight: '200px',
           borderBottom: '1px solid #ddd',
           padding: '10px',
           boxSizing: 'border-box',
           transition: 'background-color 0.3s',
           backgroundColor: 'white',
          }}
         >
          <h3 className="info-title" >
           {news.title}
          </h3>
          <p className='news-content' >
           {news.content}
          </p>
          <p className="read-more" >
           Read more
          </p>
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Welcome;