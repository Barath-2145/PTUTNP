import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

// import Department from '.'
import "./departmentComponent.css"
// import StudentProfile from '../studentProfile'
import ExcelSheetUpload from '../Login/StudentsProfile/ExcelSheetUpload'
// import ExcelImageDisplay from '../studentProfile/ExcelImageDisplay'
// import DataTable from '../../components/CrudOperation/DataTable'
import StudentProfile from '../studentProfile/index'
// import CRUDExample from '../CrudOperation/DataTable'
// import GenderDetect from '../Abinesh'
// import DataTable from 'react-data-table-component'
// import GetStudentData from '../studentProfile/GetDataStudentData'
// import DisplayJSON from './DeptContent/DeptContent'
// import ITjson from "./DeptContent/assets/sampit.js";
// import ECEjson from "./DeptContent/assets/sampece.js";
// import EEEjson from "./DeptContent/assets/sampeee.js";
// import EIEjson from "./DeptContent/assets/sampeie.js";
// import MEjson from "./DeptContent/assets/sampmechanical.js";
// import CEjson from "./DeptContent/assets/sampcivil.js";
// import CHEMjson from "./DeptContent/assets/sampchem.js";
// import CSEjson from "./DeptContent/assets/sampcse.js";

const Department = () => {
  const location = useLocation()
  useEffect(
    () => {
      if (location.state || !location.state) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, [location.state]
  )

  return (
    <>
      <section>
        <div className="content">
          {window.localStorage.getItem('department') == "IT" ? (<h1 className="deptHeading" align="center">INFORMATION TECHNOLOGY</h1>) : ''}
          {window.localStorage.getItem('department') == "CSE" ? (<h1 className="deptHeading" align="center">COMPUTER SCIENCE AND ENGINEERING </h1>) : ''}
          {window.localStorage.getItem('department') == "ME" ? (<h1 className="deptHeading" align="center">MECHANICAL ENGINEERING </h1>) : ''}
          {window.localStorage.getItem('department') == "ECE" ? (<h1 className="deptHeading" align="center">ELECTRONICS AND COMMUNICATION ENGINEERING </h1>) : ''}
          {window.localStorage.getItem('department') == "EEE" ? (<h1 className="deptHeading" align="center">ELECTRONICS AND ELECTRICAL ENGINEERING </h1>) : ''}
          {window.localStorage.getItem('department') == "EIE" ? (<h1 className="deptHeading" align="center">ELECTRONICS AND INSTRUMENTATION ENGINEERING</h1>) : ''}
          {window.localStorage.getItem('department') == "CE" ? (<h1 className="deptHeading" align="center">CIVIL ENGINEERING</h1>) : ''}
          {window.localStorage.getItem('department') == "CHEM" ? (<h1 className="deptHeading" align="center">CHEMICAL ENGINEERING</h1>) : ''}
          {window.localStorage.getItem('department') == "MT" ? (<h1 className="deptHeading" align="center">MECHATRONICS </h1>) : ''}
          
          <br />
          <p className="deptQuote" align="center">“Engineering is the closest thing to magic that exists in the world.” </p>

        </div>


        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
      {/* <div className="container">
        {window.localStorage.getItem('department') == "IT" ? (<DisplayJSON   json={ITjson} />) : ''}
        {window.localStorage.getItem('department') == "CSE" ? (<DisplayJSON json={CSEjson} />) : ''}
        {window.localStorage.getItem('department') == "ME" ? (<DisplayJSON json={MEjson} />) : ''}
        {window.localStorage.getItem('department') == "ECE" ? (<DisplayJSON json={ECEjson} />) : ''}
        {window.localStorage.getItem('department') == "EEE" ? (<DisplayJSON json={EEEjson} />) : ''}
        {window.localStorage.getItem('department') == "EIE" ? (<DisplayJSON json={EIEjson} />) : ''}
        {window.localStorage.getItem('department') == "CE" ? (<DisplayJSON json={CEjson} />) : ''}
        {window.localStorage.getItem('department') == "CHEM" ? (<DisplayJSON json={CHEMjson} />) : ''}
        {window.localStorage.getItem('department') == "MT" ? (<DisplayJSON json={MTjson} />) : ''}


          

        
        
      </div> */}

      <div className="studentProfile">
        {/* <GenderDetect/> */}
        <StudentProfile />
      </div>
      {/* <ExcelSheetUpload/> */}
      {/* <ExcelImageDisplay /> */}
      {/* <GetStudentData/> */}
      {/* <DataTable/> */}

      {/* <CRUDExample/> */}

      
    </>
  )
}

export default Department