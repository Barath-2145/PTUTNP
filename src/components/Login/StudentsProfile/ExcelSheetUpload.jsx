import React, { useState } from 'react';
import axios from 'axios';
import "./ExcelUploadForm.css";
import CMShead from '../CMShead/CMShead';

const ExcelSheetUpload = ()=> {
 const [success,setSuccess] = useState(false)
 const [fail,setFail] = useState(false)

 const handleFormSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('file', event.target.file.files[0]);
  console.log(formData.get('file'));
 
  
  

  try {
   if (formData.get('file') == "undefined") {
    setFail(true);
   }else{
    setFail(false);
   }
   const response = await axios.post('http://localhost:81/TNP/insertStudentData.php', formData, {
    headers: {
     'Content-Type': 'multipart/form-data'
    }
   });
   // setSuccess(response.data);
   if(response.data == null){
    setSuccess(false);
   }else{
   setSuccess(true);
   }
   // console.log(success);
   console.log('Response:', response.data);
  } catch (error) {
   setSuccess(true);
   console.error('Error:', error);
  }
 };
 const closeSuccessModal = () => {
  setSuccess(false);
  setFail(false);
 };

 return (
  <>
  <CMShead/> 
   <div className="container excel">  
   <div className="excel-upload-form">
    <h2 className="form-heading">Upload Excel Sheet</h2>
    <form onSubmit={handleFormSubmit}>
     <label className="file-label">
      Choose File
      <input
       type="file"
       name="file"
       accept=".xlsx, .xls"
      />
     </label>
     <button type="submit" className="submit-button">
      Upload
     </button>
    </form>
   </div>{console.log(success)}
    {success && (
     <div className="modal_excel">
      <div className="modal-content_excel">
       <p>File Uploaded successfully! Check the webPage!</p>
       <button onClick={closeSuccessModal}>OK</button>
      </div>
     </div>
    )}
    {fail && (
     <div className="modal_excel_fail">
      <div className="modal-content_excel_fail">
       <p>Error Uploading File!!</p>
       <button onClick={closeSuccessModal}>OK</button>
      </div>
     </div>
    )}
    
    </div>

  </>
  
 );
}

export default ExcelSheetUpload;
