import React from "react";
import { Chart } from "react-google-charts";

export const data = [
 ["Department", "Count"],
 ["CSE", 39],
 ["IT", 11],
 ["ECE", 30],
 ["EEE", 27],
 ["EIE", 17],
 ["MT", 13],
 ["CHEM", 2],
 ["CE", 0],
 ["ME", 42],
];

export const options = {
 title: "",
};

const PreviousChart = () => {
 return (
  <Chart
   chartType="PieChart"
   data={data}
   options={options}
   width={"100%"}
   height={"500px"}
  />
 );
}
export default PreviousChart;