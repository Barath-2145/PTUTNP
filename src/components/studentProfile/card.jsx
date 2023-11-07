import React from 'react';
import './card.css';
import defaultImage from "./images/defaultImage.png";

const Card = (props) => {

  const url = props.value.sProfileImage;

  // Extract the file ID from the URL
  const match = url.match(/id=(.+)/);
  const fileId = match ? match[1] : '';

  const imageUrl = `https://drive.google.com/uc?id=${fileId}`;
  return (
    
    
          <div className='col-4 col-sm-3 column'>

          
      <div className="card card-1" >
        
        <div className="card-body text-center">
              
          <img src={imageUrl} className="card-img-top" alt="..." onerror="this.src ='./images/defaultImage.png'"  />
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
