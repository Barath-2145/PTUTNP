import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

const GetStudentData = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  try {
   const response = await axios.get('http://localhost:81/TNP/getStudentData.php', {
    headers: {
     Accept: 'application/json',
    },
   });
   setData(response.data);
   console.log(data);
  } catch (error) {
   console.error('Error fetching data:', error);
  }
 };

 return (
  <div>
   {
    data.map((item) => {
     // <Card data={item} />
     // <h1>{item.Profile_Img}</h1>
    })
   }
   
   {/* {data.map((item) => (
    <div className='conatiner' >
     <p>{item.Name}</p>
     <p>{item.Qualification}</p>
    
    </div>
   ))} */}
  </div>
 );
};

export default GetStudentData;
