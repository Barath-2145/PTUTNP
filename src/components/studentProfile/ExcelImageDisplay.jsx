import React, { useState } from 'react';
import ExcelJS from 'exceljs';

const ExcelImageDisplay = () => {
 const [data, setData] = useState([]);

 const handleFileChange = async (e) => {
  const file = e.target.files[0];
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(file);

  const worksheet = workbook.worksheets[0];

  if (!worksheet) {
   console.error('No worksheet found');
   return;
  }

  const rows = worksheet.getSheetValues();
  console.log('Rows:', rows);

  if (!rows || rows.length < 2) {
   console.error('No data found in the worksheet');
   return;
  }

  const keys = rows[1];
  const values = rows.slice(2);
  console.log('Keys:', keys);
  console.log('Values:', values);

  const newData = values.map((row) => {
   const rowData = {};

   keys.forEach((key, index) => {
    if (index === 2) {
     const cell = row[index];
     const image = cell && cell.image ? URL.createObjectURL(cell.image) : '';
     rowData[key] = image;
    } else {
     rowData[key] = row[index];
    }
   });

   return rowData;
  });

  console.log('New Data:', newData);
  setData(newData);
 };

 return (
  <div>
   <input type="file" accept=".xlsx" onChange={handleFileChange} />
   {data.map((item, index) => (
    <div key={index}>
     {item.Profile_Img && <img src={item.Profile_Img} alt="Excel Image" />}
     <p>
      {Object.keys(item).map((key, idx) => (
       <span key={idx}>{`${key}: ${item[key]}`}</span>
      ))}
     </p>
    </div>
   ))}
  </div>
 );
};

export default ExcelImageDisplay;
