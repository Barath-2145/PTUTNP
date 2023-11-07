import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
// import Filter from './filter';
import './index.css';
import MyDropdown from './MyDropdown';
// import  NavBar from"../Header/header";
// import GetStudentData from './GetDataStudentData';
import { studentData } from './studentData';
// import PlacementTable from './PlacementTable';
// import PlacementData, { dept } from './placementData';
import {  dept } from './placementData';


const StudentProfile = () => {

    const [data, setData] = useState([]);
    const [gpa, setgpa] = useState('');
    const [bklog, setBacklog] = useState('0');
    const [comp, setComp] = useState([]);

    const [companyData, setComapanyData] = useState([]);

    const setOption = async (value, type) => {
        if (type === 'Company/Industry') {
            setComp(value.value);
        }

        if (type === 'CGPA') {
            setgpa(value.value);
            console.log(type);
            console.log(value.value);
        }

        if (type === 'Back-log') {
            setBacklog(value.value);
        }

    };

    useEffect(() => {
        // fetchCompanyData();
        fetchData();

    }, [window.localStorage.getItem("department"), gpa, bklog, comp]);


    // const fetchCompanyData = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:81/TNP/getCompanyData.php`, {
    //             headers: {
    //                 Accept: 'application/json',
    //             },
    //         });
    //         setComapanyData(response.data);


    //     } catch {
    //         console.error('Error fetching data:', error);
    //     }
    // }
    const fetchData = async () => {
        try {
            // const response = await axios.get(`http://localhost:81/TNP/getStudentData.php`, {
            //     headers: {
            //         Accept: 'application/json',
            //     },
            // });
            // setData(response.data);
            const filteredData = studentData
                .filter(item => item.sDepartment === window.localStorage.getItem("department"))
                .filter(item => item.sCGPA >= gpa)
                .filter(item => item.sBackLogs === bklog)


            setData(filteredData);

            // console.log("dep", window.localStorage.getItem("department"));

            // function filterDeptObject() {
            //     for (let i = 0; i < dept.length; i++) {
            //         // console.log("test", dept[i].dept_name);
            //         if (dept[i].dept_name == window.localStorage.getItem("department")) {
            //             return dept[i]
            //         }
            //     }
            // // }
            // const departmentData = filterDeptObject()
            // console.log("departmentData", departmentData)

            // console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const company = [
        { value: '*', label: 'Company/Industry' },
        { value: 'TCS', label: 'TCS' },
        { value: 'CTS', label: 'CTS' },
        { value: 'ATS', label: 'ATS' },
        // Add more options as needed
    ];

    const cgpa = [
        { value: '5.0', label: 'CGPA' },
        { value: '9.0', label: '9.0' },
        { value: '8.0', label: '8.0' },
        { value: '7.0', label: '7.0' },
        // Add more options as needed
    ];

    const backlog = [
        { value: '0', label: 'Back-log' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        // Add more options as needed
    ];

    const departmentName = window.localStorage.getItem("department");
    const departmentData = dept[departmentName] || [];

   
    
    return (
        <>
            <div className="heading heading_1">
                <div className="s-head">
                    <h1>Yearly <span>Placement Details</span></h1>
                </div>
            </div>

            <div className="table-container">

                <table className='tableBody'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Placement Count</th>
                            <th>Total Students Appeared</th>
                        </tr>
                    </thead>
                    <tbody >
                        {departmentData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>
                                    {item.count}
                                </td>
                                <td>
                                    {item.total}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h5 style={{ textAlign: "center" ,marginBottom:"30px" }}><a href='https://www.ptuniv.edu.in/' target='blank'>Need to more about departments?</a></h5>
            <div className='drop-down'>
                <div className="one">
                    <MyDropdown value="CGPA" option={cgpa} input={setOption} />
                </div>
                <div className="two">
                    <MyDropdown value="Back-logs" option={backlog} input={setOption} />
                </div>
                {/* <div className="three" >
                    <MyDropdown value="Company/Industry" option={companyData.company} input={setOption} />
                </div> */}
            </div>
            <div className="heading">
                <div className="s-head">
                    <h1>Student <span>Profiles</span> </h1>
                </div>

                <button className='download'>Download All Resumes</button>
            </div>
            <div className="body">
                <div className="container">
                    <div className="row">

                        {data.map((data, k) => (
                            <Card value={data} key={k} />

                        ))}

                        {/* <GetStudentData/> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentProfile;