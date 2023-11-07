import React from 'react';
import './Data.css';
// import BiSolidDownload from "react-icons/bi";
const Data = () => {
 const data = [
  { year: 2020, pdfUrl: 'https://example.com/pdf/2020.pdf' },
  { year: 2021, pdfUrl: 'https://example.com/pdf/2021.pdf' },
  { year: 2022, pdfUrl: 'https://example.com/pdf/2022.pdf' },
  // Add more data as needed
 ];

 const handleDownload = (pdfUrl) => {
  window.open(pdfUrl, '_blank');
 };

 return (
  <div className="table-container">
   <table>
    <thead>
     <tr>
      <th>Year</th>
      <th>Download</th>
     </tr>
    </thead>
    <tbody>
     {data.map((item, index) => (
      <tr key={index}>
       <td>{item.year}</td>
       <td>
        <button class="button-80" role="button" onClick={() => handleDownload(item.pdfUrl)}>Download Brouchure </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default Data;