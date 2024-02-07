import React, { useEffect } from 'react';
import ResponsivePieChart from './ResponsivePieChart'
import './Chart.css'
import Data from './Data';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PreviousChart from '../PreviousPlacementChart';




// Sample data
const chartData = [
 { name: '2023', value: 507 },
 { name: '2022', value: 535 },
 { name: '2021', value: 565 },
 { name: '2020', value: 365 },
 { name: '2019', value: 400 },
];
const highestPackage = '10.75'
const ChartDesc = () => {
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
  <div className='chart-desc'>
   <h1 className='current-placement-head '>Placement Statistics for <span className='span-class'>2022-23</span></h1>
   <div className="income">
    {/* <h1></h1> */}
    <h2 className="hpa">Highest Package - 12 LPA</h2>
    <h2 className="apa">Average Package - 6.5 LPA</h2>
    <h2 className="hpa">Number of Offers - 510+</h2>
    <h2 className="apa">Number of Students Placed - 377+</h2>
    <h2 className="apa">Companies Visited - 120+</h2>
   </div>
  </div>
 )
};

const PlacementChart = () => {

 let navigate = useNavigate();
 const routeChange = () => {
  let path = '/';
  navigate(path, {
   state: "chart"
  });
  // console.log("heeee")
 }

 return (
  <>
   <h1 className="stats-heading">
    Training and Placement <span>Statistics</span>
   </h1>
   <div className='container-chart'  >
    <div style={{ flex: 1 }}>
     <ChartDesc />
    </div>
    <div className='stats-desc' style={{ flex: 1 }}>
     <span style={{ display: 'block' }} onClick={routeChange}>
      <ResponsivePieChart data={chartData} />
     </span>

    </div>



   </div>
   <div className="current-placement">
    <h1 className='current-placement-head'>On going  2024 Placement <span className='span-class'>
     Statistics
    </span>
     <div className='div-class'>
      Highest Package : <span className='span-class'>{highestPackage} LPA</span>
     </div>
    </h1>
    <span>
     <PreviousChart />
    </span>

   </div>
   <div>
    <Data />
   </div>
  </>
 );
}
export default PlacementChart;