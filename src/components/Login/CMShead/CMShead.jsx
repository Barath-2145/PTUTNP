import React, { useState } from 'react';
import './CMShead.css';
import { Link } from 'react-router-dom';

const CMShead = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="intro-cms">
      <nav className="navbar_cms">
        <div className="navbar-title">
          T&P CELL
          <span className="CMS-head1">
            <span className="CMS-head2">-CMS</span>
          </span>
        </div>

        <button className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-link ${isActive ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/adminhome">Home</Link>
            </li>
            <li>
              <Link to="/admin/announcement">Announcements</Link>
            </li>
            <li>
              <Link to="/admin/posters">Posters</Link>
            </li>
            <li>
              <Link to="/admin/studentProfile">Students Profiles</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default CMShead;
