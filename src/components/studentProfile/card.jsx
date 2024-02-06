import React from 'react';
import defaultImage from "./images/defaultImage.png";
import './card.css';


const Card = (props) => {
  const url = props.value.sProfileImage;

  // Extract the file ID from the URL
  const match = url.match(/id=(.+)/);
  const fileId = match ? match[1] : '';

  const imageUrl = fileId ? `https://lh3.googleusercontent.com/d/${fileId}` : null;

  console.log(imageUrl)

  return (
    <div className='col-4 col-sm-3 column'>
      <div className="card card-1">
        <div className="card-body text-center">
          {/* Conditionally render the image */}
          {imageUrl ? (
            <img src={imageUrl} className="card-img-top" alt="Profile" />
          ) : (
            <img src={defaultImage} className="card-img-top" alt="Default Profile" />
          )}
          <div className="container mt-4">
            <h5 className="card-title">{props.value.sName}</h5>
            <p className="card-text">{props.value.sSkills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
