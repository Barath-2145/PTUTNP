import React from 'react';
import './Collage.css';

const Collage = ({ value }) => {

 return (
  <>
  <div className="containers ">
   <div class="flip-card  " >
    <div class="flip-card-inner">
     <div class="flip-card-front">

      <img src={value.url} alt={value.alt} className="images" />
     </div>
     <div class="flip-card-back">
      <h1>Placements Stats</h1>
                                     <p>Highest CTC : 7 LPA</p>
           <p>Number of Offers : {value.placedCount}</p>
           <p>Previous Year Offers : {value.lastYearPlacementCount}</p>
          
           {/* <p>Package : {value.CTC}</p> */}
     </div>
    </div>
    
   </div>
   </div>
  </>
 );
};

export default Collage;