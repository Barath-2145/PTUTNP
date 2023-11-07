import React from 'react';
import './DeptContent.css';
// import json from "./assets/it.js"
const DisplayJSON = ({ json }) => {
 const renderValue = (value) => {
  if (typeof value === 'string') {
   return <p className="json-value">{value}</p>;
  } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
   return value.map((obj, index) => (
    <div key={index}>
     <React.Fragment key={index}>
      <p className="json-sub-key">{obj.heading}</p>
      <p className="json-sub-value">{obj.description}</p>
     </React.Fragment>
    </div>
   ));
  } else if (Array.isArray(value) && value.length === 1 && typeof value[0] === 'string') {
   return value.map((arrayval, index) => (
    <div key={index}>
     <React.Fragment key={index}>
      <p className='json-value'>{arrayval}</p>
     </React.Fragment>
    </div>
   ));
  } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
   return value.map((arrayval, index) => (
    <div key={index}>
     <React.Fragment key={index}>
      <ul className='json-ul'>
       <li>
        {arrayval}
       </li>
      </ul>
     </React.Fragment>
    </div>
   ));
  }
  return null;
 };

 const dept = json.DeptData;

 return (
  <>
   <div className="head">
    {/* <h1 className="dept">{json.About.DeptName}</h1> */}
   </div>
   <div className="json-container">
    <div className="intro">
     <p className="introduction">{json.About.Introduction}</p>
    </div>
    {dept.map((item, index) => (
     <div key={index}>
      <h1 className="json-key">{item.heading}</h1>
      {renderValue(item.description)}
     </div>
    ))}
   </div>
  </>
 );
};

export default DisplayJSON;