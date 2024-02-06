import React, { useState, useEffect } from 'react';

const newsData = [
 {
  title: 'News 1', content: "Neeyamo Campus Drive..\nAs discussed, our campus placement will take place on 07-Feb - 24(Wednesday).\nWebsite link: https://www.neeyamo.com/\n\nInterview Process:\n1. Pre-Placement talk - By the CEO (30 mins)\n2. Aptitude test - Maths, Logical, English (45 mins)\n3. Situational Test - Email writing (45 mins)\n4. Personal interview\n\nInterview Details:\nDate: 07 - Feb - 24\nDay: Wednesday\nReporting time: 9.30AM\nVenue: Puducherry Technological University East Coast Road Pillaichavadi Puducherry, 605014", link: 'https://example.com/news1' },
 {
  title: 'News 2', content: '2.Latent View Analytics Campus Recruitment Result: We are delighted to inform that 23 of our B.Tech students have been selected through campus for the job of Analyst.CTC: 10.75 LPA - 1 student8.5 LPA - 6 students 6.5 LPA - 16 students', link: 'https://example.com/news1'
 },
 {
  title: 'News 3', content: '3.Latent View Analytics Campus Recruitment Result: We are delighted to inform that 23 of our B.Tech students have been selected through campus for the job of Analyst.CTC: 10.75 LPA - 1 student8.5 LPA - 6 students 6.5 LPA - 16 students', link: 'https://example.com/news1'
 },
 { title: 'News 4', content: 'Consectetur adipiscing elit.', link: 'https://example.com/news2' },
 { title: 'News 5', content: 'Sed do eiusmod tempor incididunt.', link: 'https://example.com/news3' },
 // Add more news items as needed
];

const NewsTicker = () => {
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
  <div
   style={{
    width: '650px',
    height: '400px',
    overflow: 'hidden',
    border: '1px solid #ccc',
    borderRadius: '8px',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
   }}
  >
   <button
    style={{
     position: 'absolute',
     top: '10px',
     right: '10px',
     padding: '8px',
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
   <div
    style={{
     display: 'flex',
     flexDirection: 'column',
     transition: 'transform 0.5s ease',
     transform: `translateY(-${currentNewsIndex * 200}px)`,
    }}
   >
    {newsData.map((news, index) => (
     <div
      key={index}
      onClick={() => handleNewsClick(news.link)}
      style={{
       cursor: 'pointer',
       minHeight: '200px',
       borderBottom: '1px solid #ddd',
       padding: '15px',
       boxSizing: 'border-box',
       transition: 'background-color 0.3s',
      }}
     >
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>
       {news.title}
      </h3>
      <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
       {news.content}
      </p>
      <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#999' }}>
       Read more
      </p>
     </div>
    ))}
   </div>
  </div>
 );
};

export default NewsTicker;
