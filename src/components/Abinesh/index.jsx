import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { announcements } from './announcement_data';

const Announcement = () => {
  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    setTimeout(null, 200);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="announcement-container">

      <div className="logos">
        <div id="logos-slide" className="logos-slide">

          <div>
            {announcements.info.map((announcement, index) => (
              <div className="info" key={index}>
                <p className="info_head">
                  <h5>{announcement.name}</h5>
                  <a href={announcement.link}>
                    {announcement.description.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="info">
            <p className="info_head">
              <h5>NEW</h5>
              <a href="https://docs.google.com/forms/d/1B1xx4Vt93jl38FW639SRq0eoc36mblMaDzPQwpBRUJU/edit">
                Latent View Analytics Campus Recruitment Result: We are delighted to inform that 23 of our B.Tech students have been selected through campus for the job of Analyst.
                CTC: 10.75 LPA - 1 student
                8.5 LPA - 6 students
                6.5 LPA - 16 students
              </a>
            </p>

          </div>
          <div className="info">
            <p className="info_head">
              <h5>NEW</h5>
              <a href="https://app.joinsuperset.com/join/#/signup/student?jp=23140b97-9fb3-4959-b810-27ee315be63b" style={{ color: "black" }}>
                <h4>Hexaware Campus drive on 3rd August</h4>
                Eligibilty Criteria:
                1.degree : B.Tech/B.E
                2.Stream : CSE/IT/ECE/EEE/ETC/EIE/ICE
                3.Percentage : 60% or 6 CGPA throuout 10th to highest degree

              </a>

            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
