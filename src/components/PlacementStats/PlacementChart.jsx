import React from 'react';
import ResponsivePieChart from './ResponsivePieChart'
import './Chart.css'
import Data from './Data';
import { useNavigate } from "react-router-dom";





// Sample data
const chartData = [
 { name: '2023', value: 510 },
 { name: '2022', value: 535 },
 { name: '2021', value: 565 },
 { name: '2020', value: 365 },
 { name: '2019', value: 400 },
];

const ChartDesc = () => {
 return (
  <div className='chart-desc'>
   <h1>Yearly placement statistics!</h1>
   <div className="income">
    <h1>Placement Statistics 2022-23</h1>
    <h2 className="hpa">Highest Package - 12 LPA</h2>
    <h2 className="apa">Average Package - 6.5 LPA</h2>
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
    Training and placement <span>Statistics</span>
   </h1>
   <div className='container-chart'  >
    <div style={{ flex: 1 }}>
     <ChartDesc />
    </div>
    <div className='stats-desc' style={{ flex: 1 }}>
     <span onClick={routeChange}>
      <ResponsivePieChart data={chartData} />
     </span>

    </div>


   </div>
   <div>
    <Data />
   </div>
  </>
 );
}
export default PlacementChart;